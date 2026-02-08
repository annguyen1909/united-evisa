import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | United eVisa Services',
  description: 'Visa news, travel tips, and updates from United eVisa Services.',
  alternates: {
    canonical: 'https://unitedevisa.com/blog',
    types: {
      'application/rss+xml': 'https://unitedevisa.com/blog/rss.xml',
    },
  },
};

import { getAllPosts } from "@/lib/blog";
import BlogSearch from "@/components/shared/BlogList";
import { Suspense } from "react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogSearch posts={posts} />
    </Suspense>
  );
}