"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Post {
    slug: string;
    title: string;
    tags: string[];
}

export default function BlogSearch({ posts }: { posts: Post[] }) {
    const [query, setQuery] = useState("");

    const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
            <Input
                type="text"
                placeholder="Search blog..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full max-w-md bg-white"
            />

            <div className="space-y-4">
                {filtered.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block transition-transform hover:scale-[1.01] hover:shadow-md rounded-xl"
                    >
                        <Card className="w-full h-full p-0 cursor-pointer hover:shadow-lg transition">
                            <CardContent className="flex flex-col gap-3 p-4 sm:p-6">
                                {/* Row with number + title */}
                                <div className="flex items-center pl-12">
                                    <h3 className="text-base sm:text-xl font-semibold text-primary">
                                        {post.title}
                                    </h3>
                                </div>

                                {/* Tags under the title */}
                                <div className="flex flex-wrap gap-2 pl-12">
                                    {post.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-xs border-primary/30 text-primary"
                                        >
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
