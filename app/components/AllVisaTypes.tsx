"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Backpack, BriefcaseBusiness, Plane, BriefcaseMedical } from "lucide-react";
import React from "react";

type VisaType = {
  name: string;
  description: string;
  color: string;
  favorites?: { name: string; img: string }[];
  icon?: React.ElementType;
};

const visaTypes: VisaType[] = [
  {
    name: "TOURIST VISA",
    description:
      "For leisure travel, sightseeing, and short holidays. Ideal for first-time travelers who want a simple, guided application.",
    color: "#2563EB",
    favorites: [
      { name: "Kenya", img: "https://hatscripts.github.io/circle-flags/flags/ke.svg" },
      { name: "Cambodia", img: "https://hatscripts.github.io/circle-flags/flags/kh.svg" },
      { name: "Sri Lanka", img: "https://hatscripts.github.io/circle-flags/flags/lk.svg" },
    ],
    icon: Backpack
  },
  {
    name: "BUSINESS VISA",
    description:
      "For business meetings, conferences, and market visits. Get document checks and clear guidance before submission.",
    color: "#1D4ED8",
    favorites: [
      { name: "Azerbaijan", img: "https://hatscripts.github.io/circle-flags/flags/az.svg" },
      { name: "Bahrain", img: "https://hatscripts.github.io/circle-flags/flags/bh.svg" },
      { name: "India", img: "https://hatscripts.github.io/circle-flags/flags/in.svg" },
    ],
    icon: BriefcaseBusiness
  },
  {
    name: "TRANSIT VISA",
    description:
      "For short stopovers and onward travel. We help confirm entry rules and timing to avoid last‑minute surprises.",
    color: "#F59E0B",
    favorites: [
      { name: "Singapore", img: "https://hatscripts.github.io/circle-flags/flags/sg.svg" },
      { name: "Rwanda", img: "https://hatscripts.github.io/circle-flags/flags/rw.svg" },
      { name: "Tanzania", img: "https://hatscripts.github.io/circle-flags/flags/tz.svg" },
    ],
    icon: Plane
  },
  {
    name: "MEDICAL VISA",
    description:
      "For treatment abroad with supporting documents. Our review helps reduce delays for medical travel.",
    color: "#0EA5E9",
    favorites: [
      { name: "Thailand", img: "https://hatscripts.github.io/circle-flags/flags/th.svg" },
      { name: "Malaysia", img: "https://hatscripts.github.io/circle-flags/flags/my.svg" },
      { name: "UK", img: "https://hatscripts.github.io/circle-flags/flags/uk.svg" },
    ],
    icon: BriefcaseMedical
  },
];

export default function AllVisaTypes() {
  return (
    <section className="w-full bg-white pt-6 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-manrope mb-6 text-blue-700">
            All eVisa Types, One Modern Workflow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Choose the right visa type with clear summaries, trusted support, and a streamlined application flow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visaTypes.map(({ name, description, color, favorites, icon }) => (
            <Card
              key={name}
              className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Card Header with Icon */}
              <CardHeader 
                className="p-6 relative" 
                style={{ backgroundColor: color }}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-full">
                    {icon && React.createElement(icon, { size: 28, color: "#fff", strokeWidth: "1px" })}
                  </div>
                  <CardTitle className="font-bold text-white text-xl leading-tight m-0">
                    {name}
                  </CardTitle>
                </div>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {description}
                </p>

                {/* Popular Countries */}
                {favorites && (
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                      Popular Countries
                    </h4>
                    <div className="flex justify-center gap-6">
                      {favorites.map(({ name: countryName, img }) => (
                        <div
                          key={countryName}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="p-1 bg-white rounded-full shadow-md border border-slate-100 transition-transform duration-200 hover:scale-110">
                            <Image
                              src={img}
                              width={36}
                              height={36}
                              className="w-9 h-9 rounded-full object-cover"
                              alt={`${countryName} flag`}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-700">
                            {countryName}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Apply Button */}
              <CardFooter className="p-6 pt-0">
                <Link
                  href={`/apply`}
                  className="w-full"
                  passHref
                >
                  <Button
                    className="w-full py-3 font-semibold cursor-pointer text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg transform group-hover:scale-105"
                    style={{ backgroundColor: color }}
                  >
                    Start {name.toLowerCase()} application
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}