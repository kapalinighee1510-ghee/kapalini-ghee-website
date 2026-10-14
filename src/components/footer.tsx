import Link from "next/link";
import { NAVIGATION, SITE } from "@/data/site";
import { ArrowIcon } from "@/components/icons";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand"><Link href="/" className="footer-wordmark">Kapalini<span>कपालिनी</span></Link><p>A little golden warmth for the meals that bring us together.</p></div>
      <div className="footer-column"><span className="footer-label">Explore</span>{NAVIGATION.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div className="footer-column"><span className="footer-label">Discover</span><Link href={SITE.productPath}>Shudh Desi Ghee</Link><Link href="/faq">FAQs</Link><Link href="/contact">Get in touch <ArrowIcon diagonal /></Link></div>
      <div className="footer-note"><span className="footer-label">A note</span><p>This is a client preview. Product sizes, pricing and business contact details shown as placeholders require confirmation before launch.</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Kapalini</span><span>Made for the moments that matter.</span></div>
  </footer>;
}
