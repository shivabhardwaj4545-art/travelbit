import { NextResponse } from "next/server";
import { getInquiries, updateInquiryStatus } from "@/lib/inquiryStore";

export async function GET() {
  try {
    const list = await getInquiries();
    return NextResponse.json({ inquiries: list });
  } catch (error) {
    console.error("GET /api/admin/inquiries failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "id and status are required" },
        { status: 400 }
      );
    }

    const success = await updateInquiryStatus(id, status);
    if (!success) {
      return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH /api/admin/inquiries failed:", error);
    return NextResponse.json(
      { error: "Failed to update inquiry status" },
      { status: 500 }
    );
  }
}

