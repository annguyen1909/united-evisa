import { getFaqBySlug, getAllFaqSlugs } from "@/lib/faq";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FaqAccordion from "@/components/shared/FaqAccordion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, HelpCircle, MessageCircle, Globe, BookOpen, Clock, Shield } from "lucide-react";
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllFaqSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);

  if (!faq) {
    return {
      title: 'FAQ Not Found | Worldmaxxing Global Services',
      description: 'The requested FAQ page could not be found.',
    };
  }

  return {
    title: `${faq.title} | Worldmaxxing Global Services`,
    description: faq.description || `Frequently asked questions about ${faq.category} eVisa requirements and application process.`,
    keywords: `${faq.category} FAQ, ${faq.category} visa questions, eVisa help, visa requirements`,
    alternates: {
      canonical: `https://visa.worldmaxxing.com/faq/${slug}`,
    },
    openGraph: {
      title: `${faq.title} | Worldmaxxing Global Services`,
      description: faq.description || `Frequently asked questions about ${faq.category} eVisa.`,
      url: `https://visa.worldmaxxing.com/faq/${slug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: faq.image || '/images/hero/hero.jpg',
          width: 1200,
          height: 630,
          alt: `${faq.title} - FAQ`,
        }
      ],
      locale: 'en_US',
      type: 'article',
    },
  };
}

export default async function FaqDetailPage({ params }: Props) {
  const { slug } = await params;
  const faq = getFaqBySlug(slug);

  if (!faq) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {faq.image && (
          <div className="absolute inset-0">
            <Image
              src={faq.image}
              alt={faq.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        )}
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          {/* Back button - positioned on the left */}
          <div className="mb-6">
            <Link 
              href="/faq" 
              className="inline-flex gap-2 text-white/80 hover:text-white group transition-all duration-300"
            >
              <ArrowLeft className="h-6 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to FAQ
            </Link>
          </div>

          {/* Centered content */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">FAQ</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl mx-auto">
              {faq.title}
            </h1>

            {faq.description && (
              <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                {faq.description}
              </p>
            )}

            <div className="flex items-center justify-center gap-6 mt-8 text-emerald-100">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm">{faq.faqs.length} Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* FAQ Content */}
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden mb-8">
          <div className="h-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700" />
          <CardContent className="p-8">
            {faq.faqs.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No FAQ Available</h3>
                <p className="text-slate-500">
                  FAQ content for this destination is coming soon.
                </p>
              </div>
            ) : (
              <FaqAccordion faqs={faq.faqs} destinationSlug={slug} />
            )}
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Still Need Help?
                </h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Our expert team is available 24/7 to assist with your specific questions.
              </p>
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/support">
                  Contact Support
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Ready to Apply?
                </h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Start your visa application process with our secure platform.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/apply">
                  Apply Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden mt-8">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">
              Why Choose Worldmaxxing Global Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-3 bg-emerald-100 rounded-full w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Secure & Trusted</h4>
                <p className="text-sm text-slate-600">Bank-level security with 98% approval rate</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Fast Processing</h4>
                <p className="text-sm text-slate-600">Quick turnaround with transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">24/7 Support</h4>
                <p className="text-sm text-slate-600">Expert assistance whenever you need it</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
