import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators";
import { checkRateLimit } from "@/lib/rateLimit";
import { createInquiry } from "@/lib/inquiryStore";
import { sendInquiryEmailNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    // 1. Rate limiting by IP or header
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "anonymous-client";

    const rateCheck = checkRateLimit(`inquiry-${ip}`, 5, 60 * 1000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: `Too many requests. Please try again in ${rateCheck.resetInSec} seconds.`,
        },
        { status: 429 }
      );
    }

    // 2. Validate request body
    const body = await request.json();
    const result = inquirySchema.safeParse(body);

    if (!result.success) {
      const errorMsg = result.error.errors.map((e) => e.message).join(", ");
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const data = result.data;

    // 3. Honeypot bot check
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // 4. Save to Database / In-Memory Store
    const savedInquiry = await createInquiry({
      name: data.name,
      email: data.email,
      phone: data.phone,
      destination: data.destination,
      travelDate: data.travelDate,
      travelers: data.travelers,
      message: data.message,
      packageId: data.packageId,
    });

    // 5. Trigger email notification (asynchronous, non-blocking)
    sendInquiryEmailNotification({
      name: data.name,
      email: data.email,
      phone: data.phone,
      destination: data.destination,
      travelDate: data.travelDate,
      travelers: data.travelers,
      message: data.message,
    }).catch((err) => console.error("Email notification error:", err));

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully! Our expert will call you shortly.",
        inquiryId: savedInquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/inquiry failed:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

