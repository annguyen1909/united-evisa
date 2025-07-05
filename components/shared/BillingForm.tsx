import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface BillingFormProps {
  onBillingInfoChange: (billingInfo: BillingInfo, valid: boolean) => void;
  lastFourDigits?: string;
  cardType?: string;
  isProcessing: boolean;
}

export interface BillingInfo {
  name: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  cardType: string;
  lastFourDigits: string;
}

export function BillingForm({
  onBillingInfoChange,
  lastFourDigits,
  cardType,
  isProcessing,
}: BillingFormProps) {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<BillingInfo>({
    mode: "onChange",
    defaultValues: {
      name: "",
      address: "",
      zipcode: "",
      state: "",
      city: "",
      country: "",
      cardType: cardType || "",
      lastFourDigits: lastFourDigits || "",
    },
  });

  // Watch individual fields
  const name = watch("name");
  const country = watch("country");
  const address = watch("address");
  const zipcode = watch("zipcode");
  const city = watch("city");
  const state = watch("state");


  useEffect(() => {
    onBillingInfoChange(
      {
        name,
        address,
        zipcode,
        state,
        country,
        city,
        cardType: cardType || "",
        lastFourDigits: lastFourDigits || "",
      },
      isValid
    );
    // Only run when these values or validity change
  }, [name, address, zipcode, country, city, cardType, lastFourDigits, isValid]);

  return (
    <div className="mt-6 mb-4 space-y-4">
      <h3 className="text-lg font-semibold mb-4 text-slate-800">Billing Information</h3>
      <div>
        <Label htmlFor="name">Cardholder Name</Label>
        <Input
          id="name"
          placeholder="Full Name (as it appears on card)"
          {...register("name", { required: "Cardholder name is required" })}
          className={errors.name ? "border-red-500" : ""}
          disabled={isProcessing}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.name.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="address">Billing Address</Label>
        <Input
          id="address"
          placeholder="Street Address"
          {...register("address", { required: "Billing address is required" })}
          className={errors.address ? "border-red-500" : ""}
          disabled={isProcessing}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.address.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="zipcode">Postal/ZIP Code</Label>
        <Input
          id="zipcode"
          placeholder="Postal Code"
          {...register("zipcode", { required: "Postal/ZIP code is required" })}
          className={errors.zipcode ? "border-red-500" : ""}
          disabled={isProcessing}
        />
        {errors.zipcode && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.zipcode.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="zipcode">Country</Label>
        <Input
          id="zipcode"
          placeholder="Country"
          {...register("country", { required: "Country is required" })}
          className={errors.country ? "border-red-500" : ""}
          disabled={isProcessing}
        />
        {errors.country && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.country.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="state">State/Province</Label>
        <Input
          id="state"
          placeholder="State or Province"
          {...register("state", { required: "State/Province is required" })}
          className={errors.state ? "border-red-500" : ""}
          disabled={isProcessing}
        />
        {errors.state && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.state.message}
          </p>
        )}
      </div>
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="City"
          {...register("city", { required: "State/Province is required" })}
          className={errors.city ? "border-red-500" : ""}
          disabled={isProcessing}
        />
        {errors.city && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {errors.city.message}
          </p>
        )}
      </div>
    </div>
  );
}