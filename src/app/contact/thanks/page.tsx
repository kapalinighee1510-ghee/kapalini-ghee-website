import { SectionHeritage } from "@/components/heritage-ornament";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Message Received", "Thank you for contacting Kapalini.", "/contact/thanks");

export default function ThanksPage() {
  return <main id="main" className="thanks-page"><SectionHeritage /><div className="container" data-reveal><span className="eyebrow">Thank you</span><h1>Your note is <em>on its way.</em></h1><p>If Netlify Forms is enabled for this deployment, your message will be available in its dashboard.</p><Link href="/" className="button button-dark">Back to home <span aria-hidden="true">↗</span></Link></div></main>;
}
