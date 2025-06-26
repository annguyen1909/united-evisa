"use client";

import { useState } from "react";
import CountrySearch from "@/components/shared/CountrySearch";
import { COUNTRIES } from "@/lib/countries";
import CustomAccordion from "@/components/shared/CustomAccordion";
import { Button } from "@/components/ui/button";
import FeeGuarantee from "../components/FeeGuarantee";
import CustomerSupport from "../components/CustomerSupport";
import { Country } from "@/lib/countries/type"; // Use your type definition

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
          className="w-16 h-10 object-contain"
        />
        <p className="font-medium">{country.name}</p>
      </>
    ),
    content: (
      <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 p-12 px-24 text-base sm:text-lg font-manrope text-gray-800 overflow-hidden transition-all duration-500">
        <div className="relative z-10 space-y-6">
          <div>
            <p className="font-semibold text-2xl mb-1 text-[#16610E]">
              Government & Admin Fee to {country.name}
            </p>
            <p>
              The Government & Admin Fee is an obligated fee, which is the
              amount that the applicant has to pay for the Immigration
              Department to process eVisa.
            </p>
          </div>
          {country.etaInfo?.visaTypes?.length ? (
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-primary/20 rounded-lg">
                <thead className="bg-primary/10 text-primary">
                  <tr>
                    <th className="px-4 py-2 text-left">Visa Type</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Duration</th>
                    <th className="px-4 py-2 text-left">Gov. Fee (USD)</th>
                    <th className="px-4 py-2 text-left">Service Fee (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {country.etaInfo.visaTypes.map((visa) => (
                    <tr key={visa.name} className="even:bg-primary/5">
                      <td className="px-4 py-2 font-semibold">{visa.type}</td>
                      <td className="px-4 py-2">{visa.description || "-"}</td>
                      <td className="px-4 py-2">{visa.visaDuration || "-"}</td>
                      <td className="px-4 py-2">
                        {visa.govFee !== undefined
                          ? `US $${visa.govFee.toFixed(2)}`
                          : "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {typeof country.etaInfo?.serviceFee === "number"
                          ? `US $${country.etaInfo.serviceFee.toFixed(2)}`
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-4 text-muted-foreground">
              No visa types available.
            </p>
          )}

          <div>
            <p className="font-semibold mb-1 text-xl text-[#16610E]">
              Service Overview
            </p>
            <p>
              This fee covers eVisa consulting, personal info checking, status
              updates, collection & delivery of eVisa.
            </p>
            <p>Processing time is 3 days after receiving complete documents.</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>1 person – US$ 39.00</li>
              <li>2 people – US$ 37.00</li>
              <li>3–5 people – US$ 35.00</li>
              <li>6–9 people – US$ 34.00</li>
              <li>10+ people – US$ 32.00</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-1 text-xl text-[#16610E]">
              Tour & Group Support
            </p>
            <p>
              Travel agents can contact us for discounted group tour visa
              pricing.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1 text-xl text-[#16610E]">
              Emergency Support
            </p>
            <p>Need a visa urgently?</p>
            <ul className="mt-1 list-disc list-inside">
              <li>Urgent (24h) – Plus US$ 79.00/person</li>
              <li>Super Urgent (5h) – Plus US$ 99.00/person</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <Button
              className="w-1/3 bg-[#16610E] text-white text-xl font-semibold rounded-lg py-6 mt-4 hover:bg-[#16610E]/90 transition"
              onClick={() => alert(`Apply Now for ${country.name}`)}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    ),
  }));
  return (
    <main className="w-full mx-auto">
      {/* Hero Section */}
      <section id="country-hero" className="w-full flex justify-center mb-10">
        <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('/images/country/kenya/kenya-bg.jpg')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-manrope text-white drop-shadow-lg tracking-tight">
              Pricing
            </h1>
            <p className="mt-2 text-lg text-white/90 font-medium drop-shadow-sm hidden sm:block mx-auto max-w-2xl">
              Find out how much you pay your fees
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="text-center max-w-2xl rounded-lg mx-auto p-8 pb-6 mt-12">
        <h1 className="text-2xl text-[#16610E] font-manrope sm:text-4xl md:text-4xl font-bold mb-6">
          Check Your Fees Here
        </h1>
        <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
          <CountrySearch
            value={searchCountry}
            onChange={(countryName) => setSearchCountry(countryName)}
            placeholder="Enter country name"
          />
          <button
            onClick={handleCheckNow}
            className="bg-[#16610E] text-white px-6 py-1.5 rounded-md hover:bg-[#16610E]/90 transition"
          >
            Check
          </button>
        </div>
      </section>

      {/* Fee Display */}
      {showFee && selectedCountry && (
        <section className="max-w-2xl mx-auto my-8">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 text-base sm:text-lg font-manrope text-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={`https://flagcdn.com/${selectedCountry.code.toLowerCase()}.svg`}
                alt={selectedCountry.name}
                className="w-12 h-8 object-contain"
              />
              <h2 className="text-2xl font-bold text-[#16610E]">
                {selectedCountry.name}
              </h2>
            </div>
            <div>
              <p className="font-semibold text-xl mb-1 text-[#16610E]">
                Government & Admin Fee
              </p>
              <p>
                The Government & Admin Fee is an obligated fee, which is the
                amount that the applicant has to pay for the Immigration
                Department to process eVisa.
              </p>
            </div>
            {selectedCountry.etaInfo?.visaTypes?.length ? (
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border border-primary/20 rounded-lg">
                  <thead className="bg-primary/10 text-primary">
                    <tr>
                      <th className="px-4 py-2 text-left">Visa Type</th>
                      <th className="px-4 py-2 text-left">Description</th>
                      <th className="px-4 py-2 text-left">Duration</th>
                      <th className="px-4 py-2 text-left">Gov. Fee (USD)</th>
                      <th className="px-4 py-2 text-left">Service Fee (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCountry.etaInfo.visaTypes.map((visa) => (
                      <tr key={visa.name} className="even:bg-primary/5">
                        <td className="px-4 py-2 font-semibold">{visa.type}</td>
                        <td className="px-4 py-2">{visa.description || "-"}</td>
                        <td className="px-4 py-2">
                          {visa.visaDuration || "-"}
                        </td>
                        <td className="px-4 py-2">
                          {visa.govFee !== undefined
                            ? `US $${visa.govFee.toFixed(2)}`
                            : "N/A"}
                        </td>
                        <td className="px-4 py-2">
                          {selectedCountry.etaInfo?.serviceFee !== undefined
                            ? `US $${selectedCountry.etaInfo.serviceFee.toFixed(
                                2
                              )}`
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="mt-4 text-muted-foreground">
                No visa types available.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Accordion Section */}
      <section className="mt-4 max-w-7xl max-md:px-2 p-4 mx-auto text-center">
        <h2 className="text-[#16610E] font-manrope text-4xl font-bold mb-6">
          Comprehensive Visa Fee Information
        </h2>
        <CustomAccordion items={accordionItems} />
      </section>

      <CustomerSupport />
      <FeeGuarantee />
    </main>
  );
}
