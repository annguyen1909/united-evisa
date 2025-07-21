"use client";

import { useState } from "react";
import CountrySearch from "@/components/shared/CountrySearch";
import VisaFeeCalculator from "@/components/shared/VisaFeeCalculator";
import SupportSidebar from "@/components/shared/SupportSidebar";
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
            <h3 className="font-semibold text-2xl mb-3 text-emerald-600 flex items-center gap-2">
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
                <thead className="bg-emerald-50 text-emerald-600">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Visa Type</th>
                    <th className="px-6 py-3 text-left font-semibold">Description</th>
                    <th className="px-6 py-3 text-left font-semibold">Duration</th>
                    <th className="px-6 py-3 text-left font-semibold">Gov. Fee (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {country.visaTypes.map((visa, idx) => (
                    <tr key={visa.name} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 font-medium text-emerald-600">{visa.type}</td>
                      <td className="px-6 py-4">{visa.description || "-"}</td>
                      <td className="px-6 py-4">{visa.visaDuration ? visa.visaDuration + ' days' : '-'}</td>
                      <td className="px-6 py-4 font-semibold">
                        {visa.govFee !== undefined
                          ? `$${visa.govFee.toFixed(2)}`
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
              Our service fee is a fixed <span className="font-bold text-emerald-700">US$ 59.99</span> per customer, regardless of nationality or visa type. This covers eVisa consulting, personal information review, status updates, and secure collection & delivery of your eVisa.
            </p>
            <p className="mt-1 text-slate-600">Processing time is 3 days after receiving complete documents.</p>
            <div className="bg-emerald-50 p-4 rounded-lg mt-3 border border-emerald-100">
              <ul className="space-y-2 list-none">
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✔</span>
                  <span>Fixed service fee: <span className="font-semibold">US$ 59.99</span> per applicant</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✔</span>
                  <span>No hidden charges or extra costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✔</span>
                  <span>All nationalities and visa types included</span>
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
              You can apply for up to <span className="font-bold text-emerald-700">15 visas</span> in a single application. For groups larger than 15, please contact our support team for dedicated assistance and special pricing.
            </p>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <div className="lg:col-span-2">
            <VisaFeeCalculator selectedCountry={selectedCountry} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <SupportSidebar />
            </div>
          </div>
        </div>
      )}

      {/* Accordion Section */}
      <section className="mt-16 mb-16 max-w-6xl px-4 mx-auto text-center">
        <h2 className="text-emerald-600 font-manrope text-3xl font-bold mb-4">
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