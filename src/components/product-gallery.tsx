"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { PRODUCT } from "@/data/site";
import { ImageLightbox } from "@/components/image-lightbox";

export function ProductGallery({ compact = false }: { compact?: boolean }) {
  const images = compact ? PRODUCT.images.slice(0, 1) : PRODUCT.images;
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeZoom = useCallback(() => setZoomed(false), []);

  function selectBySwipe(endX: number) {
    if (touchStartX.current === null) return;
    const distance = endX - touchStartX.current;
    if (images.length > 1 && Math.abs(distance) > 50) setSelected((current) => (current + (distance < 0 ? 1 : images.length - 1)) % images.length);
    touchStartX.current = null;
  }

  return <div className={`product-gallery${compact ? " product-gallery-compact" : ""}`}>
    <button className="gallery-stage" type="button" onClick={() => setZoomed(true)} onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }} onTouchEnd={(event) => selectBySwipe(event.changedTouches[0].clientX)} aria-label={`Enlarge ${images[selected].label} image`}>
      {images.map((image, index) => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={compact ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 100vw, 60vw"} className={`gallery-image${index === selected ? " selected" : ""}`} aria-hidden={index !== selected} />)}
      <span className="gallery-zoom">View larger <span aria-hidden="true">↗</span></span>
      {!compact && <span className="gallery-count">0{selected + 1} / 0{images.length}</span>}
    </button>
    {!compact && <><div className="gallery-thumbs" role="group" aria-label="Product images">
      {images.map((image, index) => <button key={image.src} type="button" className={index === selected ? "selected" : ""} onClick={() => setSelected(index)} aria-label={`Show ${image.label} image`} aria-pressed={index === selected}><Image src={image.src} alt="" width={82} height={82} /><span>{image.label}</span></button>)}
    </div>
    <div className="gallery-dots" aria-label="Product image selection">{images.map((image, index) => <button key={image.src} type="button" className={index === selected ? "selected" : ""} onClick={() => setSelected(index)} aria-label={`Show ${image.label} image`} aria-pressed={index === selected} />)}</div></>}
    <ImageLightbox image={images[selected]} open={zoomed} onClose={closeZoom} />
  </div>;
}
