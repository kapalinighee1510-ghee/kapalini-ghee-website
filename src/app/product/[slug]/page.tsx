import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/faq-list";
import { ProductGallery } from "@/components/product-gallery";
import { PurchasePanel } from "@/components/purchase-panel";
import { ArrowIcon } from "@/components/icons";
import { PRODUCT } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(PRODUCT.name, "Explore Kapalini Shudh Desi Ghee, its imagery and packaging presentation.", `/product/${PRODUCT.slug}`);
export function generateStaticParams() { return [{ slug: PRODUCT.slug }]; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  if ((await params).slug !== PRODUCT.slug) notFound();
  return <main id="main"><div className="container breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/shop">Our Ghee</Link><span>/</span><span aria-current="page">Shudh Desi Ghee</span></div>
    <section className="product-page-top"><div className="container product-page-grid"><div><ProductGallery /></div><div className="product-page-purchase"><PurchasePanel /><div className="product-accordions"><details><summary>About the product <span>+</span></summary><p>{PRODUCT.description} Please refer to the actual pack for complete product particulars.</p></details><details><summary>Packaging <span>+</span></summary><p>The supplied photograph shows a branded outer carton and sealed inner pouch.</p></details><details><summary>Ordering & delivery <span>+</span></summary><p>This is a client preview. Checkout, delivery and returns information will be added after the business confirms them.</p></details></div></div></div></section>
    <section className="product-editorial section-pad"><div className="container product-editorial-grid"><div className="product-editorial-copy" data-reveal><span className="eyebrow">From pack to plate</span><h2>A little closer <em>to the details.</em></h2><p>See how Kapalini is presented, with its yellow outer carton, sealed inner pouch and a bowl of ghee.</p><Link href="/about" className="underlined-link">More about Kapalini <ArrowIcon diagonal /></Link></div><div data-reveal><Image src={PRODUCT.images[2].src} alt={PRODUCT.images[2].alt} width={1221} height={1180} sizes="(max-width: 800px) 100vw, 55vw" /></div></div></section>
    <section className="faq-section section-pad"><div className="container faq-grid"><div className="faq-intro" data-reveal><span className="eyebrow">Good to know</span><h2>Questions, <em>answered.</em></h2><p>Everything currently confirmed for this preview.</p><Link href="/faq" className="underlined-link">All questions <ArrowIcon diagonal /></Link></div><div data-reveal><FaqList limit={4} /></div></div></section>
  </main>;
}
