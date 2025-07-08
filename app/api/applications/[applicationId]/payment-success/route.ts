import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { v4 as uuidv4 } from 'uuid';

export async function POST(
  request: NextRequest,
  { params }: { params: { applicationId: string } }
) {
  try {
    const { applicationId } = params;
    const {
      name,
      address,
      zipcode,
      cardNumber,
      cardType,
      paymentIntentId,
      amount
    } = await request.json();

    // Find the application
    const application = await prisma.application.findUnique({
      where: { applicationId },
      include: {
        Passenger: {
      select: { fullName: true } // ❌ This will fail if 'name' does not exist
    }
      }
    });

    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    // Save cardholder information
    // const cardHolder = await prisma.cardHolder.create({
    //   data: {
    //     id: uuidv4(),
    //     name,
    //     cardType,
    //     cardNumber: `xxxx-xxxx-xxxx-${cardNumber}`,
    //     address,
    //     zipcode,
    //     applicationId: application.id
    //   }
    // });

    // Determine if risk is passed
    // 1. Check if cardholder name matches any passenger name
    const nameMatch = application.Passenger.some(
      (      passenger: { fullName: string; }) => passenger.fullName && passenger.fullName.toLowerCase().includes(name.toLowerCase())
    );
    
    // 2. Check if amount is less than $900
    const amountLessThan900 = amount < 900;
    
    // Risk is passed only if both conditions are true
    const isPassed = nameMatch && amountLessThan900;
    const riskStatus = isPassed ? "Passed" : "Not Passed";
    
    // Create Risk record
    const risk = await prisma.risk.create({
      data: {
        id: uuidv4(),
        status: riskStatus,
        applicationId: application.id,
        lastUpdated: new Date()
      }
    });

    // Create Risk Activity
    await prisma.riskActivity.create({
      data: {
        id: uuidv4(),
        riskId: risk.id,
        title: `Risk - ${riskStatus}`,
        type: "Payment Risk",
        description: isPassed 
          ? "Payment passed automatic risk verification"
          : "Payment requires manual risk review",
        details: JSON.stringify({
          nameMatch,
          amountLessThan900,
          amount,
          cardholderName: name
        }),
        timestamp: new Date()
      }
    });

    // Record Stripe activity
    await prisma.stripeActivity.create({
      data: {
        id: uuidv4(),
        title: "Payment Processed",
        amount: amount,
        status: "Completed",
        type: "Charge",
        applicationId: application.id,
        description: `Payment of $${amount.toFixed(2)} processed successfully`,
        timestamp: new Date(),
        transactionId: paymentIntentId
      }
    });

    // Update application status and payment status
    await prisma.application.update({
      where: { id: application.id },
      data: {
        status: "Collecting Documents",
        paymentStatus: "Completed"
      }
    });

    return NextResponse.json({ 
      success: true,
      message: "Payment data processed successfully",
      risk: {
        status: riskStatus,
        reasons: {
          nameMatch,
          amountLessThan900
        }
      }
    });
  } catch (error) {
    console.error('Error processing payment data:', error);
    return NextResponse.json({ error: 'Failed to process payment data' }, { status: 500 });
  }
}