"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { CAMPAIGN_IMAGES } from "@/data/site";

const slides = [
  { image: CAMPAIGN_IMAGES.goldenTable, eyebrow: "01 / The table", title: "A little golden warmth." },
  { image: CAMPAIGN_IMAGES.heldPack, eyebrow: "02 / The gesture", title: "Held close, shared often." },
  { image: CAMPAIGN_IMAGES.welcomeTray, eyebrow: "03 / The welcome", title: "Made for moments together." },
  { image: CAMPAIGN_IMAGES.servingRoti, eyebrow: "04 / The finishing touch", title: "A familiar final spoonful." },
] as const;

export function CampaignCarousel() {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  function select(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  function finishSwipe(endX: number) {
    if (touchStartX.current === null) return;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 45) return;
    suppressClick.current = true;
    window.setTimeout(() => { suppressClick.current = false; }, 350);
    select(active + (distance < 0 ? 1 : -1));
  }

  return (
    <div className="campaign-carousel" role="region" aria-roledescription="carousel" aria-label="Kapalini moments">
      <div
        className="campaign-viewport"
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => finishSwipe(event.changedTouches[0].clientX)}
      >
        <div className="campaign-track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide, index) => (
            <div className={`campaign-slide${index === active ? " is-active" : ""}`} key={slide.image.src} aria-hidden={index !== active} inert={index !== active}>
              <button
                className="campaign-slide-media"
                type="button"
                onClick={() => {
                  if (suppressClick.current) { suppressClick.current = false; return; }
                  setLightboxOpen(true);
                }}
                aria-label={`Enlarge ${slide.image.label} image`}
              >
                <Image src={slide.image.src} alt={slide.image.alt} width={slide.image.width} height={slide.image.height} sizes="(max-width: 800px) 100vw, 75vw" />
                <span className="campaign-expand" aria-hidden="true">View image ↗</span>
              </button>
              <div className="campaign-slide-caption">
                <span>{slide.eyebrow}</span>
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="campaign-controls">
        <span className="campaign-position" aria-live="polite">0{active + 1} <i>/</i> 0{slides.length}</span>
        <div className="campaign-dots" role="group" aria-label="Choose a moment">
          {slides.map((slide, index) => (
            <button key={slide.image.src} type="button" className={index === active ? "active" : ""} onClick={() => select(index)} aria-label={`Show ${slide.image.label}`} aria-pressed={index === active} />
          ))}
        </div>
        <div className="campaign-arrows">
          <button type="button" onClick={() => select(active - 1)} aria-label="Previous image">←</button>
          <button type="button" onClick={() => select(active + 1)} aria-label="Next image">→</button>
        </div>
      </div>
      <ImageLightbox image={slides[active].image} open={lightboxOpen} onClose={closeLightbox} />
    </div>
  );
}
