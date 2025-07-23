import { getAllFaqs } from "@/lib/faq";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, Search, ArrowRight, Globe, MessageCircle, BookOpen } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Worldmaxxing Global Services',
  description: 'Find answers to common questions about eVisa applications, requirements, processing times, and travel tips for destinations worldwide.',
  keywords: 'FAQ, eVisa questions, visa help, travel FAQ, visa requirements',
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Worldmaxxing Global Services',
    description: 'Find answers to common questions about eVisa applications, requirements, processing times, and travel tips.',
    url: 'https://visa.worldmaxxing.com/faq',
    siteName: 'Worldmaxxing Global Services',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Worldmaxxing Global Services FAQ',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function FaqPage() {
  const faqs = getAllFaqs();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero.jpg"
            alt="FAQ Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Help Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Frequently Asked <span className="text-emerald-200">Questions</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about eVisa applications, requirements, and travel information
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Search className="h-5 w-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Search FAQ by Country
                </h2>
              </div>
              <p className="text-slate-600 mb-6">
                Select a country below to view specific visa requirements and frequently asked questions.
              </p>
              
              {faqs.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No FAQ content available yet.</p>
                  <p className="text-sm text-slate-400">Check back soon for comprehensive FAQ guides.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {faqs.map((faq) => (
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
                Can't find what you're looking for? Our expert team is here to help with personalized assistance.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/support">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Link href="/blog">
                    <Globe className="h-4 w-4 mr-2" />
                    Browse Guides
                  </Link>
                </Button>
              </div>
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
                Ready to apply? Get started with your eVisa application and let our platform guide you through the process.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/apply">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Apply Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
