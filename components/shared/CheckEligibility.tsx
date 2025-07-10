"use client";

import * as React from "react";
import { Check, Globe, ChevronRight } from "lucide-react";
import { COUNTRIES } from '@/lib/countries';
import { NATIONALITIES } from '@/lib/nationalities';
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
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
import { cn } from "@/lib/utils";

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
  icon,
  className,
  focused,
  setFocused,
}: {
  label: string;
  options: { value: string; label: string; flag?: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  focused?: boolean;
  setFocused?: (v: boolean) => void;
}) {
  const [search, setSearch] = React.useState("");
  const [internalFocused, internalSetFocused] = React.useState(false);
  const isFocused = typeof focused === 'boolean' ? focused : internalFocused;
  const handleSetFocused = setFocused || internalSetFocused;
  // Track if mouse is down in dropdown
  const mouseDownRef = React.useRef(false);

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // If mouse is down in dropdown, don't close
    if (mouseDownRef.current) {
      // Wait for mouse up, then refocus input
      setTimeout(() => {
        if (e.target) (e.target as HTMLInputElement).focus();
      }, 0);
      return;
    }
    handleSetFocused(false);
  };

  const filtered = options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );
  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="w-full md:w-auto md:flex-1">
      <label className="block mb-1.5 font-medium text-sm text-slate-700">{label}</label>
      <div className="relative w-full">
        <div className={cn("flex items-center h-[50px] border px-3 py-2 bg-white border-slate-300 shadow-sm", className)}>
          {icon && <div className="text-slate-400 mr-1">{icon}</div>}
          <input
            type="text"
            className="flex-1 outline-none border-0 bg-transparent text-slate-800 placeholder:text-slate-400"
            placeholder={placeholder || `Search ${label.toLowerCase()}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => handleSetFocused(true)}
            onBlur={handleInputBlur}
            autoComplete="off"
          />
        </div>
        {isFocused && (
          <div
            className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50"
            style={{maxHeight: 320, overflowY: 'auto'}}
            onMouseDown={() => { mouseDownRef.current = true; }}
            onMouseUp={() => { mouseDownRef.current = false; }}
            onMouseLeave={() => { mouseDownRef.current = false; }}
          >
            <Command>
              <CommandList>
                {filtered.length === 0 && (
                  <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
                )}
                <CommandGroup>
                  {filtered.map((opt) => (
                    <CommandItem
                      key={opt.value}
                      value={opt.label.toLowerCase()}
                      onSelect={() => {
                        onChange(opt.value);
                        setSearch(opt.label); // show selected in input
                        handleSetFocused(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 cursor-pointer"
                    >
                      {opt.flag && (
                        <div className="h-4 w-6 overflow-hidden rounded-sm flex-shrink-0">
                          <img src={opt.flag} alt="" className="h-full w-full object-cover" />
                        </div>
                      )}
                      <span className="flex-1 truncate">{opt.label}</span>
                      {value === opt.value && (
                        <Check className="ml-auto h-4 w-4 text-emerald-600" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>
    </div>
  );
}

// Main component
export default function CheckEligibility() {
  const [nationality, setNationality] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [openCombo, setOpenCombo] = React.useState<string | null>(null); // Track which ComboBox is open
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
              icon={<Globe className="h-4 w-4" />}
              className="rounded-l-xl rounded-r-none"
              focused={openCombo === 'nationality'}
              setFocused={(v: boolean) => setOpenCombo(v ? 'nationality' : null)}
            />
            <ComboBox
              label="Your Destination"
              options={countryOptions}
              value={destination}
              onChange={setDestination}
              placeholder="Select destination"
              icon={<Globe className="h-4 w-4" />}
              className="rounded-l-none"
              focused={openCombo === 'destination'}
              setFocused={(v: boolean) => setOpenCombo(v ? 'destination' : null)}
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