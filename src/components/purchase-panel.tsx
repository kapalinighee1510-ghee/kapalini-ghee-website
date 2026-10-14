"use client";

import { useState } from "react";
import { PRODUCT } from "@/data/site";
import { formatRupees, useCart } from "@/components/cart-provider";
import { ArrowIcon } from "@/components/icons";
import { BrandMark } from "@/components/brand-mark";

export function PurchasePanel({ compact = false }: { compact?: boolean }) {
  const [variantId, setVariantId] = useState(PRODUCT.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const { add } = useCart();
  const selected = PRODUCT.variants.find((variant) => variant.id === variantId) ?? PRODUCT.variants[0];
  const Title = compact ? "h2" : "h1";

  return <div className={`purchase-panel${compact ? " purchase-panel-compact" : ""}`}>
    <span className="eyebrow">Our golden essential</span>
    <Title className="branded-product-title"><span className="visually-hidden">{PRODUCT.name}</span><BrandMark decorative /><span aria-hidden="true">Shudh Desi Ghee</span></Title>
    <p className="purchase-intro">{PRODUCT.description}</p>
    <div className="preview-notice"><span aria-hidden="true">✦</span><span>Client preview — sizes and prices below are sample details.</span></div>
    <fieldset className="variant-fieldset"><legend>Choose a pack <span>Demo sizes</span></legend><div className="variant-options">{PRODUCT.variants.map((variant) => <label key={variant.id} className={variantId === variant.id ? "selected" : ""}><input type="radio" name={compact ? "home-pack" : "product-pack"} value={variant.id} checked={variantId === variant.id} onChange={() => setVariantId(variant.id)} /><span>{variant.label}</span><strong>{formatRupees(variant.priceInPaise)}</strong></label>)}</div></fieldset>
    <div className="purchase-actions"><div className="quantity-control quantity-large" aria-label="Quantity"><button onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity" disabled={quantity <= 1}>−</button><span aria-live="polite">{quantity}</span><button onClick={() => setQuantity((current) => Math.min(99, current + 1))} aria-label="Increase quantity" disabled={quantity >= 99}>+</button></div><button className="button button-dark" onClick={() => add(selected.id, quantity)}>Add to preview cart <ArrowIcon /></button></div>
    <p className="purchase-footnote">Preview cart only. Checkout is not active.</p>
  </div>;
}
