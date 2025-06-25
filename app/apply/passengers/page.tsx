"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Passenger = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  passportNumber: string;
  nationality: string;
};

export default function PassengersPage() {
  const router = useRouter();

  const [passengerCount, setPassengerCount] = useState(1); // Replace with value from step 1 if needed
  const [passengers, setPassengers] = useState<Passenger[]>(
    Array.from({ length: passengerCount }, () => ({
      fullName: "",
      gender: "",
      dateOfBirth: "",
      passportNumber: "",
      nationality: "",
    }))
  );

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string
  ) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleNext = () => {
    // TODO: Validate before proceeding
    router.push("/apply/review");
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Passenger Information
        </h2>
        <p className="text-muted-foreground">
          Please fill in the details for each passenger.
        </p>
      </div>

      <div className="space-y-6">
        {passengers.map((p, index) => (
          <Card key={index} className="shadow-lg border-primary/20">
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle>
                <span className="text-primary">Passenger {index + 1}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor={`fullName-${index}`}>Full Name</Label>
                  <Input
                    id={`fullName-${index}`}
                    placeholder="Full Name"
                    value={p.fullName}
                    onChange={(e) =>
                      updatePassenger(index, "fullName", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor={`gender-${index}`}>Gender</Label>
                  <select
                    id={`gender-${index}`}
                    value={p.gender}
                    onChange={(e) =>
                      updatePassenger(index, "gender", e.target.value)
                    }
                    className={cn(
                      "mt-1 w-full border rounded px-3 py-2 bg-background text-foreground",
                      !p.gender && "text-muted-foreground"
                    )}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor={`dob-${index}`}>Date of Birth</Label>
                  <Input
                    id={`dob-${index}`}
                    type="date"
                    placeholder="Date of Birth"
                    value={p.dateOfBirth}
                    onChange={(e) =>
                      updatePassenger(index, "dateOfBirth", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor={`passport-${index}`}>Passport Number</Label>
                  <Input
                    id={`passport-${index}`}
                    placeholder="Passport Number"
                    value={p.passportNumber}
                    onChange={(e) =>
                      updatePassenger(index, "passportNumber", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor={`nationality-${index}`}>Nationality</Label>
                  <Input
                    id={`nationality-${index}`}
                    placeholder="Nationality"
                    value={p.nationality}
                    onChange={(e) =>
                      updatePassenger(index, "nationality", e.target.value)
                    }
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end">
        <Button size="lg" className="px-8" onClick={handleNext}>
          Continue to Review
        </Button>
      </div>
    </div>
  );
}