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

interface Post {
  slug: string;
  title: string;
  tags: string[];
}

const BLOGS_PER_PAGE = 13;

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
    // setPage(newPage); // Not needed, will update via useEffect
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
    <div className="relative w-full">
      <div className="relative w-full h-48 sm:h-64 flex items-center justify-center mb-2 max-md:mb-0 overflow-hidden shadow-sm">
        <img
          src="/images/faq/faq-bg.jpg" // <-- Place your image in public/images/faq-bg.jpg or adjust the path
          alt="FAQs background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-manrope text-white drop-shadow-lg tracking-tight">
            Blogs
          </h1>
          <p className="mt-2 text-lg text-white/90 font-medium drop-shadow-sm hidden sm:block mx-auto max-w-2xl">
            Explore answers to the most common questions about eVisas, travel
            tips for over 40 countries.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">
        {/* Blog List Main Content */}
        <div className="space-y-10">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-manrope text-primary drop-shadow-sm">
              Blog Posts
            </h1>
            <Input
              type="text"
              placeholder="Search blog..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handlePageChange(Math.max(1, page - 1));
              }}
              className="w-full sm:w-80 bg-white shadow"
            />
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-2">
            {paginated.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground py-12">
                No blog posts found.
              </div>
            ) : (
              paginated.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="relative w-full max-w-3xl mx-auto p-0 cursor-pointer bg-white/80 shadow-sm rounded-md border border-primary/20 hover:scale-[1.01] hover:shadow-lg transition-all overflow-hidden min-h-0">
                    {/* Subtle, small gradient bar */}
                    <div className="absolute left-0 top-0 h-2.5 w-32 bg-gradient-to-r from-[#16601E]/90 to-[#16601E]/70 rounded-tl-md rounded-br-md" />
                    <CardContent className="flex flex-col gap-2 p-4.5 pr-16 relative">
                        <h3 className="text-md relative top-1 font-medium text-primary transition-colors duration-300 group-hover:text-[#16601E] line-clamp-2">
                        {post.title}
                        </h3>
                      {/* Arrow Icon */}
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center">
                        <svg
                          className="w-7 h-7 text-primary/60 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav
              className="flex flex-wrap justify-center items-center gap-2"
              aria-label="Pagination"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                disabled={page === 1}
                className={cn(
                  "rounded-full border-primary/30 text-primary bg-white transition",
                  "disabled:opacity-50"
                )}
                aria-label="Previous page"
              >
                <span className="sr-only">Previous</span>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              {[...Array(totalPages)].map((_, idx) => (
                <Button
                  key={idx}
                  variant={page === idx + 1 ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageChange(idx + 1)}
                  className={cn(
                    "rounded-full border-primary/30 cursor-pointer",
                    page === idx + 1
                      ? "bg-[#16601E] hover:bg-[#16601E] text-white"
                      : "bg-white text-primary hover:bg-[#16601E]/10"
                  )}
                  aria-current={page === idx + 1 ? "page" : undefined}
                >
                  {idx + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className={cn(
                  "rounded-full border-primary/30 text-primary bg-white transition",
                  "disabled:opacity-50"
                )}
                aria-label="Next page"
              >
                <span className="sr-only">Next</span>
                <svg
                  width="20"
                  height="20"
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
        <aside className="hidden xl:flex flex-col gap-6 top-28 h-fit">
          <SupportSidebar />
          {/* You can add more modern widgets or info here if desired */}
        </aside>
      </div>
    </div>
  );
}
