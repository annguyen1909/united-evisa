"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Sri Lanka",
    link: "sri-lanka",
    image: "/images/country/sri-lanka/sri-lanka-bg.jpg",
    code: 'lk',
    tagline: "Pearl of the Indian Ocean"
  },
  {
    name: "Vietnam",
    link: "vietnam",
    image: "/images/country/vietnam/vietnam-bg.jpg",
    code: 'vn',
    tagline: "Timeless Charm"
  },
  {
    name: "Kenya",
    link: "kenya",
    image: "/images/country/kenya/kenya-bg.jpg",
    code: 'ke',
    tagline: "Magical Wildlife Safaris"
  },
  {
    name: "Malaysia",
    link: "malaysia",
    image: "/images/country/malaysia/malaysia-bg.jpg",
    code: 'my',
    tagline: "Truly Asia"
  },
  {
    name: "Cambodia",
    link: "cambodia",
    image: "/images/country/cambodia/cambodia-bg.jpg",
    code: 'kh',
    tagline: "Kingdom of Wonder"
  },
  {
    name: "Tanzania",
    link: "tanzania",
    image: "/images/country/tanzania/tanzania-bg.jpg",
    code: 'tz',
    tagline: "Land of Serenity"
  }
];

export default function TopDestinationsCarousel() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-white pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Trending destinations
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold font-manrope text-blue-800">
            Discover where travelers are heading next
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Explore top destinations with clear requirements and fast eVisa options.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map(({ name, link, image, code, tagline }) => (
            <Link key={name} href={`/destinations/${link}`} className="group">
              <Card className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative h-56">
                  <Image
                    src={image}
                    alt={`${name} landscape`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://flagcdn.com/${code}.svg`}
                        alt={`${name} flag`}
                        width={28}
                        height={20}
                        className="w-7 h-5 rounded shadow-sm"
                      />
                      <h3 className="text-xl font-semibold">{name}</h3>
                    </div>
                    {tagline && <p className="text-sm text-white/80 mt-1">{tagline}</p>}
                  </div>
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    eVisa eligible
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/destinations">
            <Button
              variant="outline"
              className="group border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 rounded-full px-6"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}