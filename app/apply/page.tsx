"use client";

import { useState } from "react";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import moment from "moment";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLiveTimeByCountryName } from "@/lib/getTime/useLiveTimeByCountryName";


export default function ApplyPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<string>("");
  const [passengerCount, setPassengerCount] = useState("1");
  const [stayingStart, setStayingStart] = useState("");
  const [stayingEnd, setStayingEnd] = useState("");
  const liveTime = useLiveTimeByCountryName(selectedCountry?.name ?? null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCountry || !selectedVisaType) {
      alert("Please select a country and visa type.");
      return;
    }

    const visa = selectedCountry.etaInfo.visaTypes.find((v) => v.name === selectedVisaType);
    if (!visa) {
      alert("Invalid visa type selected.");
      return;
    }

    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destinationId: selectedCountry.code,
        visaTypeId: visa.type,
        passengerCount: Number(passengerCount),
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
    <div className="min-h-screen justify-center bg-gray-50 py-10 px-4">
      <h1 className="text-2xl font-bold text-center text-[#16610E]">Apply for Your eVisa</h1>
      <div className="max-w-3xl p-4 lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 col-span-2 border bg-white rounded-lg p-4 shadow-sm">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
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
            {selectedCountry && (
              <div className="col-span-full flex items-start bg-white rounded-md">
                <div className="text-sm text-black italic whitespace-pre-line">
                  {liveTime
                    ? liveTime
                    : `Time at ${selectedCountry.name} Date: ---`}
                </div>
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="bg-[#16610E] hover:bg-[#16610E]/80 text-white w-full mt-6"
          >
            Submit Application
          </Button>
        </form>

        {/* Order Summary Card */}
        <div className="bg-white border rounded-lg p-4 shadow-sm space-y-2 h-fit w-full max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-center">Order Summary</h2>

          {(() => {
            const destination = selectedCountry?.name ?? "---";

            const visa = selectedCountry?.etaInfo.visaTypes.find((v) => v.name === selectedVisaType);
            const visaName = visa?.name ?? "---";
            const govFee = visa?.govFee ?? 0;
            const serviceFee = selectedCountry ? Number(selectedCountry.etaInfo.serviceFee) : 0;
            const passenger = Number(passengerCount) || 1;
            const total = visa ? (govFee + serviceFee) * passenger : 0;

            const isDateValid = stayingStart && stayingEnd;
            const formattedStart = isDateValid ? moment(stayingStart).format("DD/MM/YYYY") : "---";
            const formattedEnd = isDateValid ? moment(stayingEnd).format("DD/MM/YYYY") : "---";
            const durationInMs = isDateValid
              ? new Date(stayingEnd).getTime() - new Date(stayingStart).getTime()
              : null;
            const days = durationInMs !== null ? Math.floor(durationInMs / (1000 * 60 * 60 * 24)) : "---";

            return (
              <div className="text-sm rounded-xl bg-white space-y-4">
                {/* Header */}
                <div className="flex flex-col gap-1 md:flex-row md:justify-between">
                  <div>
                    <p className="font-semibold">Destination</p>
                    <p className="text-gray-700">{destination}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Staying Time</p>
                    <p className="text-gray-700">{formattedStart} - {formattedEnd}</p>
                    <p className="text-xs text-gray-700">({days} days)</p>
                  </div>
                </div>

                {/* Visa Type */}
                <div>
                  <p className="font-semibold">Type of Visa</p>
                  <p className="text-gray-700">{visaName}</p>
                </div>

                <hr className="border-zinc-300 dark:border-zinc-700" />

                {/* Fees */}
                <div className="space-y-2">
                  <p className="font-semibold">Visa Fees</p>
                  <div className="flex justify-between">
                    <p className="text-gray-700">Government Fee</p>
                    <p className="text-gray-700">{visa ? `$${govFee.toFixed(2)}` : "---"}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">Visa Fee</p>
                    <p className="text-gray-700">{selectedCountry ? `$${serviceFee.toFixed(2)}` : "---"}</p>
                  </div>
                </div>

                <hr className="border-zinc-300" />

                {/* Total */}
                <div className="flex justify-between items-center">
                  <p className="text-base font-semibold text-green-800">Total Fees</p>
                  <p className="text-base font-bold text-green-800">
                    {visa ? `$${total.toFixed(2)}` : "---"}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div >
  );
}
