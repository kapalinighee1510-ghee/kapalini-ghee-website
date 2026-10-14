import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { HeroHeritageFrame, SectionHeritage } from "@/components/heritage-ornament";
import { FaqList } from "@/components/faq-list";
import { ProductGallery } from "@/components/product-gallery";
import { ProductTheatre } from "@/components/product-theatre";
import { PurchasePanel } from "@/components/purchase-panel";
import { PRODUCT, SITE } from "@/data/site";

export default function HomePage() {
  return <main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <HeroHeritageFrame />
      <div className="container hero-grid">
        <div className="hero-copy"><div className="hero-eyebrow"><span className="mini-sun" /> A taste of togetherness</div><h1 id="hero-title"><span>A Golden Touch</span><span>of <em>Tradition.</em></span></h1><p className="hero-hindi" lang="hi">हर चम्मच में अपनापन।</p><p className="hero-lede">For the rotis passed around, the dal served warm, and the everyday moments that stay with us.</p><div className="hero-actions"><Link href={SITE.productPath} className="button button-dark">Explore our ghee <ArrowIcon /></Link><Link href="/about" className="underlined-link">Our story <ArrowIcon diagonal /></Link></div><div className="hero-scroll-note"><span className="scroll-line" />Scroll to discover</div></div>
        <div className="hero-art"><div className="hero-arch" aria-hidden="true" /><span className="hero-corner hero-corner-tl" aria-hidden="true">✦</span><span className="hero-corner hero-corner-br" aria-hidden="true">✦</span><div className="hero-photo-wrap"><Image src={PRODUCT.images[0].src} alt={PRODUCT.images[0].alt} width={1254} height={1254} priority sizes="(max-width: 800px) 100vw, 52vw" /></div><div className="hero-art-caption"><span>Kapalini · Shudh Desi Ghee</span><span>01 / 03</span></div></div>
      </div>
    </section>

    <div className="signature-strip"><div className="container signature-inner"><span>Rich aroma</span><i aria-hidden="true">✦</i><span>Golden goodness</span><i aria-hidden="true">✦</i><span>The taste of tradition</span><i aria-hidden="true">✦</i><span>Made for sharing</span></div></div>

    <section className="story-section section-pad" aria-labelledby="story-title"><SectionHeritage /><div className="container story-grid"><div className="story-image-shell" data-reveal><Image src={PRODUCT.images[1].src} alt={PRODUCT.images[1].alt} width={1536} height={1024} sizes="(max-width: 800px) 100vw, 55vw" /><span className="image-edge-label">THE WARMTH OF THE EVERYDAY</span></div><div className="story-copy" data-reveal><span className="eyebrow">From our table to yours</span><h2 id="story-title">Some flavours feel <em>like home.</em></h2><div className="ornament-divider"><span>✦</span></div><p>It is there in the way a roti is finished, in the aroma rising from a bowl of dal, in the sweetness saved for someone special.</p><p>Kapalini belongs in those small, shared rituals. A golden touch for food made with care.</p><Link href="/about" className="underlined-link">Discover the feeling <ArrowIcon diagonal /></Link><span className="story-hindi" lang="hi">स्वाद जो घर सा लगे</span></div></div></section>

    <ProductTheatre />

    <section className="showcase-section section-pad" aria-labelledby="showcase-title"><SectionHeritage /><div className="container"><div className="section-heading split-heading" data-reveal><div><span className="eyebrow">The collection</span><h2 id="showcase-title">One golden <em>essential.</em></h2></div><p>Meet the Kapalini product at the heart of our table.</p></div><div className="showcase-grid"><div data-reveal><ProductGallery compact /></div><div data-reveal><PurchasePanel compact /><Link href={SITE.productPath} className="underlined-link showcase-more">Explore product details <ArrowIcon diagonal /></Link></div></div></div></section>

    <section className="pack-section section-pad" aria-labelledby="pack-title"><SectionHeritage /><div className="container pack-grid"><div className="pack-copy" data-reveal><span className="eyebrow">A closer look inside</span><h2 id="pack-title">From pack <em>to plate.</em></h2><p>The supplied product photograph gives a clear view of how Kapalini is presented.</p><div className="pack-points"><div><span>01</span><div><h3>Branded outer carton</h3><p>The bright yellow carton makes Kapalini instantly recognizable.</p></div></div><div><span>02</span><div><h3>Sealed inner pouch</h3><p>Shown inside the carton in the supplied packaging image.</p></div></div><div><span>03</span><div><h3>Ready for the table</h3><p>Ghee pictured beside the pack in a traditional bowl.</p></div></div></div></div><div className="pack-image" data-reveal><Image src={PRODUCT.images[2].src} alt={PRODUCT.images[2].alt} width={1221} height={1180} sizes="(max-width: 800px) 100vw, 55vw" /><span className="pack-image-label">The details, beautifully presented</span></div></div></section>

    <section id="ways-to-enjoy" className="ways-section section-pad" aria-labelledby="ways-title"><SectionHeritage /><div className="container"><div className="section-heading centered-heading" data-reveal><span className="eyebrow">At your table</span><h2 id="ways-title">Made for Indian <em>kitchens.</em></h2><p>Some of our favourite ways to bring a little warmth to the everyday.</p></div><div className="ways-grid"><article className="way-card way-card-image" data-reveal><Image src={PRODUCT.images[1].src} alt="A spoon of Kapalini ghee finishing fresh rotis" width={1536} height={1024} sizes="(max-width: 800px) 100vw, 40vw" /><div><span>01 / Fresh from the tawa</span><h3>On warm rotis.</h3></div></article><article className="way-card way-card-text" data-reveal><span className="way-mark">✦</span><div><span>02 / A comforting classic</span><h3>With dal & tadka.</h3><p>A finishing spoonful makes the familiar feel special.</p></div></article><article className="way-card way-card-text way-card-dark" data-reveal><span className="way-mark">✦</span><div><span>03 / Something sweet</span><h3>In homemade mithai.</h3><p>For the little celebrations worth sharing.</p></div></article></div></div></section>

    <section className="moment-section" aria-labelledby="moment-title"><SectionHeritage light /><div className="moment-image"><Image src={PRODUCT.images[1].src} alt="Kapalini ghee being spooned over a stack of fresh rotis" width={1536} height={1024} sizes="100vw" /></div><div className="container moment-content" data-reveal><span className="eyebrow">The everyday, elevated</span><h2 id="moment-title">The little touch<br />that makes it <em>special.</em></h2><Link href={SITE.productPath} className="button button-light">Meet Kapalini <ArrowIcon /></Link></div></section>

    <section className="faq-section section-pad" aria-labelledby="faq-title"><SectionHeritage /><div className="container faq-grid"><div className="faq-intro" data-reveal><span className="eyebrow">Good to know</span><h2 id="faq-title">Questions, <em>answered.</em></h2><p>A few useful details about the product and this client preview.</p><Link href="/faq" className="underlined-link">View all questions <ArrowIcon diagonal /></Link></div><div data-reveal><FaqList limit={4} /></div></div></section>

    <section className="closing-section"><SectionHeritage light /><div className="container closing-inner" data-reveal><span className="closing-ornament" aria-hidden="true">✦</span><span className="eyebrow">A seat at the table</span><h2>Bring tradition<br /><em>to your table.</em></h2><p>Explore the golden touch of Kapalini.</p><Link href={SITE.productPath} className="button button-light">Explore Kapalini <ArrowIcon /></Link></div></section>
  </main>;
}
