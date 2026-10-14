import { SectionHeritage } from "@/components/heritage-ornament";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { CampaignPhoto } from "@/components/campaign-photo";
import { CAMPAIGN_IMAGES, SITE } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Our Story", "Explore the everyday food moments that inspire the Kapalini brand presentation.", "/about");

export default function AboutPage() {
  return <main id="main"><section className="page-hero about-hero"><SectionHeritage /><div className="container about-hero-inner" data-reveal><span className="eyebrow">Our story</span><h1>Some flavours feel<br /><em>like home.</em></h1><p>Kapalini is imagined around a familiar feeling: the joy of food made and shared with care.</p><span className="hindi-note" lang="hi">हर चम्मच में अपनापन।</span></div></section>
    <section className="about-photo-section"><SectionHeritage /><div className="container about-photo" data-reveal="pop"><CampaignPhoto image={CAMPAIGN_IMAGES.welcomeTray} priority sizes="100vw" /><span>For the moments around the table</span></div></section>
    <section className="about-content section-pad"><SectionHeritage /><div className="container about-content-grid"><div data-reveal><span className="eyebrow">The feeling behind the food</span><h2>A small ritual.<br /><em>A lasting memory.</em></h2></div><div data-reveal><p>In many Indian homes, the finishing touch is never just about the recipe. It is about the person who made it, the table where it is shared, and the warmth that lingers after.</p><p>From fresh rotis to dal and homemade sweets, Kapalini is presented as a part of those everyday food moments.</p><p className="about-disclaimer">This page shares a creative brand direction. The company’s history and production details will be added when verified.</p><Link href={SITE.productPath} className="button button-dark">Explore our ghee <ArrowIcon /></Link></div></div></section>
    <section className="about-quote"><SectionHeritage /><div className="container" data-reveal><span aria-hidden="true">✦</span><blockquote>“The best meals always make room for one more.”</blockquote><p>Kapalini · Made for sharing</p></div></section>
  </main>;
}
