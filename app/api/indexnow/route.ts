const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "";
const HOST = "unitedevisa.com";
const KEY_LOCATION = INDEXNOW_KEY ? `https://${HOST}/${INDEXNOW_KEY}.txt` : "";

type IndexNowPayload = {
  urlList: string[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<IndexNowPayload>;
    const urlList = Array.isArray(body.urlList) ? body.urlList : [];

    if (!urlList.length) {
      return new Response(
        JSON.stringify({ ok: false, error: "urlList is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!INDEXNOW_KEY || !KEY_LOCATION) {
      return new Response(
        JSON.stringify({ ok: false, error: "IndexNow key is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

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

    const text = await response.text();
    return new Response(
      JSON.stringify({
        ok: response.ok,
        status: response.status,
        response: text || null,
      }),
      { status: response.ok ? 200 : 502, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, error: "Invalid JSON payload" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}
