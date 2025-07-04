"use client";

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { FormEvent, useState, useEffect } from "react";
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

  // Check for payment completion on component mount
  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the client secret from the URL
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // If there's a client secret, it means we've returned from Stripe's redirect
    if (clientSecret) {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        // If payment succeeded, call our API to update the application status
        if (paymentIntent && paymentIntent.status === "succeeded") {
          updateApplicationStatus(applicationId, paymentIntent.id);
        }
      });
    }
  }, [stripe, applicationId]);

  // Function to call our payment success API
  async function updateApplicationStatus(appId: string, paymentIntentId: string) {
    try {
      const response = await fetch(`/api/applications/${appId}/payment-sucess`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntentId,
        }),
      });

      if (!response.ok) {
        console.error("Failed to update application status:", await response.text());
      }
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    // This redirects to the thank-you page with the payment result
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // We'll handle the payment success in the thank-you page
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