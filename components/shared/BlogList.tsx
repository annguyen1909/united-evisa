"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
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

const BLOGS_PER_PAGE = 10;

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

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
  if (page !== 1 && filtered.length <= (page - 1) * BLOGS_PER_PAGE) {
    setPage(1);
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-primary/10 via-white to-blue-50 dark:from-primary/20 dark:to-gray-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">
        {/* Blog List Main Content */}
        <div className="space-y-10">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary drop-shadow-sm">
              Blog Posts
            </h1>
            <Input
              type="text"
              placeholder="Search blog..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1); // Reset to first page on search
              }}
              className="w-full sm:w-80 bg-white shadow"
            />
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-8">
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
                  <Card className="relative w-full max-w-3xl mx-auto p-0 cursor-pointer bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-xl border border-primary/10 hover:scale-[1.01] hover:shadow-2xl transition-all overflow-hidden min-h-0">
                    {/* Decorative gradient bar */}
                    <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-[#16601E] via-green-400 to-green-200" />
                    <CardContent className="flex flex-col gap-3 p-8 pt-7">
                      <h3 className="text-xl font-semibold text-primary group-hover:underline transition line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary bg-primary/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav
              className="flex flex-wrap justify-center items-center gap-2 pt-8"
              aria-label="Pagination"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
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
                  onClick={() => setPage(idx + 1)}
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
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
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
        <aside className="hidden xl:flex flex-col gap-6 sticky top-28 h-fit">
          <SupportSidebar />
          {/* You can add more modern widgets or info here if desired */}
        </aside>
      </div>
    </div>
  );
}
