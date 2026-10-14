import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { getSiteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];
  return ["/", "/shop", SITE.productPath, "/about", "/contact", "/faq"].map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 }));
}
