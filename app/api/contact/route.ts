import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, subject } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
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

    // Send email to support team
    const emailResult = await sendEmail({
      to: "visa@worldmaxxing.com",
      template: "contact-form",
      data: {
        customerName: name,
        customerEmail: email,
        customerPhone: phone || "Not provided",
        message: message,
        subject: subject || "General Inquiry",
        timestamp: new Date().toISOString(),
      },
    });

    if (!emailResult.success) {
      console.error("Failed to send contact form email:", emailResult.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationResult = await sendEmail({
      to: email,
      template: "contact-confirmation",
      data: {
        customerName: name,
        message: message,
      },
    });

    if (!confirmationResult.success) {
      console.error("Failed to send confirmation email:", confirmationResult.error);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We'll get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
} 