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
import { indiaVisaFeeTable } from "@/lib/countries/india";
import { uaeVisaFeeTable } from "@/lib/countries/uae";
import { getNationalityByCode } from "@/lib/nationalities";
import { Search, ArrowRight, Globe, DollarSign, Clock, Users, CheckCircle, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showFee, setShowFee] = useState(false);

  const pricingHighlights = [
    {
      title: "Government fee",
      description: "Varies by destination and visa type.",
    },
    {
      title: "Service fee",
      description: "Fixed US$ 59.99 per applicant.",
    },
    {
      title: "Group size",
      description: "Up to 15 travelers in one application.",
    },
  ];

  const pricingFaqs = [
    {
      question: "Why do government fees vary by country?",
      answer:
        "Each immigration authority sets its own fees based on visa type, entry length, and policy changes. Fees can change without notice.",
    },
    {
      question: "Is the service fee refundable?",
      answer:
        "Service fees cover application review and support. Refunds depend on the policy shown at checkout and the stage of your application.",
    },
    {
      question: "Do children pay the same fee?",
      answer:
        "Most countries charge the same government fee for each traveler. The service fee is charged per applicant.",
    },
    {
      question: "Can I apply for multiple travelers together?",
      answer:
        "Yes. You can include up to 15 travelers in one application. For larger groups, contact support.",
    },
  ];

  const formatUsd = (value: number | null | undefined) =>
    typeof value === "number" ? `US$ ${value.toFixed(2)}` : "Not available";

  const getFeeRange = (
    feeKey:
      | "30_days_tourist"
      | "1_year_tourist"
      | "5_years_tourist"
      | "1_year_business"
      | "other_visa"
  ) => {
    const values = indiaVisaFeeTable
      .map((group) => group.govFee[feeKey])
      .filter((fee): fee is number => typeof fee === "number");

    if (!values.length) return "Not available";
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? `US$ ${min.toFixed(2)}` : `US$ ${min.toFixed(2)} - US$ ${max.toFixed(2)}`;
  };

  const getUaeFeeRange = (
    feeKey:
      | "30_days_single"
      | "30_days_multiple"
      | "60_days_single"
      | "60_days_multiple"
  ) => {
    const values = uaeVisaFeeTable
      .map((group) => group.govFee[feeKey])
      .filter((fee): fee is number => typeof fee === "number");

    if (!values.length) return "Not available";
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? `US$ ${min.toFixed(2)}` : `US$ ${min.toFixed(2)} - US$ ${max.toFixed(2)}`;
  };

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
      <div className="flex items-center gap-4">
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={country.name}
          className="w-10 h-7 object-contain shadow-sm rounded"
        />
        <div className="text-left">
          <p className="font-semibold text-slate-800">{country.name}</p>
          <p className="text-xs text-slate-500">Government + admin fees</p>
        </div>
      </div>
    ),
    content: (
      <div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 text-base sm:text-lg font-manrope text-slate-700">
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-semibold text-xl mb-2 text-blue-700 flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Government & Admin Fee to {country.name}
              </h3>
              <p className="text-slate-600 text-sm">
                Government fees are set by immigration authorities and may change without notice.
              </p>
            </div>
            <Button
              className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700"
              onClick={() => alert(`Apply Now for ${country.name}`)}
            >
              Apply for {country.name}
            </Button>
          </div>

          {country.slug === "india" ? (
            <div className="space-y-6 mt-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-amber-900">
                India eVisa government fees vary by applicant nationality. The table below shows
                official fee ranges and group-level breakdown so you can verify costs before checkout.
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Visa Type</th>
                      <th className="px-6 py-3 text-left font-semibold">Entry / Validity</th>
                      <th className="px-6 py-3 text-left font-semibold">Gov. Fee Range (USD)</th>
                      <th className="px-6 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist eVisa (30 days)</td>
                      <td className="px-6 py-4">Double entry / 30 days</td>
                      <td className="px-6 py-4 font-semibold">{getFeeRange("30_days_tourist")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist eVisa (1 year)</td>
                      <td className="px-6 py-4">Multiple entries / 1 year</td>
                      <td className="px-6 py-4 font-semibold">{getFeeRange("1_year_tourist")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist eVisa (5 years)</td>
                      <td className="px-6 py-4">Multiple entries / 5 years</td>
                      <td className="px-6 py-4 font-semibold">{getFeeRange("5_years_tourist")}</td>
                      <td className="px-6 py-4">Not applicable for Sri Lanka and Canada.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">Business eVisa (1 year)</td>
                      <td className="px-6 py-4">Multiple entries / 1 year</td>
                      <td className="px-6 py-4 font-semibold">{getFeeRange("1_year_business")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-slate-800">
                        Medical / Ayush / Conference / Student eVisa
                      </td>
                      <td className="px-6 py-4">Type-specific entry and validity</td>
                      <td className="px-6 py-4 font-semibold">{getFeeRange("other_visa")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Nationality Group</th>
                      <th className="px-6 py-3 text-left font-semibold">30d Tourist</th>
                      <th className="px-6 py-3 text-left font-semibold">1y Tourist</th>
                      <th className="px-6 py-3 text-left font-semibold">5y Tourist</th>
                      <th className="px-6 py-3 text-left font-semibold">1y Business</th>
                      <th className="px-6 py-3 text-left font-semibold">Other eVisa</th>
                      <th className="px-6 py-3 text-left font-semibold">Countries in group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {indiaVisaFeeTable.map((group, index) => {
                      const countryNames = group.countries
                        .map((code) => getNationalityByCode(code)?.name || code)
                        .join(", ");

                      return (
                        <tr key={group.name} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-6 py-4 font-medium text-slate-800">{group.name}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["30_days_tourist"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["1_year_tourist"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["5_years_tourist"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["1_year_business"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee.other_visa)}</td>
                          <td className="px-6 py-4 text-slate-600 min-w-[320px]">{countryNames}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : country.slug === "uae" ? (
            <div className="space-y-6 mt-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-sm text-amber-900">
                UAE eVisa government fees vary by applicant nationality. This table shows fee
                ranges by visa category and the full nationality-group matrix used in checkout.
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Visa Type</th>
                      <th className="px-6 py-3 text-left font-semibold">Entry / Validity</th>
                      <th className="px-6 py-3 text-left font-semibold">Gov. Fee Range (USD)</th>
                      <th className="px-6 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist Visa (30 days, Single Entry)</td>
                      <td className="px-6 py-4">Single entry / 30 days</td>
                      <td className="px-6 py-4 font-semibold">{getUaeFeeRange("30_days_single")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist Visa (30 days, Multiple Entry)</td>
                      <td className="px-6 py-4">Multiple entries / 30 days</td>
                      <td className="px-6 py-4 font-semibold">{getUaeFeeRange("30_days_multiple")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist Visa (60 days, Single Entry)</td>
                      <td className="px-6 py-4">Single entry / 60 days</td>
                      <td className="px-6 py-4 font-semibold">{getUaeFeeRange("60_days_single")}</td>
                      <td className="px-6 py-4">Nationality-based government fee.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-800">Tourist Visa (60 days, Multiple Entry)</td>
                      <td className="px-6 py-4">Multiple entries / 60 days</td>
                      <td className="px-6 py-4 font-semibold">{getUaeFeeRange("60_days_multiple")}</td>
                      <td className="px-6 py-4">Includes higher-fee groups and surcharge groups.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Nationality Group</th>
                      <th className="px-6 py-3 text-left font-semibold">30d Single</th>
                      <th className="px-6 py-3 text-left font-semibold">30d Multiple</th>
                      <th className="px-6 py-3 text-left font-semibold">60d Single</th>
                      <th className="px-6 py-3 text-left font-semibold">60d Multiple</th>
                      <th className="px-6 py-3 text-left font-semibold">Countries in group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {uaeVisaFeeTable.map((group, index) => {
                      const countryNames = group.countries
                        .map((code) => getNationalityByCode(code)?.name || code)
                        .join(", ");

                      return (
                        <tr key={group.name} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-6 py-4 font-medium text-slate-800">{group.name}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["30_days_single"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["30_days_multiple"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["60_days_single"])}</td>
                          <td className="px-6 py-4">{formatUsd(group.govFee["60_days_multiple"])}</td>
                          <td className="px-6 py-4 text-slate-600 min-w-[320px]">{countryNames}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : country.visaTypes?.length ? (
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-slate-50 text-slate-600">
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
                      <td className="px-6 py-4 font-medium text-slate-800">{visa.type}</td>
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
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-lg text-slate-900 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Service Overview
                </h3>
                <p className="text-slate-600">
                  Our service fee is a fixed <span className="font-bold text-blue-700">US$ 59.99</span> per customer, regardless of nationality or visa type.
                </p>
                <p className="mt-1 text-slate-600">Processing time is 3 working days after receiving complete documents.</p>
              </div>
              <div className="hidden md:block rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700 font-semibold">
                Fixed service fee
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">US$ 59.99 per applicant</p>
                <p className="text-xs text-slate-600 mt-1">Covers review, updates, and secure delivery.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">No hidden charges</p>
                <p className="text-xs text-slate-600 mt-1">All fees are shown before submission.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">All visa types</p>
                <p className="text-xs text-slate-600 mt-1">Service fee applies across destinations.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-lg text-slate-900 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Tour & Group Support
                </h3>
                <p className="text-slate-600">
                  You can apply for up to <span className="font-bold text-blue-700">15 visas</span> in a single application.
                </p>
                <p className="text-slate-600 mt-1">
                  For groups larger than 15, contact support for dedicated assistance and pricing.
                </p>
              </div>
              <div className="hidden md:block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 font-semibold">
                Group assistance
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-2">Up to 15 applicants</span>
              <span className="rounded-full bg-slate-100 px-3 py-2">Dedicated support for groups</span>
              <span className="rounded-full bg-slate-100 px-3 py-2">Custom pricing on request</span>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <Button
              className="px-8 bg-blue-600 text-white text-base font-semibold rounded-lg py-5 mt-4 hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm"
              onClick={() => alert(`Apply Now for ${country.name}`)}
            >
              Apply for {country.name} eVisa <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <main className="w-full mx-auto">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white relative">
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Transparent pricing</p>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Visa fees, clearly explained
              </h1>
              <p className="text-slate-200 text-lg">
                Government fees depend on destination and visa type. Our service fee is fixed
                and includes document review, updates, and secure delivery.
              </p>
              <p className="text-sm text-slate-300 max-w-2xl">
                United eVisa Services pricing covers official eVisa fees, processing timelines,
                and support so you can plan your total visa cost upfront.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-200/90">
                {pricingHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-full bg-white/10 px-4 py-2"
                  >
                    <span className="font-semibold">{item.title}:</span> {item.description}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-lg border border-blue-100">
              <h2 className="text-xl font-semibold mb-4">Check your visa fees</h2>
              <p className="text-sm text-slate-600 mb-6">
                Select a destination to see government fees and visa options.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <CountrySearch
                  value={searchCountry}
                  onChange={(countryName) => setSearchCountry(countryName)}
                  placeholder="Enter country name"
                />
                <button
                  onClick={handleCheckNow}
                  className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-amber-600 transition shadow-sm flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center"
                >
                  Check Fees <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Fixed service fee</p>
                  <p>US$ 59.99 per applicant</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Processing</p>
                  <p>Typical 3 working days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-3xl border border-blue-100 bg-white p-6">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Search className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Choose destination</h3>
            <p className="text-sm text-slate-600">
              Pick a country to see the government fee and available visa types.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-6">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Review fees</h3>
            <p className="text-sm text-slate-600">
              Government fees vary; our service fee is fixed for every applicant.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-6">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Submit application</h3>
            <p className="text-sm text-slate-600">
              We review documents and keep you updated until your eVisa is issued.
            </p>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-6">
            <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <CheckCircle className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">4. Receive eVisa</h3>
            <p className="text-sm text-slate-600">
              Get your approved eVisa delivered securely via email within 3 working days.
            </p>
          </div>
        </div>
      </section>

      {/* Why Fees Differ */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <div className="rounded-3xl border border-blue-100 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Why fees differ by country</h2>
          <p className="text-slate-600 text-sm mb-4">
            Government fees are set by each destination and can vary by visa type, entry length, and policy changes.
            Our service fee is fixed, so you always know that part upfront.
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
            <li>Different immigration policies and processing costs</li>
            <li>Single vs multiple entry visa categories</li>
            <li>Seasonal adjustments or policy updates</li>
          </ul>
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
      <section className="mt-16 mb-16 max-w-6xl px-4 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-slate-900 text-3xl font-semibold mb-3">
            Detailed visa fees by country
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Select a destination below to view government fees and visa options.
          </p>
        </div>
        <div className="rounded-3xl border border-blue-100 bg-white p-6">
          <CustomAccordion items={accordionItems} />
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="rounded-3xl border border-blue-100 bg-white p-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Pricing FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="max-w-6xl mx-auto px-4 pb-6">
        <div className="rounded-3xl border border-blue-100 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              Transparent fees, no hidden charges
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              Secure payment and data protection
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              Typical processing in 3 working days
            </div>
          </div>
        </div>
      </section>

      <CustomerSupport />
      <FeeGuarantee />
    </main>
  );
}