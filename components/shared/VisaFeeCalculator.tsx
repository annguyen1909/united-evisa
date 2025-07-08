"use client";

import { useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function VisaPriceCalculator() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<{
    name: string;
    govFee: number;
  } | null>(null);

  const handleCountryChange = (code: string) => {
    const country = COUNTRIES.find((c) => c.code === code);
    setSelectedCountry(country || null);
    setSelectedVisaType(null);
  };

  const handleVisaTypeChange = (type: string) => {
    if (!selectedCountry || !selectedCountry.etaInfo.visaTypes) return;
    const visa = selectedCountry.etaInfo.visaTypes.find((v) => v.type === type);
    if (visa) {
      setSelectedVisaType({ name: visa.name, govFee: visa.govFee });
    }
  };

  const serviceFee = selectedCountry?.etaInfo.serviceFee
    ? Number(selectedCountry.etaInfo.serviceFee)
    : 0;

  const totalFee = selectedVisaType ? selectedVisaType.govFee + serviceFee : 0;

  return (
    <div className="bg-white shadow rounded p-6 space-y-4 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-[#16610E]">Visa Price Calculator</h2>

      {/* Country Selector */}
      <div>
        <label className="block font-medium mb-1">Select Country</label>
        <Select onValueChange={handleCountryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a country" />
          </SelectTrigger>
          <SelectContent>
            {COUNTRIES.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Visa Type Selector */}
      {selectedCountry && selectedCountry.etaInfo.visaTypes && (
        <div>
          <label className="block font-medium mb-1">Select Visa Type</label>
          <Select onValueChange={handleVisaTypeChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a visa type" />
            </SelectTrigger>
            <SelectContent>
              {selectedCountry.etaInfo.visaTypes.map((v) => (
                <SelectItem key={v.type} value={v.type}>
                  {v.name} ({v.type})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Fee Display */}
      {selectedVisaType && (
        <div className="mt-4 border-t pt-4 space-y-2">
          <p className="text-sm">
            <strong>Visa Type:</strong> {selectedVisaType.name}
          </p>
          <p className="text-sm">
            <strong>Government Fee:</strong> ${selectedVisaType.govFee.toFixed(2)}
          </p>
          <p className="text-sm">
            <strong>Service Fee:</strong> ${serviceFee.toFixed(2)}
          </p>
          <p className="text-md font-semibold text-[#16610E]">
            Total: ${totalFee.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
