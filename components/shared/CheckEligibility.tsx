"use client";

import * as React from "react";
import { Check, ChevronsDown, Search, Globe, ChevronRight } from "lucide-react";
import { COUNTRIES } from '@/lib/countries';
import { NATIONALITIES } from '@/lib/nationalities';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Transform countries into ComboBox format
const countryOptions = COUNTRIES.map((country) => ({
  value: country.code.toLowerCase(),
  label: country.name,
  flag: `https://flagcdn.com/${country.code.toLowerCase()}.svg`
}));

const nationalityOptions = NATIONALITIES.map((n) => ({
  value: n.code.toLowerCase(),
  label: n.name,
  flag: `https://flagcdn.com/${n.code.toLowerCase()}.svg`
}));

// Reusable ComboBox component
function ComboBox({
  label,
  options,
  value,
  onChange,
  placeholder,
  variant,
  icon,
}: {
  label: string;
  options: { value: string; label: string; flag?: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "left" | "right";
  icon?: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((opt) => opt.value === value);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  
  const variantClasses =
    variant === "left"
      ? "rounded-l-xl rounded-r-none max-md:rounded-xl"
      : variant === "right"
        ? "rounded-none border-l-0 max-md:rounded-xl max-md:border-l max-md:mt-4"
        : "rounded-xl";

  return (
    <div className="w-full md:w-auto md:flex-1">
      <label className="block mb-1.5 font-medium text-sm text-slate-700">{label}</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between text-slate-800 border-slate-300 bg-white hover:bg-slate-50",
              "h-[50px] px-4 transition-all shadow-sm",
              variantClasses
            )}
          >
            <div className="flex items-center gap-2 truncate">
              {icon && <div className="text-slate-400 mr-1">{icon}</div>}
              
              {selected && selected.flag && (
                <div className="h-4 w-6 overflow-hidden rounded-sm mr-1.5 flex-shrink-0">
                  <img 
                    src={selected.flag} 
                    alt="" 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              
              <span className="truncate">
                {selected ? selected.label : placeholder || `Select ${label.toLowerCase()}...`}
              </span>
            </div>
            <ChevronsDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0 shadow-lg border-slate-200">
          <Command>
            <div className="flex items-center border-b px-3">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <CommandInput
                placeholder={`Search ${label.toLowerCase()}...`}
                onFocus={() => inputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })}
                className="h-9 border-0 focus:ring-0"
              />
            </div>
            <CommandList className="max-h-[300px]">
              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {options.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.label.toLowerCase()}
                    onSelect={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5"
                  >
                    {opt.flag && (
                      <div className="h-4 w-6 overflow-hidden rounded-sm flex-shrink-0">
                        <img 
                          src={opt.flag} 
                          alt="" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <span className="flex-1 truncate">{opt.label}</span>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4 text-emerald-600",
                        value === opt.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Main component
export default function CheckEligibility() {
  const [nationality, setNationality] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const onCheck = async () => {
    if (!nationality || !destination) {
      alert("Please select both nationality and destination.");
      return;
    }
    
    setIsLoading(true);
    
    const destinationCountry = COUNTRIES.find(
      (c) => c.code.toLowerCase() === destination
    );

    if (!destinationCountry) {
      alert("Destination country not found.");
      setIsLoading(false);
      return;
    }

    const destinationSlug = destinationCountry.slug;

    try {
      // Import the selected destination's data file
      const destinationModule = await import(`@/lib/countries/${destinationSlug}`);
      const allowedNationalities: string[] = destinationModule.default.visaTypes.map(
        (visaType: any) => visaType.allowedNationalities
      );

      const nationalityName = nationalityOptions.find(
        (n) => n.value === nationality.toLowerCase()
      )?.label;

      if (!nationalityName) {
        alert("Could not find nationality name.");
        setIsLoading(false);
        return;
      }

      router.push(`/check-requirements?n=${nationality}&d=${destination}`);
    } catch (error) {
      console.error("Failed to load destination data:", error);
      alert("An error occurred while checking eligibility.");
      setIsLoading(false);
    }
  };


  return (
    <section className="w-full max-w-4xl mx-auto pt-0 px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 backdrop-blur-sm">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 text-center">
          Check Your Visa Eligibility
        </h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await onCheck();
          }}
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-end justify-center"
        >
          <div className="flex flex-col md:flex-row items-end space-y-4 md:space-y-0 gap-0 w-full">
            <ComboBox
              label="Your Nationality"
              options={nationalityOptions}
              value={nationality}
              onChange={setNationality}
              placeholder="Select nationality"
              variant="left"
              icon={<Globe className="h-4 w-4" />}
            />
            <ComboBox
              label="Your Destination"
              options={countryOptions}
              value={destination}
              onChange={setDestination}
              placeholder="Select destination"
              variant="right"
              icon={<Globe className="h-4 w-4" />}
            />
            <div className="w-full md:w-auto md:ml-0 max-md:mt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full md:w-auto md:min-w-[130px] h-[50px] text-base font-medium
                  bg-emerald-700 hover:bg-emerald-800 text-white rounded-r-xl rounded-l-none
                  max-md:rounded-xl
                  ${isLoading ? 'opacity-80' : ''}
                `}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    <span>Checking...</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span>Check Now</span>
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </div>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}