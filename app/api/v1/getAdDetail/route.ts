import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

function parseAnnouncement(html: string) {
  const $ = cheerio.load(html);

  const title = $(".ContentTitle").first().text().trim();

  const content = $(".ContentBody p")
    .map((_, el) => $(el).html()?.trim() || "")
    .get()
    .filter((html) => html.length > 0);

  const attachments = $(".ContentAttach a")
    .map((_, el) => ({
      name: $(el).text().trim(),
      url: $(el).attr("href") || "",
    }))
    .get();

  const contentSignText = $(".ContentSign").text().trim();
  const signParts = contentSignText.split(/\s+/);
  const publisher = signParts.length > 1 ? signParts[0] : "未知";
  const author = signParts.length > 2 ? signParts[1] : "未知";
  const dateRange = signParts.slice(2).join(" ") || "未知";

  return {
    title,
    content,
    attachments,
    publisher,
    author,
    dateRange,
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const encodedUrl = searchParams.get("url");
  if (!encodedUrl) {
    return NextResponse.json({ error: "url is required" }, { status: 400 });
  }
  console.log(encodedUrl);
  const url = decodeURIComponent(encodedUrl);
  const html = await fetch(url).then((res) => res.text());
  const result = parseAnnouncement(html);
  const response = NextResponse.json({ data: result });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
