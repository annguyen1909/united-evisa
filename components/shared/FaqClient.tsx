"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  HelpCircle, 
  Search, 
  ArrowRight, 
  Globe, 
  MessageCircle, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqData {
  slug: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  faqs: FaqItem[];
}

interface FaqClientProps {
  faqs: FaqData[];
  itemsPerPage?: number;
}

export default function FaqClient({ faqs, itemsPerPage = 6 }: FaqClientProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  // Filter FAQs by search term
  const filteredFaqs = faqs.filter(faq => {
    const term = search.toLowerCase();
    return (
      faq.title?.toLowerCase().includes(term) ||
      faq.description?.toLowerCase().includes(term) ||
      faq.category?.toLowerCase().includes(term)
    );
  });

  // Calculate pagination for filtered results
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFaqs = filteredFaqs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <HelpCircle className="h-4 w-4" />
            FAQ Center
          </div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-2xl">
            Clear answers to common questions about eVisa applications, requirements, and travel tips.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="outline" className="border-slate-200 text-slate-700 hover:bg-white">
              <Globe className="mr-2 h-4 w-4" />
              Browse by Country
            </Button>
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Search Section */}
        <div className="mb-12" id="faq-section">
          <Card className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Search className="h-5 w-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Search FAQ by Country or Keyword
                </h2>
              </div>
              <p className="text-slate-600 mb-6">
                Type a country, keyword, or visa type to filter FAQs, or browse all below.
              </p>
              {/* Search Input */}
              <input
                type="text"
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by country, keyword, or visa type..."
                className="w-full mb-8 px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-emerald-200 outline-none text-base text-slate-700 bg-slate-50"
                aria-label="Search FAQs"
              />
              {filteredFaqs.length > 0 && (
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-slate-500">
                    Showing {filteredFaqs.length === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, filteredFaqs.length)} of {filteredFaqs.length} FAQs
                  </p>
                  <p className="text-sm text-slate-500">
                    Page {currentPage} of {totalPages}
                  </p>
                </div>
              )}
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No FAQ matches your search.</p>
                  <p className="text-sm text-slate-400">Try a different keyword or clear your search.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentFaqs.map((faq) => (
                      <Link key={faq.slug} href={`/faq/${faq.slug}`} className="block group">
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm cursor-pointer">
                          {faq.image && (
                            <div className="relative h-48 overflow-hidden">
                              <Image
                                src={faq.image}
                                alt={faq.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                              <div className="absolute top-3 left-3">
                                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30">
                                  {faq.category}
                                </Badge>
                              </div>
                            </div>
                          )}
                          <CardContent className="p-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                              {faq.title}
                            </h3>
                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                              {faq.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-slate-500">
                                {faq.faqs.length} questions
                              </span>
                              <div className="flex items-center gap-1 text-emerald-600 text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                                View FAQ
                                <ArrowRight className="h-3 w-3" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 ${
                              currentPage === page 
                                ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                                : "hover:bg-emerald-50"
                            }`}
                          >
                            {page}
                          </Button>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* General Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Need More Help?
                </h3>
              </div>
              <p className="text-slate-600 mb-6">
                Can't find what you're looking for? Our support team is here to help with your eVisa application.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  Start Your Application
                </h3>
              </div>
              <p className="text-slate-600 mb-6">
                Ready to apply for your eVisa? Get started with our simple and secure application process.
              </p>
              <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                <ArrowRight className="mr-2 h-4 w-4" />
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
