const INDEXNOW_KEY = "057a73c889124177874c242f864bff9c";
const HOST = "worldmaxxing.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const MAX_URLS_PER_BATCH = 10000;

const extractUrlsFromSitemap = (xml: string) => {
  const urls: string[] = [];
  const regex = /<loc>([^<]+)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(xml)) !== null) {
    const url = match[1]?.trim();
    if (url) urls.push(url);
  }
  return urls;
};

const submitBatch = async (urlList: string[]) => {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return response.ok;
};

export async function GET() {
  try {
    const sitemapRes = await fetch(SITEMAP_URL, { cache: "no-store" });
    if (!sitemapRes.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: "Failed to fetch sitemap" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    const xml = await sitemapRes.text();
    const urls = extractUrlsFromSitemap(xml);
    if (!urls.length) {
      return new Response(
        JSON.stringify({ ok: false, error: "No URLs found in sitemap" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const batches: string[][] = [];
    for (let i = 0; i < urls.length; i += MAX_URLS_PER_BATCH) {
      batches.push(urls.slice(i, i + MAX_URLS_PER_BATCH));
    }

    let successCount = 0;
    for (const batch of batches) {
      const ok = await submitBatch(batch);
      if (ok) successCount += 1;
    }

    return new Response(
      JSON.stringify({
        ok: successCount === batches.length,
        totalUrls: urls.length,
        batches: batches.length,
        submittedBatches: successCount,
      }),
      { status: successCount ? 200 : 502, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: "IndexNow submission failed" }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
}
