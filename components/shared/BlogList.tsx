"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SupportSidebar from "@/components/shared/SupportSidebar";
import { Search, Calendar, ArrowRight, Tag } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  tags: string[];
  date?: string;
  excerpt?: string;
  image?: string;
}

const BLOGS_PER_PAGE = 8;

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Get page from URL, default to 1
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(pageFromUrl);

  // Sync page state with URL
  useEffect(() => {
    setPage(pageFromUrl);
  }, [pageFromUrl]);

  // Update URL when page changes
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  // Reset to first page when query changes
  useEffect(() => {
    if (page !== 1 && filtered.length <= (page - 1) * BLOGS_PER_PAGE) {
      handlePageChange(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filtered.length]);

  return (
    <div className="relative w-full bg-slate-50/50">
      {/* Hero section */}
      <div className="relative w-full h-64 sm:h-80 flex items-center justify-center mb-2 max-md:mb-0 overflow-hidden">
        <img
          src="/images/faq/faq-bg.jpg"
          alt="Blogs background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 to-emerald-800/70" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight mb-3">
            Travel Insights & Tips
          </h1>
          <p className="mt-2 text-lg text-white/90 font-medium drop-shadow-sm hidden sm:block mx-auto max-w-2xl">
            Expert advice, destination guides, and visa information to help you plan your perfect journey.
          </p>
          
          {/* Search bar in hero */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Input
              type="text"
              placeholder="Search articles by keyword or country..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handlePageChange(1);
              }}
              className="pl-10 py-6 pr-4 rounded-full bg-white/95 shadow-lg border-0 focus-visible:ring-emerald-500"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">
        {/* Blog List Main Content */}
        <div className="space-y-8">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800">
              Latest Articles
              {query && <span className="text-lg ml-2 font-normal text-slate-600">for "{query}"</span>}
            </h2>
            <div className="text-sm text-slate-500">
              Showing {paginated.length} of {filtered.length} articles
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginated.length === 0 ? (
              <div className="col-span-full text-center text-slate-500 py-16 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col items-center gap-3">
                  <Search className="h-12 w-12 text-slate-300" />
                  <h3 className="text-xl font-semibold text-slate-700">No articles found</h3>
                  <p className="max-w-md text-slate-500">
                    We couldn't find any articles matching your search. Try using different keywords.
                  </p>
                </div>
              </div>
            ) : (
              paginated.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-md transition-all duration-300 overflow-hidden border-slate-200 hover:border-emerald-200 bg-white">
                    {/* Optional image */}
                    {post.image && (
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <CardContent className="px-5">                  
                      {/* Date */}
                      {post.date && (
                        <div className="flex items-center text-xs text-slate-500 mb-2">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          {post.date}
                        </div>
                      )}
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      
                      {/* Read more link */}
                      <div className="flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav className="flex flex-wrap justify-center items-center gap-2 pt-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                disabled={page === 1}
                className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                aria-label="Previous page"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              
              {totalPages <= 7 ? (
                // Show all pages if 7 or fewer
                [...Array(totalPages)].map((_, idx) => (
                  <Button
                    key={idx}
                    variant={page === idx + 1 ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePageChange(idx + 1)}
                    className={cn(
                      "rounded-full",
                      page === idx + 1
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                        : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                    )}
                  >
                    {idx + 1}
                  </Button>
                ))
              ) : (
                // Show limited pages with ellipsis for many pages
                <>
                  <Button
                    variant={page === 1 ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePageChange(1)}
                    className={cn(
                      "rounded-full",
                      page === 1
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                        : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                    )}
                  >
                    1
                  </Button>
                  
                  {page > 3 && <span className="text-slate-400">...</span>}
                  
                  {page > 2 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handlePageChange(page - 1)}
                      className="rounded-full bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                    >
                      {page - 1}
                    </Button>
                  )}
                  
                  {page !== 1 && page !== totalPages && (
                    <Button
                      variant="default"
                      size="icon"
                      className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white"
                    >
                      {page}
                    </Button>
                  )}
                  
                  {page < totalPages - 1 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handlePageChange(page + 1)}
                      className="rounded-full bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                    >
                      {page + 1}
                    </Button>
                  )}
                  
                  {page < totalPages - 2 && <span className="text-slate-400">...</span>}
                  
                  <Button
                    variant={page === totalPages ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePageChange(totalPages)}
                    className={cn(
                      "rounded-full",
                      page === totalPages
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                        : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                    )}
                  >
                    {totalPages}
                  </Button>
                </>
              )}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                aria-label="Next page"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </nav>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex flex-col gap-6">
          {/* Popular Topics */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Tag className="h-5 w-5 mr-2 text-emerald-600" />
              Popular Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(posts.flatMap(post => post.tags))).slice(0, 12).map(tag => (
                <Badge 
                  key={tag} 
                  className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-700 cursor-pointer"
                  onClick={() => {
                    setQuery(tag);
                    handlePageChange(1);
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <SupportSidebar />
        </aside>
      </div>
    </div>
  );
}