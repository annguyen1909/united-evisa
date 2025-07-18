import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ destinationId: string }> }
) {
  try {
    const { destinationId } = await params;

    const visaTypes = await prisma.visaType.findMany({
      where: {
        destinationId: destinationId,
      },
      select: {
        id: true,
        name: true,
        fees: true,
        allowedNationalities: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(visaTypes);
  } catch (error) {
    console.error('Error fetching visa types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visa types' },
      { status: 500 }
    );
  }
} 