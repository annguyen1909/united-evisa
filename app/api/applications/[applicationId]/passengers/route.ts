// Removed invalid POST_total export. Only valid Next.js route handlers (GET, POST, PUT, etc.) are exported below.
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { getNationalityByCode, NATIONALITIES } from '@/lib/nationalities';
import crypto from 'crypto'; // Add this import for UUID generation

// GET - List passengers for an application
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;

    const session = await getServerSession();
    let account;

    // Guest access check (like in application API)
    if (!session?.user?.email) {
      const cookieHeader = request.headers.get('cookie');
      let guestIds: string[] = [];
      if (cookieHeader) {
        const match = cookieHeader.match(/guestApplicationIds=([^;]+)/);
        if (match && match[1]) {
          try {
            guestIds = JSON.parse(decodeURIComponent(match[1]));
          } catch (e) {
            guestIds = [];
          }
        }
      }
      if (!guestIds.includes(applicationId)) {
        return NextResponse.json({ error: "Unauthorized (guest)" }, { status: 401 });
      }
    }

    // Fix 2: Try a different approach to avoid name field issue
    const application = await prisma.application.findUnique({
      where: { applicationId },
      include: {
        visaType: true,
        destination: true,
        passengers: {
          select: {
            id: true,
            applicationId: true,
            createdAt: true,
            passportNumber: true,
            updatedAt: true,
            dateOfBirth: true,
            fullName: true,
            gender: true,
            nationality: true,
            status: true
          }
        },
        cardHolder: true,
        applicationDocuments: true
      }
    });

    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    // Verify ownership
    if (session?.user?.email) {
      // Logged in: find account by email
      account = await prisma.account.findUnique({
        where: {
          email_websiteCreatedAt: {
            email: session.user.email,
            websiteCreatedAt: "Worldmaxxing Site"
          }
        },
        select: { id: true, fullName: true, email: true, phoneNumber: true, areaCode: true, gender: true },
      });
      if (!account) {
        return NextResponse.json({ error: "Account not found for this application" }, { status: 404 });
      }
    } else {
      // Not logged in: use accountId from application
      account = await prisma.account.findUnique({
        where: { id: application.accountId },
        select: { id: true, fullName: true, email: true, phoneNumber: true, areaCode: true, gender: true },
      });
      // Optionally, you can check if account exists and handle errors
      if (!account) {
        return NextResponse.json({ error: "Account not found for this application" }, { status: 404 });
      }
    }

    if (!account) {
      return NextResponse.json({ error: "Account not found for this application" }, { status: 404 });
    }

    // Get passengers separately to work around the issue
    const passengers = await prisma.passenger.findMany({
      where: { applicationId: application.id },
      select: {
        id: true,
        fullName: true,
        nationality: true,
        passportNumber: true,
        dateOfBirth: true,
        gender: true,
        status: true,
        applicationId: true
      }
    });

    // Return combined data
    return NextResponse.json({
      ...application,
      Passenger: passengers
    });
  } catch (error) {
    console.error('Error fetching application:', error);
    return NextResponse.json({ error: 'Failed to fetch application details' }, { status: 500 });
  }
}

// POST - Save passenger information for an application
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const body = await request.json();
    const { passengers, total, promotionAmount } = body;

    if (!passengers || !Array.isArray(passengers)) {
      return NextResponse.json(
        { error: 'Passengers data is required and must be an array' },
        { status: 400 }
      );
    }

    // First, retrieve the application to ensure it exists
    const application = await prisma.application.findUnique({
      where: { applicationId }
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    const visaType = await prisma.visaType.findUnique({
      where: { id: application.visaTypeId },
      select: { allowedNationalities: true }
    });
    const rawAllowed = visaType?.allowedNationalities;
    const allowedNationalities = (Array.isArray(rawAllowed) ? rawAllowed : [])
      .map((code) => String(code).toLowerCase());

    const resolveNationalityCode = (value?: string | null) => {
      if (!value) return null;
      const direct = getNationalityByCode(value);
      if (direct) return direct.code.toLowerCase();
      const byName = NATIONALITIES.find(
        (n) => n.name.toLowerCase() === value.toLowerCase()
      );
      return byName ? byName.code.toLowerCase() : null;
    };

    if (allowedNationalities.length > 0) {
      const invalid = passengers.find((passengerData: any) => {
        const code = resolveNationalityCode(passengerData.nationality);
        return code && !allowedNationalities.includes(code);
      });
      if (invalid) {
        return NextResponse.json(
          { error: 'One or more passengers are not eligible for this visa type.' },
          { status: 400 }
        );
      }
    }


    // Accept promotionAmount from frontend, do not calculate here
    // If you want to save promotionAmount, you can use it below

    // Process passengers - update existing or create new ones
    const passengerPromises = passengers.map(async (passengerData: any) => {
      const nationalityObj = getNationalityByCode(passengerData.nationality);
      if (passengerData.id) {
        return prisma.passenger.update({
          where: { id: passengerData.id },
          data: {
            fullName: passengerData.fullName,
            nationality: nationalityObj ? nationalityObj.name : null,
            passportNumber: passengerData.passportNumber,
            dateOfBirth: new Date(passengerData.dateOfBirth),
            gender: passengerData.gender,
            status: 'Active'
          },
          select: {
            id: true,
            fullName: true,
            nationality: true,
            passportNumber: true,
            dateOfBirth: true,
            gender: true,
            status: true,
            applicationId: true
          }
        });
      } else {
        return prisma.passenger.create({
          data: {
            id: crypto.randomUUID(),
            applicationId: application.id,
            fullName: passengerData.fullName,
            nationality: nationalityObj ? nationalityObj.name : null,
            passportNumber: passengerData.passportNumber,
            dateOfBirth: new Date(passengerData.dateOfBirth),
            gender: passengerData.gender,
            status: 'Active'
          },
          select: {
            id: true,
            fullName: true,
            nationality: true,
            passportNumber: true,
            dateOfBirth: true,
            gender: true,
            status: true,
            applicationId: true
          }
        });
      }
    });

    const updatedPassengers = await Promise.all(passengerPromises);

    // Update application status to "Waiting for Payment" and payment status to "Payment Required"
    const updateData: any = { 
      status: 'Waiting for Payment',
      paymentStatus: 'Payment Required'
    };
    if (typeof total === 'number' && !isNaN(total)) {
      updateData.total = total;
    }
    if (typeof promotionAmount === 'number' && !isNaN(promotionAmount)) {
      updateData.promotionAmount = promotionAmount;
    }
    await prisma.application.update({
      where: { id: application.id },
      data: updateData
    });

    return NextResponse.json({
      message: 'Passengers saved successfully',
      passengers: updatedPassengers,
      ...(typeof total === 'number' && !isNaN(total) ? { total } : {}),
      ...(typeof promotionAmount === 'number' && !isNaN(promotionAmount) ? { promotionAmount } : {})
    });
  } catch (error) {
    console.error('Error processing passengers:', error);
    return NextResponse.json({ error: 'Failed to save passenger information' }, { status: 500 });
  }
}

// PUT - Replace all passengers for an application
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ applicationId: string }> }
) {
  try {
    const { applicationId } = await params;
    const body = await request.json();
    const { passengers } = body;

    // Rest of validation code...

    // Find the application first
    const application = await prisma.application.findUnique({
      where: { applicationId }
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    // Delete existing passengers using the correct applicationId
    await prisma.passenger.deleteMany({
      where: { applicationId: application.id } // Make sure to use application.id here
    });

    // Create new passengers
    const passengerPromises = passengers.map(async (passengerData: any) => {
      const nationalityObj = getNationalityByCode(passengerData.nationality);
      return prisma.passenger.create({
        data: {
          fullName: passengerData.fullName,
          nationality: nationalityObj ? nationalityObj.name : null,
          passportNumber: passengerData.passportNumber,
          dateOfBirth: new Date(passengerData.dateOfBirth),
          gender: passengerData.gender,
          status: 'Active',
          id: crypto.randomUUID(), // Generate a new UUID for the passenger ID
          applicationId: application.id // Use direct reference instead of relation syntax
        }
      });
    });

    const newPassengers = await Promise.all(passengerPromises);

    // Update application status to "Waiting for Payment" and payment status to "Payment Required"
    await prisma.application.update({
      where: { id: application.id },
      data: {
        status: 'Waiting for Payment',
        paymentStatus: 'Payment Required',
        passengerCount: passengers.length
      }
    });

    return NextResponse.json({
      message: 'Passengers replaced successfully',
      passengers: newPassengers
    });
  } catch (error) {
    console.error('Error replacing passengers:', error);
    return NextResponse.json({ error: 'Failed to replace passengers' }, { status: 500 });
  }
}