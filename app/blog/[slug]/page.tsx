import { getAllPosts, getPostBySlug } from "@/lib/blog";
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
        classes += 'text-2xl mt-12 mb-6 text-slate-800 border-b border-blue-100 pb-3';
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
    .replace(/<a([^>]*)>/g, '<a$1 class="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors duration-300">')
    // Style strong/bold text
    .replace(/<strong>/g, '<strong class="text-slate-800 font-semibold">')
    .replace(/<b>/g, '<b class="text-slate-800 font-semibold">')
    // Style emphasis/italic
    .replace(/<em>/g, '<em class="text-slate-700 italic">')
    .replace(/<i>/g, '<i class="text-slate-700 italic">')
    // Style blockquotes
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-blue-500 bg-blue-50 p-6 my-8 text-slate-700 rounded-r-lg not-italic">')
    // Style code elements
    .replace(/<code>/g, '<code class="bg-slate-100 px-2 py-1 rounded text-slate-800 font-mono text-sm">')
    // Style pre blocks
    .replace(/<pre>/g, '<pre class="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto my-8">')
    // Style tables
    .replace(/<table>/g, '<table class="my-8 border-collapse border border-slate-200 w-full">')
    .replace(/<th>/g, '<th class="bg-blue-50 text-blue-800 font-semibold p-4 border border-slate-200 text-left">')
    .replace(/<td>/g, '<td class="p-4 border border-slate-200 text-slate-600">')
    // Style horizontal rules
    .replace(/<hr>/g, '<hr class="my-12 border-blue-200">')
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
      title: 'Blog Post Not Found | United eVisa Services',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | United eVisa Services`,
    description: post.description || `Read about ${post.title} on United eVisa Services blog.`,
    keywords: `${post.title}, visa blog, travel tips, eVisa, United eVisa Services`,
    alternates: {
      canonical: `https://unitedevisa.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | United eVisa Services`,
      description: post.description || `Read about ${post.title} on United eVisa Services blog.`,
      url: `https://unitedevisa.com/blog/${slug}`,
      siteName: 'United eVisa Services',
      images: [
        {
          url: '/images/hero/hero.webp',
          width: 1200,
          height: 630,
          alt: `${post.title} - United eVisa Services Blog`,
        }
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author || 'United eVisa Services'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | United eVisa Services`,
      description: post.description || `Read about ${post.title} on United eVisa Services blog.`,
      images: ['/images/hero/hero.webp'],
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  const baseUrl = "https://unitedevisa.com";
  const canonicalUrl = `${baseUrl}/blog/${slug}`;
  const imagePath = post.image || "/images/hero/hero.webp";
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${baseUrl}${imagePath}`;
  const publishedDate = post.date;
  const modifiedDate = post.updatedAt || post.date;
  const authorName = post.author || "United eVisa Services";

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${baseUrl}/blog` },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": canonicalUrl }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description || `Read about ${post.title} on United eVisa Services blog.`,
        "image": [imageUrl],
        "datePublished": publishedDate,
        "dateModified": modifiedDate,
        "author": post.author
          ? { "@type": "Person", "name": authorName }
          : { "@type": "Organization", "name": authorName },
        "publisher": {
          "@type": "Organization",
          "name": "United eVisa Services",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/logo.png`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      }
    ]
  };

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((item) => item.slug !== slug)
    .filter((item) => {
      if (post.category && item.category === post.category) return true;
      if (post.tags?.length && item.tags?.length) {
        return item.tags.some((tag) => post.tags.includes(tag));
      }
      return false;
    })
    .slice(0, 4);

  const fallbackPosts =
    relatedPosts.length < 4
      ? allPosts
          .filter((item) => item.slug !== slug)
          .filter((item) => !relatedPosts.some((rel) => rel.slug === item.slug))
          .slice(0, 4 - relatedPosts.length)
      : [];

  // Process the HTML content first to add IDs and styling
  const processedContent = processContentHtml(post.contentHtml);
  
  // Extract headings from the processed content
  const headings = extractHeadingsFromHtml(processedContent);
  const mainHeadingsCount = headings.filter((h) => h.level === 2).length;

  return (
    <div className="relative min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
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
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 group transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/90">
              {post.category && (
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-3 py-1">
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
              <div className="flex items-center gap-1 text-sm">
                <ShieldCheck className="h-4 w-4" />
                <span>Reviewed by Visa Compliance Team</span>
              </div>
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
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <BookOpen className="h-5 w-5 text-blue-600" />
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
                                "group flex items-start gap-3 py-2 px-3 rounded-xl hover:bg-blue-50 transition-all duration-300",
                                "border border-transparent hover:border-blue-100",
                                h.level === 2 && "font-semibold text-slate-800",
                                h.level === 3 && "pl-8 text-slate-600 text-sm",
                                h.level === 4 && "pl-12 text-slate-500 text-sm"
                              )}
                            >
                              {h.level === 2 && (
                                <div className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mt-0.5 flex-shrink-0">
                                  {h.number}
                                </div>
                              )}
                              {h.level > 2 && (
                                <div className="w-6 flex justify-center mt-1 flex-shrink-0">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                </div>
                              )}
                              <span className="group-hover:text-blue-600 transition-colors duration-300">
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
                <div className="h-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" />
                
                <div className="p-8 sm:p-12">
                  <div
                    className="prose prose-slate max-w-none text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                  />
                </div>
              </article>

              {/* Related Guides */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">Related guides</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[...relatedPosts, ...fallbackPosts].map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="group rounded-xl border border-slate-200 p-4 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                    >
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                        {item.title}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        {item.category || "Guide"} · {item.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Article Footer */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
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
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                    >
                      <Link href="/apply">Apply Now</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
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
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-blue-600" />
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
                                "group flex items-start gap-3 py-2.5 px-3 rounded-xl hover:bg-blue-50 transition-all duration-300",
                                "border border-transparent hover:border-blue-100",
                                h.level === 2 && "font-semibold text-slate-800",
                                h.level === 3 && "pl-8 text-slate-600 text-sm",
                                h.level === 4 && "pl-12 text-slate-500 text-sm"
                              )}
                            >
                              {h.level === 2 && (
                                <div className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mt-0.5 flex-shrink-0">
                                  {h.number}
                                </div>
                              )}
                              {h.level > 2 && (
                                <div className="w-6 flex justify-center mt-1 flex-shrink-0">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                </div>
                              )}
                              <span className="group-hover:text-blue-600 transition-colors duration-300">
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
