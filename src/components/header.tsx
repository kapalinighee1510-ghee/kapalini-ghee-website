"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAVIGATION, SITE } from "@/data/site";
import { BagIcon, CloseIcon } from "@/components/icons";
import { useCart } from "@/components/cart-provider";
import { useModalFocus } from "@/components/use-modal-focus";

export function Header() {
  const pathname = usePathname();
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useModalFocus(menuOpen, menuRef, closeMenu);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return <>
    <div className="announcement">Kapalini <span aria-hidden="true">✦</span> Har chammach mein apnapan</div>
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner container">
        <Link href="/" className="wordmark" aria-label="Kapalini home">
          <span className="wordmark-main">Kapalini</span><span className="wordmark-sub">कपालिनी</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAVIGATION.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href || (item.href === "/shop" && pathname.startsWith("/product")) ? "active" : ""}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button cart-trigger" onClick={open} aria-label={`Open preview cart, ${count} items`}>
            <BagIcon />{count > 0 && <span className="cart-count">{count}</span>}
          </button>
          <button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
            <span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div className={`mobile-menu-overlay${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
      <button className="overlay-backdrop" tabIndex={menuOpen ? 0 : -1} aria-label="Close menu" onClick={closeMenu} />
      <nav id="mobile-menu" ref={menuRef} className="mobile-menu" aria-label="Mobile navigation" aria-modal={menuOpen ? "true" : undefined} role={menuOpen ? "dialog" : undefined} inert={!menuOpen}>
        <div className="mobile-menu-head"><span className="wordmark-main">{SITE.name}</span><button className="icon-button" onClick={closeMenu} aria-label="Close menu"><CloseIcon /></button></div>
        <div className="mobile-menu-links">{NAVIGATION.map((item, index) => <Link key={item.href} href={item.href} onClick={closeMenu}><span>0{index + 1}</span>{item.label}</Link>)}</div>
        <p>Everyday meals, a little more golden.</p>
      </nav>
    </div>
  </>;
}
