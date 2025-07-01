"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/shared/StripePaymentForm";
import { COUNTRIES } from "@/lib/countries";
import { Country } from "@/lib/countries/type";
import SupportSidebar from "@/components/shared/SupportSidebar";
import moment from "moment";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentPage() {
    const [clientSecret, setClientSecret] = useState<string>("");
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [applicationId, setApplicationId] = useState<string>("");
    const [country, setCountry] = useState<Country | null>(null);
    const [visa, setVisa] = useState<any>(null);
    const [step1, setStep1] = useState<any>(null);

    useEffect(() => {
        const stored = sessionStorage.getItem("evisa-apply-step1");
        if (stored) setStep1(JSON.parse(stored));
    }, []);

    useEffect(() => {
        if (!step1) return;

        const country: Country | undefined =
            COUNTRIES.find(
                (c) =>
                    c.slug === step1.selectedCountry?.slug ||
                    c.code === step1.selectedCountry?.code
            );
        const visa =
            country?.visaTypes?.find(
                (v) => v.name === step1.selectedVisaType?.name
            );
        setCountry(country || null);
        setVisa(visa || null);
        const govFee = visa?.govFee ?? 0;
        const serviceFee = country?.etaInfo ? Number(country.etaInfo.serviceFee) : 0;
        const passenger = Number(step1.passengerCount) || 1;
        const total = (govFee + serviceFee) * passenger;
        setTotalAmount(total);
        const appId = sessionStorage.getItem("evisa-application-id");
        if (appId) setApplicationId(appId);

        // Call backend to create payment intent
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: Math.round(total * 100) }) // <-- use Math.round
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret);
            });
    }, [step1]);

    const appearance = { theme: "stripe" as "stripe" };
    const options = { clientSecret, appearance };

    let orderSummary = null;
    if (step1) {
        const destination = country?.name ?? "---";
        const visaName = visa?.name ?? "---";
        const govFee = visa?.govFee ?? 0;
        const serviceFee = country && country.etaInfo ? Number(country.etaInfo.serviceFee) : 0;
        const passenger = Number(step1.passengerCount) || 1;
        const stayingStart = step1.stayingStart;
        const stayingEnd = step1.stayingEnd;
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
                                {country && country.etaInfo ? `$${serviceFee.toFixed(2)}` : "---"}
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
        <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-[2fr_1fr] gap-10">
            <div>
                <h1 className="text-2xl font-bold text-[#16610E] mb-4">Step 3: Secure Payment</h1>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm amount={totalAmount} applicationId={applicationId} />
                    </Elements>
                )}
            </div>
            <div className="space-y-6">
                {orderSummary}
                <SupportSidebar />
            </div>
        </div>
    );
}
