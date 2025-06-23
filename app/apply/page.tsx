"use client";

import { useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import VisaPriceCalculator from "@/components/shared/VisaFeeCalculator";
import { Button } from "@/components/ui/button";

export default function ApplyPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<string>("");
  const [passengerCount, setPassengerCount] = useState("1");
  const [stayingStart, setStayingStart] = useState("");
  const [stayingEnd, setStayingEnd] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCountry || !selectedVisaType) {
      alert("Please select a country and visa type.");
      return;
    }

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: selectedCountry.code,
        visaTypeId: selectedVisaType, // you can choose to use type or name
        passengerCount,
        stayingStart,
        stayingEnd,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert(`Application submitted: ${data.application.applicationId}`);
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow space-y-6">
        <h1 className="text-2xl font-bold text-[#16610E]">Apply for Your eVisa</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Country */}
          <div>
            <label className="block font-medium mb-1">Destination Country</label>
            <Select
              onValueChange={(code) => {
                const country = COUNTRIES.find((c) => c.code === code);
                setSelectedCountry(country || null);
                setSelectedVisaType("");
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
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

          {/* Visa Type */}
          {selectedCountry && (
            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Visa Type</label>
                <Select
                  value={selectedVisaType}
                  onValueChange={(v) => setSelectedVisaType(v)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a visa type" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedCountry.etaInfo.visaTypes.map((v) => (
                      <SelectItem key={v.name} value={v.name}>
                        {v.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Visa Price Display */}
              {selectedVisaType && (
                (() => {
                  const visa = selectedCountry.etaInfo.visaTypes.find(v => v.name === selectedVisaType);
                  if (!visa) return null;

                  const govFee = visa.govFee || 0;
                  const serviceFee = Number(selectedCountry.etaInfo.serviceFee) || 0;
                  const total = govFee + serviceFee;

                  return (
                    <div className="mt-2 p-4 rounded-md border bg-gray-50 space-y-1 text-sm text-gray-700">
                      <p><strong>Visa:</strong> {visa.name}</p>
                      <p><strong>Government Fee:</strong> ${govFee.toFixed(2)}</p>
                      <p><strong>Service Fee:</strong> ${serviceFee.toFixed(2)}</p>
                      <p className="font-semibold text-[#16610E]">
                        Total: ${total.toFixed(2)}
                      </p>
                    </div>
                  );
                })()
              )}
            </div>
          )}


          {/* Passenger Count */}
          <div>
            <label className="block font-medium mb-1">Passenger Count</label>
            <Input
              type="number"
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
              min={1}
              required
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Staying From</label>
              <Input
                type="date"
                value={stayingStart}
                onChange={(e) => setStayingStart(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Staying Until</label>
              <Input
                type="date"
                value={stayingEnd}
                onChange={(e) => setStayingEnd(e.target.value)}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#16610E] hover:bg-[#16610E]/80 text-white w-full mt-6"
          >
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
