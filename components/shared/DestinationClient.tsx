"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { motion } from "framer-motion";
import { X, Search, Globe2, MapPin, ArrowRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { COUNTRIES } from "@/lib/countries";
import VisaSteps from "@/app/components/VisaSteps";
import { Badge } from "@/components/ui/badge";

const ITEMS_PER_PAGE = 8;
const regions = Array.from(new Set(COUNTRIES.map((c) => c.region).filter(Boolean))).sort();

export default function DestinationClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [countryQuery, setCountryQuery] = useState("");
  const [region, setRegion] = useState("");
  const [page, setPage] = useState(initialPage);
  const [activeFilters, setActiveFilters] = useState(0);

  // Filtered countries
  const filteredCountries = useMemo(() => {
    let list = COUNTRIES;
    if (region) list = list.filter((c) => c.region === region);
    if (countryQuery)
      list = list.filter((c) =>
        c.name.toLowerCase().includes(countryQuery.toLowerCase())
      );
    return list;
  }, [countryQuery, region]);

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const paginatedCountries = filteredCountries.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Update active filter count
  useEffect(() => {
    let count = 0;
    if (region) count++;
    if (countryQuery) count++;
    setActiveFilters(count);
  }, [region, countryQuery]);

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
    setPage(newPage);
  };

  // Reset to page 1 when filter/search changes
  useEffect(() => {
    setPage(1);
    router.push("?page=1");
  }, [countryQuery, region]);

  // --- Combobox for Country ---
  const [openCountry, setOpenCountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // --- Combobox for Region ---
  const [openRegion, setOpenRegion] = useState(false);

  // Clear all filters
  const clearFilters = () => {
    setCountryQuery("");
    setSelectedCountry(null);
    setRegion("");
  };

  return (
    <section className="w-full max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-3">
          Visa Destinations
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Start your journey by applying for a visa with Worldmaxxing Global Services assistance
        </p>
      </div>
      
      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-10">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          {/* Country Search Combobox */}
          <div className="w-full lg:w-2/5">
            <Popover open={openCountry} onOpenChange={setOpenCountry}>
              <PopoverTrigger asChild>
                <button
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-left bg-white hover:border-emerald-300 focus:border-emerald-500 flex items-center gap-2 transition-all shadow-sm"
                >
                  <Search className="w-5 h-5 text-slate-400" />
                  <span className={selectedCountry ? "text-slate-900" : "text-slate-400"}>
                    {selectedCountry || "Search destination..."}
                  </span>
                  {countryQuery && (
                    <X
                      className="ml-auto w-4 h-4 text-slate-400 hover:text-red-500 cursor-pointer"
                      onClick={e => {
                        e.stopPropagation();
                        setCountryQuery("");
                        setSelectedCountry(null);
                      }}
                    />
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 rounded-lg shadow-lg animate-in fade-in-50">
                <Command>
                  <CommandInput
                    placeholder="Type a country name..."
                    value={countryQuery}
                    onValueChange={v => {
                      setCountryQuery(v);
                      setSelectedCountry(null);
                    }}
                    className="border-none focus:ring-0"
                  />
                  <CommandList>
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup className="max-h-[300px] overflow-auto p-1">
                      {COUNTRIES
                        .filter((c) =>
                          c.name.toLowerCase().includes(countryQuery.toLowerCase())
                        )
                        .map((c) => (
                          <CommandItem
                            key={c.slug}
                            value={c.name}
                            onSelect={() => {
                              setCountryQuery(c.name);
                              setSelectedCountry(c.name);
                              setOpenCountry(false);
                            }}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors",
                              selectedCountry === c.name
                                ? "bg-emerald-50 text-emerald-700 font-medium"
                                : "hover:bg-slate-50"
                            )}
                          >
                            <div className="w-6 h-4 relative overflow-hidden rounded-sm border border-slate-200 flex-shrink-0">
                              <Image
                                src={`https://flagcdn.com/${c.code.toLowerCase()}.svg`}
                                alt={c.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            {c.name}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Region Filter */}
          <div className="w-full lg:w-1/4">
            <Popover open={openRegion} onOpenChange={setOpenRegion}>
              <PopoverTrigger asChild>
                <button
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-left bg-white hover:border-emerald-300 focus:border-emerald-500 flex items-center gap-2 transition-all shadow-sm"
                >
                  <Globe2 className="w-5 h-5 text-slate-400" />
                  <span className={region ? "text-slate-900" : "text-slate-400"}>
                    {region || "Select region"}
                  </span>
                  {region && (
                    <X
                      className="ml-auto w-4 h-4 text-slate-400 hover:text-red-500 cursor-pointer"
                      onClick={e => {
                        e.stopPropagation();
                        setRegion("");
                      }}
                    />
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0 rounded-lg shadow-lg animate-in fade-in-50">
                <Command>
                  <CommandList className="max-h-[300px] overflow-auto p-1">
                    <CommandItem
                      key="all"
                      value=""
                      onSelect={() => {
                        setRegion("");
                        setOpenRegion(false);
                      }}
                      className={cn(
                        "px-3 py-2 rounded-md cursor-pointer transition-colors",
                        !region
                          ? "bg-emerald-50 text-emerald-700 font-medium"
                          : "hover:bg-slate-50"
                      )}
                    >
                      All Regions
                    </CommandItem>
                    <CommandGroup heading="Continents">
                      {regions.map((r) => (
                        <CommandItem
                          key={r}
                          value={r}
                          onSelect={() => {
                            setRegion(r ?? "");
                            setOpenRegion(false);
                          }}
                          className={cn(
                            "px-3 py-2 rounded-md cursor-pointer transition-colors",
                            region === r
                              ? "bg-emerald-50 text-emerald-700 font-medium"
                              : "hover:bg-slate-50"
                          )}
                        >
                          {r}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Clear Filters button */}
          <div className="ml-auto">
            <Button
              variant="outline"
              onClick={clearFilters}
              disabled={activeFilters === 0}
              className={cn(
                "border-slate-200 text-slate-600",
                activeFilters > 0 ? "hover:border-red-200 hover:text-red-600" : ""
              )}
            >
              <Filter className="h-4 w-4 mr-1.5" />
              {activeFilters > 0 ? `Clear Filters (${activeFilters})` : "No Filters"}
            </Button>
          </div>
        </div>
      </div>

      {/* Results Stats */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-600">
          Showing <span className="font-medium text-emerald-700">{paginatedCountries.length}</span> of{" "}
          <span className="font-medium text-emerald-700">{filteredCountries.length}</span> destinations
        </p>
        
        {region && (
          <Badge variant="outline" className="bg-emerald-50 border-emerald-200 text-emerald-700 flex items-center gap-1">
            <Globe2 className="h-3 w-3" />
            {region}
            <button 
              onClick={() => setRegion("")}
              className="ml-1 hover:text-red-500 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        )}
      </div>
      
      {/* Country Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {paginatedCountries.map((country, index) => (
          <motion.div
            key={country.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card
              className="overflow-hidden rounded-xl hover:shadow-md transition-all duration-300 border-slate-200 h-full flex flex-col"
            >
              <Link href={`/destination/${country.slug}${page > 1 ? `?page=${page}` : ""}`} className="flex-grow">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={`/images/country/${country.slug}/${country.slug}-bg.jpg`}
                    alt={`${country.name} background`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20" />
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <div className="w-6 h-4 relative overflow-hidden rounded-sm border border-white/30 mr-2">
                      <Image
                        src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                        alt={`${country.name} Flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white font-medium text-sm drop-shadow-md">{country.name}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center gap-1 text-slate-500 text-sm mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{country.region || "Global"}</span>
                  </div>
                  
                  <div className="line-clamp-2 text-sm h-10 text-slate-600">
                    {country.description?.substring(0, 80) || `Apply for your ${country.name} visa online with our fast and secure service.`}...
                  </div>
                </CardContent>
              </Link>
              
              <CardFooter className="px-4 pb-4 pt-0">
                <Link href={`/apply?country=${country.slug}`} className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    Apply for Visa
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty state */}
      {filteredCountries.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-slate-100 p-5 rounded-full mb-4">
            <Search className="h-10 w-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-2">No destinations found</h3>
          <p className="text-slate-500 max-w-md mb-6">
            We couldn't find any destinations matching your criteria. Try adjusting your search or filters.
          </p>
          <Button onClick={clearFilters} className="bg-emerald-700 hover:bg-emerald-800">
            Clear Filters
          </Button>
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 mb-8">
          <nav className="inline-flex items-center rounded-md shadow-sm" aria-label="Pagination">
            <Button
              variant="outline"
              size="icon"
              className="rounded-r-none"
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
            </Button>
            
            {Array.from({ length: totalPages }, (_, idx) => {
              // Show current page, adjacent pages, first and last page, with ellipsis
              const pageNum = idx + 1;
              const isCurrentPage = pageNum === page;
              const showDirectly = 
                pageNum === 1 || 
                pageNum === totalPages || 
                (pageNum >= page - 1 && pageNum <= page + 1);
              
              // Show ellipsis for gaps
              if (!showDirectly) {
                if ((pageNum === 2 && page > 3) || (pageNum === totalPages - 1 && page < totalPages - 2)) {
                  return (
                    <span
                      key={`ellipsis-${pageNum}`}
                      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border ${
                    isCurrentPage 
                      ? "z-10 bg-emerald-700 text-white border-emerald-700" 
                      : "text-slate-700 bg-white border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            }).filter(Boolean)}
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-l-none"
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Button>
          </nav>
        </div>
      )}
      
      {/* Visa Steps */}
      <div className="border-t border-slate-200 pt-16 mt-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-10 text-center">
          How to Get Your eVisa
        </h2>
        <VisaSteps />
      </div>
    </section>
  );
}