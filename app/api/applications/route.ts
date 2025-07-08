import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { generateApplicationId } from '@/lib/utils';
import crypto from 'crypto';

// GET - Get a single application by ID
export async function GET() {
  try {
    const session = await getServerSession();

    if (session?.user?.email) {
      // Logged in: show only this user's applications
      const account = await prisma.account.findUnique({
        where: {
          email_websiteCreatedAt: {
            email: session.user.email,
            websiteCreatedAt: "United Evisa"
          }
        }
      });

      if (!account) {
        return NextResponse.json({ applications: [] });
      }

      const applications = await prisma.application.findMany({
        where: { accountId: account.id },
        include: {
          VisaType: true,
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
    } else {
      // Not logged in: return empty array or a message
      return NextResponse.json({ applications: [] });
      // Or, if you want to show a message:
      // return NextResponse.json({ error: "Not logged in", applications: [] });
    }
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}

// POST - Create a new application
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    const body = await request.json();
    const {
      destinationId,
      visaTypeId,
      passengerCount,
      stayingStart,
      stayingEnd,
      total,
      // Add these fields for not-logged-in users:
      email,
      fullName,
    } = body;

    // Validate required fields
    if (!destinationId || !visaTypeId) {
      return NextResponse.json({
        error: "Missing required fields: destinationId and visaTypeId are required"
      }, { status: 400 });
    }

    // Determine account info
    const accountEmail = session?.user?.email || email;
    const accountName = session?.user?.name || fullName || "Unknown";

    if (!accountEmail) {
      return NextResponse.json({ error: "Missing email for account" }, { status: 400 });
    }

    // Find or create account
    let account = await prisma.account.findUnique({
      where: {
        email_websiteCreatedAt: {
          email: accountEmail,
          websiteCreatedAt: "United Evisa"
        }
      },
    });

    if (!account) {
      account = await prisma.account.create({
        data: {
          id: crypto.randomUUID(),
          email: accountEmail,
          fullName: accountName,
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