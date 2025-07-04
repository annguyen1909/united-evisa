"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FeeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  visaType: string;
  feeTable: any;
}

export function FeeModal({ open, onOpenChange, visaType, feeTable }: FeeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
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
              {feeTable.map((group: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium align-top">
                    {group.name.replace(/Group \d+: /, '')}
                  </TableCell>
                  <TableCell className="text-center">US$ {group.fees["30_days_tourist"]}</TableCell>
                  <TableCell className="text-center">US$ {group.fees["1_year_tourist"]}</TableCell>
                  <TableCell className="text-center">
                    {group.fees["5_years_tourist"] === null ? "Not applicable" : `US$ ${group.fees["5_years_tourist"]}`}
                  </TableCell>
                  <TableCell className="text-center">US$ {group.fees["1_year_business"]}</TableCell>
                  <TableCell className="text-center">US$ {group.fees["other_visa"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
}