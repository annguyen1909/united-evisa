import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm"; // <-- Add this import

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  description?: string;
  date: string;
  updatedAt?: string;
  author?: string;
  category?: string;
  tags: string[];
  readTime?: string;
  image?: string;
  featured?: boolean;
  countryCode?: string;
}

export function getAllPosts(): BlogPostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const fileStats = fs.statSync(filePath);
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        description: data.description,
        date: data.date,
        updatedAt: fileStats.mtime.toISOString(),
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        readTime: data.readTime,
        image: data.image,
        featured: data.featured || false,
        countryCode: data.countryCode,
      };
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getPostBySlug(
  slug: string
): Promise<(BlogPostMeta & { contentHtml: string }) | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const fileStats = fs.statSync(filePath);
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm) // <-- Add this line
    .use(remarkRehype)
    .use(rehypeSlug) // Adds IDs to headings like <h2 id="your-heading">
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    date: data.date ?? "2024-01-01",
    updatedAt: fileStats.mtime.toISOString(),
    author: data.author ?? "eVisa United Team",
    category: data.category ?? "General",
    readTime: data.readTime ?? "5 min read",
    image: data.image ?? "",
    featured: data.featured || false,
    countryCode: data.countryCode ?? "",
    tags: data.tags ?? [],
    contentHtml,
  };
}
