import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';
import { NATIONALITIES } from '@/lib/nationalities';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

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
    setValue,
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
  const nationalitySelect = NATIONALITIES.map((n) => ({
    value: n.name,
    label: n.code,
  }));

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
  }, [name, address, zipcode, country, city, state, cardType, lastFourDigits, isValid, ]);

  return (
    <Card className="shadow-sm border-slate-200">
      <CardContent className="p-5 space-y-5">
        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Billing Information</h3>
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Cardholder Name</Label>
            <Input
              id="name"
              placeholder="Full Name (as it appears on card)"
              {...register("name", { required: "Cardholder name is required" })}
              className={errors.name ? "border-red-500 focus:ring-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="address">Billing Address</Label>
            <Input
              id="address"
              placeholder="Street Address"
              {...register("address", { required: "Billing address is required" })}
              className={errors.address ? "border-red-500 focus:ring-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="country">Country</Label>
              <Select
                value={country}
                onValueChange={(value) => setValue("country", value, { shouldValidate: true })}
                disabled={isProcessing}
              >
                <SelectTrigger className={cn(
                  "bg-white",
                  errors.country && "border-red-500 focus:ring-red-500"
                )}>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {nationalitySelect.map((nationality) => (
                    <SelectItem key={nationality.value} value={nationality.label}>
                      {nationality.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.country.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="zipcode">Postal/ZIP Code</Label>
              <Input
                id="zipcode"
                placeholder="Postal Code"
                {...register("zipcode", { required: "Postal/ZIP code is required" })}
                className={errors.zipcode ? "border-red-500 focus:ring-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.zipcode && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.zipcode.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                placeholder="City"
                {...register("city", { required: "City is required" })}
                className={errors.city ? "border-red-500 focus:ring-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.city.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="state">State/Province</Label>
              <Input
                id="state"
                placeholder="State or Province"
                {...register("state", { required: "State/Province is required" })}
                className={errors.state ? "border-red-500 focus:ring-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> {errors.state.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}