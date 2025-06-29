"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import moment from "moment";
import SupportSidebar from "@/components/shared/SupportSidebar";

function generateAppId(destinationCode: string) {
    const random = Math.floor(100000 + Math.random() * 900000);
    return `${destinationCode.toUpperCase()}${random}`;
}

const COUNTRY_LIST = [
    "Vietnam",
    "United States",
    "United Kingdom",
    "Australia",
    "Canada",
    "France",
    "Germany",
    "Japan",
    "Singapore",
    "Thailand",
    // ...add more as needed
];

export default function PaymentPage() {
    const [order, setOrder] = useState<any>(null);
    const [applicationId, setApplicationId] = useState<string>("");

    useEffect(() => {
        const step1 = sessionStorage.getItem("evisa-apply-step1");
        if (step1) {
            const parsed = JSON.parse(step1);
            setOrder(parsed);

            // Try to get existing appId from sessionStorage
            let appId = sessionStorage.getItem("evisa-application-id");
            if (!appId && parsed.selectedCountry?.code) {
                // Generate and store if not present
                appId = generateAppId(parsed.selectedCountry.code);
                sessionStorage.setItem("evisa-application-id", appId);
            }
            if (appId) setApplicationId(appId);
        }
    }, []);

    const [paymentType, setPaymentType] = useState("credit_card");
    const [card, setCard] = useState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        billingAddress: "",
        zip: "",
        billingCountry: "",
        cardCountry: "",
    });

    const handlePay = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Payment submitted!");
    };

    let orderSummary = null;
    if (order) {
        const destination = order.selectedCountry?.name ?? "---";
        const visa = order.selectedCountry?.etaInfo?.visaTypes?.find(
            (v: any) => v.name === order.selectedVisaType
        );
        const visaName = visa?.name ?? "---";
        const govFee = visa?.govFee ?? 0;
        const serviceFee = order.selectedCountry?.etaInfo?.serviceFee
            ? Number(order.selectedCountry.etaInfo.serviceFee)
            : 0;
        const passenger = Number(order.passengerCount) || 1;
        const stayingStart = order.stayingStart;
        const stayingEnd = order.stayingEnd;
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
        const total = visa ? (govFee + serviceFee) * passenger : 0;

        orderSummary = (
            <div className="bg-white border rounded-lg p-4 shadow-sm space-y-2 w-full">
                <h2 className="text-lg font-semibold mb-2 text-center">
                    Order Summary
                </h2>
                <div className="text-sm rounded-xl bg-white space-y-4">
                    <div>
                        <p className="font-semibold">Application ID</p>
                        <p className="text-green-700 font-mono text-lg">{applicationId}</p>
                    </div>
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
                    <div>
                        <p className="font-semibold">Type of Visa</p>
                        <p className="text-gray-700">{visaName}</p>
                    </div>
                    <hr className="border-zinc-300 dark:border-zinc-700" />
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
                                {order.selectedCountry ? `$${serviceFee.toFixed(2)}` : "---"}
                            </p>
                        </div>
                    </div>
                    <hr className="border-zinc-300" />
                    <div className="flex justify-between items-center">
                        <p className="text-base font-semibold text-green-800">Total Fees</p>
                        <p className="text-base font-bold text-green-800">
                            {visa ? `$${total.toFixed(2)}` : "---"}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto pb-10 px-2 sm:px-4">
            <h1 className="text-2xl font-bold text-[#16610E] mt-8 mb-6">
                Step 3: Secure Payment
            </h1>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <form
                    onSubmit={handlePay}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 space-y-8"
                >
                    {/* Payment Type & Card Details */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Payment Type & Card Details</h2>
                        <div className="flex gap-2 border-b pb-2 mb-4">
                            <button
                                type="button"
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-t-md border-b-2 transition-all",
                                    paymentType === "credit_card"
                                        ? "border-[#16610E] bg-[#f6fef7] font-semibold"
                                        : "border-transparent bg-transparent"
                                )}
                                onClick={() => setPaymentType("credit_card")}
                            >
                                <span className="inline-block bg-[#16610E] text-white rounded p-1">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2" fill="currentColor" /></svg>
                                </span>
                                Thẻ
                            </button>
                            <button
                                type="button"
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-t-md border-b-2 transition-all",
                                    paymentType === "amazon"
                                        ? "border-[#16610E] bg-[#f6fef7] font-semibold"
                                        : "border-transparent bg-transparent"
                                )}
                                onClick={() => setPaymentType("amazon")}
                            >
                                <span className="inline-block bg-yellow-400 rounded p-1">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2" fill="currentColor" /></svg>
                                </span>
                                Amazon Pay
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-green-700 text-sm mb-4">
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#16a34a" strokeWidth="2" /><path d="M8 12l2 2 4-4" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Thanh toán bảo mật, chỉ 1 cú nhấp chuột với Link
                        </div>
                        {paymentType === "credit_card" && (
                            <div className="space-y-4">
                                <div className="flex flex-col gap-2">
                                    <Label>Số thẻ</Label>
                                    <div className="relative">
                                        <Input
                                            type="text"
                                            placeholder="1234 1234 1234 1234"
                                            value={card.number}
                                            onChange={e => setCard(c => ({ ...c, number: e.target.value }))}
                                            required
                                            className="pr-16"
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                                            <img src="/visa.svg" alt="Visa" className="h-5" />
                                            <img src="/mastercard.svg" alt="Mastercard" className="h-5" />
                                            <img src="/amex.svg" alt="Amex" className="h-5" />
                                            <img src="/jcb.svg" alt="JCB" className="h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <Label>Ngày hết hạn</Label>
                                        <Input
                                            type="text"
                                            placeholder="MM / YY"
                                            value={card.expiry}
                                            onChange={e => setCard(c => ({ ...c, expiry: e.target.value }))}
                                            required
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Label>Mã bảo mật</Label>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                placeholder="CVC"
                                                value={card.cvc}
                                                onChange={e => setCard(c => ({ ...c, cvc: e.target.value }))}
                                                required
                                            />
                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2" fill="currentColor" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Label>Quốc gia</Label>
                                    <select
                                        className="w-full border rounded px-3 py-2"
                                        value={card.cardCountry}
                                        onChange={e => setCard(c => ({ ...c, cardCountry: e.target.value }))}
                                        required
                                    >
                                        <option value="">Chọn quốc gia</option>
                                        {COUNTRY_LIST.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Billing Information */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 border-b pb-2">Billing Information</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Please provide the complete billing address that matches your payment method. Include street address, city, and state/province in the address field.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label>
                                    Cardholder Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    value={card.name}
                                    onChange={e => setCard(c => ({ ...c, name: e.target.value }))}
                                    required
                                    placeholder="Nguyen Van A"
                                />
                            </div>
                            <div>
                                <Label>
                                    Billing Address <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    value={card.billingAddress}
                                    onChange={e => setCard(c => ({ ...c, billingAddress: e.target.value }))}
                                    required
                                    placeholder="Street address, city, state"
                                />
                            </div>
                            <div>
                                <Label>
                                    ZIP Code <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    value={card.zip}
                                    onChange={e => setCard(c => ({ ...c, zip: e.target.value }))}
                                    required
                                    placeholder="ZIP code"
                                />
                            </div>
                            <div>
                                <Label>
                                    Country <span className="text-red-500">*</span>
                                </Label>
                                <select
                                    className="w-full border rounded px-3 py-2"
                                    value={card.billingCountry}
                                    onChange={e => setCard(c => ({ ...c, billingCountry: e.target.value }))}
                                    required
                                >
                                    <option value="">Select a country</option>
                                    {COUNTRY_LIST.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <p className="text-xs text-red-500 mt-2">* Required fields</p>
                    </div>
                    <Button
                        type="submit"
                        className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-3 rounded-lg"
                    >
                        Pay now
                    </Button>
                </form>
                {/* Right: Order Summary */}
                <div className="flex flex-col gap-6">
                    {orderSummary}
                    <SupportSidebar />
                </div>
            </div>
        </div >

    );
}