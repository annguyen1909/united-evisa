import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BillingForm, BillingInfo } from "./BillingForm";
import { CheckCircle, Loader2 } from "lucide-react";
import { NATIONALITIES } from "@/lib/nationalities";

// Function to convert country name to ISO code
const getCountryCode = (countryName: string): string => {
  const country = NATIONALITIES.find(n => n.name === countryName);
  return country?.code || "US"; // Default to US if not found
};

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
  const [billingValid, setBillingValid] = useState(false);
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
      console.error("Missing required data:", { stripe: !!stripe, elements: !!elements, billingInfo });
      return;
    }

    // Validate billing info
    if (!billingInfo.name || !billingInfo.address || !billingInfo.zipcode || !billingInfo.country) {
      setMessage("Please fill in all required billing fields");
      return;
    }

    console.log("Submitting payment with billing info:", billingInfo);
    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/apply/confirmation?applicationId=${applicationId}`,
          payment_method_data: {
            billing_details: {
              name: billingInfo.name,
              email: "", // Required when email is set to 'never' in PaymentElement
              phone: "", // Required when phone is set to 'never' in PaymentElement
              address: {
                line1: billingInfo.address,
                line2: "", // Required when address is set to 'never' in PaymentElement
                postal_code: billingInfo.zipcode,
                country: getCountryCode(billingInfo.country),
                state: "", // Required when address is set to 'never' in PaymentElement
                city: "", // Required when address is set to 'never' in PaymentElement
              },
            },
          },
        },
        redirect: "if_required",
      });

      if (error) {
        console.error("Stripe payment error:", error);
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message || "An error occurred");
        } else {
          setMessage("An unexpected error occurred");
        }
        setIsLoading(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("Payment succeeded, saving data...");
        // Only send billing info and paymentIntentId; card details are handled by the backend webhook
        await saveCardholderAndRiskData({
          name: billingInfo.name,
          address: billingInfo.address,
          zipcode: billingInfo.zipcode,
          country: billingInfo.country,
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
    country: string;
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

  const handleBillingInfoComplete = (info: BillingInfo, valid: boolean) => {
    setBillingInfo(info);
    setBillingValid(valid);
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
        paymentMethodOrder: ['card'],
        wallets: {
          link: 'never'
        }
      }} />

        <BillingForm
        onBillingInfoChange={handleBillingInfoComplete}
          isProcessing={isLoading}
        />

      <Button
        type="submit"
        disabled={isLoading || !billingValid || !isCardComplete}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Processing...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Pay ${actualAmount.toFixed(2)}
          </div>
        )}
      </Button>

      {message && (
        <div className="text-center p-4 rounded-lg bg-red-50 border border-red-200">
          <p className="text-red-600">{message}</p>
        </div>
      )}
    </form>
  );
}