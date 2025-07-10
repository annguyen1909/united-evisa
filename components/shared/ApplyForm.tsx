"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import { CalendarIcon, CheckCircle, ArrowRight, ShieldCheck, Clock, CalendarDays } from "lucide-react";
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

// Fixed service fee for all countries
const FIXED_SERVICE_FEE = 59.99;

export default function ApplyForm({ user }: { user: any }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
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
        countryCode: "",
        gender: "",
    });
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        if (COUNTRIES && COUNTRIES.length > 0) setHydrated(true);
    }, [COUNTRIES]);

    // Get URL parameters on component mount
    // Add this useEffect hook right after the state declarations
    // Update your useEffect for URL handling:
    useEffect(() => {
        if (!COUNTRIES || COUNTRIES.length === 0) return; // Wait until COUNTRIES is loaded
        const countryParam = searchParams.get('country');
        const typeParam = searchParams.get('type');
        if (countryParam) {
            const country = COUNTRIES.find(
                c => c.slug?.toLowerCase() === countryParam.toLowerCase()
            );
            if (country) {
                setSelectedCountry(country);
                if (typeParam) {
                    const visaType = country.visaTypes.find(
                        v => v.id?.toLowerCase() === typeParam.toLowerCase()
                    );
                    if (visaType) setSelectedVisaType(visaType.name);
                } else if (country.visaTypes.length > 0) {
                    setSelectedVisaType(country.visaTypes[0].name);
                }
            }
        } else {
            setSelectedCountry(null);
            setSelectedVisaType("");
        }
    }, [searchParams, COUNTRIES]);

    if (!hydrated) return null; // or a loading spinner
    const isLoggedIn = !!user;

    // Special case: hide gov fee in order summary if India
    const isIndia = selectedCountry?.code?.toLowerCase() === "in";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!selectedCountry) newErrors.country = "Please select a country.";
        if (!selectedVisaType && !isIndia) newErrors.visaType = "Please select a visa type.";
        if (!passengerCount) newErrors.passengerCount = "Please select passenger count.";
        if (!stayingStart) newErrors.stayingStart = "Please select start date.";
        if (!stayingEnd) newErrors.stayingEnd = "Please select end date.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        // For India, send a generic visaTypeId like ayush-evisa-india, etc.
        let visa = null;
        let visaTypeIdToSend = undefined;
        if (isIndia) {
            // Find the selected visa type by name (should always exist)
            const visaType = selectedCountry?.visaTypes.find(
                (v) => v.name === selectedVisaType
            );
            visaTypeIdToSend = visaType?.id || undefined;
        } else {
            visa = selectedCountry?.visaTypes.find(
                (v) => v.name === selectedVisaType
            );
            visaTypeIdToSend = visa?.id;
        }

        const total = visa && selectedCountry && !isIndia
            ? (visa.govFee + FIXED_SERVICE_FEE) * Number(passengerCount)
            : FIXED_SERVICE_FEE * Number(passengerCount);

        try {
            setIsSubmitting(true);
            // Create the application directly
            const appRes = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    destinationId: selectedCountry?.slug,
                    destinationCode: selectedCountry?.code,
                    visaTypeId: visaTypeIdToSend,
                    passengerCount: Number(passengerCount),
                    stayingStart,
                    stayingEnd,
                    total,
                    email: isLoggedIn ? user?.email : contact.email,
                }),
            });

            const appData = await appRes.json();

            if (!appRes.ok) {
                throw new Error(appData.error || "Failed to create application");
            }

            // Navigate to passengers page with applicationId as URL parameter
            router.push(`/apply/passengers?applicationId=${appData.applicationId}`);

        } catch (error) {
            console.error("Error creating application:", error);
            alert(error instanceof Error ? error.message : "An error occurred while creating your application");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Calculate total for order summary
    let total = 0;
    if (isIndia) {
        total = FIXED_SERVICE_FEE * Number(passengerCount);
    } else {
        const visa = selectedCountry?.visaTypes.find(v => v.name === selectedVisaType);
        total = visa && selectedCountry
            ? (visa.govFee + FIXED_SERVICE_FEE) * Number(passengerCount)
            : 0;
    }

    return (
        <div className="min-h-screen justify-center pb-10 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto pt-8 pb-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Apply for Your eVisa
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Complete the form below to start your visa application process
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                    >


                        {/* Trip Details Section */}
                        <div className="space-y-5">
                            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
                                <div className="bg-emerald-100 p-1.5 rounded-full">
                                    <CalendarDays className="h-4 w-4 text-emerald-700" />
                                </div>
                                <h2 className="text-lg font-semibold text-slate-800">Trip Details</h2>
                            </div>

                            {/* Country */}
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium">Destination Country</Label>
                                <Select
                                    value={selectedCountry?.slug || ""}
                                    onValueChange={(slug) => {
                                        const country = COUNTRIES.find((c) => c.slug === slug);
                                        setSelectedCountry(country || null);
                                        setSelectedVisaType("");
                                        setErrors((prev) => ({ ...prev, country: "" }));
                                    }}
                                >
                                    <SelectTrigger className={cn(
                                        "w-full",
                                        errors.country ? 'border-red-500 focus:ring-red-500' : 'focus:ring-emerald-500'
                                    )}>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-80">
                                        {COUNTRIES.map((c) => (
                                            <SelectItem key={c.slug} value={c.slug}>
                                                <div className="flex items-center">
                                                    {c.name}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.country && (
                                    <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                                )}

                                {selectedCountry && (
                                    <div className="flex items-center text-sm text-emerald-600 mt-2">
                                        <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                                        <span>{selectedCountry.name} eVisa available online</span>
                                    </div>
                                )}
                            </div>

                            {/* Visa Type */}
                            {selectedCountry && (
                                <div className="space-y-1.5">
                                    <Label className="text-sm font-medium">Visa Type</Label>
                                    <Select
                                        value={selectedVisaType}
                                        onValueChange={(v) => {
                                            setSelectedVisaType(v);
                                            setErrors((prev) => ({ ...prev, visaType: "" }));
                                        }}
                                    >
                                        <SelectTrigger className={cn(
                                            "w-full",
                                            errors.visaType ? 'border-red-500 focus:ring-red-500' : 'focus:ring-emerald-500'
                                        )}>
                                            <SelectValue placeholder="Select a visa type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {selectedCountry.visaTypes.map((v) => (
                                                <SelectItem key={v.name} value={v.name}>
                                                    <div className="flex flex-row items-center justify-between gap-2">
                                                        <span>{v.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.visaType && (
                                        <p className="text-red-500 text-xs mt-1">{errors.visaType}</p>
                                    )}

                                    {selectedVisaType && (
                                        <div className="mt-2 p-2.5 bg-blue-50 rounded-md border border-blue-100">
                                            <p className="text-xs text-blue-700">
                                                {selectedCountry.visaTypes.find(v => v.name === selectedVisaType)?.description ||
                                                    "Selected visa allows entry to the country based on your purpose of visit."}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Passenger Count */}
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium">Number of Travelers</Label>
                                <Select
                                    value={passengerCount}
                                    onValueChange={(v) => {
                                        setPassengerCount(v);
                                        setErrors((prev) => ({ ...prev, passengerCount: "" }));
                                    }}
                                >
                                    <SelectTrigger className={cn(
                                        "w-full",
                                        errors.passengerCount ? 'border-red-500 focus:ring-red-500' : 'focus:ring-emerald-500'
                                    )}>
                                        <SelectValue placeholder="Select number of passengers" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from({ length: 15 }, (_, i) => (
                                            <SelectItem key={i + 1} value={String(i + 1)}>
                                                {i + 1} {i === 0 ? 'traveler' : 'travelers'}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.passengerCount && (
                                    <p className="text-red-500 text-xs mt-1">{errors.passengerCount}</p>
                                )}

                                {Number(passengerCount) > 5 && (
                                    <div className="flex items-center gap-1.5 mt-2 text-sm text-amber-700">
                                        <Clock className="h-3.5 w-3.5" />
                                        <span>Processing large groups may take longer</span>
                                    </div>
                                )}
                            </div>

                            {/* Dates */}
                            <div className="space-y-1.5">
                                <Label className="text-sm font-medium">Travel Dates</Label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                    <div>
                                        <Label className="text-xs text-slate-500 mb-1 block">From</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button
                                                    type="button"
                                                    className={cn(
                                                        "w-full flex items-center justify-between rounded-md border px-3 py-2 bg-white text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-1",
                                                        !stayingStart && "text-slate-400",
                                                        errors.stayingStart
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "focus:ring-emerald-500"
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
                                                    selected={stayingStart ? new Date(stayingStart) : undefined}
                                                    onSelect={(date) =>
                                                        setStayingStart(
                                                            date ? moment(date).format("YYYY-MM-DD") : ""
                                                        )
                                                    }
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
                                        <Label className="text-xs text-slate-500 mb-1 block">To</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <button
                                                    type="button"
                                                    className={cn(
                                                        "w-full flex items-center justify-between rounded-md border px-3 py-2 bg-white text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-1",
                                                        !stayingEnd && "text-slate-400",
                                                        errors.stayingEnd
                                                            ? "border-red-500 focus:ring-red-500"
                                                            : "focus:ring-emerald-500"
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
                                                    selected={stayingEnd ? new Date(stayingEnd) : undefined}
                                                    onSelect={(date) =>
                                                        setStayingEnd(
                                                            date ? moment(date).format("YYYY-MM-DD") : ""
                                                        )
                                                    }
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
                                        {errors.stayingEnd && (
                                            <p className="text-red-500 text-xs mt-1">{errors.stayingEnd}</p>
                                        )}
                                    </div>

                                    {stayingStart && stayingEnd && (
                                        <div className="col-span-full bg-emerald-50 rounded-md p-2.5 border border-emerald-100 text-sm text-emerald-800 flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                                            <span>
                                                {Math.floor((new Date(stayingEnd).getTime() - new Date(stayingStart).getTime()) / (1000 * 60 * 60 * 24))} days
                                                {selectedCountry ? ` at ${selectedCountry.name}` : ''}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Important Visa Notes */}
                            {selectedCountry && selectedVisaType && (
                                <Alert className="bg-amber-50 border-amber-200 text-amber-800">
                                    <AlertDescription className="text-sm">
                                        Ensure your passport remains valid for at least 6 months beyond your planned departure date from {selectedCountry.name}.
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-5 pt-2">
                            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
                                <div className="bg-blue-100 p-1.5 rounded-full">
                                    <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold text-slate-800">Contact Information</h2>
                                {isLoggedIn && (
                                    <span className="ml-auto text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-100">
                                        Using account information
                                    </span>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                {/* Full Name */}
                                <div className="space-y-1.5">
                                    <Label className="text-sm font-medium">Full Name</Label>
                                    <Input
                                        type="text"
                                        className={cn(
                                            "focus:ring-emerald-500",
                                            isLoggedIn && "bg-slate-50 text-slate-500"
                                        )}
                                        value={isLoggedIn ? user?.fullName ?? "" : contact.fullName}
                                        readOnly={isLoggedIn}
                                        onChange={(e) =>
                                            setContact((c) => ({ ...c, fullName: e.target.value }))
                                        }
                                        required
                                    />
                                    <p className="text-xs text-slate-500">As shown on passport</p>
                                </div>

                                {/* Email */}
                                <div className="space-y-1.5">
                                    <Label className="text-sm font-medium">Email Address</Label>
                                    <Input
                                        type="email"
                                        className={cn(
                                            "focus:ring-emerald-500",
                                            isLoggedIn && "bg-slate-50 text-slate-500"
                                        )}
                                        value={isLoggedIn ? user?.email ?? "" : contact.email}
                                        readOnly={isLoggedIn}
                                        onChange={(e) =>
                                            setContact((c) => ({ ...c, email: e.target.value }))
                                        }
                                        required
                                    />
                                    <p className="text-xs text-slate-500">Your eVisa will be sent to this email</p>
                                </div>

                                {/* Phone */}
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="space-y-1.5">
                                        <Label className="text-sm font-medium">Country Code</Label>
                                        <Input
                                            type="text"
                                            className={cn(
                                                "focus:ring-emerald-500",
                                                isLoggedIn && "bg-slate-50 text-slate-500"
                                            )}
                                            value={isLoggedIn ? user?.areaCode ?? "" : contact.countryCode}
                                            readOnly={isLoggedIn}
                                            onChange={(e) =>
                                                setContact((c) => ({ ...c, countryCode: e.target.value }))
                                            }
                                            placeholder="+1"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5 col-span-2">
                                        <Label className="text-sm font-medium">Phone Number</Label>
                                        <Input
                                            type="tel"
                                            className={cn(
                                                "focus:ring-emerald-500",
                                                isLoggedIn && "bg-slate-50 text-slate-500"
                                            )}
                                            value={isLoggedIn ? user?.phoneNumber ?? "" : contact.phone}
                                            readOnly={isLoggedIn}
                                            onChange={(e) =>
                                                setContact((c) => ({ ...c, phone: e.target.value }))
                                            }
                                            placeholder="123456789"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Gender */}
                                <div className="space-y-1.5">
                                    <Label className="text-sm font-medium">Gender</Label>
                                    <Select
                                        value={isLoggedIn ? user?.gender ?? "" : contact.gender}
                                        onValueChange={(v) => setContact(c => ({ ...c, gender: v }))}
                                        disabled={isLoggedIn}
                                    >
                                        <SelectTrigger className={cn(
                                            "focus:ring-emerald-500",
                                            isLoggedIn && "bg-slate-50 text-slate-500"
                                        )}>
                                            <SelectValue placeholder="Select gender" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Male">Male</SelectItem>
                                            <SelectItem value="Female">Female</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <p className="text-xs text-slate-500">As shown on official documents</p>
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg shadow-sm transition-colors mt-6 flex items-center justify-center"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center space-x-2">
                                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <span>Continue to Next Step</span>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            )}
                        </Button>
                    </form>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-6">
                            <h2 className="text-lg font-semibold text-center text-slate-800 mb-4 pb-2 border-b border-slate-100">
                                Order Summary
                            </h2>
                            <div className="space-y-4 text-sm">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-slate-700">Destination</span>
                                    <span className="font-medium text-emerald-700">{selectedCountry?.name ?? "---"}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-slate-700">Type of Visa</span>
                                    <span className="text-slate-800">{isIndia ? "To be selected after passenger info" : selectedVisaType || "---"}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-slate-700">Travelers</span>
                                    <span className="text-slate-800">{passengerCount}</span>
                                </div>

                                {/* Hide Government Fee for India */}
                                {!isIndia && (
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-600">Government Fee</span>
                                        <span className="text-slate-800">{selectedCountry && selectedVisaType ? `$${(selectedCountry.visaTypes.find(v => v.name === selectedVisaType)?.govFee ?? 0).toFixed(2)}` : "---"}</span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-600">Service Fee</span>
                                    <span className="text-slate-800">${FIXED_SERVICE_FEE.toFixed(2)}</span>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center pt-3 mt-2 border-t border-slate-200">
                                    <p className="font-semibold text-slate-800">Total</p>
                                    <p className="font-bold text-lg text-emerald-700">
                                        {`$${total.toFixed(2)}`}
                                    </p>
                                </div>

                                {/* Secure payment indicator */}
                                {selectedCountry && (
                                    <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-slate-100">
                                        <div className="flex items-center text-xs text-slate-500">
                                            <ShieldCheck className="w-4 h-4 text-slate-400 mr-1.5" />
                                            Secure SSL encrypted payment
                                        </div>
                                        <div className="bg-emerald-50 border border-emerald-100 rounded-md p-3">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                                                <span className="text-xs text-emerald-800">
                                                    100% Service Fee Refund Guarantee if your visa is rejected
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}