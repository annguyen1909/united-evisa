"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import CustomerSupport from "@/components/shared/SupportSidebar"; // Adjust path if needed
import SupportSidebar from "@/components/shared/SupportSidebar";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const passengerCount = Number(searchParams.get("count")) || 1;
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
  const [step1, setStep1] = useState<any>(null);

  useEffect(() => {
    const s1 = sessionStorage.getItem("evisa-apply-step1");
    if (s1) setStep1(JSON.parse(s1));
  }, []);

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

  const handleNext = async () => {
    if (!validate()) return;

    // Prepare data for backend (convert dateOfBirth to ISO string)
    const payload = passengers.map((p) => ({
      ...p,
      dateOfBirth: new Date(p.dateOfBirth).toISOString(),
    }));

    // Save to sessionStorage as step 2
    sessionStorage.setItem("evisa-apply-step2", JSON.stringify(payload));

    router.push("/apply/review");
  };

  // Order summary logic (same as step 1)
  let orderSummary = null;
  if (step1) {
    const destination = step1.selectedCountry?.name ?? "---";
    const visa = step1.selectedCountry?.etaInfo?.visaTypes?.find(
      (v: any) => v.name === step1.selectedVisaType
    );
    const visaName = visa?.name ?? "---";
    const govFee = visa?.govFee ?? 0;
    const serviceFee = step1.selectedCountry
      ? Number(step1.selectedCountry.etaInfo.serviceFee)
      : 0;
    const passenger = Number(step1.passengerCount) || 1;
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
                {step1.stayingStart} - {step1.stayingEnd}
              </p>
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
                {step1.selectedCountry ? `$${serviceFee.toFixed(2)}` : "---"}
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
            <Button size="lg" className="px-8" onClick={handleNext}>
              Continue to Review
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
