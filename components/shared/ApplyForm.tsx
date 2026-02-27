"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// Remove static imports - we'll fetch from API
// import { COUNTRIES } from "@/lib/countries";
// import { Country } from "@/lib/countries/type";
import {
  CalendarIcon,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  CalendarDays,
} from "lucide-react";
import { XCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import moment from "moment";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Combobox } from "@/components/ui/combobox";
import SupportSidebar from "./SupportSidebar";
import { COUNTRIES } from "@/lib/countries";

// Fixed service fee for all countries
const FIXED_SERVICE_FEE = 59.99;

// Comprehensive country codes with flags
const COUNTRY_CODES = [
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+420", country: "Czech Republic", flag: "🇨🇿" },
  { code: "+421", country: "Slovakia", flag: "🇸🇰" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+36", country: "Hungary", flag: "🇭🇺" },
  { code: "+40", country: "Romania", flag: "🇷🇴" },
  { code: "+386", country: "Slovenia", flag: "🇸🇮" },
  { code: "+385", country: "Croatia", flag: "🇭🇷" },
  { code: "+381", country: "Serbia", flag: "🇷🇸" },
  { code: "+380", country: "Ukraine", flag: "🇺🇦" },
  { code: "+994", country: "Azerbaijan", flag: "🇦🇿" },
  { code: "+995", country: "Georgia", flag: "🇬🇪" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
  { code: "+98", country: "Iran", flag: "🇮🇷" },
  { code: "+964", country: "Iraq", flag: "🇮🇶" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+961", country: "Lebanon", flag: "🇱🇧" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+856", country: "Laos", flag: "🇱🇦" },
  { code: "+855", country: "Cambodia", flag: "🇰🇭" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+679", country: "Fiji", flag: "🇫🇯" },
  { code: "+682", country: "Cook Islands", flag: "🇨🇰" },
  { code: "+685", country: "Samoa", flag: "🇼🇸" },
  { code: "+686", country: "Kiribati", flag: "🇰🇮" },
  { code: "+691", country: "Micronesia", flag: "🇫🇲" },
  { code: "+692", country: "Marshall Islands", flag: "🇲🇭" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+672", country: "Antarctica", flag: "🇦🇶" },
  { code: "+1-268", country: "Antigua and Barbuda", flag: "🇦🇬" },
  { code: "+1-242", country: "Bahamas", flag: "🇧🇸" },
  { code: "+1-246", country: "Barbados", flag: "🇧🇧" },
  { code: "+1-441", country: "Bermuda", flag: "🇧🇲" },
  { code: "+1-284", country: "British Virgin Islands", flag: "🇻🇬" },
  { code: "+1-345", country: "Cayman Islands", flag: "🇰🇾" },
  { code: "+1-767", country: "Dominica", flag: "🇩🇲" },
  { code: "+1-809", country: "Dominican Republic", flag: "🇩🇴" },
  { code: "+1-473", country: "Grenada", flag: "🇬🇩" },
  { code: "+1-876", country: "Jamaica", flag: "🇯🇲" },
  { code: "+1-664", country: "Montserrat", flag: "🇲🇸" },
  { code: "+1-869", country: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { code: "+1-758", country: "Saint Lucia", flag: "🇱🇨" },
  { code: "+1-784", country: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { code: "+1-721", country: "Sint Maarten", flag: "🇸🇽" },
  { code: "+1-868", country: "Trinidad and Tobago", flag: "🇹🇹" },
  { code: "+1-649", country: "Turks and Caicos Islands", flag: "🇹🇨" },
  { code: "+1-340", country: "U.S. Virgin Islands", flag: "🇻🇮" },
  // ... (add more as needed for full coverage)
];

// Define types for destinations and visa types
interface Destination {
  id: string;
  name: string;
  code: string;
  processingTime?: any;
  portType?: any[];
}

interface VisaType {
  id: string;
  name: string;
  fees: number | null;
  allowedNationalities: string[] | null;
  description?: string;
}

// Helper function to extract phone number without country code
function extractPhoneNumber(fullPhoneNumber: string | null | undefined, countryCode: string | null | undefined): string {
  if (!fullPhoneNumber) return "";
  
  // If country code is provided, try to remove it from the phone number
  if (countryCode) {
    // Remove the + sign and any spaces
    const cleanCode = countryCode.replace(/\+/g, "").trim();
    const cleanPhone = fullPhoneNumber.replace(/\s/g, "");
    
    // Check if phone number starts with the country code
    if (cleanPhone.startsWith(cleanCode)) {
      return cleanPhone.substring(cleanCode.length);
    }
    
    // Check if phone number starts with + followed by country code
    if (cleanPhone.startsWith(`+${cleanCode}`)) {
      return cleanPhone.substring(cleanCode.length + 1);
    }
  }
  
  // If phone number starts with +, try to extract the number part
  if (fullPhoneNumber.startsWith("+")) {
    // Find the first digit after the + and country code
    // This is a fallback if country code matching didn't work
    return fullPhoneNumber.replace(/^\+?\d{1,4}/, "").trim();
  }
  
  return fullPhoneNumber;
}

export default function ApplyForm({ user }: { user: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Database state
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [visaTypes, setVisaTypes] = useState<VisaType[]>([]);
  const [loadingDestinations, setLoadingDestinations] = useState(true);
  const [loadingVisaTypes, setLoadingVisaTypes] = useState(false);
  
  // Clear cache when navigating to /apply without URL parameters (fresh start)
  // This runs first to ensure cache is cleared before it's loaded
  useEffect(() => {
    const countryParam = searchParams.get("country");
    const typeParam = searchParams.get("type");
    const applicationId = searchParams.get("applicationId");
    
    // If no URL parameters, this is likely a fresh start
    if (!countryParam && !typeParam && !applicationId) {
      // Check if there's an active application in session storage
      const activeApplicationId = sessionStorage.getItem('evisa-application-id');
      
      // If no active application, this is definitely a fresh start - clear the cache
      if (!activeApplicationId) {
        console.log('No URL params and no active application - clearing cache for fresh start');
        sessionStorage.removeItem('apply-form-cache');
        sessionStorage.removeItem('cached-destination-id');
        // Reset form state to ensure clean start
        setSelectedDestination(null);
        setSelectedCountry(null);
        setSelectedVisaType("");
        setPassengerCount("1");
        setStayingStart("");
        setStayingEnd("");
        setPortType("");
        setPortName("");
      }
    }
  }, [searchParams]);

  // Keep legacy state for now (will update references later)
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedVisaType, setSelectedVisaType] = useState<string>("");
  const [passengerCount, setPassengerCount] = useState("1");
  const [stayingStart, setStayingStart] = useState("");
  const [stayingEnd, setStayingEnd] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1", // Default to +1
    gender: "",
  });
  // Application-level port state
  const [portType, setPortType] = useState<string>("");
  const [portName, setPortName] = useState<string>("");
  const [hydrated, setHydrated] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [countryName, setCountryName] = useState("");
  
  // Date picker popover states
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  
  // Country code dropdown state
  const [countryCodeOpen, setCountryCodeOpen] = useState(false);
  const [countryCodeSearch, setCountryCodeSearch] = useState("");

  // Check if application already exists (for contact field disabling)
  const [applicationExists, setApplicationExists] = useState(false);
  const [contactWasCompleteOnLoad, setContactWasCompleteOnLoad] = useState(false);
  const [formKey, setFormKey] = useState(0); // Add key to force re-render
  
  // Debug: Log contact state changes
  useEffect(() => {
  }, [contact]);

  // Load cached form data after destinations are loaded
  useEffect(() => {
    if (!destinations || destinations.length === 0) return; // Wait until destinations are loaded
    
    const loadCachedData = () => {
      try {
        // Check if there are URL parameters - if yes, they take priority
        const countryParam = searchParams.get("country");
        const typeParam = searchParams.get("type");
        
        // If URL parameters exist, clear cache and use URL params instead
        if (countryParam || typeParam) {
          console.log('URL parameters detected, clearing cache and using URL params');
          sessionStorage.removeItem('apply-form-cache');
          
          // URL params will be handled by the useEffect below
          // Prefill contact fields with user data if logged in
          if (user) {
            const userCountryCode = user.areaCode || "+1";
            setContact({
              fullName: user.fullName || "",
              email: user.email || "",
              phone: extractPhoneNumber(user.phoneNumber, userCountryCode),
              countryCode: userCountryCode,
              gender: user.gender || "",
            });
          }
          return;
        }
        
        // If no URL params, check if user wants to start fresh
        // Check for a flag that indicates user wants to start new application
        const startFresh = sessionStorage.getItem('start-fresh-application');
        if (startFresh === 'true') {
          console.log('Starting fresh application, clearing cache');
          sessionStorage.removeItem('apply-form-cache');
          sessionStorage.removeItem('start-fresh-application');
          
          // Prefill contact fields with user data if logged in
          if (user) {
            const userCountryCode = user.areaCode || "+1";
            setContact({
              fullName: user.fullName || "",
              email: user.email || "",
              phone: extractPhoneNumber(user.phoneNumber, userCountryCode),
              countryCode: userCountryCode,
              gender: user.gender || "",
            });
          }
          return;
        }
        
        const cached = sessionStorage.getItem('apply-form-cache');
        if (cached) {
          const data = JSON.parse(cached);
          
          // Restore form state from cache
          if (data.selectedDestination) setSelectedDestination(data.selectedDestination);
          if (data.selectedCountry) setSelectedCountry(data.selectedCountry);
          if (data.selectedVisaType) setSelectedVisaType(data.selectedVisaType);
          if (data.passengerCount) setPassengerCount(data.passengerCount);
          if (data.stayingStart) setStayingStart(data.stayingStart);
          if (data.stayingEnd) setStayingEnd(data.stayingEnd);
          if (data.portType) setPortType(data.portType);
          if (data.portName) setPortName(data.portName);
          if (data.contact) {
            // Extract phone number without country code if it includes the country code
            const cachedCountryCode = data.contact.countryCode || "+1";
            const extractedPhone = extractPhoneNumber(data.contact.phone, cachedCountryCode);
            
            setContact({
              ...data.contact,
              phone: extractedPhone,
              countryCode: cachedCountryCode,
            });
            
            // Check if contact was complete when loaded from cache
            const contactComplete = !!(data.contact.fullName?.trim() && 
                                    data.contact.email?.trim() && 
                                    extractedPhone?.trim() && 
                                    cachedCountryCode?.trim() && 
                                    data.contact.gender);
            setContactWasCompleteOnLoad(contactComplete);
          }
        } else {
          console.log('No cached data found');
          
          // Prefill contact fields with user data if logged in
          if (user) {
            const userCountryCode = user.areaCode || "+1";
            setContact({
              fullName: user.fullName || "",
              email: user.email || "",
              phone: extractPhoneNumber(user.phoneNumber, userCountryCode),
              countryCode: userCountryCode,
              gender: user.gender || "",
            });
          }
        }
      } catch (error) {
        console.error('Error loading cached data:', error);
      }
    };

    loadCachedData();
  }, [destinations, searchParams, user]);

  // Fetch destinations on component mount
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoadingDestinations(true);
        const response = await fetch('/api/destinations');
        if (response.ok) {
          const data = await response.json();
          setDestinations(data);
          setHydrated(true);
        } else {
          console.error('Failed to fetch destinations');
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoadingDestinations(false);
      }
    };

    fetchDestinations();
  }, []);

  // Fetch visa types when destination is selected
  useEffect(() => {
    const fetchVisaTypes = async () => {
      if (!selectedDestination) {
        setVisaTypes([]);
        return;
      }

      try {
        setLoadingVisaTypes(true);
        const response = await fetch(`/api/destinations/${selectedDestination.id}/visa-types`);
        if (response.ok) {
          const data = await response.json();
          setVisaTypes(data);
        } else {
          console.error('Failed to fetch visa types');
          setVisaTypes([]);
        }
      } catch (error) {
        console.error('Error fetching visa types:', error);
        setVisaTypes([]);
      } finally {
        setLoadingVisaTypes(false);
      }
    };

    fetchVisaTypes();
  }, [selectedDestination]);

  // Get URL parameters on component mount - URL params always take priority
  useEffect(() => {
    if (!destinations || destinations.length === 0) return; // Wait until destinations are loaded
    
    const countryParam = searchParams.get("country");
    const typeParam = searchParams.get("type");
    
    if (countryParam) {
      // URL parameters take priority - clear cache and use URL params
      const destination = destinations.find(
        (d) => d.id?.toLowerCase() === countryParam.toLowerCase()
      );
      if (destination) {
        console.log('Setting destination from URL parameter:', countryParam);
        sessionStorage.removeItem('apply-form-cache'); // Clear cache when URL params are used
        setSelectedDestination(destination);
        setSelectedCountry(destination); // Keep for compatibility
      }
    } else if (!countryParam && !sessionStorage.getItem('apply-form-cache')) {
      // No URL params and no cache - clear selection (fresh start)
      setSelectedDestination(null);
      setSelectedCountry(null);
      setSelectedVisaType("");
    }
  }, [searchParams, destinations]);

  // Handle visa type selection when visaTypes change - URL params take priority
  useEffect(() => {
    if (!visaTypes || visaTypes.length === 0) return;
    
    const typeParam = searchParams.get("type");
    if (typeParam) {
      // URL parameters take priority
      const visaType = visaTypes.find(
        (v) => v.id?.toLowerCase() === typeParam.toLowerCase()
      );
      if (visaType) {
        console.log('Setting visa type from URL parameter:', typeParam);
        setSelectedVisaType(visaType.name);
      }
    } else if (!typeParam && !sessionStorage.getItem('apply-form-cache')) {
      // No URL params and no cache - set first visa type as default
      if (visaTypes.length > 0) {
        setSelectedVisaType(visaTypes[0].name);
      }
    }
  }, [visaTypes, searchParams]);

  // Function to save form data to cache
  const saveFormToCache = () => {
    try {
      const formData = {
        selectedDestination,
        selectedCountry,
        selectedVisaType,
        passengerCount,
        stayingStart,
        stayingEnd,
        portType,
        portName,
        contact
      };
      sessionStorage.setItem('apply-form-cache', JSON.stringify(formData));
    } catch (error) {
      console.error('Error saving form data to cache:', error);
    }
  };

  // Save form data to cache whenever form state changes
  useEffect(() => {
    if (hydrated) {
      saveFormToCache();
    }
  }, [selectedDestination, selectedCountry, selectedVisaType, passengerCount, stayingStart, stayingEnd, portType, portName, contact, hydrated]);

  // Set application exists based on whether contact was complete when loaded from cache
  useEffect(() => {
    if (!hydrated) return; // Wait until cached data is loaded
    
    // Only disable editing if contact was complete when loaded from cache
    setApplicationExists(contactWasCompleteOnLoad);
  }, [hydrated, contactWasCompleteOnLoad]);

  // Clear cache when browser tab closes
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('apply-form-cache');
      sessionStorage.removeItem('evisa-application-id');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Early return for loading state - must come after all hooks
  if (!hydrated || loadingDestinations) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-slate-600">Loading destinations...</p>
        </div>
      </div>
    );
  }

  const isLoggedIn = !!user;

  // Special case: hide gov fee in order summary if India
  const isIndia = selectedCountry?.code?.toLowerCase() === "in";

  // Check if there's an existing application to update
  const existingApplicationId = sessionStorage.getItem('evisa-application-id');
  const shouldUpdateExisting = !!(existingApplicationId && (
    // Only allow updates if destination hasn't changed (only visa type, passenger count, dates)
    selectedDestination?.id === sessionStorage.getItem('cached-destination-id')
  ));

  // Calculate total for order summary
  let total = 0;
  if (isIndia) {
    total = FIXED_SERVICE_FEE * Number(passengerCount);
  } else {
    const visa = visaTypes.find(
      (v) => v.name === selectedVisaType
    );
    total =
      visa && selectedDestination && visa.fees
        ? (visa.fees + FIXED_SERVICE_FEE) * Number(passengerCount)
        : 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!selectedDestination) newErrors.country = "Please select a country.";
    if (!selectedVisaType && !isIndia)
      newErrors.visaType = "Please select a visa type.";
    if (!passengerCount)
      newErrors.passengerCount = "Please select passenger count.";
    if (!stayingStart) newErrors.stayingStart = "Please select start date.";
    if (!stayingEnd) newErrors.stayingEnd = "Please select end date.";

    // Validate contact information for non-logged-in users
    if (!isLoggedIn) {
      if (!contact.fullName?.trim()) newErrors.fullName = "Full name is required.";
      if (!contact.email?.trim()) newErrors.email = "Email address is required.";
      if (!contact.phone?.trim()) newErrors.phone = "Phone number is required.";
      if (!contact.countryCode?.trim()) newErrors.countryCode = "Country code is required.";
      if (!contact.gender) newErrors.gender = "Gender is required.";
    }

    // Calculate travel duration in days
    let travelDays = 0;
    if (stayingStart && stayingEnd) {
      const start = new Date(stayingStart);
      const end = new Date(stayingEnd);
      travelDays = Math.floor(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
    }

    // Get visa duration in days from country data
    let visaDurationDays = 0;
    let visaTypeObj: VisaType | null = null;
    if (selectedDestination && selectedVisaType) {
      visaTypeObj =
        visaTypes.find((v) => v.name === selectedVisaType) || null;
      const country = COUNTRIES.find(
        (c) => c.code?.toLowerCase() === selectedDestination.code?.toLowerCase()
      );
      const countryVisa = country?.visaTypes?.find(
        (v) => v.id === visaTypeObj?.id || v.name === selectedVisaType
      );
      if (countryVisa?.visaDuration) {
        visaDurationDays = countryVisa.visaDuration;
      }
    }

    // If travel duration exceeds visa duration, block submission
    if (visaDurationDays > 0 && travelDays > visaDurationDays) {
      newErrors.stayingEnd = `Your travel duration (${travelDays} days) exceeds the allowed visa duration (${visaDurationDays} days).`;
    }

    // For India, require portType and portName
    if (isIndia) {
      if (!portType) newErrors.portType = "Please select port type.";
      if (!portName) newErrors.portName = "Please select port name.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // For India, send the canonical's most expensive group variant id (precomputed in india.ts)
    let visa = null;
    let visaTypeIdToSend = undefined;
    let portTypeToSend = portType;
    let portNameToSend = portName;
    let govFeeToSend = undefined;
    if (isIndia) {
      // For India, selectedVisaType contains the actual database visa type name
      const visaType = visaTypes.find((vt) => vt.name === selectedVisaType);
      visaTypeIdToSend = visaType?.id;
      govFeeToSend = visaType?.fees;
    } else {
      visa = visaTypes.find(
        (v) => v.name === selectedVisaType
      );
      visaTypeIdToSend = visa?.id;
      govFeeToSend = visa?.fees;
    }

    const total =
      govFeeToSend && selectedDestination
        ? (govFeeToSend + FIXED_SERVICE_FEE) * Number(passengerCount)
        : FIXED_SERVICE_FEE * Number(passengerCount);
    
    // Check if there's an existing application to update
    const existingApplicationId = sessionStorage.getItem('evisa-application-id');
    const shouldUpdateExisting = existingApplicationId && (
      // Only allow updates if destination hasn't changed (only visa type, passenger count, dates)
      selectedDestination?.id === sessionStorage.getItem('cached-destination-id')
    );
    
    // Log the update mode for debugging
    if (shouldUpdateExisting) {
      console.log('Update mode: Will update existing application', existingApplicationId);
    } else {
      console.log('Create mode: Will create new application');
    }
    
    try {
      setIsSubmitting(true);
      // Create or update the application
      const appRes = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destinationId: selectedDestination?.id,
          destinationCode: selectedDestination?.code,
          visaTypeId: visaTypeIdToSend,
          passengerCount: Number(passengerCount),
          stayingStart,
          stayingEnd,
          total,
          govFee: govFeeToSend,
          email: isLoggedIn ? user?.email : contact.email,
          fullName: isLoggedIn ? user?.fullName : contact.fullName,
          areaCode: isLoggedIn ? user?.areaCode : contact.countryCode,
          phoneNumber: isLoggedIn ? user?.phoneNumber : contact.phone,
          gender: isLoggedIn ? user?.gender : contact.gender,
          portType: isIndia ? portTypeToSend : undefined,
          portName: isIndia ? portNameToSend : undefined,
          updateExisting: shouldUpdateExisting,
          existingApplicationId: shouldUpdateExisting ? existingApplicationId : undefined,
        }),
      });

      const appData = await appRes.json();

      if (!appRes.ok) {
        throw new Error(appData.error || "Failed to create application");
      }

      if (appData.updated) {
        // Application was updated, keep the same application ID
        console.log('Updated existing application:', appData.applicationId);
        console.log('Updated passenger count:', appData.passengerCount);
        console.log('Updated passenger IDs:', appData.passengerIds);
        
        // Update the form with the new passenger count if it changed
        if (appData.passengerCount && appData.passengerCount !== passengerCount) {
          setPassengerCount(appData.passengerCount);
          console.log('Updated form passenger count to:', appData.passengerCount);
        }
        
        // Clear cache when application is updated to ensure fresh data
        sessionStorage.removeItem('cached-form-data');
        console.log('Cleared cache due to application update');
        
        // Only clear passenger cache if passenger count decreased
        if (appData.applicationId && appData.passengerCount && appData.passengerCount < passengerCount) {
          const passengerCacheKey = `passenger-data-${appData.applicationId}`;
          sessionStorage.removeItem(passengerCacheKey);
          console.log('Cleared passenger cache due to passenger count decrease:', passengerCacheKey);
        } else if (appData.applicationId && appData.passengerCount && appData.passengerCount > passengerCount) {
          // If passenger count increased, keep existing cache but add empty passengers
          console.log('Passenger count increased, keeping existing cache and adding empty passengers');
        }
      } else {
        // New application created, store the application ID and destination ID
        sessionStorage.setItem('evisa-application-id', appData.applicationId);
        sessionStorage.setItem('cached-destination-id', selectedDestination?.id || '');
        console.log('Created new application:', appData.applicationId);
        console.log('Created passenger IDs:', appData.passengerIds);
        console.log('Stored application ID in session storage:', appData.applicationId);
        console.log('Session storage key:', 'evisa-application-id');
        
        // Clear form cache when new application is created
        // This prevents the form from restoring old data when user navigates back
        sessionStorage.removeItem('apply-form-cache');
        console.log('Cleared form cache after creating new application');
      }

      // Navigate to passengers page with applicationId as URL parameter
      router.push(`/apply/passengers?applicationId=${appData.applicationId}`);

      // If the user is not logged in, store the applicationId and contact info in cookies
      if (!isLoggedIn && appData.applicationId) {
        // Store applicationId in guestApplicationIds cookie
        let guestIds = [];
        try {
          const raw = decodeURIComponent(
            document.cookie
              .split("; ")
              .find((row) => row.startsWith("guestApplicationIds="))
              ?.split("=")[1] || "[]"
          );
          guestIds = JSON.parse(raw);
        } catch (e) {
          guestIds = [];
        }
        if (!guestIds.includes(appData.applicationId)) {
          guestIds.push(appData.applicationId);
          document.cookie = `guestApplicationIds=${encodeURIComponent(
            JSON.stringify(guestIds)
          )}; path=/; max-age=2592000`;
        }
        // Store contact info in a cookie for confirmation page (expires in 30 days)
        document.cookie = `guestContact_${
          appData.applicationId
        }=${encodeURIComponent(
          JSON.stringify(contact)
        )}; path=/; max-age=2592000`;
      }
    } catch (error) {
      console.error("Error creating application:", error);
      alert(
        error instanceof Error
          ? error.message
          : "An error occurred while creating your application"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen justify-center pb-12 px-4 bg-gradient-to-b from-blue-50/40 via-white to-white">
      <div className="max-w-7xl mx-auto pt-10 pb-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center mb-10">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              United Evisa application
            </span>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">
              Apply for your eVisa with confidence
            </h1>
            <p className="text-slate-600 mt-2 max-w-xl">
              Clear steps, secure payments, and real‑time updates as you move through the process.
            </p>
          </div>
          <div className="relative rounded-3xl border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/40 to-blue-100/20 p-6 shadow-sm overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                  Before you start
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                  What you need
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Have these details ready so you can finish in just a few minutes.
                </p>
              </div>
              <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>

            <ul className="relative mt-4 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                  <CheckCircle className="h-3 w-3" />
                </span>
                <span>Valid passport</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                  <CheckCircle className="h-3 w-3" />
                </span>
                <span>Travel dates</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                  <CheckCircle className="h-3 w-3" />
                </span>
                <span>Contact details</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-blue-100"
          >
            {/* Trip Details Section */}
            <div className="space-y-5">
              <div className="flex items-center space-x-2 pb-2 border-b border-blue-100">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <CalendarDays className="h-4 w-4 text-blue-700" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Trip Details
                </h2>
              </div>

              {/* Country */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                  Destination Country
                </Label>
                <Combobox
                  options={destinations.map((d) => ({
                    value: d.id,
                    label: d.name,
                    code: d.code,
                  }))}
                  value={selectedDestination?.id || ""}
                  onChange={(id) => {
                    console.log('Selected destination ID:', id);
                    const destination = destinations.find((d) => d.id === id);
                    console.log('Found destination:', destination);
                    
                    // Check if destination is changing
                    const currentDestinationId = sessionStorage.getItem('cached-destination-id');
                    if (currentDestinationId && currentDestinationId !== id) {
                      // Destination changed, clear existing application ID since we'll need a new application
                      sessionStorage.removeItem('evisa-application-id');
                      sessionStorage.removeItem('cached-destination-id');
                      console.log('Destination changed, cleared existing application ID');
                    }
                    
                    setSelectedDestination(destination || null);
                    setSelectedCountry(destination || null); // Also update selectedCountry for compatibility
                    setCountryName(destination?.name || "");
                    setSelectedVisaType("");
                    setErrors((prev) => ({ ...prev, country: "" }));
                  }}
                  placeholder="Select a country"
                  disabled={!!shouldUpdateExisting}
                />
                {shouldUpdateExisting && (
                  <p className="text-xs text-blue-600 mt-1">
                    Destination cannot be changed when updating an existing application
                  </p>
                )}
                {destinations.length === 0 && (
                  <p className="text-sm text-slate-500 mt-2">No destinations available</p>
                )}
                {errors.country && (
                  <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                    <XCircle className="h-3.5 w-3.5" />
                    <span>{errors.country}</span>
                  </div>
                )}
                
                {selectedDestination && (
                  <div className="mt-3 space-y-3">




                    {/* Port of Arrival for India */}
                    {isIndia && (
                      <>
                        {/* Port Type */}
                        <div className="space-y-1.5">
                          <Label className="text-sm font-medium">Port Type *</Label>
                          <div className="flex gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                id="portType-Air"
                                name="portType"
                                value="Air"
                                checked={portType === "Air"}
                                onChange={() => { setPortType("Air"); setPortName(""); }}
                                className="accent-blue-600"
                              />
                              <label htmlFor="portType-Air" className="text-sm text-slate-700">Airport</label>
                          </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                id="portType-Seaport"
                                name="portType"
                                value="Seaport"
                                checked={portType === "Seaport"}
                                onChange={() => { setPortType("Seaport"); setPortName(""); }}
                                className="accent-blue-600"
                              />
                              <label htmlFor="portType-Seaport" className="text-sm text-slate-700">Seaport</label>
                        </div>
                        </div>
                          {errors.portType && (
                            <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                              <XCircle className="h-3.5 w-3.5" />
                              <span>{errors.portType}</span>
                      </div>
                          )}
                    </div>

                        {/* Port Name */}
                        <div className="space-y-1.5">
                          <Label className="text-sm font-medium">Port Name *</Label>
                          <Select
                            value={portName}
                            onValueChange={(v) => setPortName(v)}
                            disabled={!portType}
                          >
                            <SelectTrigger className={cn(
                              "w-full",
                              !portType && "bg-slate-50 cursor-not-allowed",
                              errors.portName && "border-red-500 focus:ring-red-500",
                              "focus:ring-blue-500"
                            )}>
                              <SelectValue placeholder="Select Port" />
                            </SelectTrigger>
                            <SelectContent>
                              {portType === "Air" && (
                                <>
                                  <SelectItem value="Chennai - MAA - Chennai - Tamil Nadu">
                                    Chennai - MAA - Chennai - Tamil Nadu
                                  </SelectItem>
                                  <SelectItem value="Indira Gandhi - DEL - Delhi - Delhi">
                                    Indira Gandhi - DEL - Delhi - Delhi
                                  </SelectItem>
                                  <SelectItem value="Netaji Subhash Chandra Bose - CCU - Kolkata - West Bengal">
                                    Netaji Subhash Chandra Bose - CCU - Kolkata - West Bengal
                                  </SelectItem>
                                  <SelectItem value="Chhatrapati Shivaji - BOM - Mumbai - Maharashtra">
                                    Chhatrapati Shivaji - BOM - Mumbai - Maharashtra
                                  </SelectItem>
                                  <SelectItem value="Cochin – COK - Kochi - Kerala">
                                    Cochin – COK - Kochi - Kerala
                                  </SelectItem>
                                  <SelectItem value="Rajiv Gandhi – HYD - Hyderabad - Telangana">
                                    Rajiv Gandhi – HYD - Hyderabad - Telangana
                                  </SelectItem>
                                  <SelectItem value="Kempegowda – BLR - Bangalore - Karnataka">
                                    Kempegowda – BLR - Bangalore - Karnataka
                                  </SelectItem>
                                  <SelectItem value="Goa – GOI – Dabolim – Goa">
                                    Goa – GOI – Dabolim – Goa
                                  </SelectItem>
                                  <SelectItem value="Thiruvananthapuram – TRV - Thiruvananthapuram - Kerala">
                                    Thiruvananthapuram – TRV - Thiruvananthapuram - Kerala
                                  </SelectItem>
                                  <SelectItem value="Sardar Patel - AMD - Ahmedabad - Gujarat">
                                    Sardar Patel - AMD - Ahmedabad - Gujarat
                                  </SelectItem>
                                  <SelectItem value="Sri Guru Ram Dass Jee - ATQ - Amritsar - Punjab">
                                    Sri Guru Ram Dass Jee - ATQ - Amritsar - Punjab
                                  </SelectItem>
                                  <SelectItem value="Gaya - GAY - Gaya - Bihar">
                                    Gaya - GAY - Gaya - Bihar
                                  </SelectItem>
                                  <SelectItem value="Jaipur - JAI - Jaipur - Rajasthan">
                                    Jaipur - JAI - Jaipur - Rajasthan
                                  </SelectItem>
                                  <SelectItem value="Chaudhary Charan Singh - LKO - Lucknow - Uttar Pradesh">
                                    Chaudhary Charan Singh - LKO - Lucknow - Uttar Pradesh
                                  </SelectItem>
                                  <SelectItem value="Varanasi - VNS - Varanasi - Uttar Pradesh">
                                    Varanasi - VNS - Varanasi - Uttar Pradesh
                                  </SelectItem>
                                  <SelectItem value="Tiruchirappalli - TRZ - Tiruchirappalli - Tamil Nadu">
                                    Tiruchirappalli - TRZ - Tiruchirappalli - Tamil Nadu
                                  </SelectItem>
                                  <SelectItem value="Bagdogra - IXB - Bagdogra - West Bengal">
                                    Bagdogra - IXB - Bagdogra - West Bengal
                                  </SelectItem>
                                  <SelectItem value="Calicut - CCJ - Kozhikode - Kerala">
                                    Calicut - CCJ - Kozhikode - Kerala
                                  </SelectItem>
                                  <SelectItem value="Chandigarh- IXC - Chandigarh - Chandigarh">
                                    Chandigarh- IXC - Chandigarh - Chandigarh
                                  </SelectItem>
                                  <SelectItem value="Coimbatore - CJB - Coimbatore - Tamil Nadu">
                                    Coimbatore - CJB - Coimbatore - Tamil Nadu
                                  </SelectItem>
                                  <SelectItem value="Lokpriya Gopinath Bordoloi - GAU - Guwahati - Assam">
                                    Lokpriya Gopinath Bordoloi - GAU - Guwahati - Assam
                                  </SelectItem>
                                  <SelectItem value="Mangalore - IXE - Mangalore - Karnataka">
                                    Mangalore - IXE - Mangalore - Karnataka
                                  </SelectItem>
                                  <SelectItem value="Dr. Babasaheb Ambedkar - NAG - Nagpur - Maharashtra">
                                    Dr. Babasaheb Ambedkar - NAG - Nagpur - Maharashtra
                                  </SelectItem>
                                  <SelectItem value="Pune - PNQ - Pune -Maharashtra">
                                    Pune - PNQ - Pune -Maharashtra
                                  </SelectItem>
                                  <SelectItem value="Madurai - IXM - Madurai - Tamil Nadu">
                                    Madurai - IXM - Madurai - Tamil Nadu
                                  </SelectItem>
                                  <SelectItem value="Bhubaneswar - BBI - Bhubaneswar - Odisha">
                                    Bhubaneswar - BBI - Bhubaneswar - Odisha
                                  </SelectItem>
                                  <SelectItem value="Veer Savarkar - IXZ- Port Blair- Andaman and Nicobar Islands">
                                    Veer Savarkar - IXZ- Port Blair- Andaman and Nicobar Islands
                                  </SelectItem>
                                  <SelectItem value="Visakhapatnam - VTZ – Visakhapatnam – Andhra Pradesh">
                                    Visakhapatnam - VTZ – Visakhapatnam – Andhra Pradesh
                                  </SelectItem>
                                  <SelectItem value="Manohar - GOX - Mopa - Goa">
                                    Manohar - GOX - Mopa - Goa
                                  </SelectItem>
                                  <SelectItem value="Devi Ahilya Bai Holkar - IDR - Indore - Madhya Pradesh">
                                    Devi Ahilya Bai Holkar - IDR - Indore - Madhya Pradesh
                                  </SelectItem>
                                  <SelectItem value="Kannur - CNN - Kannur - Kerala">
                                    Kannur - CNN - Kannur - Kerala
                                  </SelectItem>
                                </>
                              )}
                              {portType === "Seaport" && (
                                <>
                                  <SelectItem value="Cochin Seaport">Cochin Seaport</SelectItem>
                                  <SelectItem value="Mangalore Seaport">Mangalore Seaport</SelectItem>
                                  <SelectItem value="Goa Seaport">Goa Seaport</SelectItem>
                                  <SelectItem value="Chennai Seaport">Chennai Seaport</SelectItem>
                                  <SelectItem value="Mumbai Seaport">Mumbai Seaport</SelectItem>
                                  <SelectItem value="Port Blair Seaport">Port Blair Seaport</SelectItem>
                                </>
                              )}
                            </SelectContent>
                          </Select>
                          {errors.portName && (
                            <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                              <XCircle className="h-3.5 w-3.5" />
                              <span>{errors.portName}</span>
                          </div>
                          )}
                        </div>
                      </>
                    )}

                    {/* Port of Arrival for countries with portType/port structure */}
                    {!isIndia && selectedDestination.portType && Array.isArray(selectedDestination.portType) && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 text-sm mb-2">Port of Arrival</h4>
                        <div className="mb-3">
                          <label className="text-xs font-medium text-blue-700 mb-1 block">Port Type</label>
                          <div className="flex gap-4 flex-wrap">
                            {selectedDestination.portType.map((pt) => (
                              <div className="flex items-center gap-2" key={pt.type}>
                                <input
                                  type="radio"
                                  id={`portType-${pt.type}`}
                                  name="portType"
                                  value={pt.type}
                                  checked={portType === pt.type}
                                  onChange={() => { setPortType(pt.type); setPortName(""); }}
                                  className="accent-blue-600"
                                />
                                <label htmlFor={`portType-${pt.type}`} className="text-blue-800 text-sm">{pt.type}</label>
                              </div>
                            ))}
                          </div>
                          {errors.portType && (
                            <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                              <XCircle className="h-3.5 w-3.5" />
                              <span>{errors.portType}</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="text-xs font-medium text-blue-700 mb-1 block">Port Name</label>
                          <Select
                            value={portName}
                            onValueChange={(v) => setPortName(v)}
                          >
                            <SelectTrigger className={cn(
                              "w-full border-blue-300 focus:ring-blue-500 text-blue-900 bg-white",
                              errors.portName && "border-red-500 focus:ring-red-500"
                            )}>
                              <SelectValue placeholder="Select Port" />
                            </SelectTrigger>
                            <SelectContent>
                              {(selectedDestination.portType.find((pt) => pt.type === portType)?.port || []).map((port: string) => (
                                <SelectItem key={port} value={port}>
                                  {port}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.portName && (
                            <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                              <XCircle className="h-3.5 w-3.5" />
                              <span>{errors.portName}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Visa Type */}
              {selectedDestination && (
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Visa Type</Label>
                  <Select
                    value={(() => {
                      if (selectedDestination?.code?.toLowerCase() === "in" && selectedVisaType) {
                        // For India, show canonical display name
                        const canonical = [
                          {
                            key: 'tourist-30d',
                            display: 'Tourist e-Visa (Double entries for 30 days)',
                            match: /tourist.*30\s*days/i,
                          },
                          {
                            key: 'tourist-1y',
                            display: 'Tourist e-Visa (Multiple entries for 1 year)',
                            match: /tourist.*1\s*year/i,
                          },
                          {
                            key: 'tourist-5y',
                            display: 'Tourist e-Visa (Multiple entries for 5 years)',
                            match: /tourist.*5\s*years?/i,
                          },
                          {
                            key: 'business',
                            display: 'Business e-Visa (Multiple entries for 1 year)',
                            match: /business.*1\s*year/i,
                          },
                          {
                            key: 'ayush',
                            display: 'Ayush e-Visa (Triple entries for 60 days)',
                            match: /ayush.*60\s*days/i,
                          },
                          {
                            key: 'medical',
                            display: 'Medical e-Visa (Triple entries for 60 days)',
                            match: /medical.*60\s*days/i,
                          },
                          {
                            key: 'conference',
                            display: 'Conference e-Visa (Triple entries for 30 days)',
                            match: /conference.*30\s*days/i,
                          },
                          {
                            key: 'student',
                            display: 'Student e-Visa (Triple entries for 365 days)',
                            match: /student.*365\s*days/i,
                          },
                          {
                            key: 'x-misc',
                            display: 'e-Emergency X-Misc Visa',
                            match: /emergency|x-misc/i,
                          },
                        ].find((c) => c.match.test(selectedVisaType));
                        
                        return canonical ? canonical.key : selectedVisaType;
                      }
                      return selectedVisaType;
                    })()}
                    onValueChange={(v) => {
                      if (selectedDestination?.code?.toLowerCase() === "in") {
                        // For India, handle canonical visa type selection
                        const canonical = [
                          {
                            key: 'tourist-30d',
                            display: 'Tourist e-Visa (Double entries for 30 days)',
                            match: /tourist.*30\s*days/i,
                          },
                          {
                            key: 'tourist-1y',
                            display: 'Tourist e-Visa (Multiple entries for 1 year)',
                            match: /tourist.*1\s*year/i,
                          },
                          {
                            key: 'tourist-5y',
                            display: 'Tourist e-Visa (Multiple entries for 5 years)',
                            match: /tourist.*5\s*years?/i,
                          },
                          {
                            key: 'business',
                            display: 'Business e-Visa (Multiple entries for 1 year)',
                            match: /business.*1\s*year/i,
                          },
                          {
                            key: 'ayush',
                            display: 'Ayush e-Visa (Triple entries for 60 days)',
                            match: /ayush.*60\s*days/i,
                          },
                          {
                            key: 'medical',
                            display: 'Medical e-Visa (Triple entries for 60 days)',
                            match: /medical.*60\s*days/i,
                          },
                          {
                            key: 'conference',
                            display: 'Conference e-Visa (Triple entries for 30 days)',
                            match: /conference.*30\s*days/i,
                          },
                          {
                            key: 'student',
                            display: 'Student e-Visa (Triple entries for 365 days)',
                            match: /student.*365\s*days/i,
                          },
                          {
                            key: 'x-misc',
                            display: 'e-Emergency X-Misc Visa',
                            match: /emergency|x-misc/i,
                          },
                        ].find((c) => c.key === v);

                        if (canonical) {
                          // Find all matching visa types from database
                          const matching = visaTypes.filter((vt) => canonical.match.test(vt.name));
                          if (matching.length > 0) {
                            // Find the most expensive visa type (like India repo)
                            const mostExpensive = matching.reduce((max, vt) => {
                              const vtFee = vt.fees ?? 0;
                              const maxFee = max.fees ?? 0;
                              return vtFee > maxFee ? vt : max;
                            }, matching[0]);
                            
                            // Set the canonical key for display, but store the actual visa type name
                            setSelectedVisaType(mostExpensive.name);
                            console.log('[India visa selection] Selected canonical:', v, '-> Actual visa:', mostExpensive.name, '-> Fee:', mostExpensive.fees);
                          }
                        }
                      } else {
                        // For other countries, use the visa type name directly
                      setSelectedVisaType(v);
                      }
                      setErrors((prev) => ({ ...prev, visaType: "" }));
                    }}
                  >
                    <SelectTrigger
                      className={cn(
                        "w-full",
                        errors.visaType
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-blue-500"
                      )}
                    >
                      <SelectValue placeholder="Select a visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedDestination?.code?.toLowerCase() === "in" ? (
                        // For India, use canonical visa types like India repo
                        [
                          {
                            key: 'tourist-30d',
                            display: 'Tourist e-Visa (Double entries for 30 days)',
                            match: /tourist.*double.*30.*days/i,
                          },
                          {
                            key: 'tourist-1y',
                            display: 'Tourist e-Visa (Multiple entries for 1 year)',
                            match: /tourist.*multiple.*1.*year/i,
                          },
                          {
                            key: 'tourist-5y',
                            display: 'Tourist e-Visa (Multiple entries for 5 years)',
                            match: /tourist.*multiple.*5.*years/i,
                          },
                          {
                            key: 'business',
                            display: 'Business e-Visa (Multiple entries for 1 year)',
                            match: /business.*multiple.*1.*year/i,
                          },
                          {
                            key: 'ayush',
                            display: 'Ayush e-Visa (Triple entries for 60 days)',
                            match: /ayush.*triple.*60.*days/i,
                          },
                          {
                            key: 'medical',
                            display: 'Medical e-Visa (Triple entries for 60 days)',
                            match: /medical.*triple.*60.*days/i,
                          },
                          {
                            key: 'conference',
                            display: 'Conference e-Visa (Triple entries for 30 days)',
                            match: /conference.*triple.*30.*days/i,
                          },
                          {
                            key: 'student',
                            display: 'Student e-Visa (Triple entries for 365 days)',
                            match: /student.*365\s*days/i,
                          },
                          {
                            key: 'x-misc',
                            display: 'e-Emergency X-Misc Visa',
                            match: /emergency|x-misc/i,
                          },
                        ].map((canonical) => (
                          <SelectItem key={canonical.key} value={canonical.key}>
                            <div className="flex flex-row items-center justify-between gap-2">
                              <span>{canonical.display}</span>
                            </div>
                          </SelectItem>
                        ))
                      ) : (
                        // For other countries, show individual visa types
                        visaTypes.map((v) => (
                        <SelectItem key={v.name} value={v.name}>
                          <div className="flex flex-row items-center justify-between gap-2">
                            <span>{v.name}</span>
                          </div>
                        </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  {errors.visaType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.visaType}
                    </p>
                  )}


                </div>
              )}

              {/* Passenger Count */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">
                  Number of Travelers
                </Label>
                <Select
                  value={passengerCount}
                  onValueChange={(v) => {
                    setPassengerCount(v);
                    setErrors((prev) => ({ ...prev, passengerCount: "" }));
                  }}
                >
                  <SelectTrigger
                    className={cn(
                      "w-full",
                      errors.passengerCount
                        ? "border-red-500 focus:ring-red-500"
                        : "focus:ring-blue-500"
                    )}
                  >
                    <SelectValue placeholder="Select number of passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 15 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1} {i === 0 ? "traveler" : "travelers"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.passengerCount && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.passengerCount}
                  </p>
                )}
              </div>

              {/* Dates */}
              <div className="space-y-1.5">
                <Label className="text-sm font-medium">Travel Dates</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <Label className="text-xs text-slate-500 mb-1 block">
                      From
                    </Label>
                    <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "w-full flex items-center justify-between rounded-md border px-3 py-2 bg-white text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-1",
                            !stayingStart && "text-slate-400",
                            errors.stayingStart
                              ? "border-red-500 focus:ring-red-500"
                              : "focus:ring-blue-500"
                          )}
                        >
                          {stayingStart
                            ? moment(stayingStart).format("DD/MM/YYYY")
                            : "Select date"}
                          <CalendarIcon className="ml-2 h-4 w-4 text-slate-400" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white shadow-lg border border-slate-200"
                        align="start"
                        sideOffset={8}
                      >
                        <Calendar
                          mode="single"
                          selected={
                            stayingStart ? new Date(stayingStart) : undefined
                          }
                          onSelect={(date) => {
                            const newStart = date
                              ? moment(date).format("YYYY-MM-DD")
                              : "";
                            setStayingStart(newStart);
                            setStartDateOpen(false); // Close popover
                            // Validate travel duration if both dates are set
                            if (newStart && stayingEnd) {
                              const travelDays = Math.floor(
                                (new Date(stayingEnd).getTime() -
                                  new Date(newStart).getTime()) /
                                  (1000 * 60 * 60 * 24)
                              );
                              let visaDurationDays = 0;
                              let visaTypeObj = null;
                              if (selectedDestination && selectedVisaType) {
                                visaTypeObj = visaTypes.find(
                                  (v) => v.name === selectedVisaType
                                );
                                if (visaTypeObj && visaTypeObj.fees) {
                                  const visaDurationStr = String(
                                    visaTypeObj.fees
                                  );
                                  const match = visaDurationStr.match(/(\d+)/);
                                  if (match)
                                    visaDurationDays = parseInt(match[1], 10);
                                }
                              }
                              if (
                                visaDurationDays > 0 &&
                                travelDays > visaDurationDays
                              ) {
                                setErrors((prev) => ({
                                  ...prev,
                                  stayingEnd: `Your travel duration (${travelDays} days) exceeds the allowed visa duration (${visaDurationDays} days).`,
                                }));
                              } else {
                                setErrors((prev) => ({
                                  ...prev,
                                  stayingEnd: "",
                                }));
                              }
                            }
                          }}
                          initialFocus
                          disabled={(date) => {
                            // Disable past dates
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.stayingStart && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.stayingStart}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label className="text-xs text-slate-500 mb-1 block">
                      To
                    </Label>
                    <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "w-full flex items-center justify-between rounded-md border px-3 py-2 bg-white text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-1",
                            !stayingEnd && "text-slate-400",
                            errors.stayingEnd
                              ? "border-red-500 focus:ring-red-500"
                              : "focus:ring-blue-500"
                          )}
                        >
                          {stayingEnd
                            ? moment(stayingEnd).format("DD/MM/YYYY")
                            : "Select date"}
                          <CalendarIcon className="ml-2 h-4 w-4 text-slate-400" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-white shadow-lg border border-slate-200"
                        align="start"
                        sideOffset={8}
                      >
                        <Calendar
                          mode="single"
                          selected={
                            stayingEnd ? new Date(stayingEnd) : undefined
                          }
                          onSelect={(date) => {
                            const newEnd = date
                              ? moment(date).format("YYYY-MM-DD")
                              : "";
                            setStayingEnd(newEnd);
                            setEndDateOpen(false); // Close popover
                            // Validate travel duration if both dates are set
                            if (stayingStart && newEnd) {
                              const travelDays = Math.floor(
                                (new Date(newEnd).getTime() -
                                  new Date(stayingStart).getTime()) /
                                  (1000 * 60 * 60 * 24)
                              );
                              let visaDurationDays = 0;
                              let visaTypeObj = null;
                              if (selectedDestination && selectedVisaType) {
                                visaTypeObj = visaTypes.find(
                                  (v) => v.name === selectedVisaType
                                );
                                if (visaTypeObj && visaTypeObj.fees) {
                                  const visaDurationStr = String(
                                    visaTypeObj.fees
                                  );
                                  const match = visaDurationStr.match(/(\d+)/);
                                  if (match)
                                    visaDurationDays = parseInt(match[1], 10);
                                }
                              }
                              if (
                                visaDurationDays > 0 &&
                                travelDays > visaDurationDays
                              ) {
                                setErrors((prev) => ({
                                  ...prev,
                                  stayingEnd: `Your travel duration (${travelDays} days) exceeds the allowed visa duration (${visaDurationDays} days).`,
                                }));
                              } else {
                                setErrors((prev) => ({
                                  ...prev,
                                  stayingEnd: "",
                                }));
                              }
                            }
                          }}
                          initialFocus
                          disabled={(date) => {
                            // Disable dates before start date
                            if (!stayingStart) {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }
                            const start = new Date(stayingStart);
                            return date <= start;
                          }}
                          className="rounded-md border"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {stayingStart && stayingEnd && (
                    <div
                      className={`col-span-full rounded-md p-2.5 border text-sm flex items-center space-x-2 ${
                        errors.stayingEnd
                          ? "bg-red-50 border-red-200 text-red-800"
                          : "bg-blue-50 border-blue-100 text-blue-800"
                      }`}
                    >
                      {errors.stayingEnd ? (
                        <XCircle className="h-4 w-4 text-red-600" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      )}
                      <span>
                        {errors.stayingEnd
                          ? errors.stayingEnd
                          : `${Math.floor(
                              (new Date(stayingEnd).getTime() -
                                new Date(stayingStart).getTime()) /
                                (1000 * 60 * 60 * 24)
                            )} days${
                              selectedDestination
                                ? ` in ${selectedDestination.name}`
                                : ""
                            }`}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Important Visa Notes */}
            </div>

            {/* Contact Information */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
                <div className="bg-blue-100 p-1.5 rounded-full">
                  <svg
                    className="h-4 w-4 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Contact Information
                </h2>
                {(applicationExists || isLoggedIn) && (
                  <span className="ml-auto text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-100">
                    Contact information cannot be changed
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Full Name *</Label>
                  <Input
                    type="text"
                    className={cn(
                      "focus:ring-blue-500",
                      (applicationExists || isLoggedIn) && "bg-slate-50 text-slate-500",
                      errors.fullName && "border-red-500 focus:ring-red-500"
                    )}
                    value={contact.fullName}
                    readOnly={applicationExists || isLoggedIn}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, fullName: e.target.value }))
                    }
                    required
                  />
                  <p className="text-xs text-slate-500">As shown on passport</p>
                  {errors.fullName && (
                    <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                      <XCircle className="h-3.5 w-3.5" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Email Address *</Label>
                  <Input
                    type="email"
                    className={cn(
                      "focus:ring-blue-500",
                      (applicationExists || isLoggedIn) && "bg-slate-50 text-slate-500",
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                    value={contact.email}
                    readOnly={applicationExists || isLoggedIn}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, email: e.target.value }))
                    }
                    required
                  />
                  <p className="text-xs text-slate-500">
                    Your eVisa will be sent to this email
                  </p>
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                      <XCircle className="h-3.5 w-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Country Code *</Label>
                    <Popover open={countryCodeOpen} onOpenChange={setCountryCodeOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className={cn(
                            "w-full flex items-center justify-between rounded-md border px-3 py-2 text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-1",
                            (applicationExists || isLoggedIn) ? "bg-slate-50 text-slate-500" : "bg-white",
                            errors.countryCode && "border-red-500 focus:ring-red-500"
                          )}
                          disabled={applicationExists || isLoggedIn}
                        >
                          <span className="flex items-center gap-2">
                            {COUNTRY_CODES.find(c => c.code === contact.countryCode)?.flag || ""}
                            {contact.countryCode}
                          </span>
                          <span className="ml-2 text-xs text-slate-400">▼</span>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 p-2">
                        <Input
                          placeholder="Search country or code"
                          value={countryCodeSearch}
                          onChange={e => setCountryCodeSearch(e.target.value)}
                          className="mb-2"
                          autoFocus
                        />
                        <div className="max-h-48 overflow-y-auto">
                          {COUNTRY_CODES.filter(c =>
                            c.country.toLowerCase().includes(countryCodeSearch.toLowerCase()) ||
                            c.code.includes(countryCodeSearch)
                          ).map((c, i) => (
                            <button
                              key={`${c.code}-${c.country}-${i}`}
                              type="button"
                              className={cn(
                                "w-full flex items-center gap-2 px-2 py-1 rounded hover:bg-blue-50 text-left",
                                contact.countryCode === c.code && "bg-blue-100 font-semibold"
                              )}
                              onClick={() => {
                                setContact(prev => ({ ...prev, countryCode: c.code }));
                                setCountryCodeOpen(false);
                                setCountryCodeSearch("");
                              }}
                            >
                              <span className="text-lg">{c.flag}</span>
                              <span className="flex-1">{c.country}</span>
                              <span className="text-xs text-slate-500">{c.code}</span>
                            </button>
                          ))}
                          {COUNTRY_CODES.filter(c =>
                            c.country.toLowerCase().includes(countryCodeSearch.toLowerCase()) ||
                            c.code.includes(countryCodeSearch)
                          ).length === 0 && (
                            <div className="text-xs text-slate-400 px-2 py-1">No results</div>
                          )}
                        </div>
                      </PopoverContent>
                    </Popover>
                    {errors.countryCode && (
                      <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                        <XCircle className="h-3.5 w-3.5" />
                        <span>{errors.countryCode}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1.5 col-span-2">
                    <Label className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      type="tel"
                      className={cn(
                        "focus:ring-blue-500",
                      (applicationExists || isLoggedIn) && "bg-slate-50 text-slate-500",
                        errors.phone && "border-red-500 focus:ring-red-500"
                      )}
                      value={contact.phone}
                    readOnly={applicationExists || isLoggedIn}
                      onChange={(e) =>
                        setContact((c) => ({ ...c, phone: e.target.value }))
                      }
                      placeholder="123456789"
                      required
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                        <XCircle className="h-3.5 w-3.5" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <Label className="text-sm font-medium">Gender *</Label>
                  <Select
                    key={`gender-${contact.gender}`}
                    value={contact.gender || ""}
                    onValueChange={(v) => {
                      console.log('Gender changed to:', v);
                      setContact((c) => ({ ...c, gender: v }));
                    }}
                    disabled={applicationExists || isLoggedIn}
                  >
                    <SelectTrigger
                      className={cn(
                        "focus:ring-blue-500",
                        (applicationExists || isLoggedIn) && "bg-slate-50 text-slate-500",
                        errors.gender && "border-red-500 focus:ring-red-500"
                      )}
                    >
                      <SelectValue placeholder="Select gender">
                        {contact.gender || "Select gender"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-slate-500">
                    As shown on official documents
                  </p>
                  {errors.gender && (
                    <div className="flex items-center gap-2 mt-1 text-red-500 text-xs">
                      <XCircle className="h-3.5 w-3.5" />
                      <span>{errors.gender}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>


            
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg shadow-sm transition-colors mt-6 flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>
                    {shouldUpdateExisting ? 'Update & Continue' : 'Continue to Next Step'}
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-center text-slate-800 mb-4 pb-2 border-b border-slate-100">
                Order Summary
              </h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">
                    Destination
                  </span>
                  <span className="font-medium text-blue-700">
                    {selectedDestination?.name ?? "---"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">
                    Type of Visa
                  </span>
                  <span className="text-slate-800 text-xs">
                    {(() => {
                      if (!selectedDestination || !selectedVisaType) return "---";
                      // Always show canonical visa type name
                      const canonical = visaTypes.find(
                        (v) => v.name === selectedVisaType
                      );
                      return canonical ? canonical.name : "---";
                    })()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">Travelers</span>
                  <span className="text-slate-800">{passengerCount}</span>
                </div>

                {/* Government Fee */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Government Fee</span>
                    <span className="text-slate-800">
                    {isIndia 
                      ? "Pending nationality selection"
                      : (selectedDestination && selectedVisaType
                        ? `$${(
                            visaTypes.find(
                              (v) => v.name === selectedVisaType
                            )?.fees ?? 0
                          ).toFixed(2)}`
                        : "---")}
                    </span>
                  </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Service Fee</span>
                  <span className="text-slate-800">
                    ${FIXED_SERVICE_FEE.toFixed(2)}
                  </span>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-3 mt-2 border-t border-slate-200">
                  <p className="font-semibold text-slate-800">Total</p>
                  <p className="font-bold text-lg text-blue-700">
                    {`$${total.toFixed(2)}`}
                  </p>
                </div>

                {/* Secure payment indicator */}
                {selectedDestination && (
                  <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-slate-400 mr-1.5" />
                      Secure SSL encrypted payment
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs text-blue-800">
                          100% Service Fee Refund Guarantee if your visa is
                          rejected
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <SupportSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
