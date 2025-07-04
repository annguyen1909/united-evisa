"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
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
      "This type of visa is used for the purpose of travelling to a country. It is also the most popular visa type that we help our customers to apply for.",
    color: "#16610E",
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
      "This visa is issued to travelers transiting through a country en route elsewhere. It's short-term, and many countries waive the need for it.",
    color: "#065BB9",
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
      "Medical visa is used for travelers who want to be treated under the system of medicine of a country. It is used by just governments.",
    color: "#CB6601",
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
      "Issued for patients seeking treatment abroad, this visa helps you access world-class healthcare while ensuring compliance with local laws.",
    color: "#FED16A",
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
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#16610E]">
            All eVisa Types. One Place.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Explore and apply for all available eVisa types in one convenient platform — fast, secure, and hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visaTypes.map(({ name, description, color, favorites, icon }) => (
            <Card
              key={name}
              className="flex flex-col h-full bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Card Header with Icon */}
              <CardHeader 
                className="p-4 relative" 
                style={{ backgroundColor: color }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  {icon && React.createElement(icon, { size: 80, strokeWidth: "1px" })}
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    {icon && React.createElement(icon, { size: 24, color: "#fff", strokeWidth: "1px" })}
                  </div>
                  <CardTitle className="font-bold text-white text-xl m-0">
                    {name}
                  </CardTitle>
                </div>
              </CardHeader>
              
              {/* Card Description */}
              <CardContent className="flex-grow p-5">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {description}
                </p>
              </CardContent>

              {/* Favorite Destinations */}
              {favorites && (
                <div className="px-5 pb-4">
                  <div className="rounded-lg bg-slate-50 p-3 border border-slate-100">
                    <p className="font-semibold text-sm mb-3 text-center" style={{ color }}>
                      Popular Destinations
                    </p>

                    <div className="flex justify-center gap-4">
                      {favorites.map(({ name, img }) => (
                        <div
                          key={name}
                          className="flex flex-col items-center gap-1"
                        >
                          <div className="p-1 bg-white rounded-full shadow-sm border border-slate-100">
                            <Image
                              src={img}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full object-cover"
                              alt={`${name} flag`}
                            />
                          </div>
                          <span className="text-xs font-medium text-slate-700">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <CardFooter className="p-5 pt-2">
                <Button
                  className="w-full py-5 font-medium text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: color }}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}