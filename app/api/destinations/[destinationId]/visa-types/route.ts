import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ destinationId: string }> }
) {
  try {
    const { destinationId } = await params;

    let visaTypes = await prisma.visaType.findMany({
      where: {
        destinationId: destinationId,
      },
      select: {
        id: true,
        name: true,
        fees: true,
        allowedNationalities: true,
        visaDuration: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    // If India, group by canonical name and select the most expensive group variant for each
    const indiaIds = ["IN", "in", "India", "india"];
    if (indiaIds.includes(destinationId)) {
      // Map canonical name to most expensive variant
      const canonicalMap = new Map();
      visaTypes.forEach(v => {
        const canonicalName = v.name.replace(/\s*-\s*Group\s*\d+$/i, "");
        if (!canonicalMap.has(canonicalName)) {
          canonicalMap.set(canonicalName, v);
        } else {
          const current = canonicalMap.get(canonicalName);
          if (typeof v.fees === 'number' && typeof current.fees === 'number' && v.fees > current.fees) {
            canonicalMap.set(canonicalName, v);
          }
        }
      });
      visaTypes = Array.from(canonicalMap.entries()).map(([canonicalName, v]) => ({
        id: v.id,
        name: canonicalName,
        fees: v.fees,
        allowedNationalities: v.allowedNationalities,
        visaDuration: v.visaDuration,
      }));
      console.log('[VisaTypeAPI] India visaTypes returned:', visaTypes);
    }

    return NextResponse.json(visaTypes);
  } catch (error) {
    console.error('Error fetching visa types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visa types' },
      { status: 500 }
    );
  }
} 