import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import SupportSidebar from "@/components/shared/SupportSidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// Extract headings for TOC
function extractHeadingsWithNumbers(html: string) {
  const headingRegex = /<h([2-4])[^>]*>(.*?)<\/h\1>/gi;
  const headings: {
    id: string;
    text: string;
    level: number;
    number: string;
  }[] = [];

  let main = 0;
  const sub = [0, 0]; // for h3 and h4

  let match;
  while ((match = headingRegex.exec(html))) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]+>/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (level === 2) {
      main++;
      sub[0] = 0;
      sub[1] = 0;
      headings.push({ id, text, level, number: `${main}` });
    } else if (level === 3) {
      sub[0]++;
      sub[1] = 0;
      headings.push({ id, text, level, number: `${main}.${sub[0]}` });
    } else if (level === 4) {
      sub[1]++;
      headings.push({ id, text, level, number: `${main}.${sub[0]}.${sub[1]}` });
    }
  }

  return headings;
}

// Inject IDs into headings
function injectNumberedHeadingIds(html: string) {
  const headingRegex = /<h([1-4])([^>]*)>(.*?)<\/h\1>/gi;
  const headings: { level: number; content: string }[] = [];

  // Step 1: Extract headings and levels
  let match;
  while ((match = headingRegex.exec(html))) {
    headings.push({ level: parseInt(match[1]), content: match[3] });
  }

  // Step 2: Generate heading numbers
  const numbers: number[] = [];
  const numberedHeadings = headings.map(({ level }) => {
    while (numbers.length < level) numbers.push(0);
    numbers.length = level;
    numbers[level - 1]++;
    // Remove any leading zero
    return numbers.slice(numbers.findIndex((n) => n !== 0)).join(".");
  });

  // Step 3: Replace headings with numbers and IDs
  let index = 0;
  return html.replace(headingRegex, (_match, level, attrs, content) => {
    const cleanText = content.replace(/<[^>]+>/g, "");
    const id = cleanText
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const numberPrefix = numberedHeadings[index++];
    return `<h${level}${attrs} id="${id}" class="scroll-mt-26"><span class="mr-2 font-semibold text-primary">${numberPrefix}.</span>${content}</h${level}>`;
  });
}

interface Props {
  params: { slug: string };
}

export default async function BlogDetail({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const contentWithIds = injectNumberedHeadingIds(post.contentHtml);
  const headings = extractHeadingsWithNumbers(post.contentHtml);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-primary/10 via-white to-blue-50 dark:from-primary/20 dark:to-gray-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-10">
        {/* Main Content Area */}
        <div className="space-y-10">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-primary mb-2 drop-shadow-sm">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-sm text-primary border-primary/30 bg-primary/10"
              >
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Mobile TOC */}
          <div className="xl:hidden mb-6">
            <Card className="shadow border border-border bg-white/80 backdrop-blur-md rounded-xl">
              <CardContent className="py-5 px-4">
                <h2 className="text-lg font-bold text-gray-800 mb-3">
                  🔢 Table of Contents
                </h2>
                <Separator className="mb-4" />
                <ScrollArea className="max-h-[300px] pr-2">
                  <ul className="space-y-2 text-sm text-gray-700">
                    {headings.length === 0 ? (
                      <li className="italic text-muted-foreground">
                        No headings found
                      </li>
                    ) : (
                      headings.map((h) => (
                        <li
                          key={h.id}
                          className={cn(
                            "hover:underline transition-colors",
                            h.level === 2 && "pl-2 font-semibold",
                            h.level === 3 && "pl-4",
                            h.level === 4 && "pl-6"
                          )}
                        >
                          <a href={`#${h.id}`}>
                            <span className="text-primary">{h.number}. </span>
                            {h.text}
                          </a>
                        </li>
                      ))
                    )}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Blog Content */}
          <article className="relative bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-2xl px-4 sm:px-8 md:px-12 py-8 border border-primary/10 backdrop-blur-md transition-all">
            {/* Decorative gradient bar */}
            <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400 rounded-t-2xl" />
            <div
              className="prose prose-neutral max-w-none prose-headings:text-primary prose-a:text-blue-700 hover:prose-a:text-blue-900"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </article>

          {/* Footer */}
          <div className="border-t pt-6 text-sm text-muted-foreground flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>
              This article is part of the Vietnam eVisa Information Center. For
              more updates and detailed guides, visit the{" "}
              <Link
                href="/blog"
                className="text-blue-600 hover:underline font-medium"
              >
                full blog
              </Link>
              .
            </p>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Link
                href="/"
                className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex flex-col gap-6 h-fit">
          {/* TOC */}
          <Card className="shadow-lg border border-border bg-white/90 backdrop-blur-md rounded-xl">
            <CardContent className="py-5 px-6">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                🔢 Table of Contents
              </h2>
              <Separator className="mb-4" />
              <ScrollArea className="max-h-[400px] pr-2">
                <ul className="space-y-2 text-sm text-gray-700">
                  {headings.length === 0 ? (
                    <li className="italic text-muted-foreground">
                      No headings found
                    </li>
                  ) : (
                    headings.map((h) => (
                      <li
                        key={h.id}
                        className={cn(
                          "hover:underline transition-colors",
                          h.level === 2 && "pl-2 font-semibold",
                          h.level === 3 && "pl-4",
                          h.level === 4 && "pl-6"
                        )}
                      >
                        <a href={`#${h.id}`}>
                          <span className="text-primary">{h.number}. </span>
                          {h.text}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
          {/* Support Sidebar */}
          <SupportSidebar />
        </aside>
      </div>
    </div>
  );
}
