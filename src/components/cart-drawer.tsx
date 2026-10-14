"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { PRODUCT, SITE } from "@/data/site";
import { useCart } from "@/components/cart-provider";
import { CloseIcon } from "@/components/icons";
import { useModalFocus } from "@/components/use-modal-focus";

export function CartDrawer() {
  const { lines, count, isOpen, close, update, remove } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closePanel = useCallback(() => close(), [close]);
  useModalFocus(isOpen, panelRef, closePanel);
  return <div className={`drawer-root${isOpen ? " open" : ""}`} aria-hidden={!isOpen}>
    <button className="drawer-backdrop" onClick={close} aria-label="Close enquiry list" tabIndex={isOpen ? 0 : -1} />
    <div ref={panelRef} className="cart-drawer" role={isOpen ? "dialog" : undefined} aria-modal={isOpen ? "true" : undefined} aria-label="Enquiry list" inert={!isOpen}>
      <div className="drawer-header"><div><span className="eyebrow">Your selection</span><h2>Enquiry list <small>({count})</small></h2></div><button className="icon-button" onClick={close} aria-label="Close enquiry list"><CloseIcon /></button></div>
      {lines.length ? <>
        <div className="cart-lines">
          {lines.map((line) => {
            const variant = PRODUCT.variants.find((item) => item.id === line.variantId);
            if (!variant) return null;
            return <div className="cart-line" key={line.variantId}>
              <Image src={PRODUCT.images[0].src} alt="" width={92} height={92} />
              <div className="cart-line-content"><h3>{SITE.name} Shudh Desi Ghee</h3><p>{variant.label}</p><div className="cart-line-controls"><div className="quantity-control" aria-label={`Quantity for ${variant.label}`}><button onClick={() => line.quantity === 1 ? remove(line.variantId) : update(line.variantId, line.quantity - 1)} aria-label={`Decrease ${variant.label} quantity`}>−</button><span>{line.quantity}</span><button onClick={() => update(line.variantId, line.quantity + 1)} disabled={line.quantity >= 99} aria-label={`Increase ${variant.label} quantity`}>+</button></div><button className="text-button" onClick={() => remove(line.variantId)}>Remove</button></div></div>
            </div>;
          })}
        </div>
        <div className="drawer-footer"><p>Call us to enquire about your selection. Online checkout is not active.</p><a className="button button-dark button-full" href={SITE.contact.phoneHref}>Call {SITE.contact.phone}</a></div>
      </> : <div className="cart-empty"><span className="cart-empty-glyph">✦</span><h3>Nothing selected yet.</h3><p>Explore our ghee and add a box to your enquiry list.</p><Link href={SITE.productPath} onClick={close} className="button button-dark">Explore our ghee</Link></div>}
    </div>
  </div>;
}
