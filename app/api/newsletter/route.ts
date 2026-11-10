import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validators";
import { checkRateLimit } from "@/lib/rateLimit";
import { prisma } from "@/lib/prisma";

const fallbackSubscribers = new Set<string>();

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "anonymous-client";

    const rateCheck = checkRateLimit(`newsletter-${ip}`, 5, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: `Please slow down. Try again in ${rateCheck.resetInSec} seconds.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message || "Invalid email" },
        { status: 400 }
      );
    }

    const { email, honeypot } = result.data;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    if (process.env.DATABASE_URL) {
      try {
        await prisma.subscriber.upsert({
          where: { email },
          update: {},
          create: { email },
        });
      } catch (err) {
        console.warn("Prisma subscriber save error, using fallback set:", err);
        fallbackSubscribers.add(email);
      }
    } else {
      fallbackSubscribers.add(email);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to TravelBit Yatra updates!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/newsletter failed:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

