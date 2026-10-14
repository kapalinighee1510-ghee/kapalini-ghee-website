import type { Metadata, Viewport } from "next";
import { CartProvider } from "@/components/cart-provider";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/reveal-observer";
import { SITE } from "@/data/site";
import { getSiteUrl } from "@/lib/metadata";
import "./globals.css";

const publicUrl = getSiteUrl();

export const metadata: Metadata = {
  title: { default: `${SITE.name} — Shudh Desi Ghee`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  ...(publicUrl ? { metadataBase: new URL(publicUrl), alternates: { canonical: publicUrl } } : {}),
  openGraph: { title: SITE.name, description: SITE.description, type: "website", ...(publicUrl ? { images: ["/images/kapalini/kapalini-ghee-product.jpeg"] } : {}) },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FAF3E4" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><CartProvider><Header /><RevealObserver />{children}<Footer /><CartDrawer /></CartProvider></body></html>;
}
