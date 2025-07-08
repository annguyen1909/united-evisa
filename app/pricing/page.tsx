"use client";

import { useState } from "react";
import CountrySearch from "@/components/shared/CountrySearch";
import { COUNTRIES } from "@/lib/countries";
import CustomAccordion from "@/components/shared/CustomAccordion";
import { Button } from "@/components/ui/button";
import FeeGuarantee from "../components/FeeGuarantee";
import CustomerSupport from "../components/CustomerSupport";
import { Country } from "@/lib/countries/type";
import { Search, ArrowRight, Globe, DollarSign, Clock, Users } from "lucide-react";

export default function PricingPage() {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showFee, setShowFee] = useState(false);

  function handleCheckNow() {
    const inputLower = searchCountry?.toLowerCase?.() || "";
    const foundCountry = COUNTRIES.find(
      (country) => country.name.toLowerCase() === inputLower
    );
    if (foundCountry) {
      setShowFee(true);
      setSelectedCountry(foundCountry ?? null);
    } else {
      setShowFee(false);
      alert("Please select a valid country from the list");
    }
  }

  const accordionItems = COUNTRIES.map((country) => ({
    id: country.code,
    trigger: (
      <>
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={country.name}
          className="w-16 h-10 object-contain shadow-sm"
        />
        <p className="font-medium text-slate-700 mt-1">{country.name}</p>
      </>
    ),
    content: (
      <div className="relative bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-10 text-base sm:text-lg font-manrope text-slate-700 overflow-hidden transition-all duration-500">
        <div className="relative z-10 space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-semibold text-2xl mb-3 text-emerald-700 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Government & Admin Fee to {country.name}
            </h3>
            <p className="text-slate-600">
              The Government & Admin Fee is an obligated fee, which is the
              amount that the applicant has to pay for the Immigration
              Department to process eVisa.
            </p>
          </div>

          {country.visaTypes?.length ? (
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-emerald-50 text-emerald-700">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Visa Type</th>
                    <th className="px-6 py-3 text-left font-semibold">Description</th>
                    <th className="px-6 py-3 text-left font-semibold">Duration</th>
                    <th className="px-6 py-3 text-left font-semibold">Gov. Fee (USD)</th>
                    <th className="px-6 py-3 text-left font-semibold">Service Fee (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {country.visaTypes.map((visa, idx) => (
                    <tr key={visa.name} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 font-medium text-emerald-600">{visa.type}</td>
                      <td className="px-6 py-4">{visa.description || "-"}</td>
                      <td className="px-6 py-4">{visa.visaDuration || "-"}</td>
                      <td className="px-6 py-4 font-semibold">
                        {visa.govFee !== undefined
                          ? `$${visa.govFee.toFixed(2)}`
                          : "N/A"}
                      </td>
                      <td className="px-6 py-4 font-semibold">
                        {typeof country.etaInfo?.serviceFee === "number"
                          ? `$${country.etaInfo.serviceFee.toFixed(2)}`
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-4 text-slate-500 italic flex items-center gap-2">
              <Clock className="h-4 w-4" /> No visa types available at this time.
            </p>
          )}

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-semibold mb-3 text-xl text-emerald-700 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Service Overview
            </h3>
            <p className="text-slate-600">
              This fee covers eVisa consulting, personal info checking, status
              updates, collection & delivery of eVisa.
            </p>
            <p className="mt-1 text-slate-600">Processing time is 3 days after receiving complete documents.</p>
            <div className="bg-emerald-50 p-4 rounded-lg mt-3 border border-emerald-100">
              <ul className="space-y-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
                  <span>1 person – <span className="font-semibold">US$ 39.00</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
                  <span>2 people – <span className="font-semibold">US$ 37.00</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">3</span>
                  <span>3–5 people – <span className="font-semibold">US$ 35.00</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">4</span>
                  <span>6–9 people – <span className="font-semibold">US$ 34.00</span></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">5</span>
                  <span>10+ people – <span className="font-semibold">US$ 32.00</span></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-semibold mb-3 text-xl text-emerald-700 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Tour & Group Support
            </h3>
            <p className="text-slate-600">
              Travel agents can contact us for discounted group tour visa
              pricing.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="font-semibold mb-3 text-xl text-emerald-700 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Emergency Support
            </h3>
            <p className="text-slate-600">Need a visa urgently?</p>
            <div className="bg-[#fcf9e8] p-4 rounded-lg mt-3 border border-[#f5efc7] space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500 text-white rounded-md text-xs font-semibold">URGENT</span>
                <span>Urgent (24h) – Plus <span className="font-semibold">US$ 79.00</span>/person</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-500 text-white rounded-md text-xs font-semibold">SUPER</span>
                <span>Super Urgent (5h) – Plus <span className="font-semibold">US$ 99.00</span>/person</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="px-10 bg-emerald-600 text-white text-lg font-semibold rounded-lg py-6 mt-4 hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-md"
              onClick={() => alert(`Apply Now for ${country.name}`)}
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <main className="w-full mx-auto">
      {/* Hero Section */}
      <section id="country-hero" className="w-full flex justify-center mb-16">
        <div className="relative w-full h-64 sm:h-80 flex items-center justify-center overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('/images/country/kenya/kenya-bg.jpg')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="relative z-10 w-full text-center px-4 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-manrope text-white drop-shadow-lg tracking-tight mb-4">
              Pricing
            </h1>
            <p className="mt-2 text-lg text-white/90 font-medium drop-shadow-sm max-w-2xl">
              Find out how much you pay for your visa application
            </p>
            <div className="w-20 h-1 bg-emerald-600 rounded-full mt-4"></div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="text-center max-w-2xl mx-auto p-8 pb-10 mb-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="flex items-center justify-center mb-6">
          <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center">
            <Search className="h-6 w-6 text-emerald-600" />
          </div>
        </div>
        <h2 className="text-2xl text-emerald-700 font-manrope sm:text-3xl font-bold mb-4">
          Check Your Visa Fees
        </h2>
        <p className="text-slate-600 mb-6">Select your country to see detailed pricing information</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <CountrySearch
            value={searchCountry}
            onChange={(countryName) => setSearchCountry(countryName)}
            placeholder="Enter country name"
          />
          <button
            onClick={handleCheckNow}
            className="bg-emerald-600 text-white px-8 py-2.5 rounded-lg hover:bg-emerald-700 transition shadow-sm flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
          >
            Check Fees <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Fee Display */}
      {showFee && selectedCountry && (
        <section className="max-w-3xl mx-auto my-12 px-4 sm:px-0">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 text-base sm:text-lg font-manrope text-slate-700">
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="flex-shrink-0 bg-slate-50 p-2 rounded-lg border border-slate-200">
                <img
                  src={`https://flagcdn.com/${selectedCountry.code.toLowerCase()}.svg`}
                  alt={selectedCountry.name}
                  className="w-14 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-700">
                  {selectedCountry.name}
                </h2>
                <p className="text-slate-500 text-sm">Visa Fee Information</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-3 text-emerald-700 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Government & Admin Fee
              </h3>
              <p className="text-slate-600">
                The Government & Admin Fee is an obligated fee, which is the
                amount that the applicant has to pay for the Immigration
                Department to process eVisa.
              </p>
            </div>
            {selectedCountry.visaTypes?.length ? (
              <div className="overflow-x-auto mt-6 border border-slate-200 rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-emerald-50 text-emerald-700">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Visa Type</th>
                      <th className="px-6 py-3 text-left font-semibold">Description</th>
                      <th className="px-6 py-3 text-left font-semibold">Duration</th>
                      <th className="px-6 py-3 text-left font-semibold">Gov. Fee</th>
                      <th className="px-6 py-3 text-left font-semibold">Service Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCountry.visaTypes.map((visa, idx) => (
                      <tr key={visa.name} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-6 py-4 font-medium text-emerald-700">{visa.type}</td>
                        <td className="px-6 py-4">{visa.description || "-"}</td>
                        <td className="px-6 py-4">{visa.visaDuration || "-"}</td>
                        <td className="px-6 py-4 font-semibold">
                          {visa.govFee !== undefined
                            ? `$${visa.govFee.toFixed(2)}`
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 font-semibold">
                          {selectedCountry.etaInfo?.serviceFee !== undefined
                            ? `$${selectedCountry.etaInfo.serviceFee.toFixed(2)}`
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="mt-4 text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                No visa types currently available for {selectedCountry.name}.
              </div>
            )}

            <div className="flex justify-center mt-8">
              <Button
                className="px-8 bg-emerald-600 text-white font-semibold rounded-lg py-5 hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-md"
                onClick={() => alert(`Apply Now for ${selectedCountry.name}`)}
              >
                Apply for Visa <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Accordion Section */}
      <section className="mt-16 mb-16 max-w-7xl px-4 mx-auto text-center">
        <h2 className="text-emerald-700 font-manrope text-3xl font-bold mb-4">
          Comprehensive Visa Fee Information
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto mb-10">
          Select a country below to view detailed pricing and requirements for visa applications
        </p>
        <CustomAccordion items={accordionItems} />
      </section>

      <CustomerSupport />
      <FeeGuarantee />
    </main>
  );
}