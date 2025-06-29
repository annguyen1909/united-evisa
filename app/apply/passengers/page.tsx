"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import SupportSidebar from "@/components/shared/SupportSidebar";
import moment from "moment";
import { COUNTRIES } from "@/lib/countries"; // adjust path as needed
import { Country } from "@/lib/countries/type";
import { useSession } from "next-auth/react";



type Passenger = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  passportNumber: string;
  nationality: string;
};

type PassengerError = {
  fullName?: string;
  gender?: string;
  dateOfBirth?: string;
  passportNumber?: string;
  nationality?: string;
};

export default function PassengersPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const passengerCount = Number(searchParams.get("count")) || 1;
  const [step1, setStep1] = useState<any>(null);
  const [passengers, setPassengers] = useState<Passenger[]>(
    Array.from({ length: passengerCount }, () => ({
      fullName: "",
      gender: "",
      dateOfBirth: "",
      passportNumber: "",
      nationality: "",
    }))
  );
  const [errors, setErrors] = useState<PassengerError[]>(
    Array.from({ length: passengerCount }, () => ({}))
  );

  // For order summary
  useEffect(() => {
    const stored = sessionStorage.getItem("evisa-apply-step1");
    if (stored) setStep1(JSON.parse(stored));
  }, []);
  // Rehydrate country and visa objects from COUNTRIES using stored IDs
  const country: Country | undefined =
    step1 &&
    COUNTRIES.find(
      (c) =>
        c.slug === step1.selectedCountry?.slug ||
        c.code === step1.selectedCountry?.code
    );
  const visa =
    country?.visaTypes?.find(
      (v) => v.name === step1.selectedVisaType?.name
    );

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string
  ) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);

    // Clear error for this field
    const updatedErrors = [...errors];
    if (updatedErrors[index]) updatedErrors[index][field] = "";
    setErrors(updatedErrors);
  };

  const validate = (): boolean => {
    let valid = true;
    const newErrors: PassengerError[] = Array.from(
      { length: passengerCount },
      () => ({})
    );
    passengers.forEach((p, idx) => {
      if (!p.fullName) {
        newErrors[idx].fullName = "Full name is required.";
        valid = false;
      }
      if (!p.gender) {
        newErrors[idx].gender = "Gender is required.";
        valid = false;
      }
      if (!p.dateOfBirth) {
        newErrors[idx].dateOfBirth = "Date of birth is required.";
        valid = false;
      }
      if (!p.passportNumber) {
        newErrors[idx].passportNumber = "Passport number is required.";
        valid = false;
      }
      if (!p.nationality) {
        newErrors[idx].nationality = "Nationality is required.";
        valid = false;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  async function handleNextStep() {
    if (!validate()) return;

    const step1 = JSON.parse(sessionStorage.getItem("evisa-apply-step1") || "{}");
    const email = session?.user?.email; // or whatever field is available


    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: step1.selectedCountry?.slug,
        destinationCode: step1.selectedCountry?.code,
        visaTypeId: step1.selectedVisaType?.id,
        passengerCount: step1.passengerCount,
        stayingStart: step1.stayingStart,
        stayingEnd: step1.stayingEnd,
        total: step1.total,
        email, // send email instead of accountId
        // accountId: ... // if needed
      }),
    });

    const data = await res.json();
    if (res.ok) {
      // Store applicationId for payment step
      sessionStorage.setItem("evisa-application-id", data.applicationId);
      sessionStorage.setItem("evisa-application-db-id", data.id);
      router.push("/apply/payment");
    } else {
      alert(data.error || "Failed to create application");
    }
  }

  // Order summary logic
  let orderSummary = null;
  if (step1) {
    const destination = country?.name ?? "---";
    const visaName = visa?.name ?? "---";
    const govFee = visa?.govFee ?? 0;
    const serviceFee = country && country.etaInfo ? Number(country.etaInfo.serviceFee) : 0;
    const passenger = Number(step1.passengerCount) || 1;
    const stayingStart = step1.stayingStart;
    const stayingEnd = step1.stayingEnd;
    const isDateValid = stayingStart && stayingEnd;
    const formattedStart = isDateValid
      ? moment(stayingStart).format("DD/MM/YYYY")
      : "---";
    const formattedEnd = isDateValid
      ? moment(stayingEnd).format("DD/MM/YYYY")
      : "---";
    const durationInMs = isDateValid
      ? new Date(stayingEnd).getTime() - new Date(stayingStart).getTime()
      : null;
    const days =
      durationInMs !== null
        ? Math.floor(durationInMs / (1000 * 60 * 60 * 24))
        : "---";
    const total = visa ? (govFee + serviceFee) * passenger : 0;

    orderSummary = (
      <div className="bg-white border rounded-lg p-4 shadow-sm space-y-2 w-full">
        <h2 className="text-lg font-semibold mb-2 text-center">
          Order Summary
        </h2>
        <div className="text-sm rounded-xl bg-white space-y-4">
          <div className="flex flex-col gap-1 md:flex-row md:justify-between">
            <div>
              <p className="font-semibold">Destination</p>
              <p className="text-gray-700">{destination}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Staying Time</p>
              <p className="text-gray-700">
                {formattedStart} - {formattedEnd}
              </p>
              <p className="text-xs text-gray-700">({days} days)</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Type of Visa</p>
            <p className="text-gray-700">{visaName}</p>
          </div>
          <hr className="border-zinc-300 dark:border-zinc-700" />
          <div className="space-y-2">
            <p className="font-semibold">Visa Fees</p>
            <div className="flex justify-between">
              <p className="text-gray-700">Government Fee</p>
              <p className="text-gray-700">
                {visa ? `$${govFee.toFixed(2)}` : "---"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Visa Fee</p>
              <p className="text-gray-700">
                {country && country.etaInfo ? `$${serviceFee.toFixed(2)}` : "---"}
              </p>
            </div>
          </div>
          <hr className="border-zinc-300" />
          <div className="flex justify-between items-center">
            <p className="text-base font-semibold text-green-800">Total Fees</p>
            <p className="text-base font-bold text-green-800">
              {visa ? `$${total.toFixed(2)}` : "---"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pb-10 px-4">
      <h1 className="text-2xl font-bold text-center text-[#16610E]">
        Passenger Information
      </h1>
      <div className="grid p-4 grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        {/* Left: Passengers */}
        <div>
          <div className="space-y-6">
            {passengers.map((p, index) => (
              <Card
                key={index}
                className="shadow-lg rounded-lg border-primary/20"
              >
                <CardHeader className="bg-[#16601E] border-4 border-gray-100 w-36 justify-center rounded-tl-lg rounded-br-lg flex p-4 items-center">
                  <CardTitle className="text-white">
                    Passenger {index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor={`fullName-${index}`}>Full Name</Label>
                      <Input
                        id={`fullName-${index}`}
                        placeholder="Full Name"
                        value={p.fullName}
                        onChange={(e) =>
                          updatePassenger(index, "fullName", e.target.value)
                        }
                        className="mt-1"
                      />
                      {errors[index]?.fullName && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors[index].fullName}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor={`gender-${index}`}>Gender</Label>
                      <select
                        id={`gender-${index}`}
                        value={p.gender}
                        onChange={(e) =>
                          updatePassenger(index, "gender", e.target.value)
                        }
                        className={cn(
                          "mt-1 w-full border rounded px-3 py-2 bg-background text-foreground",
                          !p.gender && "text-muted-foreground"
                        )}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors[index]?.gender && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors[index].gender}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor={`dob-${index}`}>Date of Birth</Label>
                      <Input
                        id={`dob-${index}`}
                        type="date"
                        placeholder="Date of Birth"
                        value={p.dateOfBirth}
                        onChange={(e) =>
                          updatePassenger(index, "dateOfBirth", e.target.value)
                        }
                        className="mt-1"
                      />
                      {errors[index]?.dateOfBirth && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors[index].dateOfBirth}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor={`passport-${index}`}>
                        Passport Number
                      </Label>
                      <Input
                        id={`passport-${index}`}
                        placeholder="Passport Number"
                        value={p.passportNumber}
                        onChange={(e) =>
                          updatePassenger(
                            index,
                            "passportNumber",
                            e.target.value
                          )
                        }
                        className="mt-1"
                      />
                      {errors[index]?.passportNumber && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors[index].passportNumber}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor={`nationality-${index}`}>
                        Nationality
                      </Label>
                      <Input
                        id={`nationality-${index}`}
                        placeholder="Nationality"
                        value={p.nationality}
                        onChange={(e) =>
                          updatePassenger(index, "nationality", e.target.value)
                        }
                        className="mt-1"
                      />
                      {errors[index]?.nationality && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors[index].nationality}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-[#16601E] to-green-600 bg-[length:200%_100%] bg-left hover:bg-right cursor-pointer transition-all duration-500 text-white"
              onClick={handleNextStep}
            >
              Continue to Payment
            </Button>
          </div>
        </div>
        {/* Right: Order Summary + Support */}
        <div className="flex flex-col gap-6">
          {orderSummary}
          <SupportSidebar />
        </div>
      </div>
    </div>
  );
}