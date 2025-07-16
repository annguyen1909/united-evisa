import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

function generateAppId(destinationCode: string) {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${destinationCode.toUpperCase()}${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      destinationId,
      destinationCode,
      visaTypeId,
      passengerCount,
      stayingStart,
      stayingEnd,
      total,
      email, // get email from body
      fullName, // new
      areaCode, // new
      phoneNumber, // new
      gender, // new
      portType, // new
      portName, // new
    } = body;
    // Validate port options for India using india.ts portType structure
    if (destinationCode?.toLowerCase() === "in") {
      const { default: india } = await import("@/lib/countries/india");
      const portTypeObj = india.portType?.find((pt: any) => pt.type === portType);
      if (!portTypeObj || !portTypeObj.port.includes(portName)) {
        return NextResponse.json({ error: `Invalid port of arrival (${portType})` }, { status: 400 });
      }
    }

    // You may need to provide the correct compound unique key fields here.
    // For example, if your unique key is email + websiteCreatedAt:
    // const account = await prisma.account.findUnique({
    //   where: { email_websiteCreatedAt: { email, websiteCreatedAt: someValue } },
    //   select: { id: true },
    // });

    // If you only have the email, consider using findFirst instead:
    let account = await prisma.account.findFirst({
      where: { email },
      select: { id: true },
    });

    if (!account) {
      account = await prisma.account.create({
        data: {
          id: crypto.randomUUID(), // generate a unique id
          email,
          fullName: fullName || "Unknown",
          areaCode: areaCode || "+1",
          phoneNumber: phoneNumber || "Unknown",
          gender: gender || "Unknown",
          websiteCreatedAt: "United eVisa Site", // or your default value
        },
        select: { id: true },
      });
    }

    if (
      !destinationId ||
      !destinationCode ||
      !visaTypeId ||
      !passengerCount ||
      !stayingStart ||
      !stayingEnd ||
      !total ||
      !account ||
      (destinationCode?.toLowerCase() === "in" && (!portType || !portName))
    ) {
      console.log("Missing required fields", {
        destinationId,
        destinationCode,
        visaTypeId,
        passengerCount,
        stayingStart,
        stayingEnd,
        total,
        email,
        account,
        portType,
        portName,
        body,
      });
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const applicationId = generateAppId(destinationCode);

    let canonicalGroupPrice = null;
    if (destinationCode?.toLowerCase() === "in") {
      // Use local indiaVisaFeeTable for performance
      // Dynamically import indiaVisaFeeTable and visaTypes
      const { indiaVisaFeeTable } = await import("@/lib/countries/india");
      // Map visaTypeId to feeKey
      let feeKey: keyof typeof indiaVisaFeeTable[0]["govFee"] = "other_visa";
      if (visaTypeId.includes("tourist-double-30-days")) feeKey = "30_days_tourist";
      else if (visaTypeId.includes("tourist-multiple-1-year")) feeKey = "1_year_tourist";
      else if (visaTypeId.includes("tourist-multiple-5-years")) feeKey = "5_years_tourist";
      else if (visaTypeId.includes("business-multiple-1-year")) feeKey = "1_year_business";
      // Find the max fee for this visa type across all groups
      const fees = indiaVisaFeeTable.map(group => (group.govFee as Record<string, number | null>)[feeKey]).filter(fee => typeof fee === "number");
      if (fees.length > 0) {
        canonicalGroupPrice = Math.max(...(fees as number[]));
      }
    }
    const app = await prisma.application.create({
      data: {
        status: "Not Finished",
        accountId: account.id, // use the id from DB
        createdAt: new Date(),
        updatedAt: new Date(),
        applicationId,
        passengerCount: Number(passengerCount),
        stayingStart: new Date(stayingStart),
        stayingEnd: new Date(stayingEnd),
        total: Number(Number(total).toFixed(2)),
        destinationId: destinationId,
        visaTypeId: visaTypeId,
        portType: portType || null,
        portName: portName || null,
        // canonicalGroupPrice is available for further use in step 2
      },
    });
    console.log("Creating application with visaTypeId:", visaTypeId);
    return NextResponse.json({ id: app.id, applicationId: app.applicationId }, { status: 201 });
  } catch (error) {
    console.error("API /api/apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}