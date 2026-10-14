import { SectionHeritage } from "@/components/heritage-ornament";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { CampaignPhoto } from "@/components/campaign-photo";
import { CAMPAIGN_IMAGES, PRODUCT, SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { BrandMark } from "@/components/brand-mark";

export const metadata = pageMetadata("Our Ghee", "Discover Kapalini Shudh Desi Ghee and its place at your table.", "/shop");

export default function ShopPage() {
  return <main id="main"><section className="page-hero shop-hero"><SectionHeritage /><div className="container page-hero-grid"><div data-reveal="slide-left"><span className="eyebrow">The collection / 01</span><h1>Everyday food,<br /><em>golden moments.</em></h1><p>Discover the Kapalini ghee product and the delicious possibilities around it.</p><Link href={SITE.productPath} className="button button-dark">Meet our ghee <ArrowIcon /></Link></div><div className="page-hero-image" data-reveal="pop"><CampaignPhoto image={CAMPAIGN_IMAGES.goldenTable} priority sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>
    <section className="shop-product section-pad"><SectionHeritage /><div className="container"><div className="shop-title-line"><span className="eyebrow">Our product</span><span>01 / 01</span></div><Link href={SITE.productPath} className="shop-card" data-reveal="pop"><div className="shop-card-image"><CampaignPhoto image={CAMPAIGN_IMAGES.heldPack} sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="shop-card-copy"><span className="eyebrow">A golden essential</span><h2 className="branded-product-title"><span className="visually-hidden">{PRODUCT.name}</span><BrandMark decorative /><span aria-hidden="true">Shudh Desi Ghee</span></h2><p>{PRODUCT.description}</p><span className="preview-pill">Demo sizes & prices available in preview</span><span className="underlined-link">Explore the product <ArrowIcon diagonal /></span></div></Link></div></section>
    <section className="shop-bottom"><SectionHeritage light /><div className="container shop-bottom-inner"><span className="eyebrow">At the table</span><h2>More than an ingredient.<br /><em>A familiar feeling.</em></h2><Link href="/about" className="button button-light">Our story <ArrowIcon /></Link></div></section>
  </main>;
}
