"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Eye } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  destinationSlug: string;
}

export default function FaqAccordion({ faqs, destinationSlug }: FaqAccordionProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {faqs.map((item, index) => (
        <Link 
          key={index} 
          href={`/faq/${destinationSlug}/faq-${index + 1}`}
          className="block group"
        >
          <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm cursor-pointer group-hover:bg-emerald-50/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold flex-shrink-0 group-hover:bg-emerald-200 transition-colors duration-300">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {item.answer.substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{Math.ceil(item.answer.split(' ').length / 200)} min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>Detailed answer</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
