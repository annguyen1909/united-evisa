import { getAllRequirementsPosts } from "@/lib/requirements-posts";

export async function GET() {
  const baseUrl = "https://unitedevisa.com";
  const posts = getAllRequirementsPosts();

  const items = posts
    .map((post) => {
      const title = post.title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      const description = (post.description || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;");
      const pubDate = post.updatedAt
        ? new Date(post.updatedAt).toUTCString()
        : new Date().toUTCString();
      const link = `${baseUrl}/requirements-posts/${post.slug}`;

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
        <title>United eVisa Visa Requirements</title>
        <link>${baseUrl}/requirements-posts</link>
        <description>Country-specific eVisa requirements, documents, and eligibility guidance.</description>
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
