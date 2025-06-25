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
  countryCode: string;
  tags: string[];
}

export function getAllPosts(): BlogPostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title ?? "Untitled",
        countryCode: data.countryCode ?? "",
        tags: data.tags ?? [],
      };
    });
}

export async function getPostBySlug(
  slug: string
): Promise<(BlogPostMeta & { contentHtml: string }) | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
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
    countryCode: data.countryCode ?? "",
    tags: data.tags ?? [],
    contentHtml,
  };
}
