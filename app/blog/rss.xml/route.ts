import { getAllPosts } from "@/lib/blog";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const baseUrl = "https://worldmaxxing.com";
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const rawTitle = post.title ?? post.slug ?? "Blog post";
      const title = escapeXml(String(rawTitle));
      const description = escapeXml(String(post.description ?? ""));
      const dateValue = post.date ? new Date(post.date) : new Date();
      const pubDate = Number.isNaN(dateValue.getTime())
        ? new Date().toUTCString()
        : dateValue.toUTCString();
      const link = `${baseUrl}/blog/${post.slug}`;

      return `
        <item>
          <title>${title}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${pubDate}</pubDate>
          <description>${description}</description>
        </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Worldmaxxing Global Services Blog</title>
        <link>${baseUrl}/blog</link>
        <description>Visa news, travel tips, and eVisa application guidance.</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
