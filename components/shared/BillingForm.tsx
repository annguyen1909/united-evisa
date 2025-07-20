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
  isProcessing: boolean;
}

export interface BillingInfo {
  name: string;
  address: string;
  country: string;
  zipcode: string;
}

export function BillingForm({
  onBillingInfoChange,
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
      country: "",
    },
  });

  // Watch individual fields
  const name = watch("name");
  const country = watch("country");
  const address = watch("address");
  const zipcode = watch("zipcode");
  const nationalitySelect = NATIONALITIES.map((n) => ({
    value: n.name,
    label: n.name,
  }));

  useEffect(() => {
    onBillingInfoChange(
      {
        name,
        address,
        zipcode,
        country,
      },
      isValid
    );
    // Only run when these values or validity change
  }, [name, address, zipcode, country, isValid]);

  // Add validation for country field
  const validateCountry = (value: string) => {
    if (!value) return "Country is required";
    return true;
  };

  return (
    <Card className="shadow-sm border-slate-200">
      <CardContent className="p-5 space-y-5">
        <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">Billing Information</h3>
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="name">Cardholder Name *</Label>
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
            <Label htmlFor="address">Billing Address *</Label>
            <Input
              id="address"
              placeholder="Street address, city, state"
              {...register("address", { required: "Billing address is required" })}
              className={errors.address ? "border-red-500 focus:ring-red-500" : ""}
              disabled={isProcessing}
            />
            <p className="text-xs text-slate-500">Include street address, city, and state/province</p>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="country">Country *</Label>
              <Select
                value={country}
                onValueChange={(value) => setValue("country", value, { shouldValidate: true })}
                disabled={isProcessing}
              >
                <SelectTrigger className={cn(
                  "bg-white",
                  !country && "border-red-500 focus:ring-red-500"
                )}>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {nationalitySelect.map((nationality) => (
                    <SelectItem key={nationality.value} value={nationality.value}>
                      {nationality.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {!country && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" /> Country is required
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="zipcode">ZIP Code *</Label>
              <Input
                id="zipcode"
                placeholder="ZIP code"
                {...register("zipcode", { required: "ZIP code is required" })}
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
        </div>
      </CardContent>
    </Card>
  );
}