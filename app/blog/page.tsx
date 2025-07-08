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