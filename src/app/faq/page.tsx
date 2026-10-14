import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ArrowIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Frequently Asked Questions", "Answers about Kapalini Shudh Desi Ghee and the current client preview.", "/faq");

export default function FaqPage() {
  return <main id="main"><section className="page-hero faq-page-hero"><div className="container" data-reveal><span className="eyebrow">Good to know</span><h1>Questions, <em>answered.</em></h1><p>A few helpful details about Kapalini and the current preview.</p></div></section><section className="section-pad"><div className="container faq-page-grid"><div className="faq-side" data-reveal><span className="eyebrow">Need something else?</span><h2>Let’s keep the<br />conversation <em>going.</em></h2><Link href="/contact" className="underlined-link">Get in touch <ArrowIcon diagonal /></Link></div><div data-reveal><FaqList /></div></div></section></main>;
}
