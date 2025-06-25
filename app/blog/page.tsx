import { getAllPosts } from "@/lib/blog";
import BlogSearch from "@/components/shared/BlogList";

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogSearch posts={posts} />;
}