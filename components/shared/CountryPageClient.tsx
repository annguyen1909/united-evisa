"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Cloud,
  Earth,
  CircleDollarSign,
  Timer,
  Dock,
  Send,
  Clock,
  ArrowRight,
  PlaneTakeoff,
  Check,
  Info,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
// Only import for India
import { FeeModal } from "@/components/shared/IndiaFee";
import {
  indiaVisaFeeTable,
  calculateIndiaVisaFee,
} from "@/lib/countries/india"; // Import the fee table

type VisaType = {
  name: string;
  type: string;
  entry?: string;
  visaDuration?: number;
  allowedNationalities?: string[];
  [key: string]: any;
};

const tabColors = {
  tourist: "#16610E", // green
  business: "#065BB9", // blue
  medical: "#FED16A", // yellow
  transit: "#CB6601", // amber
  student: "#8B5CF6", // purple
  work: "#EC4899", // pink
  default: "#475569", // slate
};

const visaSteps = [
  {
    name: "1",
    title: "Apply Online",
    description: "Submit your eVisa application on our website",
    image: "/images/steps/step1.png",
  },
  {
    name: "2",
    title: "Pay Online",
    description: "Secured payment system that accepts Cards and PayPal",
    image: "/images/steps/step2.png",
  },
  {
    name: "3",
    title: "Submit Documents",
    description: "Upload required documents via our secure portal",
    image: "/images/steps/step3.png",
  },
  {
    name: "4",
    title: "Get Your eTA",
    description: "eVisa will be delivered to your email",
    image: "/images/steps/step3.png",
  },
];

export default function CountryPageClient({ country }: { country: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisaType, setSelectedVisaType] = useState<string | null>(null);
  const router = useRouter();

  const handleOpenModal = (visaType: string) => {
    setSelectedVisaType(visaType);
    setIsModalOpen(true);
  };

  const isIndia = country.slug === "india";

  const getTabColor = (visaType: string) => {
    const type = visaType.toLowerCase();
    if (type.includes("tourist")) return tabColors.tourist;
    if (type.includes("business")) return tabColors.business;
    if (type.includes("medical")) return tabColors.medical;
    if (type.includes("transit")) return tabColors.transit;
    if (type.includes("student")) return tabColors.student;
    if (type.includes("work")) return tabColors.work;
    return tabColors.default;
  };

  return (
    <main className="flex flex-col items-center bg-white">
      {/* Hero section with country image */}
      <section className="w-full relative bg-cover bg-center py-20 md:py-28 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/country/${country.slug}/${country.slug}-bg.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/70" />

        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <Badge className="inline-flex bg-white/20 backdrop-blur-sm text-white border-none px-4 py-1.5 h-auto text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              Destination
            </Badge>

            <div className="hidden md:flex h-6 w-px bg-white/30" />

            <div className="flex items-center">
              <Image
                src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                alt={`${country.name} Flag`}
                width={32}
                height={24}
                className="mr-3 border border-white/20 shadow-sm"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            {country.name}
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mb-8 text-white/80">
            {country.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => router.push(`/apply?country=${country.slug}`)}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Apply for eVisa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
              onClick={() =>
                document
                  .getElementById("visa-type")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Visa Types
            </Button>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="w-full bg-white shadow-md relative -mt-10 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-slate-200">
            <div className="flex flex-col items-center py-6 px-4">
              <div className="p-3 bg-blue-100 rounded-full mb-3">
                <Clock className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">
                Processing Time
              </h3>
              <p className="text-slate-600">
                {country.processingTime?.superUrgent
                  ? `As soon as ${country.processingTime.superUrgent}`
                  : country.processingTime?.normal
                  ? `As soon as ${country.processingTime.normal}`
                  : "Varies by application"}
              </p>
            </div>
            <div className="flex flex-col items-center py-6 px-4">
              <div className="p-3 bg-emerald-100 rounded-full mb-3">
                <Check className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">
                Easy Application
              </h3>
              <p className="text-slate-600">3 simple steps</p>
            </div>
            <div className="flex flex-col items-center py-6 px-4">
              <div className="p-3 bg-amber-100 rounded-full mb-3">
                <Send className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-lg text-slate-800">Delivery</h3>
              <p className="text-slate-600">Direct to your email</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome message section */}
      <section id="welcome-message" className="w-full bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Welcome to {country.name}
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                {country.welcomeMessage}
              </p>

              <div className="grid grid-cols-1 gap-5">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Cloud className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">Climate</p>
                    <p className="text-slate-600">{country.info.climate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Earth className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">
                      Language
                    </p>
                    <p className="text-slate-600">{country.info.language}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <CircleDollarSign className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold mb-1">
                      Currency
                    </p>
                    <p className="text-slate-600">{country.info.currency}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={country.welcomeImgUrl || "/images/default-welcome.jpg"}
                  alt={`${country.name} Welcome`}
                  width={600}
                  height={400}
                  className="w-full h-128 object-cover rounded-xl"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Image
                    src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                    alt={`${country.name} Flag`}
                    width={24}
                    height={16}
                    className="inline-block mr-2"
                  />
                  <span className="text-sm font-medium text-slate-800">
                    {country.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types Section */}
      <section id="visa-type" className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Visa Types for {country.name}
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Choose the visa type that best fits your travel purpose
            </p>
          </div>

          <Tabs defaultValue={country.visaTypes[0]?.name} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1 bg-slate-100/80 w-full max-w-5xl mx-auto">
              {country.visaTypes.map((tab: VisaType) => {
                const color = getTabColor(tab.type);
                return (
                  <TabsTrigger
                    key={tab.name}
                    value={tab.name}
                    style={
                      {
                        "--tab-color": color,
                        "--tab-bg-color": `${color}20`,
                      } as React.CSSProperties
                    }
                    className="px-5 py-2 rounded-full data-[state=active]:bg-[var(--tab-bg-color)] data-[state=active]:text-[var(--tab-color)] data-[state=active]:font-medium data-[state=active]:shadow-sm"
                  >
                    <span>{tab.type}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <div className="mt-8">
              {country.visaTypes.map((visa: VisaType) => (
                <TabsContent
                  key={visa.name}
                  value={visa.name}
                  className="animate-in fade-in-50"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left Column - Visa Info */}
                    <div className="lg:col-span-3 space-y-6">
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">
                          {country.name} {visa.type} Visa
                        </h3>

                        <p className="text-slate-600 mb-6">
                          The {country.name} government requires{" "}
                          {visa.allowedNationalities?.length ?? 0} nationalities
                          to get a {visa.type} to enter the country for Tourism.
                          Now you can apply on our website easily and receive it
                          by email.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-500">Entry Type</p>
                            <p className="font-medium text-slate-800">
                              {visa.entry || "Single Entry"}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-500">
                              Stay Duration
                            </p>
                            <p className="font-medium text-slate-800">
                              {visa.visaDuration
                                ? visa.visaDuration + " days"
                                : "Not specified"}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-500">
                              Processing Time
                            </p>
                            <p className="font-medium text-slate-800">
                              {visa.expectedProcessingTime || "24-72 hours"}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-500">
                              Government Fee
                            </p>
                            <p className="font-medium text-slate-800">
                              {isIndia ? (
                                <button
                                  className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                                  onClick={() => handleOpenModal(visa.name)}
                                >
                                  See Details
                                </button>
                              ) : (
                                <span>US$ {visa.govFee?.toFixed(2)}</span>
                              )}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <p className="text-sm text-slate-500">
                              Service Fee
                            </p>
                            <div className="flex items-center">
                              <p className="font-medium text-slate-800">
                                US$ 59.99
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-emerald-100 rounded-full">
                            <Info className="h-5 w-5 text-emerald-700" />
                          </div>
                          <h3 className="text-xl font-bold text-emerald-800">
                            Visa Service Package
                          </h3>
                        </div>

                        <p className="text-emerald-700 mb-6">
                          Our service helps travelers obtain travel documents,
                          simplifying the process so that you can better prepare
                          for your trip. The package includes:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Entry visa for a short period",
                            "Application form filling assistance",
                            "Travel insurance consultant",
                            "Portal for real-time visa updates",
                            "24/7 online support team for any issues",
                            "Urgent case support, with added fees",
                          ].map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span className="text-emerald-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Apply Form */}
                    <div className="lg:col-span-2">
                      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 sticky top-24">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">
                          Ready to Apply?
                        </h3>

                        <p className="text-slate-600 mb-6">
                          Follow these simple steps to get your {visa.type} visa
                          for {country.name}:
                        </p>

                        <div className="space-y-4 mb-6">
                          {visaSteps.map((step, index) => (
                            <div
                              key={step.name}
                              className="flex items-start gap-3"
                            >
                              <div
                                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                                style={{
                                  backgroundColor: getTabColor(visa.type),
                                }}
                              >
                                {step.name}
                              </div>
                              <div>
                                <h4 className="font-medium text-slate-800">
                                  {step.title}
                                </h4>
                                <p className="text-sm text-slate-600">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <Button
                          onClick={() =>
                            router.push(
                              `/apply?country=${
                                country.slug
                              }&name=${encodeURIComponent(visa.name)}`
                            )
                          }
                          className="w-full py-6"
                          style={{ backgroundColor: getTabColor(visa.type) }}
                        >
                          Apply for {visa.type}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {isIndia && (
        <FeeModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          visaType={selectedVisaType ?? ""}
          feeTable={indiaVisaFeeTable}
        />
      )}
    </main>
  );
}
