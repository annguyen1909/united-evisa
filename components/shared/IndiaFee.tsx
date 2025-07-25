"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { NATIONALITIES, getNationalityByCode } from '@/lib/nationalities';

interface FeeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  visaType: string;
  feeTable: any;
}

export function FeeModal({ open, onOpenChange, visaType, feeTable }: FeeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-6xl min-h-[30vh] max-h-[90vh] overflow-y-auto"
        style={{ width: "100%" }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Government & admin fee for {visaType}
          </DialogTitle>
          <DialogDescription className="text-gray-600 pt-2">
            The government fee is the amount you have to pay for the Indian Immigration Department to provide your visa.
            The amount of the government fee depends on the country you are a citizen of as well as the type of e-visa you apply for, as shown below.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-medium">Country you are a citizen of</TableHead>
                <TableHead className="font-medium text-center">30 Days e-Tourist Visa</TableHead>
                <TableHead className="font-medium text-center">1 year e-Tourist Visa</TableHead>
                <TableHead className="font-medium text-center">5 years e-Tourist Visa</TableHead>
                <TableHead className="font-medium text-center">1 year e-Business Visa</TableHead>
                <TableHead className="font-medium text-center">Other types of e-Visa</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeTable.map((group: any, index: number) => {
                // Convert all codes/names to display names using lib/nationalities
                const countryNames = group.countries
                  .map((codeOrName: string) => {
                    const code = codeOrName.length === 2 ? codeOrName.toUpperCase() : null;
                    if (code) {
                      const nationality = getNationalityByCode(code);
                      return nationality ? nationality.name : null;
                    } else {
                      // Try to match by name if not a code
                      const nationality = NATIONALITIES.find(
                        (n) => n.name.toLowerCase() === codeOrName.toLowerCase()
                      );
                      return nationality ? nationality.name : null;
                    }
                  })
                  .filter((name: string | null) => !!name);
                return (
                  <TableRow key={index}>
                    <TableCell className="font-normal align-top whitespace-normal">
                      {/* Show only country names, separated by comma, wrap by cell width */}
                      {countryNames.join(', ')}
                    </TableCell>
                    <TableCell className="text-center">US$ {group.govFee["30_days_tourist"]}</TableCell>
                    <TableCell className="text-center">US$ {group.govFee["1_year_tourist"]}</TableCell>
                    <TableCell className="text-center">
                      {group.govFee["5_years_tourist"] === null ? "Not applicable" : `US$ ${group.govFee["5_years_tourist"]}`}
                    </TableCell>
                    <TableCell className="text-center">US$ {group.govFee["1_year_business"]}</TableCell>
                    <TableCell className="text-center">US$ {group.govFee["other_visa"]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}