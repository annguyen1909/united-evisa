"use client";

import { useState } from "react";
import { Country } from "@/lib/countries/type";
import { Button } from "@/components/ui/button";
import { Plus, Minus, CreditCard, Clock, Globe, Users } from "lucide-react";
import { NATIONALITIES } from "@/lib/nationalities";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Combobox } from "@/components/ui/combobox";
import { calculateIndiaVisaFee } from "@/lib/countries/india";

interface VisaFeeCalculatorProps {
  selectedCountry: Country;
}

interface VisaTypeOption {
  id: string;
  name: string;
  govFee: number;
  processingTimes?: {
    normal?: string;
    superUrgent?: string;
  };
  allowedNationalities: string[];
}

export default function VisaFeeCalculator({ selectedCountry }: VisaFeeCalculatorProps) {
  const [numVisa, setNumVisa] = useState(1);
  const [visaType, setVisaType] = useState<VisaTypeOption | null>(null);
  const [processingTime, setProcessingTime] = useState<string>("");
  const [nationality, setNationality] = useState("");

  const visaTypes = selectedCountry?.visaTypes || [];
  const processingOptions = visaType?.processingTimes
    ? ([
      visaType.processingTimes.normal ? {
        label: `Normal Processing${visaType.processingTimes.normal ? ` (${visaType.processingTimes.normal})` : ''}`,
        value: 'normal',
        badge: 'Standard'
      } : null,
      visaType.processingTimes.superUrgent ? {
        label: `Super Urgent${visaType.processingTimes.superUrgent ? ` (${visaType.processingTimes.superUrgent})` : ''}`,
        value: 'superUrgent',
        badge: 'Express'
      } : null,
    ].filter((opt): opt is { label: string; value: string; badge: string } => !!opt))
    : [];
  const allowedNationalities = visaType?.allowedNationalities || [];
  const nationalityOptions = allowedNationalities.map(code => {
    const nationality = NATIONALITIES.find(n => n.code === code);
    return nationality ? nationality.name : code;
  }).sort();

  // For Combobox, convert nationalityOptions (string[]) to { value, label }[]
  const nationalityComboboxOptions = nationalityOptions.map(n => ({ value: n, label: n }));

  // Calculate fees
  let govFee = visaType?.govFee || 0;
  if (selectedCountry?.code?.toLowerCase() === "in" && visaType && nationality) {
    // Find nationality code from name (since nationality is name, not code)
    const nationalityObj = NATIONALITIES.find(n => n.name === nationality);
    const nationalityCode = nationalityObj ? nationalityObj.code : nationality;
    govFee = calculateIndiaVisaFee(visaType.id, nationalityCode) || 0;
  }
  const serviceFee = 59.99;
  const urgentProcessingFee = processingTime === 'superUrgent' ? 79 : 0;
  const totalPerVisa = govFee + serviceFee + urgentProcessingFee;
  const totalAmount = totalPerVisa * numVisa;

  const handleApply = () => {
    if (!selectedCountry || !visaType || !processingTime || !nationality) return;
    const params = new URLSearchParams({
      country: selectedCountry.code,
      visaType: visaType.id,
      processing: processingTime,
      num: numVisa.toString(),
      nationality,
    });
    window.location.href = `/apply?${params.toString()}`;
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mb-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg">
            <CreditCard className="h-8 w-8 text-emerald-700" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
            {selectedCountry.name} eVisa Calculator
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Calculate your visa fees instantly with our transparent pricing tool
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Visa Details and Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Globe className="h-6 w-6 text-emerald-600" />
            Visa Details
          </h3>

          <div className="space-y-6 mb-10">
            {/* Number of Visas and Visa Type - Same Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Number of Visas */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-2" />
                  Number of Visas
                </label>
                <div className="flex items-center justify-center bg-gray-100 rounded-2xl">
                  <button
                    onClick={() => setNumVisa((n) => Math.max(1, n - 1))}
                    className="p-3 hover:bg-white rounded-xl transition-all duration-200 hover:shadow-sm"
                    type="button"
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="px-6 py-3 text-xl font-bold text-gray-800 min-w-[3ch] text-center">
                    {numVisa}
                  </span>
                  <button
                    onClick={() => setNumVisa((n) => n + 1)}
                    className="p-3 hover:bg-white rounded-xl transition-all duration-200 hover:shadow-sm"
                    type="button"
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Type of Visa */}
              <div className="md:col-span-2 space-y-3">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Visa Type
                </label>
                <Select
                  value={visaType?.id || ''}
                  onValueChange={(value) => {
                    const vt = visaTypes.find(v => v.id === value);
                    setVisaType(vt || null);
                    setProcessingTime("");
                    setNationality("");
                  }}
                >
                  <SelectTrigger className="w-full min-h-[3rem] h-16 px-4 bg-gray-100 border-0 rounded-lg text-gray-700 font-medium 
                                          focus:ring-4 focus:ring-emerald-100 focus:bg-white transition-all duration-200
                                          hover:bg-white hover:shadow-sm">
                    <SelectValue placeholder="Choose visa type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {visaTypes.map(vt => (
                      <SelectItem key={vt.id} value={vt.id}>{vt.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Processing Time */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Clock className="inline h-4 w-4 mr-2" />
                Processing Time
              </label>
              <Select
                value={processingTime}
                onValueChange={setProcessingTime}
                disabled={!visaType}
              >
                <SelectTrigger className="w-full min-h-[3.25rem] h-16 px-4 bg-gray-100 border-0 rounded-lg text-left text-gray-700 font-normal text-base flex items-center justify-between focus:ring-4 focus:ring-emerald-100 focus:bg-white transition-all duration-200 hover:bg-white hover:shadow-sm disabled:opacity-50">
                  <SelectValue 
                    placeholder="Select processing time..."
                  />
                </SelectTrigger>
                <SelectContent>
                  {processingOptions.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Nationality */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nationality <span className="text-red-500">*</span>
              </label>
              {/* Combobox for Nationality using shadcn/ui pattern */}
              <div className="w-full">
                <Combobox
                  options={nationalityComboboxOptions}
                  value={nationality}
                  onChange={setNationality}
                  disabled={!visaType}
                  placeholder="Select your nationality..."
                />
              </div>
            </div>
          </div>

          {/* Fee Breakdown - Now inside the same container */}
          {visaType && (
            <>
              <div className="border-t border-gray-200 pt-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-emerald-600" />
                  Fee Breakdown
                </h3>

                <div className="space-y-6">
                  {/* Individual Fees */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Government & Admin Fee:</span>
                      <span className="font-bold text-gray-800">US$ {govFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Service Fee:</span>
                      <span className="font-bold text-gray-800">US$ {serviceFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Visa Fees Discount:</span>
                      <span className="font-bold text-green-600">- US$ 0.00</span>
                    </div>
                    {processingTime === 'superUrgent' && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-700 font-medium">Urgent Processing - 24 hours:</span>
                        <span className="font-bold text-gray-800">US$ {urgentProcessingFee.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  {/* Total Section - Highlighted */}
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-2xl border-2 border-emerald-200">
                    <div className="space-y-3">
                      {/* Processing Time Badge */}
                      {processingTime && (
                        <div className="mb-4">
                          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${processingTime === 'superUrgent'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                            }`}>
                            <Clock className="h-4 w-4 mr-2" />
                            {processingOptions.find(opt => opt.value === processingTime)?.badge} Processing
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-lg">
                        <span className="text-emerald-800 font-semibold">Total per visa:</span>
                        <span className="font-bold text-emerald-800">US$ {totalPerVisa.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg">
                        <span className="text-emerald-800 font-semibold">Number of visas:</span>
                        <span className="font-bold text-emerald-800">× {numVisa}</span>
                      </div>
                      <div className="border-t-2 border-emerald-300 pt-4 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-emerald-800">Total Amount:</span>
                          <span className="text-3xl font-bold text-emerald-800">US$ {totalAmount.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleApply}
                      disabled={!selectedCountry || !visaType || !processingTime || !nationality}
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 
                               text-white font-bold py-4 px-12 rounded-2xl text-lg transition-all duration-300
                               shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Empty State */}
          {!visaType && (
            <div className="text-center py-12 border-t border-gray-200 mt-4">
              <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-emerald-700 font-medium mb-2">Select visa details</p>
              <p className="text-emerald-600 text-sm">
                Choose your visa type and preferences to see the fee breakdown
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
