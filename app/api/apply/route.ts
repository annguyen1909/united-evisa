import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { COUNTRIES } from "@/lib/countries";
import crypto from "crypto";
import { sendEmail } from "@/lib/email";

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
      updateExisting, // new flag to indicate if we should update existing application
      existingApplicationId, // new field for existing application ID
    } = body;

    // Validate port options for India using india.ts portType structure
    if (destinationCode?.toLowerCase() === "in") {
      const { default: india } = await import("@/lib/countries/india");
      const portTypeObj = india.portType?.find((pt: any) => pt.type === portType);
      if (!portTypeObj || !portTypeObj.port.includes(portName)) {
        return NextResponse.json({ error: `Invalid port of arrival (${portType})` }, { status: 400 });
      }
    }

    // If you only have the email, consider using findFirst instead:
    console.log('Apply route - Looking for account with email:', email);
    let account = await prisma.account.findUnique({
      where: {
        email_websiteCreatedAt: {
          email: email,
          websiteCreatedAt: "United eVisa Site"
        }
      },
      select: { id: true },
    });
    console.log('Apply route - Found existing account:', account);

    if (!account) {
      console.log('Apply route - Creating new account for email:', email);
      
      // Concatenate area code and phone number
      const fullPhoneNumber = areaCode && phoneNumber ? `${areaCode}${phoneNumber}` : "Unknown";
      
      account = await prisma.account.create({
        data: {
          id: crypto.randomUUID(), // generate a unique id
          email,
          fullName: fullName || "Unknown",
          areaCode: areaCode || "+1",
          phoneNumber: fullPhoneNumber,
          gender: gender || "Unknown",
          websiteCreatedAt: "United eVisa Site", // or your default value
        },
        select: { id: true },
      });
      console.log('Apply route - Created new account:', account);
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

    const startDate = new Date(stayingStart);
    const endDate = new Date(stayingEnd);
    const travelDays = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (travelDays < 1) {
      return NextResponse.json({ error: "Invalid travel dates" }, { status: 400 });
    }

    const destination = COUNTRIES.find(
      (c) => c.code?.toLowerCase() === destinationCode?.toLowerCase()
    );
    const countryVisa = destination?.visaTypes?.find((v) => v.id === visaTypeId);
    if (countryVisa?.visaDuration && travelDays > countryVisa.visaDuration) {
      return NextResponse.json(
        {
          error: `Travel duration (${travelDays} days) exceeds the allowed visa duration (${countryVisa.visaDuration} days).`,
        },
        { status: 400 }
      );
    }

    console.log('Apply route - Account ID being used:', account.id);
    console.log('Apply route - Account email:', email);
    console.log('Apply route - Account websiteCreatedAt:', "United eVisa Site");
    
    // Check if we should update an existing application
    if (updateExisting && existingApplicationId) {
      try {
        // Find the existing application
        const existingApp = await prisma.application.findFirst({
          where: {
            applicationId: existingApplicationId,
            accountId: account.id,
            status: { in: ["Lead Open", "Waiting for Payment"] }, // Allow updates to unfinished applications
          },
        });

        if (existingApp) {
          // Calculate new total based on updated values
          let canonicalGroupPrice = null;
          if (destinationCode?.toLowerCase() === "in") {
            const { indiaVisaFeeTable } = await import("@/lib/countries/india");
            let feeKey: keyof typeof indiaVisaFeeTable[0]["govFee"] = "other_visa";
            if (visaTypeId.includes("tourist-double-30-days")) feeKey = "30_days_tourist";
            else if (visaTypeId.includes("tourist-multiple-1-year")) feeKey = "1_year_tourist";
            else if (visaTypeId.includes("tourist-multiple-5-years")) feeKey = "5_years_tourist";
            else if (visaTypeId.includes("business-multiple-1-year")) feeKey = "1_year_business";
            const fees = indiaVisaFeeTable.map(group => (group.govFee as Record<string, number | null>)[feeKey]).filter(fee => typeof fee === "number");
            if (fees.length > 0) {
              canonicalGroupPrice = Math.max(...(fees as number[]));
            }
          }

          // Update the existing application with allowed fields only
          const updatedApp = await prisma.application.update({
            where: { id: existingApp.id },
            data: {
              passengerCount: Number(passengerCount),
              stayingStart: new Date(stayingStart),
              stayingEnd: new Date(stayingEnd),
              visaTypeId: visaTypeId, // Allow visa type updates
              total: Number(Number(total).toFixed(2)),
              updatedAt: new Date(),
            },
          });

          // Handle passenger records if passenger count changed
          const currentPassengers = await prisma.passenger.findMany({
            where: { applicationId: existingApp.id },
            orderBy: { createdAt: 'asc' }, // Ensure consistent ordering
          });

          const newPassengerCount = Number(passengerCount);
          const currentPassengerCount = currentPassengers.length;

          // Validate passenger count
          if (newPassengerCount < 1) {
            return NextResponse.json({ error: "Passenger count must be at least 1" }, { status: 400 });
          }
          if (newPassengerCount > 15) {
            return NextResponse.json({ error: "Passenger count cannot exceed 15" }, { status: 400 });
          }

          if (newPassengerCount !== currentPassengerCount) {
            console.log(`Passenger count changed from ${currentPassengerCount} to ${newPassengerCount}`);
            
            try {
              if (newPassengerCount > currentPassengerCount) {
                // Add more passengers
                const passengersToAdd = newPassengerCount - currentPassengerCount;
                console.log(`Adding ${passengersToAdd} new passenger records`);
                
                await prisma.passenger.createMany({
                  data: Array.from({ length: passengersToAdd }, () => ({
                    id: crypto.randomUUID(),
                    applicationId: existingApp.id,
                    fullName: null,
                    gender: null,
                    dateOfBirth: null,
                    passportNumber: null,
                    nationality: null,
                    status: null // No initial status like Sri Lanka
                  })),
                });
                console.log(`Successfully added ${passengersToAdd} new passenger records`);
              } else if (newPassengerCount < currentPassengerCount) {
                // Remove excess passengers (keep the first ones with filled data)
                const passengersToDelete = currentPassengers
                  .slice(newPassengerCount)
                  .filter(p => !p.fullName && !p.passportNumber) // Only delete empty passengers
                  .map(p => p.id);
                
                if (passengersToDelete.length > 0) {
                  await prisma.passenger.deleteMany({
                    where: {
                      id: { in: passengersToDelete }
                    }
                  });
                  console.log(`Removed ${passengersToDelete.length} empty passenger records`);
                }
                
                // If we still have too many passengers (some had data), update the application count
                const remainingPassengers = currentPassengerCount - passengersToDelete.length;
                if (remainingPassengers > newPassengerCount) {
                  console.log(`Warning: Cannot remove ${remainingPassengers - newPassengerCount} passengers with filled data`);
                  // Update the application to reflect the actual passenger count
                  await prisma.application.update({
                    where: { id: existingApp.id },
                    data: {
                      passengerCount: remainingPassengers,
                    },
                  });
                  console.log(`Updated application passenger count to ${remainingPassengers} due to filled data`);
                }
              }
            } catch (error) {
              console.error("Error updating passenger records:", error);
              return NextResponse.json({ 
                error: "Failed to update passenger records. Please try again." 
              }, { status: 500 });
            }
          } else {
            console.log(`Passenger count unchanged: ${currentPassengerCount}`);
          }

          // Get updated passenger IDs and final count
          const updatedPassengers = await prisma.passenger.findMany({
            where: { applicationId: existingApp.id },
            select: { id: true },
            orderBy: { createdAt: 'asc' },
          });

          // Get the final application data to ensure we have the correct passenger count
          const finalApplication = await prisma.application.findUnique({
            where: { id: existingApp.id },
            select: { passengerCount: true },
          });

          console.log("Updated existing application:", existingApplicationId);
          console.log("Final passenger count:", finalApplication?.passengerCount);
          console.log("Final passenger records:", updatedPassengers.length);
          
          return NextResponse.json({ 
            id: updatedApp.id, 
            applicationId: updatedApp.applicationId,
            passengerIds: updatedPassengers.map(p => p.id),
            passengerCount: finalApplication?.passengerCount,
            updated: true 
          }, { status: 200 });
        }
      } catch (error) {
        console.error("Error updating existing application:", error);
        // Fall through to create new application if update fails
      }
    }

    // Create new application if no existing application to update
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
        status: "Lead Open",
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
        // Create empty passenger records following Sri Lanka pattern
        passengers: {
          create: Array.from({ length: Number(passengerCount) }, () => ({
            id: crypto.randomUUID(),
            // Empty fields that will be filled later (no initial status like Sri Lanka)
            fullName: null,
            gender: null,
            dateOfBirth: null,
            passportNumber: null,
            nationality: null,
            status: null // No initial status like Sri Lanka
          })),
        },
        // canonicalGroupPrice is available for further use in step 2
      },
      include: {
        passengers: {
          select: {
            id: true,
          },
        },
      },
    });
    console.log("Creating application with visaTypeId:", visaTypeId);
    
    // Send notification email to visa@unitedevisa.com
    try {
      // Get destination and visa type details
      const destination = await prisma.destination.findUnique({
        where: { id: destinationId },
        select: { name: true }
      });
      
      const visaType = await prisma.visaType.findUnique({
        where: { id: visaTypeId },
        select: { name: true }
      });
      
      await sendEmail({
        to: "visa@unitedevisa.com",
        template: 'new-application-notification',
        data: { 
          applicationId: app.applicationId,
          customerEmail: email,
          customerName: fullName,
          destinationName: destination?.name || destinationCode,
          visaTypeName: visaType?.name || 'Unknown',
          passengerCount,
          total,
          stayingStart,
          stayingEnd
        }
      });
      console.log("New application notification email sent for:", app.applicationId);
    } catch (emailError) {
      console.error("Error sending new application notification email:", emailError);
      // Continue even if email fails
    }
    
    return NextResponse.json({ 
      id: app.id, 
      applicationId: app.applicationId,
      passengerIds: app.passengers.map((p) => p.id),
    }, { status: 201 });
  } catch (error) {
    console.error("API /api/apply error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}