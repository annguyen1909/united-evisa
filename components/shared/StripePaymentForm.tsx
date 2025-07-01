"use client";

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type CheckoutFormProps = {
  amount: number;
  applicationId: string;
};

export default function CheckoutForm({ amount, applicationId }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/apply/thank-you?applicationId=${applicationId}`,
      },
    });

    if (result.error) {
      setMessage(result.error.message || "An unexpected error occurred.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button
        type="submit"
        disabled={loading || !stripe || !elements}
        className="w-full"
      >
        {loading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
      </Button>
      {message && <div className="text-red-500 text-sm mt-2">{message}</div>}
    </form>
  );
}
