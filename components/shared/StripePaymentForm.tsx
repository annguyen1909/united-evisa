import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BillingForm, BillingInfo } from "./BillingForm";
import { CheckCircle, Loader2 } from "lucide-react";

export default function CheckoutForm({ amount, applicationId }: { amount: number, applicationId: string }) {
  // For India, always fetch the latest total from the backend
  const [actualAmount, setActualAmount] = useState<number>(amount);

  const fetchLatestTotal = useCallback(async () => {
    try {
      const res = await fetch(`/api/applications/${applicationId}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.destination?.code?.toLowerCase() === 'in' && typeof data.total === 'number') {
          setActualAmount(data.total);
        }
      }
    } catch (e) {
      // ignore
    }
  }, [applicationId]);

  useEffect(() => {
    fetchLatestTotal();
    // Optionally, you could poll or refetch on mount only
  }, [fetchLatestTotal]);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState<{
    lastFourDigits: string;
    cardType: string;
  } | null>(null);
  const [billingInfo, setBillingInfo] = useState<BillingInfo | null>(null);
  const [billingValid, setBillingValid] = useState(false); // <-- ADD THIS LINE
  const [isCardComplete, setIsCardComplete] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleCardChange = (event: any) => {
    setIsCardComplete(event.complete);

    let detectedType = "unknown";
    let last4 = "";

    if (event.complete && event.value) {
      // Stripe's PaymentElement event.value.type gives the payment method
      switch (event.value.type) {
        case "card":
          detectedType = event.value.brand || "Card";
          last4 = event.value.last4 || "";
          break;
        case "amazon_pay":
          detectedType = "Amazon Pay";
          last4 = "";
          break;
        case "cashapp":
          detectedType = "Cash App Pay";
          last4 = "";
          break;
        default:
          detectedType = event.value.type || "unknown";
          last4 = "";
      }

      setCardDetails({
        cardType: detectedType,
        lastFourDigits: last4
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements || !billingInfo) {
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/apply/confirmation?applicationId=${applicationId}`,
          payment_method_data: {
            billing_details: {
              name: billingInfo.name || "",
              address: {
                line1: billingInfo.address || "",
                line2: "", // Always include this, even if empty
                postal_code: billingInfo.zipcode || "",
                country: billingInfo.country || "",
                state: billingInfo.state || "",
                city: billingInfo.city || "",
              },
              email: "",
              phone: "",
            },
          },
        },
        redirect: "if_required",
      });

      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message || "An error occurred");
        } else {
          setMessage("An unexpected error occurred");
        }
        setIsLoading(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        // Only send billing info and paymentIntentId; card details are handled by the backend webhook
        await saveCardholderAndRiskData({
          name: billingInfo.name || "",
          address: billingInfo.address || "",
          zipcode: billingInfo.zipcode || "",
          paymentIntentId: paymentIntent.id,
          applicationId: applicationId,
          amount: actualAmount
        });

        // Redirect to confirmation page
        router.push(`/apply/confirmation?applicationId=${applicationId}`);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setMessage("An error occurred during payment processing");
      setIsLoading(false);
    }
  };

  const saveCardholderAndRiskData = async (data: {
    name: string;
    address: string;
    zipcode: string;
    paymentIntentId: string;
    applicationId: string;
    amount: number;
  }) => {
    try {
      const response = await fetch(`/api/applications/${applicationId}/payment-success`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save payment data");
      }

      return await response.json();
    } catch (error) {
      console.error("Error saving cardholder data:", error);
      throw error;
    }
  };

  const handleBillingInfoComplete = (info: BillingInfo) => {
    setBillingInfo(info);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement id="payment-element" onChange={handleCardChange} options={{
        fields: {
          billingDetails: {
            name: 'never',
            email: 'never',
            phone: 'never',
            address: 'never'
          }
        },
        paymentMethodOrder: ['card'], // <-- Only show card, hide Link
        wallets: {
          link: 'never'
        }
      }} />

      <BillingForm
        onBillingInfoChange={(info, valid) => {
          setBillingInfo(info);
          setBillingValid(valid);
        }}
        isProcessing={isLoading}
      />

      <Button
        disabled={!stripe || !elements || isLoading || !billingInfo || !isCardComplete}
        id="submit"
        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2.5"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" /> Processing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" /> Pay ${actualAmount.toFixed(2)}
          </span>
        )}
      </Button>

      {message && (
        <div className={message.includes("succeeded") ? "text-green-600" : "text-red-600"}>
          {message}
        </div>
      )}
    </form>
  );
}