import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Worldmaxxing Global Services',
  description: 'Visa news, travel tips, and updates from Worldmaxxing Global Services.',
  alternates: {
    canonical: 'https://visa.worldmaxxing.com/blog',
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