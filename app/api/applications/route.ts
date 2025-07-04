import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { generateApplicationId } from '@/lib/utils';
import crypto from 'crypto';

// GET - Get a single application by ID
export async function GET(request: NextRequest) {
  try {
    // Remove this line - there are no params in the base applications route!
    // const { applicationId } = await params;  <- DELETE THIS

    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Find account by email
    const account = await prisma.account.findUnique({
      where: {
        email_websiteCreatedAt: {
          email: session.user.email,
          websiteCreatedAt: "United Evisa"
        }
      }
    });

    if (!account) {
      return NextResponse.json({ error: "Account not found" }, { status: 404 });
    }

    // Find all applications for this account
    const applications = await prisma.application.findMany({
      where: { accountId: account.id },
      include: {
        VisaType: true,
        // Use select for Passenger to avoid the name field issue
        Passenger: {
          select: {
            id: true,
            fullName: true,
            nationality: true,
            passportNumber: true,
            dateOfBirth: true,
            gender: true,
            status: true
          }
        },
        Destination: true
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}

// POST - Create a new application
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      destinationId,
      visaTypeId,
      passengerCount,
      stayingStart,
      stayingEnd,
      total
    } = body;

    // Validate required fields
    if (!destinationId || !visaTypeId) {
      return NextResponse.json({
        error: "Missing required fields: destinationId and visaTypeId are required"
      }, { status: 400 });
    }

    // Find or create account based on session email
    let account = await prisma.account.findUnique({
      where: {
        email_websiteCreatedAt: {
          email: session.user.email,
          websiteCreatedAt: "United Evisa"
        }
      },
    });

    if (!account) {
      account = await prisma.account.create({
        data: {
          id: crypto.randomUUID(),
          email: session.user.email,
          fullName: session.user.name || "Unknown",
          websiteCreatedAt: "United Evisa",
        }
      });
    }

    // Generate a unique application ID
    const applicationId = generateApplicationId(destinationId);

    // Create the application
    const application = await prisma.application.create({
      data: {
        applicationId,
        destinationId,
        visaTypeId,
        accountId: account.id,
        status: "Not Started",
        passengerCount: passengerCount || 1,
        stayingStart: stayingStart ? new Date(stayingStart) : null,
        stayingEnd: stayingEnd ? new Date(stayingEnd) : null,
        total: total || 0,
        paymentStatus: "Not Started"
      },
    });

    // Create empty passenger records based on passenger count
    const passengerIds = [];
    if (passengerCount && passengerCount > 0) {
      for (let i = 0; i < passengerCount; i++) {
        const passenger = await prisma.passenger.create({
          data: {
            id: crypto.randomUUID(),
            applicationId: application.id,
            status: "pending"
          }
        });
        passengerIds.push(passenger.id);
      }
    }

    return NextResponse.json({
      id: application.id,
      applicationId: application.applicationId,
      status: application.status,
      accountId: account.id,
      passengerIds
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating application:', error);
    return NextResponse.json({ error: 'Failed to create application' }, { status: 500 });
  }
}