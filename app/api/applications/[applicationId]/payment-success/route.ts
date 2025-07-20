import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import Stripe from "stripe";
import { NATIONALITIES } from "@/lib/nationalities";
import { sendEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
});

// Function to convert country name to ISO code
const getCountryCode = (countryName: string): string => {
  const country = NATIONALITIES.find(n => n.name === countryName);
  return country?.code || "US"; // Default to US if not found
};

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const body = await request.json();
    const { paymentIntentId, name, address, zipcode, country } = body;

    if (!applicationId || !paymentIntentId) {
      return NextResponse.json(
        { error: "Missing applicationId or paymentIntentId" },
        { status: 400 }
      );
    }

    console.log("Payment Success API called with:", {
      applicationId,
      paymentIntentId,
      hasBillingDetails: !!(name && address && zipcode && country),
    });

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      console.error("Payment intent not succeeded:", paymentIntent.status);
      return NextResponse.json({ error: "Payment not succeeded" }, { status: 400 });
    }

    console.log("Payment intent succeeded, updating application status...");

    // Get the application
    const application = await prisma.application.findUnique({
      where: { applicationId },
      select: {
        id: true,
        status: true,
        paymentStatus: true,
        visaTypeId: true,
        passengerCount: true,
      },
    });

    if (!application) {
      console.error("Application not found:", applicationId);
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    // Check if payment is already completed
    if (
      application.paymentStatus === "Payment Completed" ||
      application.status === "Collecting Documents"
    ) {
      console.log("Payment already completed for application:", applicationId);
      return NextResponse.json({
        success: true,
        status: application.status,
        paymentStatus: application.paymentStatus,
      });
    }

    // Update application status and payment status
    const updatedApplication = await prisma.application.update({
      where: { applicationId },
      data: {
        status: "Collecting Documents",
        paymentStatus: "Payment Completed",
      },
    });

    console.log("Updated application status:", {
      applicationId,
      status: updatedApplication.status,
      paymentStatus: updatedApplication.paymentStatus,
    });

    // Get card details from payment method
    let cardType = "Unknown";
    let cardLast4 = "****";

    if (paymentIntent.payment_method) {
      try {
        const paymentMethod = await stripe.paymentMethods.retrieve(
          paymentIntent.payment_method as string
        );
        cardLast4 = paymentMethod.card?.last4 || "****";
        cardType = paymentMethod.card?.brand || "Unknown";
      } catch (error) {
        console.error("Error retrieving payment method:", error);
      }
    }

    // Build full address from billing form data
    let fullAddress = "";
    if (address) {
      const addressParts = [address, country].filter(Boolean);
      fullAddress = addressParts.join(", ");
    }

    // Create CardHolder record
    if (name && address && zipcode && country) {
      try {
        await prisma.cardHolder.upsert({
          where: { applicationId: application.id },
          update: {
            name: name,
            cardType: cardType,
            cardNumber: `****${cardLast4}`,
            address: fullAddress,
            zipcode: zipcode,
          },
          create: {
            id: `card_${application.id}`,
            name: name,
            cardType: cardType,
            cardNumber: `****${cardLast4}`,
            address: fullAddress,
            zipcode: zipcode,
            applicationId: application.id,
          },
        });

        console.log("Created CardHolder record for application:", applicationId);
      } catch (error) {
        console.error("Error creating CardHolder record:", error);
      }
    }

    // Create StripeActivity record
    try {
      await prisma.stripeActivity.create({
        data: {
          id: `payment_${paymentIntent.id}`,
          applicationId: application.id,
          type: "Payment",
          title: "Payment",
          amount: paymentIntent.amount / 100,
          status: "succeeded",
          transactionId: `payment_${paymentIntent.id}`,
          description: `Payment of $${(paymentIntent.amount / 100).toFixed(2)} ${paymentIntent.currency.toUpperCase()} - Made by ${name || "Cardholder"}.`,
          timestamp: new Date(),
        },
      });

      console.log("Created StripeActivity record for payment:", paymentIntent.id);
    } catch (error) {
      console.error("Error creating StripeActivity record:", error);
    }

    // Create Risk and RiskActivity records
    try {
      console.log("Creating Risk and RiskActivity records...");

      // Get passengers for name matching
      const passengers = await prisma.passenger.findMany({
        where: { applicationId: application.id },
        select: { fullName: true },
      });

      console.log("Found passengers:", passengers);

      // Get application total (government fee + service fee)
      const visaType = await prisma.visaType.findUnique({
        where: { id: application.visaTypeId },
        select: { fees: true },
      });

      const governmentFee = visaType?.fees || 0;
      const serviceFee = 59.99; // Fixed service fee
      const passengerCount = application.passengerCount || 1; // Default to 1 if null
      const applicationTotal = (governmentFee + serviceFee) * passengerCount;

      console.log("Application total calculation:", {
        governmentFee,
        serviceFee,
        passengerCount,
        total: applicationTotal,
      });

      // Check if cardholder name matches any passenger name
      const passengerNames = passengers
        .map((p) => p.fullName?.toLowerCase().trim())
        .filter(Boolean);
      const cardholderNameLower = (name || "Cardholder").toLowerCase().trim();
      const nameMatches = passengerNames.some((name) => name === cardholderNameLower);

      console.log("Name matching check:", {
        cardholderName: name || "Cardholder",
        cardholderNameLower,
        passengerNames,
        nameMatches,
      });

      // Determine risk status based on rules
      let riskStatus: string;
      let riskActivityType: string;
      let riskActivityTitle: string;
      let riskActivityDescription: string;

      if (!nameMatches) {
        // Rule 1: Name doesn't match
        riskStatus = "Not Passed";
        riskActivityType = "System";
        riskActivityTitle = "Risk - Not Passed";
        riskActivityDescription = "System automatically failed Risk. Name did not match.";
      } else if (applicationTotal >= 900) {
        // Rule 2: Name matches but total >= $900
        riskStatus = "Not Passed";
        riskActivityType = "System";
        riskActivityTitle = "Risk - Not Passed";
        riskActivityDescription = `System automatically failed Risk. Order total is $900 or more ($${applicationTotal.toFixed(2)}).`;
      } else {
        // Rule 3: Name matches and total < $900
        riskStatus = "Passed";
        riskActivityType = "System";
        riskActivityTitle = "Risk - Passed";
        riskActivityDescription = "System automatically passed Risk. Name matched.";
      }

      console.log("Risk assessment:", {
        riskStatus,
        riskActivityType,
        riskActivityTitle,
        riskActivityDescription,
      });

      // Create Risk record
      const risk = await prisma.risk.create({
        data: {
          id: `risk_${application.id}`,
          status: riskStatus,
          applicationId: application.id,
          createdAt: new Date(),
          updatedAt: new Date(),
          lastUpdated: new Date(),
        },
      });

      console.log("Created Risk record:", risk.id, risk.status);

      // Create RiskActivity record
      const riskActivity = await prisma.riskActivity.create({
        data: {
          id: `risk_activity_${risk.id}_${Date.now()}`,
          riskId: risk.id,
          createdAt: new Date(),
          description: riskActivityDescription,
          type: riskActivityType,
          details: JSON.stringify({
            cardholderName: name || "Cardholder",
            passengerNames,
            applicationTotal,
            nameMatches,
            governmentFee,
            serviceFee,
            passengerCount,
          }),
          timestamp: new Date(),
          title: riskActivityTitle,
        },
      });

      console.log("Created RiskActivity record:", riskActivity.id);
    } catch (riskError) {
      console.error("Error creating Risk and RiskActivity records:", riskError);
      // Continue without Risk records if it fails
    }

    // Send payment confirmation email
    try {
      await sendEmail({
        template: 'payment-confirmation',
        data: { applicationId }
      });
      console.log("Payment confirmation email sent for application:", applicationId);
    } catch (emailError) {
      console.error("Error sending payment confirmation email:", emailError);
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      status: updatedApplication.status,
      paymentStatus: updatedApplication.paymentStatus,
    });
  } catch (error) {
    console.error("Error in payment success API:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to process payment success", details: errorMessage },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}