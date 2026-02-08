import { getAllFaqs } from "@/lib/faq";

export async function GET() {
  const baseUrl = "https://unitedevisa.com";
  const faqs = getAllFaqs();

  const items = faqs
    .map((faq) => {
      const title = faq.title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      const description = (faq.description || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;");
      const link = `${baseUrl}/faq/${faq.slug}`;
      const pubDate = new Date().toUTCString();

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
        <title>United eVisa FAQ Center</title>
        <link>${baseUrl}/faq</link>
        <description>Frequently asked questions about eVisas, requirements, and applications.</description>
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
