import { getIndividualFaq, getAllFaqSlugs, getAllIndividualFaqSlugs } from "@/lib/faq";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import SupportSidebar from "@/components/shared/SupportSidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Metadata } from 'next';

// Extract headings for TOC from markdown content
function extractHeadingsFromHtml(html: string) {
  const headingRegex = /<h([2-4])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/gi;
  const headings: {
    id: string;
    text: string;
    level: number;
    number: string;
  }[] = [];

  let h2Count = 0;
  let h3Count = 0;
  let h4Count = 0;

  let match;
  while ((match = headingRegex.exec(html))) {
    const level = parseInt(match[1]);
    const id = match[2];
    const rawText = match[3];
    // Clean the text by removing any HTML tags and numbered prefixes
    const text = rawText.replace(/<[^>]+>/g, '').replace(/^\d+(\.\d+)*\.\s*/, '').trim();
    
    let number = '';
    if (level === 2) {
      h2Count++;
      h3Count = 0;
      h4Count = 0;
      number = h2Count.toString();
    } else if (level === 3) {
      h3Count++;
      h4Count = 0;
      number = `${h2Count}.${h3Count}`;
    } else if (level === 4) {
      h4Count++;
      number = `${h2Count}.${h3Count}.${h4Count}`;
    }

    headings.push({ id, text, level, number });
  }

  return headings;
}

// Process HTML content to add proper IDs and styling
function processContentHtml(html: string) {
  // Add IDs to headings that don't have them and ensure consistent formatting
  let h2Count = 0;
  let h3Count = 0;
  let h4Count = 0;

  return html
    // Process headings with IDs and numbering
    .replace(/<h([2-4])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, content) => {
      const levelNum = parseInt(level);
      let number = '';
      let id = '';

      // Extract existing ID if present
      const idMatch = attrs.match(/id="([^"]*)"/);
      if (idMatch) {
        id = idMatch[1];
      } else {
        // Generate ID from content
        id = content.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      }

      // Generate section numbers
      if (levelNum === 2) {
        h2Count++;
        h3Count = 0;
        h4Count = 0;
        number = h2Count.toString();
      } else if (levelNum === 3) {
        h3Count++;
        h4Count = 0;
        number = `${h2Count}.${h3Count}`;
      } else if (levelNum === 4) {
        h4Count++;
        number = `${h2Count}.${h3Count}.${h4Count}`;
      }

      const cleanContent = content.replace(/^\d+(\.\d+)*\.\s*/, '');
      
      return `<h${level} id="${id}" class="text-${levelNum === 2 ? '3xl' : levelNum === 3 ? '2xl' : 'xl'} font-bold text-slate-800 mb-6 mt-12 scroll-mt-24 group">
        <span class="text-emerald-600 font-mono mr-3">${number}.</span>
        ${cleanContent}
        <a href="#${id}" class="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-emerald-500 hover:text-emerald-600" aria-label="Link to this section">
          <svg class="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </h${level}>`;
    })
    // Style paragraphs
    .replace(/<p>/g, '<p class="text-lg leading-relaxed text-slate-600 mb-6">')
    // Style lists
    .replace(/<ul>/g, '<ul class="space-y-3 mb-8 text-slate-600">')
    .replace(/<ol>/g, '<ol class="space-y-3 mb-8 text-slate-600 list-decimal list-inside">')
    .replace(/<li>/g, '<li class="flex items-start"><span class="text-emerald-500 mr-3 mt-2 flex-shrink-0">•</span><span class="flex-1 leading-relaxed">')
    .replace(/<\/li>/g, '</span></li>')
    // Style links
    .replace(/<a([^>]*)>/g, '<a$1 class="text-emerald-600 hover:text-emerald-700 underline decoration-2 underline-offset-2 font-medium transition-colors">')
    // Style strong and bold
    .replace(/<strong>/g, '<strong class="font-bold text-slate-800">')
    .replace(/<b>/g, '<b class="font-bold text-slate-800">')
    // Style emphasis and italic
    .replace(/<em>/g, '<em class="text-slate-700 italic">')
    .replace(/<i>/g, '<i class="text-slate-700 italic">')
    // Style blockquotes
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-emerald-500 bg-emerald-50 p-6 my-8 text-slate-700 rounded-r-lg not-italic">')
    // Style code elements
    .replace(/<code>/g, '<code class="bg-slate-100 px-2 py-1 rounded text-slate-800 font-mono text-sm">')
    // Style pre blocks
    .replace(/<pre>/g, '<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-8">')
    // Style tables
    .replace(/<table>/g, '<table class="my-8 border-collapse border border-slate-200 w-full">')
    .replace(/<th>/g, '<th class="bg-emerald-50 text-emerald-800 font-semibold p-4 border border-slate-200 text-left">')
    .replace(/<td>/g, '<td class="p-4 border border-slate-200 text-slate-600">')
    // Style horizontal rules
    .replace(/<hr>/g, '<hr class="my-12 border-emerald-200">')
    // Style images
    .replace(/<img([^>]*)>/g, '<img$1 class="rounded-xl shadow-lg my-8 max-w-full h-auto">');
}

interface Props {
  params: Promise<{ slug: string; 'faq-slug': string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, 'faq-slug': faqSlug } = await params;
  const faq = await getIndividualFaq(slug, faqSlug);

  if (!faq) {
    return {
      title: 'FAQ Not Found | Worldmaxxing Global Services',
      description: 'The requested FAQ could not be found.',
    };
  }

  return {
    title: `${faq.title} | ${faq.category} FAQ | Worldmaxxing Global Services`,
    description: faq.description,
    keywords: `${faq.title}, ${faq.category} FAQ, visa questions, eVisa help, Worldmaxxing Global Services`,
    alternates: {
      canonical: `https://worldmaxxing.com/faq/${slug}/${faqSlug}`,
    },
    openGraph: {
      title: `${faq.title} | ${faq.category} FAQ`,
      description: faq.description,
      url: `https://worldmaxxing.com/faq/${slug}/${faqSlug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: faq.image || '/images/hero/hero.jpg',
          width: 1200,
          height: 630,
          alt: `${faq.title} - ${faq.category} FAQ`,
        }
      ],
      locale: 'en_US',
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const destinationSlugs = getAllFaqSlugs();
  const params: { slug: string; 'faq-slug': string }[] = [];

  for (const destinationSlug of destinationSlugs) {
    const faqSlugs = getAllIndividualFaqSlugs(destinationSlug);
    for (const faqSlug of faqSlugs) {
      params.push({ slug: destinationSlug, 'faq-slug': faqSlug });
    }
  }

  return params;
}

export default async function FaqDetail({ params }: Props) {
  const { slug, 'faq-slug': faqSlug } = await params;
  const faq = await getIndividualFaq(slug, faqSlug);

  if (!faq) {
    notFound();
  }

  // Extract headings from the original HTML before styling
  const headings = extractHeadingsFromHtml(faq.content);
  const processedContent = processContentHtml(faq.content);

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
              href={`/faq/${slug}`}
              className="inline-flex gap-2 text-white/80 hover:text-white group transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to {faq.category} FAQ
            </Link>
          </div>

          {/* Centered content */}
          <div className="text-center">
            {/* Meta info */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-white/90">
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-3 py-1">
                <Tag className="h-3 w-3 mr-1" />
                {faq.category} FAQ
              </Badge>
              {faq.date && (
                <div className="flex items-center gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{faq.date}</span>
                </div>
              )}
              {faq.readTime && (
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{faq.readTime}</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>Reviewed by Visa Compliance Team</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-bold leading-tight text-white mb-4 max-w-4xl mx-auto">
              {faq.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Get the answer to your {faq.category} visa question
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-12">
            {/* Article Content */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-8 sm:p-12">
                    <div 
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: processedContent }}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Support CTA */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-emerald-50 to-teal-50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      Still have questions?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                      Our expert team is here to help you with your {faq.category} visa application. 
                      Get personalized assistance and ensure your application is successful.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                        <Share2 className="mr-2 h-4 w-4" />
                        Contact Support
                      </Button>
                      <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        <BookOpen className="mr-2 h-4 w-4" />
                        View All {faq.category} FAQs
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm sticky top-6">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Table of contents
                    </h4>
                    <ScrollArea className="h-[300px]">
                      <nav className="space-y-2">
                        {headings.map((heading) => (
                          <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            className={cn(
                              "block text-sm hover:text-emerald-600 transition-colors duration-200 py-1",
                              heading.level === 2 && "font-semibold text-slate-700",
                              heading.level === 3 && "pl-4 text-slate-600",
                              heading.level === 4 && "pl-8 text-slate-500"
                            )}
                          >
                            <span className="text-emerald-600 font-mono mr-2">
                              {heading.number}.
                            </span>
                            {heading.text}
                          </a>
                        ))}
                      </nav>
                    </ScrollArea>
                  </CardContent>
                </Card>
              )}

              {/* Support Sidebar */}
              <SupportSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
