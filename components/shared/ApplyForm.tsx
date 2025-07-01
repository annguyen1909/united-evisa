"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import { CalendarIcon } from "@radix-ui/react-icons";
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

export default function ApplyForm({ user }: { user: any }) {
    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [selectedVisaType, setSelectedVisaType] = useState<string>("");
    const [passengerCount, setPassengerCount] = useState("1");
    const [stayingStart, setStayingStart] = useState("");
    const [stayingEnd, setStayingEnd] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "",
        gender: "",
    });

    const isLoggedIn = !!user;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!selectedCountry) newErrors.country = "Please select a country.";
        if (!selectedVisaType) newErrors.visaType = "Please select a visa type.";
        if (!passengerCount)
            newErrors.passengerCount = "Please select passenger count.";
        if (!stayingStart) newErrors.stayingStart = "Please select start date.";
        if (!stayingEnd) newErrors.stayingEnd = "Please select end date.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const visa = selectedCountry?.visaTypes.find(
            (v) => v.name === selectedVisaType
        );
        const total =
            visa && selectedCountry
                ? (visa.govFee + Number(selectedCountry.etaInfo.serviceFee)) * Number(passengerCount)
                : 0;

        sessionStorage.setItem(
            "evisa-apply-step1",
            JSON.stringify({
                selectedCountry: {
                    slug: selectedCountry?.slug,
                    code: selectedCountry?.code,
                    name: selectedCountry?.name,
                },
                selectedVisaType: {
                    id: visa?.id,
                    name: visa?.name,
                },
                passengerCount,
                stayingStart,
                stayingEnd,
                total,
            })
        );
        router.push(`/apply/passengers?count=${passengerCount}`);
    };

    return (
        <div className="min-h-screen justify-center pb-10 px-4">
            <h1 className="text-2xl font-bold text-center text-[#16610E]">
                Apply for Your eVisa
            </h1>
            <div className="max-w-3xl p-4 lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 col-span-3 border bg-white rounded-lg p-4 shadow-sm"
                >
                    {/* Country */}
                    <div>
                        <label className="block font-medium mb-1">
                            Destination Country
                        </label>
                        <Select
                            onValueChange={(code) => {
                                const country = COUNTRIES.find((c) => c.code === code);
                                setSelectedCountry(country || null);
                                setSelectedVisaType("");
                                setErrors((prev) => ({ ...prev, country: "" }));
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                {COUNTRIES.map((c) => (
                                    <SelectItem key={c.code} value={c.code}>
                                        {c.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.country && (
                            <p className="text-red-600 text-xs mt-1">{errors.country}</p>
                        )}
                    </div>

                    {/* Visa Type */}
                    {selectedCountry && (
                        <div>
                            <label className="block font-medium mb-1">Visa Type</label>
                            <Select
                                value={selectedVisaType}
                                onValueChange={(v) => {
                                    setSelectedVisaType(v);
                                    setErrors((prev) => ({ ...prev, visaType: "" }));
                                }}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a visa type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectedCountry.visaTypes.map((v) => (
                                        <SelectItem key={v.name} value={v.name}>
                                            {v.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.visaType && (
                                <p className="text-red-600 text-xs mt-1">{errors.visaType}</p>
                            )}
                        </div>
                    )}

                    {/* Passenger Count */}
                    <div>
                        <label className="block font-medium mb-1">Passenger Count</label>
                        <Select
                            value={passengerCount}
                            onValueChange={(v) => {
                                setPassengerCount(v);
                                setErrors((prev) => ({ ...prev, passengerCount: "" }));
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select number of passengers" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 15 }, (_, i) => (
                                    <SelectItem key={i + 1} value={String(i + 1)}>
                                        {i + 1}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.passengerCount && (
                            <p className="text-red-600 text-xs mt-1">
                                {errors.passengerCount}
                            </p>
                        )}
                    </div>

                    {/* Dates */}
                    <label className="block font-medium mb-1">Staying Until</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className={cn(
                                            "w-full flex items-center justify-between rounded-md border px-3 py-2 bg-background text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                                            !stayingStart && "text-muted-foreground"
                                        )}
                                    >
                                        {stayingStart
                                            ? moment(stayingStart).format("DD/MM/YYYY")
                                            : "Select date"}
                                        <CalendarIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
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
                                    />
                                </PopoverContent>
                            </Popover>
                            {errors.stayingStart && (
                                <p className="text-red-600 text-xs mt-1">
                                    {errors.stayingStart}
                                </p>
                            )}
                        </div>
                        <div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <button
                                        type="button"
                                        className={cn(
                                            "w-full flex items-center justify-between rounded-md border px-3 py-2 bg-background text-left text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                                            !stayingEnd && "text-muted-foreground"
                                        )}
                                    >
                                        {stayingEnd
                                            ? moment(stayingEnd).format("DD/MM/YYYY")
                                            : "Select date"}
                                        <CalendarIcon className="ml-2 h-4 w-4 text-muted-foreground" />
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
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
                                    />
                                </PopoverContent>
                            </Popover>
                            {errors.stayingEnd && (
                                <p className="text-red-600 text-xs mt-1">{errors.stayingEnd}</p>
                            )}
                        </div>
                        {selectedCountry && (
                            <div className="col-span-full flex items-start bg-white rounded-md">
                                <div className="text-sm text-black italic whitespace-pre-line">
                                    {`Time at ${selectedCountry.name} Date: ---`}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8">
                        <h3 className="text-lg font-manrope font-semibold mb-2 text-[#16610E]">
                            Contact Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            {/* Full Name */}
                            <div>
                                <label className="block font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className={cn(
                                        "w-full border rounded px-3 py-2",
                                        isLoggedIn && "bg-gray-100 text-gray-500 cursor-not-allowed"
                                    )}
                                    value={isLoggedIn ? user?.fullName ?? "" : contact.fullName}
                                    disabled={isLoggedIn}
                                    onChange={(e) =>
                                        setContact((c) => ({ ...c, fullName: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block font-medium mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className={cn(
                                        "w-full border rounded px-3 py-2",
                                        isLoggedIn && "bg-gray-100 text-gray-500 cursor-not-allowed"
                                    )}
                                    value={isLoggedIn ? user?.email ?? "" : contact.email}
                                    disabled={isLoggedIn}
                                    onChange={(e) =>
                                        setContact((c) => ({ ...c, email: e.target.value }))
                                    }
                                    required
                                />
                            </div>
                            {/* Phone */}
                            <div className="flex gap-2">
                                <div className="w-1/3">
                                    <label className="block font-medium text-sm mb-1 whitespace-nowrap">Country Code</label>
                                    <input
                                        type="text"
                                        className={cn(
                                            "w-full border rounded px-3 py-2",
                                            isLoggedIn && "bg-gray-100 text-gray-500 cursor-not-allowed"
                                        )}
                                        value={isLoggedIn ? user?.areaCode ?? "" : contact.countryCode}
                                        disabled={isLoggedIn}
                                        onChange={(e) =>
                                            setContact((c) => ({ ...c, countryCode: e.target.value }))
                                        }
                                        placeholder="+1"
                                        required
                                    />
                                </div>
                                <div className="w-2/3">
                                    <label className="block font-medium text-sm mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        className={cn(
                                            "w-full border rounded px-3 py-2",
                                            isLoggedIn && "bg-gray-100 text-gray-500 cursor-not-allowed"
                                        )}
                                        value={isLoggedIn ? user?.phoneNumber ?? "" : contact.phone}
                                        disabled={isLoggedIn}
                                        onChange={(e) =>
                                            setContact((c) => ({ ...c, phone: e.target.value }))
                                        }
                                        placeholder="123456789"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Gender */}
                            <div>
                                <label className="block font-medium mb-1">Gender</label>
                                <select
                                    className={`w-full border rounded-md px-3 py-2 appearance-none ${isLoggedIn ? "bg-gray-100 text-gray-500" : ""} ${isLoggedIn ? "hide-chevron" : ""}`}
                                    value={isLoggedIn ? user?.gender ?? "" : contact.gender}
                                    onChange={e => setContact(c => ({ ...c, gender: e.target.value }))}
                                    disabled={isLoggedIn}
                                    style={{
                                        backgroundImage: isLoggedIn
                                            ? "none"
                                            : "url(\"data:image/svg+xml,%3Csvg fill='none' stroke='gray' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 0.75rem center",
                                        backgroundSize: "1em 1em"
                                    }}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="bg-[#16610E] hover:bg-[#16610E]/80 text-white w-full mt-6"
                    >
                        Approve to next step
                    </Button>
                </form>

                {/* Order Summary Card */}
                <div className="bg-white border rounded-lg p-4 max-md:col-span-3 col-span-2 shadow-sm space-y-2 h-fit w-full max-w-xl max-md:max-w-2xl mx-auto">
                    <h2 className="text-lg font-semibold mb-2 text-center">
                        Order Summary
                    </h2>

                    {(() => {
                        const destination = selectedCountry?.name ?? "---";
                        const visa = selectedCountry?.visaTypes.find(
                            (v) => v.name === selectedVisaType
                        );
                        const visaName = visa?.name ?? "---";
                        const govFee = visa?.govFee ?? 0;
                        const serviceFee = selectedCountry
                            ? Number(selectedCountry.etaInfo.serviceFee)
                            : 0;
                        const passenger = Number(passengerCount) || 1;
                        const total = visa ? (govFee + serviceFee) * passenger : 0;

                        const isDateValid = stayingStart && stayingEnd;
                        const formattedStart = isDateValid
                            ? moment(stayingStart).format("DD/MM/YYYY")
                            : "---";
                        const formattedEnd = isDateValid
                            ? moment(stayingEnd).format("DD/MM/YYYY")
                            : "---";
                        const durationInMs = isDateValid
                            ? new Date(stayingEnd).getTime() - new Date(stayingStart).getTime()
                            : null;
                        const days =
                            durationInMs !== null
                                ? Math.floor(durationInMs / (1000 * 60 * 60 * 24))
                                : "---";

                        return (
                            <div className="text-sm rounded-xl bg-white space-y-4">
                                {/* Header */}
                                <div className="flex flex-col gap-1 md:flex-row md:justify-between">
                                    <div>
                                        <p className="font-semibold">Destination</p>
                                        <p className="text-gray-700">{destination}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">Staying Time</p>
                                        <p className="text-gray-700">
                                            {formattedStart} - {formattedEnd}
                                        </p>
                                        <p className="text-xs text-gray-700">({days} days)</p>
                                    </div>
                                </div>

                                {/* Visa Type */}
                                <div>
                                    <p className="font-semibold">Type of Visa</p>
                                    <p className="text-gray-700">{visaName}</p>
                                </div>

                                <hr className="border-zinc-300 dark:border-zinc-700" />

                                {/* Fees */}
                                <div className="space-y-2">
                                    <p className="font-semibold">Visa Fees</p>
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Government Fee</p>
                                        <p className="text-gray-700">
                                            {visa ? `$${govFee.toFixed(2)}` : "---"}
                                        </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-gray-700">Visa Fee</p>
                                        <p className="text-gray-700">
                                            {selectedCountry ? `$${serviceFee.toFixed(2)}` : "---"}
                                        </p>
                                    </div>
                                </div>

                                <hr className="border-zinc-300" />

                                {/* Total */}
                                <div className="flex justify-between items-center">
                                    <p className="text-base font-semibold text-green-800">
                                        Total Fees
                                    </p>
                                    <p className="text-base font-bold text-green-800">
                                        {visa ? `$${total.toFixed(2)}` : "---"}
                                    </p>
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </div>
        </div>
    );
}