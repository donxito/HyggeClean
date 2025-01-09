import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend with error handling
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not defined in environment variables");
}

const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  const emailRecipient = process.env.RESEND_EMAIL_ADDRESS;
  if (!emailRecipient) {
    throw new Error(
      "RESEND_EMAIL_ADDRESS is not defined in environment variables"
    );
  }

  try {
    // Parse the request body with error handling
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, address, serviceType, preferredDate, message } =
      body;

    if (!name || !email || !address || !serviceType || !preferredDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const emailData = await resend.emails.send({
      from: "HyggeClean <onboarding@resend.dev>",
      to: [emailRecipient],
      replyTo: email,
      subject: `New Cleaning Request - ${serviceType}`,
      html: `
        <h2>New Cleaning Service Request</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `,
    });

    console.log("Email sent successfully:", emailData);
    return NextResponse.json({ success: true, data: emailData });
  } catch (error) {
    console.error("Failed to send email:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
