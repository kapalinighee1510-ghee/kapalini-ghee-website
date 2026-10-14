"use client";

import { SectionHeritage } from "@/components/heritage-ornament";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CAMPAIGN_IMAGES } from "@/data/site";

const scenes = [
  { number: "01", eyebrow: "Meet Kapalini", title: "The golden centre of the table.", text: "A familiar sight, ready to become part of the meals you make your own.", image: CAMPAIGN_IMAGES.goldenTable },
  { number: "02", eyebrow: "The serving", title: "A little pour. A lovely moment.", text: "That finishing spoonful belongs on warm rotis, comforting dal, and so much more.", image: CAMPAIGN_IMAGES.rotiPour },
  { number: "03", eyebrow: "The presentation", title: "Thoughtful, from pack to plate.", text: "Explore the branded carton and sealed inner pouch shown in the supplied packaging photograph.", image: CAMPAIGN_IMAGES.openPack },
];

export function ProductTheatre() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.scene));
      });
    }, { rootMargin: "-28% 0px -42% 0px", threshold: 0 });
    refs.current.forEach((node) => { if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);

  return <section className="theatre-section" aria-labelledby="theatre-heading"><SectionHeritage />
    <div className="container theatre-intro" data-reveal><span className="eyebrow">A closer look</span><h2 id="theatre-heading">Made to be <em>savoured.</em></h2><p>Follow the golden moments, from the first glance to the last spoonful.</p></div>
    <div className="container theatre-layout">
      <div className="theatre-visual" aria-hidden="true"><div className="theatre-visual-inner"><span className="theatre-orbit orbit-one" /><span className="theatre-orbit orbit-two" />{scenes.map((scene, index) => <Image key={scene.number} src={scene.image.src} alt="" width={scene.image.width} height={scene.image.height} sizes="50vw" className={`theatre-photo${active === index ? " active" : ""}`} />)}<div className="theatre-visual-bottom"><span>KAPALINI / SHUDH DESI GHEE</span><span>0{active + 1} — 03</span></div></div></div>
      <div className="theatre-steps">{scenes.map((scene, index) => <div className={`theatre-step${active === index ? " active" : ""}`} ref={(element) => { refs.current[index] = element; }} data-scene={index} key={scene.number}><div className="theatre-mobile-image"><Image src={scene.image.src} alt={scene.image.alt} width={scene.image.width} height={scene.image.height} sizes="100vw" /></div><span className="step-number">{scene.number} / 03</span><span className="eyebrow">{scene.eyebrow}</span><h3>{scene.title}</h3><p>{scene.text}</p></div>)}</div>
    </div>
  </section>;
}
