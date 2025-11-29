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
import { SERVICE_FEE } from '@/lib/constants';

interface VisaFeeCalculatorProps {
  selectedCountry: Country;
}

interface VisaTypeOption {
  id: string;
  name: string;
  govFee: number;
  allowedNationalities: string[];
}

export default function VisaFeeCalculator({ selectedCountry }: VisaFeeCalculatorProps) {
  const [numVisa, setNumVisa] = useState(1);
  const [visaType, setVisaType] = useState<VisaTypeOption | null>(null);
  const [nationality, setNationality] = useState("");
  const [passengerNationalities, setPassengerNationalities] = useState<string[]>([""]);
  const [sameNationality, setSameNationality] = useState(true);

  const visaTypes = selectedCountry?.visaTypes || [];
  const allowedNationalities = visaType?.allowedNationalities || [];
  const nationalityOptions = allowedNationalities.map(code => {
    const nationality = NATIONALITIES.find(n => n.code === code);
    return nationality ? nationality.name : code;
  }).sort();

  // For Combobox, convert nationalityOptions (string[]) to { value, label }[]
  const nationalityComboboxOptions = nationalityOptions.map(n => ({ value: n, label: n }));

  // Update passenger nationalities array when numVisa changes
  const updatePassengerNationalities = (newNum: number) => {
    setPassengerNationalities(prev => {
      const updated = [...prev];
      if (newNum > updated.length) {
        // Add new entries
        for (let i = updated.length; i < newNum; i++) {
          updated.push(sameNationality ? nationality : "");
        }
      } else {
        // Remove excess entries
        updated.splice(newNum);
      }
      return updated;
    });
  };

  // Calculate fees
  let totalAmount = 0;
  const serviceFee = Number(SERVICE_FEE || 59.99);
  
  if (selectedCountry?.code?.toLowerCase() === "in" && visaType) {
    // For India, calculate fee for each passenger based on their nationality
    const nationalitiesToUse = sameNationality ? 
      Array(numVisa).fill(nationality) : 
      passengerNationalities;
    
    totalAmount = nationalitiesToUse.reduce((total, passengerNationality, index) => {
      if (!passengerNationality) return total;
      const nationalityObj = NATIONALITIES.find(n => n.name === passengerNationality);
      const nationalityCode = nationalityObj ? nationalityObj.code : passengerNationality;
      const govFee = calculateIndiaVisaFee(visaType.id, nationalityCode) || 0;
      return total + govFee + serviceFee;
    }, 0);
  } else {
    // For other countries, use standard calculation
    const govFee = visaType?.govFee || 0;
    const totalPerVisa = govFee + serviceFee;
    totalAmount = totalPerVisa * numVisa;
  }

  const handleApply = () => {
    const isIndia = selectedCountry?.code?.toLowerCase() === "in";
    const requiredNationalities = isIndia && !sameNationality ? 
      passengerNationalities : 
      [nationality];
    
    const hasAllNationalities = requiredNationalities.every(n => n && n.trim() !== "");
    
    if (!selectedCountry || !visaType || !hasAllNationalities) return;
    
    const params = new URLSearchParams({
      country: selectedCountry.slug,
      type: visaType.name,
      num: numVisa.toString(),
      nationality: isIndia && !sameNationality ? 
        JSON.stringify(passengerNationalities) : 
        nationality,
    });
    const url = `/apply?${params.toString()}`;
    console.log('Apply Now clicked:', {
      country: selectedCountry.code,
      type: visaType.name,
      num: numVisa.toString(),
      nationality: isIndia && !sameNationality ? passengerNationalities : nationality,
      url
    });
    window.location.href = url;
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
                    onClick={() => {
                      const newNum = Math.max(1, numVisa - 1);
                      setNumVisa(newNum);
                      updatePassengerNationalities(newNum);
                    }}
                    className="p-3 hover:bg-white rounded-xl transition-all duration-200 hover:shadow-sm"
                    type="button"
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </button>
                  <span className="px-6 py-3 text-xl font-bold text-gray-800 min-w-[3ch] text-center">
                    {numVisa}
                  </span>
                  <button
                    onClick={() => {
                      const newNum = numVisa + 1;
                      setNumVisa(newNum);
                      updatePassengerNationalities(newNum);
                    }}
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
                    setNationality("");
                    setPassengerNationalities(Array(numVisa).fill(""));
                    setSameNationality(true);
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

            {/* Nationality */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nationality <span className="text-red-500">*</span>
              </label>
              
              {selectedCountry?.code?.toLowerCase() === "in" && numVisa > 1 ? (
                // India with multiple passengers
                <div className="space-y-4">
                  {/* Same nationality checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="sameNationality"
                      checked={sameNationality}
                      onChange={(e) => {
                        setSameNationality(e.target.checked);
                        if (e.target.checked && nationality) {
                          setPassengerNationalities(Array(numVisa).fill(nationality));
                        }
                      }}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="sameNationality" className="text-sm text-gray-700">
                      All passengers have the same nationality
                    </label>
                  </div>

                  {sameNationality ? (
                    // Single nationality selection
                    <Combobox
                      options={nationalityComboboxOptions}
                      value={nationality}
                      onChange={(value) => {
                        setNationality(value);
                        setPassengerNationalities(Array(numVisa).fill(value));
                      }}
                      disabled={!visaType}
                      placeholder="Select nationality for all passengers..."
                    />
                  ) : (
                    // Individual nationality selection for each passenger
                    <div className="space-y-3">
                      {Array.from({ length: numVisa }, (_, index) => (
                        <div key={index}>
                          <label className="block text-sm font-medium text-gray-600 mb-1">
                            Passenger {index + 1}:
                          </label>
                          <Combobox
                            options={nationalityComboboxOptions}
                            value={passengerNationalities[index] || ""}
                            onChange={(value) => {
                              const updated = [...passengerNationalities];
                              updated[index] = value;
                              setPassengerNationalities(updated);
                            }}
                            disabled={!visaType}
                            placeholder={`Select nationality for passenger ${index + 1}...`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Single nationality selection (non-India or single passenger)
                <Combobox
                  options={nationalityComboboxOptions}
                  value={nationality}
                  onChange={(value) => {
                    setNationality(value);
                    setPassengerNationalities([value]);
                  }}
                  disabled={!visaType}
                  placeholder="Select your nationality..."
                />
              )}
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
                    {selectedCountry?.code?.toLowerCase() === "in" ? (
                      // India fee breakdown - grouped by fee type
                      <div className="space-y-4">
                        {(() => {
                          const nationalitiesToUse = sameNationality ? Array(numVisa).fill(nationality) : passengerNationalities;
                          const nationalityGroups: { [key: string]: number } = {};
                          
                          // Group nationalities and count occurrences
                          nationalitiesToUse.forEach(nat => {
                            if (nat) {
                              nationalityGroups[nat] = (nationalityGroups[nat] || 0) + 1;
                            }
                          });
                          
                          // Calculate totals
                          let totalGovFees = 0;
                          let totalServiceFees = 0;
                          
                          const govFeeEntries = Object.entries(nationalityGroups).map(([passengerNationality, count]) => {
                            const nationalityObj = NATIONALITIES.find(n => n.name === passengerNationality);
                            const nationalityCode = nationalityObj ? nationalityObj.code : passengerNationality;
                            const govFee = calculateIndiaVisaFee(visaType.id, nationalityCode) || 0;
                            const totalGovFee = govFee * count;
                            totalGovFees += totalGovFee;
                            
                            return { passengerNationality, count, govFee, totalGovFee };
                          });
                          
                          const serviceFeeEntries = Object.entries(nationalityGroups).map(([passengerNationality, count]) => {
                            const totalServiceFee = serviceFee * count;
                            totalServiceFees += totalServiceFee;
                            
                            return { passengerNationality, count, serviceFee, totalServiceFee };
                          });
                          
                          return (
                            <>
                              {/* Government Fee Section */}
                              <div className="space-y-2">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                  <span className="text-gray-700 font-medium">Government Fee:</span>
                                  <span className="font-bold text-gray-800">US$ {totalGovFees.toFixed(2)}</span>
                                </div>
                                <div className="bg-emerald-50 rounded-lg p-3 space-y-1">
                                  {govFeeEntries.map(({ passengerNationality, count, govFee, totalGovFee }) => (
                                    <div key={`gov-${passengerNationality}`} className="flex justify-between items-center text-sm">
                                      <span className="text-emerald-700">
                                        {passengerNationality}:
                                      </span>
                                      <span className="text-emerald-800 font-medium">
                                        ${govFee.toFixed(2)} × {count} = ${totalGovFee.toFixed(2)}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Service Fee Section */}
                              <div className="space-y-2">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                  <span className="text-gray-700 font-medium">Service Fee:</span>
                                  <span className="font-bold text-gray-800">US$ {totalServiceFees.toFixed(2)}</span>
                                </div>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    ) : (
                      // Non-India fee breakdown
                      <>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-700 font-medium">Government & Admin Fee:</span>
                          <span className="font-bold text-gray-800">US$ {(visaType?.govFee || 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                          <span className="text-gray-700 font-medium">Service Fee:</span>
                          <span className="font-bold text-gray-800">US$ {serviceFee.toFixed(2)}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Visa Fees Discount:</span>
                      <span className="font-bold text-green-600">- US$ 0.00</span>
                    </div>
                  </div>

                  {/* Total Section - Highlighted */}
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-6 rounded-2xl border-2 border-emerald-200">
                    <div className="space-y-3">
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
                      disabled={(() => {
                        const isIndia = selectedCountry?.code?.toLowerCase() === "in";
                        const requiredNationalities = isIndia && !sameNationality ? 
                          passengerNationalities : 
                          [nationality];
                        const hasAllNationalities = requiredNationalities.every(n => n && n.trim() !== "");
                        return !selectedCountry || !visaType || !hasAllNationalities;
                      })()}
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
