import type { Metadata } from "next";
import { SITE } from "@/data/site";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (!raw) return null;
  try { return new URL(raw).origin; } catch { return null; }
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const publicUrl = getSiteUrl();
  return {
    title,
    description,
    ...(publicUrl ? { alternates: { canonical: `${publicUrl}${path}` } } : {}),
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      type: "website",
      ...(publicUrl ? { url: `${publicUrl}${path}` } : {}),
      ...(publicUrl ? { images: ["/images/kapalini/kapalini-ghee-product.jpeg"] } : {}),
    },
  };
}
