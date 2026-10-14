import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { PRODUCT, SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Our Ghee", "Discover Kapalini Shudh Desi Ghee and its place at your table.", "/shop");

export default function ShopPage() {
  return <main id="main"><section className="page-hero shop-hero"><div className="container page-hero-grid"><div data-reveal><span className="eyebrow">The collection / 01</span><h1>Everyday food,<br /><em>golden moments.</em></h1><p>Discover the Kapalini ghee product and the delicious possibilities around it.</p><Link href={SITE.productPath} className="button button-dark">Meet our ghee <ArrowIcon /></Link></div><div className="page-hero-image" data-reveal><Image src={PRODUCT.images[0].src} alt={PRODUCT.images[0].alt} width={1254} height={1254} priority sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>
    <section className="shop-product section-pad"><div className="container"><div className="shop-title-line"><span className="eyebrow">Our product</span><span>01 / 01</span></div><Link href={SITE.productPath} className="shop-card" data-reveal><div className="shop-card-image"><Image src={PRODUCT.images[0].src} alt={PRODUCT.images[0].alt} width={1254} height={1254} sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="shop-card-copy"><span className="eyebrow">A golden essential</span><h2>{PRODUCT.name}</h2><p>{PRODUCT.description}</p><span className="preview-pill">Demo sizes & prices available in preview</span><span className="underlined-link">Explore the product <ArrowIcon diagonal /></span></div></Link></div></section>
    <section className="shop-bottom"><div className="container shop-bottom-inner"><span className="eyebrow">At the table</span><h2>More than an ingredient.<br /><em>A familiar feeling.</em></h2><Link href="/about" className="button button-light">Our story <ArrowIcon /></Link></div></section>
  </main>;
}
