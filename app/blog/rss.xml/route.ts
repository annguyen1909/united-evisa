import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://worldmaxxing.com";
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const title = post.title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      const description = (post.description || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;");
      const pubDate = new Date(post.date).toUTCString();
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
