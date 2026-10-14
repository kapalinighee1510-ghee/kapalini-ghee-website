import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="thanks-page"><div className="container"><span className="eyebrow">404 / Page not found</span><h1>Let’s find our way <em>back.</em></h1><p>The page you are looking for is not here.</p><Link href="/" className="button button-dark">Return home <span aria-hidden="true">↗</span></Link></div></main>;
}
