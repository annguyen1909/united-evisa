// app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    destinationId,
    visaTypeId,
    passengerCount,
    stayingStart,
    stayingEnd,
  } = body;

  if (!destinationId || !visaTypeId) {
    return NextResponse.json({ error: "Destination and Visa type are required." }, { status: 400 });
  }

  const application = await prisma.application.create({
    data: {
      accountId: session.user.id,
      destinationId,
      visaTypeId,
      passengerCount: passengerCount ? parseInt(passengerCount) : null,
      stayingStart: stayingStart ? new Date(stayingStart) : null,
      stayingEnd: stayingEnd ? new Date(stayingEnd) : null,
      status: "pending",
      applyDate: new Date(),
      applicationId: `EVISA-${Date.now()}`,
    },
  });

  return NextResponse.json({
    message: "Application created",
    application: {
      id: application.id,
      applicationId: application.applicationId,
    },
  });
}
