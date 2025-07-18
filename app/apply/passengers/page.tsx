"use client";

import { useEffect, useState, useMemo, Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import SupportSidebar from "@/components/shared/SupportSidebar";
import moment from "moment";
import { NATIONALITIES } from "@/lib/nationalities";
import { COUNTRIES } from "@/lib/countries/index";
import { calculateIndiaVisaFee } from "@/lib/countries/india";

import { Users, AlertCircle, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FIXED_SERVICE_FEE = 59.99;


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

function PassengersContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [errors, setErrors] = useState<PassengerError[]>([]);
  const [stepNotAllowed, setStepNotAllowed] = useState(false);

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

        // Check if previous step is completed (customize this check as needed)
        if (!data.destination || !data.visaType) {
          setStepNotAllowed(true);
          return;
        }

        // Initialize passengers based on application data
        const passengerCount = data.passengerCount || 1;
        console.log('Passengers page - passengerCount from DB:', passengerCount);
        console.log('Passengers page - existing passengers:', data.passengers);

        // Use existing passengers or create empty ones
        if (data.passengers && data.passengers.length > 0) {
          console.log('Using existing passengers from DB');
          setPassengers(data.passengers.map((p: any) => ({
            id: p.id,
            fullName: p.fullName || "",
            nationality: p.nationality || "",
            passportNumber: p.passportNumber || "",
            dateOfBirth: p.dateOfBirth ? moment(p.dateOfBirth).format("YYYY-MM-DD") : "",
            gender: p.gender || ""
          })));
        } else {
          console.log('Creating empty passenger forms based on count:', passengerCount);
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

  // Get visa type from database (applicationData includes visaType and destination)
  const visa = useMemo(() => {
    if (!applicationData?.visaType) {
      console.log('[visa debug] visaType missing from applicationData', { applicationData });
      return null;
    }
    return applicationData.visaType;
  }, [applicationData]);

  // Get allowed nationalities from the database visa type
  const allowedNationalities = useMemo(() => {
    if (!visa || !visa.allowedNationalities) {
      console.log('[nationality debug] No allowedNationalities found, using all nationalities');
      return NATIONALITIES;
    }

    // Parse the allowedNationalities JSON if it's a string
    let allowedCodes: string[] = [];
    if (typeof visa.allowedNationalities === 'string') {
      try {
        allowedCodes = JSON.parse(visa.allowedNationalities);
      } catch (e) {
        console.error('Error parsing allowedNationalities:', e);
        return NATIONALITIES;
      }
    } else if (Array.isArray(visa.allowedNationalities)) {
      allowedCodes = visa.allowedNationalities;
    }

    if (allowedCodes.length === 0) {
      console.log('[nationality debug] Empty allowedNationalities, using all nationalities');
    return NATIONALITIES;
    }

    console.log('[nationality debug] Filtering nationalities by:', allowedCodes);
    const filtered = NATIONALITIES.filter((c: { code: string; }) =>
      allowedCodes.includes(c.code.toUpperCase())
    );
    console.log('[nationality debug] Filtered nationalities count:', filtered.length);
    return filtered;
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

      // Calculate total (same logic as order summary)
      const passengerCount = applicationData?.passengerCount || 1;
      const serviceFee = FIXED_SERVICE_FEE;
      let total = 0;
      if (visa && typeof govFee === 'number') {
        total = (govFee + serviceFee) * passengerCount;
      }


      // Save passengers and total in one request
      const passengersRes = await fetch(`/api/applications/${applicationId}/passengers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passengers, total }),
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
  // Memoized govFee calculation for India, updates when passengers or visa change
  const govFee = useMemo(() => {
    if (applicationData?.destination?.code?.toLowerCase() === "in" && visa && passengers.length > 0) {
      const canonicalId = visa.id.split('-group-')[0];
      const fees = passengers.map((p) => calculateIndiaVisaFee(canonicalId, p.nationality));
      const validFees = fees.filter((fee): fee is number => typeof fee === 'number' && !isNaN(fee));
      console.log('[India govFee debug]', { canonicalId, passengers, fees, validFees });
      if (validFees.length === 0) {
        return null;
      } else {
        // Return the total sum for all passengers
        return validFees.reduce((sum, fee) => sum + fee, 0);
      }
    } else {
      console.log('[govFee debug] Not India or no visa/passengers', { 
        destination: applicationData?.destination, 
        visa, 
        passengers 
      });
      // For non-India, multiply visa.fees by passenger count
      return typeof visa?.fees === 'number' ? visa.fees * passengers.length : null;
    }
  }, [applicationData?.destination, visa, passengers]);

  // Order summary
  let orderSummary = null;
  if (applicationData) {
    const destination = applicationData.destination?.name ?? "---";
    // Always show canonical visa name (no group or suffix)
    let visaName = applicationData.visaType?.name ?? "---";
    if (applicationData?.destination?.code?.toLowerCase() === "in" && visa) {
      // For India, get the canonical visa type name from the config (by id)
      // The canonical visa type id is the part before any '-group-' in the id
      const canonicalId = visa.id.split('-group-')[0];
      // Find the canonical visa type in the India config
      const indiaConfig = COUNTRIES.find(c => c.code === 'in');
      const canonicalVisa = indiaConfig?.visaTypes?.find(vt => vt.id === canonicalId);
      if (canonicalVisa) {
        visaName = canonicalVisa.name;
      }
    }
    const passenger = applicationData.passengerCount || 1;
    const serviceFee = FIXED_SERVICE_FEE * passenger;
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
    const total = visa && typeof govFee === 'number' ? (govFee + serviceFee) : 0;
    orderSummary = (
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-6">
        <h2 className="text-lg font-semibold text-center text-slate-800 mb-4 pb-2 border-b border-slate-100">
          Order Summary
        </h2>
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Destination</span>
            <span className="font-medium text-emerald-700">{destination}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Type of Visa</span>
            <span className="text-slate-800 text-xs">{visaName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Travelers</span>
            <span className="text-slate-800">{passenger}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Staying Time</span>
            <span className="text-slate-800">{formattedStart} - {formattedEnd}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Duration</span>
            <span className="text-slate-800">{days} days</span>
          </div>
          <hr className="border-slate-100" />
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Government Fee</span>
            <span className="text-slate-800">{visa && typeof govFee === 'number' ? `$${govFee.toFixed(2)}` : "---"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Service Fee</span>
            <span className="text-slate-800">${serviceFee.toFixed(2)}</span>
          </div>
          <hr className="border-slate-100" />
          <div className="flex items-center justify-between pt-1">
            <span className="font-semibold text-base text-slate-800">Total</span>
            <span className="font-bold text-lg text-emerald-700">{visa && typeof govFee === 'number' ? `$${total.toFixed(2)}` : "---"}</span>
          </div>
        </div>
      </div>
    );
  }
  // Prevent editing passengers if payment is completed
  if (applicationData && applicationData.paymentStatus === "Completed") {
    return (
      <div className="min-h-screen bg-slate-50 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Check className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">Passenger Information Already Submitted</h2>
            <p className="text-green-600 mb-4">
              You have already completed this step and payment is completed for this application.
            </p>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 mt-2"
              onClick={() => router.push(`/apply/payment?applicationId=${applicationId}`)}
            >
              Go to Payment Summary
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (stepNotAllowed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold text-yellow-700 mb-2">Step Not Allowed</h2>
          <p className="text-yellow-600 mb-4">
            You cannot access this step until you have completed the previous step.
          </p>
          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 mt-2"
            onClick={() => router.push("/apply")}
          >
            Go Back to Start
          </Button>
        </div>
      </div>
    );
  }

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

export default function PassengersPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600 mb-4"></div>
          <p className="text-slate-700 font-medium">Loading passengers...</p>
        </div>
      </div>
    }>
      <PassengersContent />
    </Suspense>
  );
}