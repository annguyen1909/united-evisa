"use client";

import { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import SupportSidebar from "@/components/shared/SupportSidebar";
import moment from "moment";
import { Country } from "@/lib/countries/type";
import { useSession } from "next-auth/react";
import { NATIONALITIES } from "@/lib/nationalities";
import { COUNTRIES } from "@/lib/countries/index";

import { Users, AlertCircle, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Passenger = {
  id?: string;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  passportNumber: string;
  nationality: string;
};

type PassengerError = {
  id?: string;
  fullName?: string;
  gender?: string;
  dateOfBirth?: string;
  passportNumber?: string;
  nationality?: string;
};

export default function PassengersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [errors, setErrors] = useState<PassengerError[]>([]);

  useEffect(() => {
    // Always prioritize URL parameter
    const urlApplicationId = searchParams.get("applicationId");
    if (urlApplicationId) {
      setApplicationId(urlApplicationId);
      fetchApplicationData(urlApplicationId);
    } else {
      // Fall back to session storage if no URL parameter
      const storedAppId = sessionStorage.getItem("evisa-application-id");
      if (storedAppId) {
        setApplicationId(storedAppId);
        fetchApplicationData(storedAppId);
      } else {
        // No application ID found - redirect to first step
        alert("No application found. Please start from the beginning.");
        router.push("/apply");
      }
    }
  }, [searchParams, router]);

  // Fetch application data function
  async function fetchApplicationData(appId: string) {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/applications/${appId}`);

      if (response.ok) {
        const data = await response.json();
        setApplicationData(data);

        // Initialize passengers based on application data
        const passengerCount = data.passengerCount || 1;

        // Use existing passengers or create empty ones
        if (data.Passenger && data.Passenger.length > 0) {
          setPassengers(data.Passenger.map((p: any) => ({
            id: p.id,
            fullName: p.fullName || "",
            nationality: p.nationality || "",
            passportNumber: p.passportNumber || "",
            dateOfBirth: p.dateOfBirth ? moment(p.dateOfBirth).format("YYYY-MM-DD") : "",
            gender: p.gender || ""
          })));
        } else {
          // Create empty passenger forms based on count
          setPassengers(Array.from({ length: passengerCount }, () => ({
            fullName: "",
            gender: "",
            dateOfBirth: "",
            passportNumber: "",
            nationality: ""
          })));
        }

        // Initialize errors array with same length
        setErrors(Array.from({ length: passengerCount }, () => ({})));
      } else {
        throw new Error("Failed to load application data");
      }
    } catch (error) {
      console.error("Error fetching application data:", error);
      alert("Error loading application data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  // Rehydrate country and visa objects from COUNTRIES using stored IDs
  const country = useMemo(() => {
    if (!applicationData?.Destination?.code) return null;
    return COUNTRIES.find(c =>
      c.code === applicationData.Destination.code ||
      c.slug === applicationData.Destination.id
    );
  }, [applicationData]);
  
  const visa = useMemo(() => {
    if (!country || !applicationData?.VisaType?.id) return null;
    return country.visaTypes?.find(v => v.id === applicationData.VisaType.id);
  }, [country, applicationData]);

  // Get allowed nationalities from the visa type
const allowedNationalities = useMemo(() => {
  if (!visa || !visa.allowedNationalities) {
    return NATIONALITIES;
  }

  if (Array.isArray(visa.allowedNationalities)) {
    if (visa.allowedNationalities.length === 0) {
      return NATIONALITIES;
    }
    const allowedCodes = visa.allowedNationalities.map(code =>
      code.toUpperCase()
    );
    return NATIONALITIES.filter((c: { code: string; }) =>
      allowedCodes.includes(c.code.toUpperCase())
    );
  }

  return NATIONALITIES;
}, [visa]);

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string
  ) => {
    const updated = [...passengers];
    updated[index] = { ...updated[index], [field]: value };
    setPassengers(updated);

    // Clear error for this field
    const updatedErrors = [...errors];
    if (updatedErrors[index]) {
      delete updatedErrors[index][field];
    }
    setErrors(updatedErrors);
  };

  // Validate function
  function validate(): boolean {
    let isValid = true;
    const newErrors = [...errors];

    passengers.forEach((passenger, index) => {
      const passengerErrors: PassengerError = {};

      // Validate full name
      if (!passenger.fullName.trim()) {
        passengerErrors.fullName = "Full name is required";
        isValid = false;
      } else if (passenger.fullName.length < 3) {
        passengerErrors.fullName = "Name must be at least 3 characters";
        isValid = false;
      }

      // Validate gender
      if (!passenger.gender) {
        passengerErrors.gender = "Gender is required";
        isValid = false;
      }

      // Validate date of birth
      if (!passenger.dateOfBirth) {
        passengerErrors.dateOfBirth = "Date of birth is required";
        isValid = false;
      } else {
        const dob = new Date(passenger.dateOfBirth);
        const today = new Date();
        if (dob > today) {
          passengerErrors.dateOfBirth = "Date of birth cannot be in the future";
          isValid = false;
        }
      }

      // Validate passport number
      if (!passenger.passportNumber.trim()) {
        passengerErrors.passportNumber = "Passport number is required";
        isValid = false;
      } else if (passenger.passportNumber.length < 5) {
        passengerErrors.passportNumber = "Enter a valid passport number";
        isValid = false;
      }

      // Validate nationality
      if (!passenger.nationality) {
        passengerErrors.nationality = "Nationality is required";
        isValid = false;
      } else if (!allowedNationalities.some(c => c.code === passenger.nationality)) {
        passengerErrors.nationality = "Please select a valid nationality";
        isValid = false;
      }

      newErrors[index] = passengerErrors;
    });

    setErrors(newErrors);
    return isValid;
  }

  // Handle submission
  async function handleNextStep() {
    if (!validate()) return;

    setIsLoading(true);

    try {
      if (!applicationId) {
        throw new Error("Application ID not found");
      }

      const passengersRes = await fetch(`/api/applications/${applicationId}/passengers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passengers }),
      });

      const passengersData = await passengersRes.json();

      if (!passengersRes.ok) {
        throw new Error(passengersData.error || "Failed to save passenger information");
      }

      // Navigate to payment step
      router.push(`/apply/payment?applicationId=${applicationId}`);
    } catch (error) {
      console.error("Error submitting passenger data:", error);
      alert(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  // Order summary
  let orderSummary = null;
  if (applicationData) {
    const destination = applicationData.Destination?.name ?? "---";
    const visaName = applicationData.VisaType?.name ?? "---";
    const govFee = visa?.govFee ?? 0;
    const serviceFee = country && country.etaInfo ? Number(country.etaInfo.serviceFee) : 0;
    const passenger = applicationData.passengerCount || 1;
    const stayingStart = applicationData.stayingStart;
    const stayingEnd = applicationData.stayingEnd;
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
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5 w-full sticky top-6">
        <h2 className="text-lg font-semibold mb-2 text-slate-800 text-center pb-2 border-b border-slate-100">
          Order Summary
        </h2>
        <div className="text-sm space-y-5">
          {applicationId && (
            <div className="flex justify-between items-center bg-emerald-50 p-3 rounded-lg border border-emerald-100">
              <p className="font-medium text-slate-700">Application ID:</p>
              <p className="font-bold text-emerald-700">{applicationId}</p>
            </div>
          )}
          
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-medium text-slate-700">Destination</p>
              <p className="text-slate-800">{destination}</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">Staying Time</p>
              <p className="text-slate-800">
                {formattedStart} - {formattedEnd}
              </p>
              <p className="text-xs text-slate-500">({days} days)</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">Type of Visa</p>
              <p className="text-slate-800">{visaName}</p>
            </div>
          </div>
          
          <hr className="border-slate-100" />
          
          <div className="space-y-2">
            <p className="font-medium text-slate-700">Visa Fees</p>
            <div className="flex justify-between">
              <p className="text-slate-600">Government Fee</p>
              <p className="text-slate-800">
                {visa ? `$${govFee.toFixed(2)}` : "---"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-slate-600">Service Fee</p>
              <p className="text-slate-800">
                {country && country.etaInfo ? `$${serviceFee.toFixed(2)}` : "---"}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-slate-600">Travelers</p>
              <p className="text-slate-800">{passenger}</p>
            </div>
          </div>
          
          <hr className="border-slate-100" />
          
          <div className="flex justify-between items-center pt-1">
            <p className="font-semibold text-base text-slate-800">Total</p>
            <p className="font-bold text-lg text-emerald-700">
              {visa ? `$${total.toFixed(2)}` : "---"}
            </p>
          </div>
        </div>
      </div>
    );
  }
  console.log("Allowed Nationalities:", allowedNationalities);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-center">
          Traveler Information
        </h1>
        
        {isLoading && !applicationData ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-slate-200 border-t-emerald-600"></div>
            <span className="mt-4 text-slate-600">Loading your application...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Passengers Forms (2 columns) */}
            <div className="lg:col-span-2 space-y-8">
              {passengers.map((passenger, index) => (
                <Card 
                  key={index}
                  className="bg-white overflow-hidden shadow-sm border border-slate-200"
                >
                  <div className="border-b border-slate-100">
                    <div className="flex items-center p-5">
                      <div className="bg-emerald-100 p-2 rounded-full mr-3">
                        <Users className="h-5 w-5 text-emerald-700" />
                      </div>
                      <h3 className="text-lg font-medium text-slate-800">
                        Traveler {index + 1}
                      </h3>
                      {Object.keys(errors[index] || {}).length === 0 && 
                       Object.values(passenger).every(val => val !== "") && (
                        <span className="ml-auto flex items-center text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full border border-emerald-100">
                          <Check className="w-3 h-3 mr-1" /> Complete
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <Label htmlFor={`fullName-${index}`} className="text-sm font-medium">
                          Full Name (as per passport)
                        </Label>
                        <Input
                          id={`fullName-${index}`}
                          placeholder="Full Name"
                          value={passenger.fullName}
                          onChange={(e) =>
                            updatePassenger(index, "fullName", e.target.value)
                          }
                          className={cn(
                            errors[index]?.fullName && "border-red-500 focus:ring-red-500"
                          )}
                        />
                        {errors[index]?.fullName && (
                          <div className="flex items-center text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors[index].fullName}
                          </div>
                        )}
                      </div>

                      {/* Gender */}
                      <div className="space-y-1.5">
                        <Label htmlFor={`gender-${index}`} className="text-sm font-medium">Gender</Label>
                        <Select 
                          value={passenger.gender} 
                          onValueChange={(value) => updatePassenger(index, "gender", value)}
                        >
                          <SelectTrigger className={cn(
                            errors[index]?.gender && "border-red-500 focus:ring-red-500"
                          )}>
                            <SelectValue placeholder="Select Gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors[index]?.gender && (
                          <div className="flex items-center text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors[index].gender}
                          </div>
                        )}
                      </div>

                      {/* Date of Birth */}
                      <div className="space-y-1.5">
                        <Label htmlFor={`dob-${index}`} className="text-sm font-medium">Date of Birth</Label>
                        <Input
                          id={`dob-${index}`}
                          type="date"
                          placeholder="Date of Birth"
                          value={passenger.dateOfBirth}
                          onChange={(e) =>
                            updatePassenger(index, "dateOfBirth", e.target.value)
                          }
                          className={cn(
                            errors[index]?.dateOfBirth && "border-red-500 focus:ring-red-500"
                          )}
                          max={new Date().toISOString().split("T")[0]}
                        />
                        {errors[index]?.dateOfBirth && (
                          <div className="flex items-center text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors[index].dateOfBirth}
                          </div>
                        )}
                      </div>

                      {/* Passport Number */}
                      <div className="space-y-1.5">
                        <Label htmlFor={`passport-${index}`} className="text-sm font-medium">Passport Number</Label>
                        <Input
                          id={`passport-${index}`}
                          placeholder="Passport Number"
                          value={passenger.passportNumber}
                          onChange={(e) =>
                            updatePassenger(index, "passportNumber", e.target.value)
                          }
                          className={cn(
                            errors[index]?.passportNumber && "border-red-500 focus:ring-red-500"
                          )}
                        />
                        {errors[index]?.passportNumber && (
                          <div className="flex items-center text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors[index].passportNumber}
                          </div>
                        )}
                      </div>

                      {/* Nationality */}
                      <div className="md:col-span-2">
                        <Label htmlFor={`nationality-${index}`} className="text-sm font-medium">Nationality</Label>
                        <Select
                          value={passenger.nationality}
                          onValueChange={(value) => updatePassenger(index, "nationality", value)}
                        >
                          <SelectTrigger className={cn(
                            errors[index]?.nationality && "border-red-500 focus:ring-red-500"
                          )}>
                            <SelectValue placeholder="Select Nationality" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {allowedNationalities.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                {country.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors[index]?.nationality && (
                          <div className="flex items-center text-red-500 text-xs mt-1">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            {errors[index].nationality}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={() => router.push('/apply')}
                  disabled={isLoading}
                  className="border-slate-200 text-slate-700 hover:bg-slate-100"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={isLoading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    "Continue to Payment"
                  )}
                </Button>
              </div>
            </div>

            {/* Right: Order Summary and Support */}
            <div className="space-y-6">
              {orderSummary}
              <SupportSidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}