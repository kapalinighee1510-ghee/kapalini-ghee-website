"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { PRODUCT } from "@/data/site";
import { CloseIcon } from "@/components/icons";
import { useModalFocus } from "@/components/use-modal-focus";

export function ProductGallery({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const closeZoom = useCallback(() => setZoomed(false), []);
  useModalFocus(zoomed, zoomRef, closeZoom);

  function selectBySwipe(endX: number) {
    if (touchStartX.current === null) return;
    const distance = endX - touchStartX.current;
    if (Math.abs(distance) > 50) setSelected((current) => (current + (distance < 0 ? 1 : PRODUCT.images.length - 1)) % PRODUCT.images.length);
    touchStartX.current = null;
  }

  return <div className={`product-gallery${compact ? " product-gallery-compact" : ""}`}>
    <button className="gallery-stage" type="button" onClick={() => setZoomed(true)} onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }} onTouchEnd={(event) => selectBySwipe(event.changedTouches[0].clientX)} aria-label={`Enlarge ${PRODUCT.images[selected].label} image`}>
      {PRODUCT.images.map((image, index) => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={compact ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 100vw, 60vw"} className={`gallery-image${index === selected ? " selected" : ""}`} aria-hidden={index !== selected} />)}
      <span className="gallery-zoom">View larger <span aria-hidden="true">↗</span></span>
      <span className="gallery-count">0{selected + 1} / 0{PRODUCT.images.length}</span>
    </button>
    <div className="gallery-thumbs" role="group" aria-label="Product images">
      {PRODUCT.images.map((image, index) => <button key={image.src} type="button" className={index === selected ? "selected" : ""} onClick={() => setSelected(index)} aria-label={`Show ${image.label} image`} aria-pressed={index === selected}><Image src={image.src} alt="" width={82} height={82} /><span>{image.label}</span></button>)}
    </div>
    <div className="gallery-dots" aria-label="Product image selection">{PRODUCT.images.map((image, index) => <button key={image.src} type="button" className={index === selected ? "selected" : ""} onClick={() => setSelected(index)} aria-label={`Show ${image.label} image`} aria-pressed={index === selected} />)}</div>
    <div className={`zoom-root${zoomed ? " open" : ""}`} aria-hidden={!zoomed}>
      <button className="zoom-backdrop" tabIndex={zoomed ? 0 : -1} onClick={closeZoom} aria-label="Close enlarged image" />
      <div className="zoom-dialog" ref={zoomRef} role={zoomed ? "dialog" : undefined} aria-modal={zoomed ? "true" : undefined} aria-label={`${PRODUCT.images[selected].label} enlarged`} inert={!zoomed}>
        <button className="icon-button zoom-close" onClick={closeZoom} aria-label="Close enlarged image"><CloseIcon /></button>
        <Image src={PRODUCT.images[selected].src} alt={PRODUCT.images[selected].alt} width={PRODUCT.images[selected].width} height={PRODUCT.images[selected].height} />
        <p>{PRODUCT.images[selected].label}</p>
      </div>
    </div>
  </div>;
}
