import { SectionHeritage } from "@/components/heritage-ornament";
import Link from "next/link";
import { NAVIGATION, SITE } from "@/data/site";
import { ArrowIcon } from "@/components/icons";
import { BrandMark } from "@/components/brand-mark";

export function Footer() {
  return <footer className="site-footer"><SectionHeritage light />
    <div className="container footer-top">
      <div className="footer-brand"><Link href="/" className="footer-wordmark" aria-label="Kapalini home"><BrandMark /></Link><p>A little golden warmth for the meals that bring us together.</p></div>
      <div className="footer-column"><span className="footer-label">Explore</span>{NAVIGATION.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div className="footer-column"><span className="footer-label">Discover</span><Link href={SITE.productPath}>Shudh Desi Ghee</Link><Link href="/faq">FAQs</Link><Link href="/contact">Get in touch <ArrowIcon diagonal /></Link></div>
      <div className="footer-note"><span className="footer-label">Contact</span><a href={SITE.contact.phoneHref}>{SITE.contact.phone}</a><address>{SITE.contact.addressLines.map((line) => <span key={line}>{line}</span>)}</address></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Kapalini</span><span>Made for the moments that matter.</span></div>
  </footer>;
}
