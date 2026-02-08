"use client";

import Link from "next/link";
import { COUNTRIES } from "@/lib/countries";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, FileText, MapPin } from "lucide-react";

interface InternalLinksProps {
  currentCountry?: string;
  pageType?: "destination" | "requirements" | "faq" | "blog";
  showRandomCountries?: boolean;
}

export default function InternalLinks({
  currentCountry,
  pageType = "destination",
  showRandomCountries = true
}: InternalLinksProps) {
  // Get related countries (exclude current country)
  const relatedCountries = COUNTRIES
    .filter(country => country.slug !== currentCountry)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  // Popular destinations for SEO
  const popularDestinations = COUNTRIES
    .filter(country => ['india', 'kenya', 'canada', 'vietnam', 'australia', 'united-kingdom', 'saudi-arabia', 'malaysia']
      .includes(country.slug))
    .filter(country => country.slug !== currentCountry);

  return (
    <div className="space-y-8">
      {/* Related Countries */}
      {showRandomCountries && (
        <Card className="border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-slate-800">Other Popular Destinations</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {relatedCountries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/destinations/${country.slug}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                    {country.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Links to Important Pages */}
      <Card className="border-blue-100">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-slate-800">Helpful Resources</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/check-requirements"
              className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                Check Visa Requirements
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                Pricing & Fees
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
            <Link
              href="/faq"
              className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                Frequently Asked Questions
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
            <Link
              href="/support"
              className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                Contact Support
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Current Country Related Links */}
      {currentCountry && (
        <Card className="border-amber-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-slate-800">
                More About {COUNTRIES.find(c => c.slug === currentCountry)?.name}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pageType !== "destination" && (
                <Link
                  href={`/destinations/${currentCountry}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700">
                    Destination Guide
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600" />
                </Link>
              )}
              {pageType !== "requirements" && (
                <Link
                  href={`/requirements-posts/${currentCountry}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700">
                    Visa Requirements
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600" />
                </Link>
              )}
              <Link
                href={`/apply?country=${currentCountry}`}
                className="flex items-center justify-between p-3 rounded-lg border border-blue-200 bg-blue-50 hover:border-blue-300 hover:bg-blue-100 transition-all group"
              >
                <span className="text-sm font-medium text-blue-700 group-hover:text-blue-800">
                  Apply for Visa
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600 group-hover:text-blue-700" />
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Popular Destinations */}
      {popularDestinations.length > 0 && (
        <Card className="border-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-800">Most Popular Destinations</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {popularDestinations.slice(0, 8).map((country) => (
                <Link
                  key={country.slug}
                  href={`/destinations/${country.slug}`}
                  className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-purple-700">
                    {country.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
