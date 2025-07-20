"use client";
import React from "react";

import moment from "moment";
import { COUNTRIES } from "@/lib/countries";
import { calculateIndiaVisaFee } from "@/lib/countries/india";

const FIXED_SERVICE_FEE = 59.99;

interface OrderSummaryProps {
  // Step 1 data (ApplyForm)
  selectedDestination?: {
    id: string;
    name: string;
    code: string;
  } | null;
  selectedVisaType?: string;
  passengerCount?: number;
  stayingStart?: string;
  stayingEnd?: string;
  portType?: string;
  portName?: string;
  
  // Step 2 data (Passengers page)
  applicationData?: any;
  passengers?: any[];
  visa?: any;
  
  // Step 3 data (Payment page)
  totalAmount?: number;
  
  // Step indicator
  step: "apply" | "passengers" | "payment";
  
  // Optional styling
  className?: string;
}

export default function OrderSummary({
  selectedDestination,
  selectedVisaType,
  passengerCount = 1,
  stayingStart,
  stayingEnd,
  portType,
  portName,
  applicationData,
  passengers = [],
  visa,
  totalAmount,
  step,
  className = ""
}: OrderSummaryProps) {
  
  // Determine data source based on step
  const destination = applicationData?.destination?.name || selectedDestination?.name || "---";
  const travelerCount = applicationData?.passengerCount || passengers?.length || passengerCount || 1;
  // Application ID logic
  const applicationId = applicationData?.applicationId || selectedDestination?.id || null;
  
  // Visa name logic
  let visaName = "---";
  const countryCode = applicationData?.destination?.code || selectedDestination?.code;
  const isIndia = countryCode?.toLowerCase() === "in";
  if (step === "apply") {
    if (isIndia && selectedVisaType) {
      visaName = selectedVisaType.replace(/\s*-\s*Group\s*\d+$/, "");
    } else {
      visaName = selectedVisaType || "---";
    }
  } else if (applicationData?.visaType?.name || visa?.name) {
    // Always show canonical visa name (no group suffix) for all countries
    if (visa && visa.id) {
      const canonicalId = visa.id.split('-group-')[0];
      // Find the country config for the current destination
      const countryConfig = COUNTRIES.find(c => c.code === countryCode?.toLowerCase());
      const canonicalVisa = countryConfig?.visaTypes?.find(vt => vt.id === canonicalId);
      if (canonicalVisa) {
        if (isIndia) {
          visaName = canonicalVisa.name.replace(/\s*-\s*Group\s*\d+$/, "");
        } else {
          visaName = canonicalVisa.name;
        }
      } else if (isIndia && visa.name) {
        visaName = visa.name.replace(/\s*-\s*Group\s*\d+$/, "");
      } else {
        visaName = visa.name;
      }
    } else {
      if (isIndia && (applicationData?.visaType?.name || visa?.name)) {
        visaName = (applicationData?.visaType?.name || visa?.name || "---").replace(/\s*-\s*Group\s*\d+$/, "");
      } else {
        visaName = applicationData?.visaType?.name || visa?.name || "---";
      }
    }
  }
  
  // Date formatting
  const formatDate = (dateString: string) => moment(dateString).format("DD/MM/YYYY");
  const isDateValid = stayingStart && stayingEnd;
  const formattedStart = isDateValid ? formatDate(stayingStart) : "---";
  const formattedEnd = isDateValid ? formatDate(stayingEnd) : "---";
  const days = isDateValid 
    ? Math.floor((new Date(stayingEnd).getTime() - new Date(stayingStart).getTime()) / (1000 * 60 * 60 * 24))
    : "---";
  
  // Government fee calculation
  const [govFee, setGovFee] = React.useState<number | null>(null);
  const [serverTotal, setServerTotal] = React.useState<number | null>(null);
  const serviceFee = FIXED_SERVICE_FEE * travelerCount;

  // Fetch total from server (Application table) when applicationId changes
  React.useEffect(() => {
    async function fetchServerTotal() {
      if (applicationId) {
        try {
          const res = await fetch(`/api/applications/${applicationId}`);
          if (!res.ok) return;
          const data = await res.json();
          if (typeof data.total === "number") {
            setServerTotal(data.total);
          } else {
            setServerTotal(null);
          }
        } catch {
          setServerTotal(null);
        }
      } else {
        setServerTotal(null);
      }
    }
    fetchServerTotal();
  }, [applicationId]);

  React.useEffect(() => {
    // Fetch govFee from API for step 1 only
    if (step === "apply" && (!selectedVisaType || !selectedDestination?.id)) {
      setGovFee(null);
      return;
    }
    async function fetchGovFee() {
      if (step === "apply" && selectedDestination?.id && selectedVisaType) {
        try {
          const res = await fetch(`/api/destinations/${selectedDestination.id}/visa-types`);
          if (!res.ok) return;
          const visaTypes = await res.json();
          const visaType = visaTypes.find((v: any) => v.name === selectedVisaType);
          if (visaType && typeof visaType.fees === "number") {
            setGovFee(visaType.fees * travelerCount);
          } else {
            setGovFee(null);
          }
        } catch {
          setGovFee(null);
        }
      }
    }
    fetchGovFee();
  }, [step, selectedDestination?.id, selectedVisaType, travelerCount]);

  React.useEffect(() => {
    if (step === "passengers") {
      const isIndia = selectedDestination?.code?.toLowerCase() === "in" || applicationData?.destination?.code?.toLowerCase() === "in";
      if (isIndia && visa && passengers.length > 0) {
        // India: Calculate based on passenger nationalities
        const canonicalId = visa.id.split('-group-')[0];
        const fees = passengers.map((p: any) => calculateIndiaVisaFee(canonicalId, p.nationality));
        const validFees = fees.filter((fee: any): fee is number => typeof fee === 'number' && !isNaN(fee));
        if (validFees.length > 0) {
          setGovFee(validFees.reduce((sum: number, fee: number) => sum + fee, 0));
        } else {
          setGovFee(null);
        }
      } else if (!isIndia && visa?.govFee) {
        setGovFee(visa.govFee * travelerCount);
      } else if (!isIndia && visa?.fees) {
        setGovFee(visa.fees * travelerCount);
      } else {
        setGovFee(null);
      }
    }
    // For payment step, recalculate govFee for India (and Taiwan) using serverTotal - serviceFee
    if (step === "payment") {
      const isSpecial = isIndia || countryCode?.toLowerCase() === "tw";
      if (isSpecial && serverTotal !== null) {
        // India/Taiwan: Use serverTotal - serviceFee
        setGovFee(serverTotal - serviceFee);
      } else if (!isSpecial && typeof totalAmount === "number") {
        setGovFee(totalAmount - serviceFee);
      } else if (serverTotal !== null) {
        // Fallback: always use serverTotal - serviceFee
        setGovFee(serverTotal - serviceFee);
      } else if (typeof totalAmount === "number") {
        setGovFee(totalAmount - serviceFee);
      } else {
        setGovFee(null);
      }
    }
  }, [step, selectedDestination?.code, applicationData?.destination?.code, visa, passengers, travelerCount, totalAmount, serviceFee]);

  const total = step === "payment" && totalAmount 
    ? totalAmount 
    : (serverTotal !== null ? serverTotal : (govFee !== null ? govFee + serviceFee : null));
  return (
    <div className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-6 z-10 ${className}`}>
      <h2 className="text-lg font-semibold text-center text-slate-800 mb-4 pb-2 border-b border-slate-100">
        Order Summary
      </h2>
      <div className="space-y-4 text-sm">
        {/* Application ID */}
        {applicationId && (
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Application ID</span>
            <span className="text-xs text-slate-500">{applicationId}</span>
          </div>
        )}
        {/* Destination */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">Destination</span>
          <span className="font-medium text-emerald-700">{destination}</span>
        </div>
        
        {/* Visa Type - only show if selected */}
        {visaName !== "---" && (
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Type of Visa</span>
            <span className="text-slate-800 text-xs">{visaName}</span>
          </div>
        )}
        
        {/* Travelers */}
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">Travelers</span>
          <span className="text-slate-800">{travelerCount}</span>
        </div>
        
        {/* Travel dates - only show if available */}
        {isDateValid && (
          <>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-700">Staying Time</span>
              <span className="text-slate-800">{formattedStart} - {formattedEnd}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-700">Duration</span>
              <span className="text-slate-800">{days} days</span>
            </div>
          </>
        )}
        
        {/* Port information for India - only show in step 1 if available */}
        {step === "apply" && (selectedDestination?.code?.toLowerCase() === "in" || applicationData?.destination?.code?.toLowerCase() === "in") && portType && (
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Port Type</span>
            <span className="text-slate-800">{portType}</span>
          </div>
        )}
        {step === "apply" && (selectedDestination?.code?.toLowerCase() === "in" || applicationData?.destination?.code?.toLowerCase() === "in") && portName && (
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-700">Port Name</span>
            <span className="text-slate-800">{portName}</span>
          </div>
        )}
        
        {/* Fees - only show from step 2 onwards */}
        {(step === "passengers" || step === "payment") && (
          <>
            <hr className="border-slate-100" />
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Government Fee</span>
              <span className="text-slate-800">
                {step === "payment" && (isIndia || countryCode?.toLowerCase() === "tw") && serverTotal !== null
                  ? `$${(serverTotal - serviceFee).toFixed(2)}`
                  : govFee !== null
                    ? `$${govFee.toFixed(2)}`
                    : govFee === 0
                      ? "$0.00"
                      : "---"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Service Fee</span>
              <span className="text-slate-800">${serviceFee.toFixed(2)}</span>
            </div>
            <hr className="border-slate-100" />
            <div className="flex items-center justify-between pt-1">
              <span className="font-semibold text-base text-slate-800">Total</span>
              <span className="font-bold text-lg text-emerald-700">
                {step === "passengers"
                  ? (govFee !== null ? `$${(govFee + serviceFee).toFixed(2)}` : "---")
                  : serverTotal !== null
                    ? `$${serverTotal.toFixed(2)}`
                    : (total !== null && total > 0 ? `$${total.toFixed(2)}` : "---")}
              </span>
            </div>
          </>
        )}
        
        {/* Step 1: Show estimated total */}
        {step === "apply" && selectedDestination && (
          <>
            <hr className="border-slate-100" />
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Government Fee</span>
              <span className="text-slate-800">
                {selectedDestination.code?.toLowerCase() === "in" 
                  ? "Pending nationality selection"
                  : (govFee !== null ? `$${govFee.toFixed(2)}` : "---")}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Service Fee</span>
              <span className="text-slate-800">${serviceFee.toFixed(2)}</span>
            </div>
            <hr className="border-slate-100" />
            <div className="flex items-center justify-between pt-1">
              <span className="font-semibold text-base text-slate-800">Total</span>
              <span className="font-bold text-lg text-slate-700">
                {selectedDestination.code?.toLowerCase() === "in"
                  ? `${serviceFee.toFixed(2)}+`
                  : (govFee !== null ? `$${(govFee + serviceFee).toFixed(2)}` : `${serviceFee.toFixed(2)}+`)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
