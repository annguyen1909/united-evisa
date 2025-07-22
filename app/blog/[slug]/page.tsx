import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import SupportSidebar from "@/components/shared/SupportSidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, BookOpen } from "lucide-react";
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
  return html
    .replace(/<h([2-4])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attrs, content) => {
      const cleanText = content.replace(/<[^>]+>/g, '').replace(/^\d+(\.\d+)*\.\s*/, '').trim();
      const id = cleanText
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      // Check if ID already exists in attrs
      const hasId = /id\s*=\s*["'][^"']*["']/.test(attrs);
      const idAttr = hasId ? attrs : `${attrs} id="${id}"`;
      
      // Add level-specific styling
      let classes = 'scroll-mt-24 group font-manrope font-bold ';
      if (level === '2') {
        classes += 'text-2xl mt-12 mb-6 text-slate-800 border-b border-emerald-100 pb-3';
      } else if (level === '3') {
        classes += 'text-xl mt-8 mb-4 text-slate-700';
      } else if (level === '4') {
        classes += 'text-lg mt-6 mb-3 text-slate-600';
      }
      
      return `<h${level}${idAttr} class="${classes}">${content}</h${level}>`;
    })
    // Style paragraphs
    .replace(/<p>/g, '<p class="text-slate-600 leading-relaxed mb-6">')
    // Style lists
    .replace(/<ul>/g, '<ul class="mb-6 space-y-2 list-disc list-inside">')
    .replace(/<ol>/g, '<ol class="mb-6 space-y-2 list-decimal list-inside">')
    .replace(/<li>/g, '<li class="text-slate-600 leading-relaxed">')
    // Style links
    .replace(/<a([^>]*)>/g, '<a$1 class="text-emerald-600 font-semibold hover:text-emerald-700 hover:underline transition-colors duration-300">')
    // Style strong/bold text
    .replace(/<strong>/g, '<strong class="text-slate-800 font-semibold">')
    .replace(/<b>/g, '<b class="text-slate-800 font-semibold">')
    // Style emphasis/italic
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
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Worldmaxxing Global Services',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Worldmaxxing Global Services`,
    description: post.description || `Read about ${post.title} on Worldmaxxing Global Services blog.`,
    keywords: `${post.title}, visa blog, travel tips, eVisa, Worldmaxxing Global Services`,
    alternates: {
      canonical: `https://visa.worldmaxxing.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Worldmaxxing Global Services`,
      description: post.description || `Read about ${post.title} on Worldmaxxing Global Services blog.`,
      url: `https://visa.worldmaxxing.com/blog/${slug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: '/images/hero/hero.jpg',
          width: 1200,
          height: 630,
          alt: `${post.title} - Worldmaxxing Global Services Blog`,
        }
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: ['Worldmaxxing Global Services'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Worldmaxxing Global Services`,
      description: post.description || `Read about ${post.title} on Worldmaxxing Global Services blog.`,
      images: ['/images/hero/hero.jpg'],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  // Process the HTML content first to add IDs and styling
  const processedContent = processContentHtml(post.contentHtml);
  
  // Extract headings from the processed content
  const headings = extractHeadingsFromHtml(processedContent);
  const mainHeadingsCount = headings.filter((h) => h.level === 2).length;

  return (
    <div className="relative min-h-screen w-full">
      {/* Hero Section with Background */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={post.image || "/images/blog/default-blog-hero.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Back button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/90">
              {post.category && (
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 px-3 py-1">
                  <Tag className="h-3 w-3 mr-1" />
                  {post.category}
                </Badge>
              )}
              <div className="flex items-center gap-1 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              )}
              {post.author && (
                <div className="flex items-center gap-1 text-sm">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-bold leading-tight text-white mb-4 max-w-4xl">
              {post.title}
            </h1>

            {/* Description */}
            {post.description && (
              <p className="text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
                {post.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-12">
            {/* Article Content */}
            <div className="space-y-8">
              {/* Mobile TOC */}
              <div className="xl:hidden">
                <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-800 font-manrope">
                          Table of Contents
                        </h2>
                      </div>
                    </div>
                    <Separator className="mb-4" />
                    <ScrollArea className="max-h-[350px]">
                      {headings.length === 0 ? (
                        <div className="text-center py-8">
                          <div className="text-slate-400 text-sm">
                            No headings found in this article
                          </div>
                        </div>
                      ) : (
                        <nav className="space-y-1">
                          {headings.map((h, index) => (
                            <a
                              key={`${h.id}-${index}`}
                              href={`#${h.id}`}
                              className={cn(
                                "group flex items-start gap-3 py-2 px-3 rounded-xl hover:bg-emerald-50 transition-all duration-300",
                                "border border-transparent hover:border-emerald-100",
                                h.level === 2 && "font-semibold text-slate-800",
                                h.level === 3 && "pl-8 text-slate-600 text-sm",
                                h.level === 4 && "pl-12 text-slate-500 text-sm"
                              )}
                            >
                              {h.level === 2 && (
                                <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mt-0.5 flex-shrink-0">
                                  {h.number}
                                </div>
                              )}
                              {h.level > 2 && (
                                <div className="w-6 flex justify-center mt-1 flex-shrink-0">
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                </div>
                              )}
                              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                                {h.text}
                              </span>
                            </a>
                          ))}
                        </nav>
                      )}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>

              {/* Article Body */}
              <article className="bg-white shadow-xl rounded-2xl overflow-hidden border-0">
                {/* Decorative header */}
                <div className="h-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700" />
                
                <div className="p-8 sm:p-12">
                  <div
                    className="max-w-none text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                  />
                </div>
              </article>

              {/* Article Footer */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex-1">
                    <p className="text-slate-700 font-medium mb-2">
                      Need help with your visa application?
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      This article is part of our comprehensive eVisa guide. For personalized assistance and fast processing, contact our expert team.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      asChild 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                    >
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      <Link href="/support">Get Help</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden xl:block space-y-6">
              {/* TOC */}
              <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden sticky top-[90px] mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-800 font-manrope">
                        Table of Contents
                      </h2>
                    </div>
                  </div>
                  <Separator className="mb-4" />
                  {/* Make TOC scrollable and add top padding for navbar overlap */}
                  <div className="relative">
                    <div className="overflow-y-auto max-h-[500px] pr-2" style={{scrollPaddingTop: '0px'}}>
                      {headings.length === 0 ? (
                        <div className="text-center py-8">
                          <div className="text-slate-400 text-sm">
                            No headings found in this article
                          </div>
                        </div>
                      ) : (
                        <nav className="space-y-1">
                          {headings.map((h, index) => (
                            <a
                              key={`${h.id}-${index}`}
                              href={`#${h.id}`}
                              className={cn(
                                "group flex items-start gap-3 py-2.5 px-3 rounded-xl hover:bg-emerald-50 transition-all duration-300",
                                "border border-transparent hover:border-emerald-100",
                                h.level === 2 && "font-semibold text-slate-800",
                                h.level === 3 && "pl-8 text-slate-600 text-sm",
                                h.level === 4 && "pl-12 text-slate-500 text-sm"
                              )}
                            >
                              {h.level === 2 && (
                                <div className="flex items-center justify-center w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mt-0.5 flex-shrink-0">
                                  {h.number}
                                </div>
                              )}
                              {h.level > 2 && (
                                <div className="w-6 flex justify-center mt-1 flex-shrink-0">
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                </div>
                              )}
                              <span className="group-hover:text-emerald-600 transition-colors duration-300">
                                {h.text}
                              </span>
                            </a>
                          ))}
                        </nav>
                      )}
                    </div>
                    {/* Removed overlay for navbar effect so TOC is always visible */}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
