import { Resend } from "resend";

export async function sendInquiryEmailNotification(data: {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  travelDate?: string;
  travelers: number;
  message?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.NOTIFICATION_EMAIL || "info@travelbitholidays.co.in";

  if (!apiKey) {
    console.log("[Resend Notification Skipped - No API Key]:", {
      to: targetEmail,
      inquiry: data,
    });
    return { success: true, simulated: true };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "TravelBit Inquiries <onboarding@resend.dev>",
      to: [targetEmail],
      subject: `New Travel Inquiry: ${data.name} - ${data.destination || "Uttarakhand"}`,
      html: `
        <h2>New Tour Package Inquiry Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Destination:</strong> ${data.destination || "General Inquiry"}</p>
        <p><strong>Travel Date:</strong> ${data.travelDate || "Flexible"}</p>
        <p><strong>Travelers:</strong> ${data.travelers}</p>
        <p><strong>Special Requirements:</strong></p>
        <blockquote>${data.message || "None specified"}</blockquote>
        <hr/>
        <p>Submitted via TravelBit Holidays Portal</p>
      `,
    });
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Failed to send Resend email notification:", error);
    return { success: false, error };
  }
}

