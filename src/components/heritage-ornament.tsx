function FloralCorner({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 113V2h111M9 104V15c0-3 3-6 6-6h89" />
        <path d="M14 63c13-4 22-13 25-25C42 25 50 17 63 14M14 42c8 0 15-5 18-12M42 14c0 8-5 15-12 18" />
        <path d="M18 78c13-10 16-19 17-28M78 18c-10 13-19 16-28 17" />
        <path d="M22 26c8-7 16-7 23-2-8 1-14 5-18 12M26 22c-3-6-2-12 2-17 2 7 6 11 12 13" />
        <path d="M49 27c8-2 14 0 18 6-8 0-13 2-17 7M27 49c-2 8 0 14 6 18 0-8 2-13 7-17" />
        <path d="M16 90c9-7 16-8 23-5-7 2-12 6-16 12M90 16c-7 9-8 16-5 23 2-7 6-12 12-16" />
        <path d="M35 36c-7-11-15-6-10 1-7-5-12 3-3 7-9 1-6 10 2 8-4 8 5 11 9 3 4 8 13 4 9-4 9 2 11-8 2-9 8-5 2-12-5-7 4-8-6-11-9 0" />
        <circle cx="32" cy="44" r="3" />
        <path d="M13 68c8-2 13 0 17 6-8-1-13 0-17 4M68 13c-2 8 0 13 6 17-1-8 0-13 4-17" />
        <path d="M9 104c8-5 13-4 17 1M104 9c-5 8-4 13 1 17" />
      </g>
      <g fill="currentColor">
        <circle cx="12" cy="86" r="1.3" />
        <circle cx="86" cy="12" r="1.3" />
        <circle cx="13" cy="51" r="1" />
        <circle cx="51" cy="13" r="1" />
      </g>
    </svg>
  );
}

function Rosette({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round">
        <path d="M21 5c5 5 5 9 0 13-5-4-5-8 0-13ZM21 37c-5-5-5-9 0-13 5 4 5 8 0 13ZM5 21c5-5 9-5 13 0-4 5-8 5-13 0ZM37 21c-5 5-9 5-13 0 4-5 8-5 13 0Z" />
        <path d="M9.7 9.7c6.4 0 9.2 2.8 9.1 9.1-6.3.1-9.1-2.7-9.1-9.1ZM32.3 32.3c-6.4 0-9.2-2.8-9.1-9.1 6.3-.1 9.1 2.7 9.1 9.1ZM32.3 9.7c0 6.4-2.8 9.2-9.1 9.1-.1-6.3 2.7-9.1 9.1-9.1ZM9.7 32.3c0-6.4 2.8-9.2 9.1-9.1.1 6.3-2.7 9.1-9.1 9.1Z" />
        <circle cx="21" cy="21" r="3.5" />
      </g>
    </svg>
  );
}

export function HeaderHeritageRule() {
  return (
    <div className="header-heritage-rule" aria-hidden="true">
      <Rosette className="header-heritage-rosette" />
    </div>
  );
}

export function HeroHeritageFrame() {
  return (
    <div className="hero-heritage-frame" aria-hidden="true">
      <FloralCorner className="heritage-corner heritage-corner-tl" />
      <FloralCorner className="heritage-corner heritage-corner-tr" />
      <FloralCorner className="heritage-corner heritage-corner-bl" />
      <FloralCorner className="heritage-corner heritage-corner-br" />
      <Rosette className="heritage-rosette heritage-rosette-top" />
      <Rosette className="heritage-rosette heritage-rosette-bottom" />
      <Rosette className="heritage-rosette heritage-rosette-left" />
      <Rosette className="heritage-rosette heritage-rosette-right" />
    </div>
  );
}

export function SectionHeritage({ light = false }: { light?: boolean }) {
  return (
    <div className={`section-heritage${light ? " section-heritage-light" : ""}`} aria-hidden="true">
      <FloralCorner className="section-heritage-corner section-heritage-corner-top" />
      <FloralCorner className="section-heritage-corner section-heritage-corner-bottom" />
      <Rosette className="section-heritage-rosette section-heritage-rosette-top" />
      <Rosette className="section-heritage-rosette section-heritage-rosette-bottom" />
    </div>
  );
}
