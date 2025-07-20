"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 1024;
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
  }
];

export default function TopDestinationsCarousel() {
  return (
    <section className="w-full bg-white pt-12 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-manrope mb-4 text-emerald-700">
            Top Destinations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Explore the most popular countries with fast and easy eVisa access — your next adventure starts here.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: !isLargeScreen,
            }}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {destinations.map(({ name, link, image, code, tagline }) => (
                <CarouselItem
                  key={name}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={`/destination/${link}`}>
                    <Card className="overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                      {/* Image container with gradient overlay */}
                      <div className="relative h-52">
                        <Image
                          src={image}
                          alt={`${name} landscape`}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80"></div>

                        {/* Country name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <div className="flex items-center gap-2">
                            <Image
                              src={`https://flagcdn.com/${code}.svg`}
                              alt={`${name} flag`}
                              width={24}
                              height={16}
                              className="w-6 h-4 rounded shadow-sm"
                            />
                            <h3 className="font-bold text-xl">{name}</h3>
                          </div>
                          {tagline && (
                            <p className="text-sm text-white/80 mt-1">{tagline}</p>
                          )}
                        </div>
                      </div>

                      {/* Card content */}
                      <CardContent className="p-4 bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-slate-600 text-sm">
                            <MapPin className="w-4 h-4 text-emerald-600 mr-1" />
                            <span>eVisa Available</span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 p-0 h-auto"
                          >
                            <span className="text-sm font-medium">Explore</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2 top-10 bg-white/80 hover:bg-white border border-slate-200" />
              <CarouselNext className="right-2 top-10 bg-white/80 hover:bg-white border border-slate-200" />
            </div>
          </Carousel>

          <div className="mt-8 flex justify-center">
            <Link href="/destination">
              <Button
                variant="outline"
                className="group border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 rounded-full px-6"
              >
                <span>View All Destinations</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}