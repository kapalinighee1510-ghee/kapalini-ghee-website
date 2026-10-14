function FloralCorner({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 16h153M4 20h112M19 1v169M23 3v104" />
        <path d="M7 24c16 0 20 7 22 19 5 30 38 37 41 68 2 22-25 29-26 51-1 17 9 28 13 39" />
        <path d="M28 38c14-21 27-24 48-18 20 6 31 21 57 20M43 69c25-16 34-12 57 1M54 93c-8 13-5 22 5 32M68 110c13-1 22 6 24 22M47 150c-14-5-21-17-17-31M46 165c15-2 23 3 29 15" />
        <path d="M33 43c-3-16 2-24 12-28 0 13-3 22-12 28ZM39 47c12-16 22-19 33-17-6 10-16 16-33 17ZM62 25c8-11 17-15 28-13-6 10-13 14-28 13ZM75 22c10 0 17 7 21 17-12 0-20-6-21-17ZM91 36c13-4 23 0 30 10-13 3-23 1-30-10ZM48 71c-17-3-23-12-22-24 12 4 19 11 22 24ZM52 77c12-12 23-13 33-7-9 8-19 10-33 7ZM61 99c12-12 23-11 31-3-11 7-20 8-31 3ZM71 112c-4 14-13 22-25 22 3-12 11-20 25-22ZM47 150c-15-3-23-12-23-23 12 2 20 10 23 23ZM49 157c14-11 26-10 35-1-10 7-20 8-35 1ZM55 182c12-4 23-1 29 8-13 3-22 0-29-8Z" />
        <path d="M40 48c4-13 15-20 27-14M58 70c10-7 22-7 35 0M55 96c11-7 22-7 31 0M42 145c-6-9-10-17-10-25M52 159c13-7 23-6 30-2" strokeWidth=".65" />
        <path d="M23 44c-9-8-17-1-11 7-10-1-13 10-2 13-8 6-2 16 6 11 0 11 11 14 15 4 6 9 16 4 13-5 10 2 14-9 5-14 9-8 1-17-7-12 0-10-11-12-15-4Z" />
        <path d="M26 55c-4-8-7-9-10-8M27 58c7-9 11-10 15-9M27 62c10 1 14 4 16 8M25 65c-5 9-6 12-4 17M21 62c-9 2-12 5-14 9" strokeWidth=".75" />
        <circle cx="26" cy="61" r="5" /><circle cx="26" cy="61" r="1.5" fill="currentColor" />
        <path d="M57 201v13M53 207l4 6 4-6M14 170v36M10 195l4 11 4-11" />
        <path d="M10 27c-3 7-2 14 3 20M103 18c6-3 13-4 19-2M54 211c3 2 6 2 9 0" strokeWidth=".65" />
      </g>
      <g fill="currentColor"><circle cx="57" cy="217" r="1.8" /><circle cx="14" cy="210" r="1.8" /><circle cx="117" cy="17" r="1.6" /><circle cx="142" cy="16" r="1.3" /><circle cx="53" cy="12" r="1.2" /><circle cx="36" cy="111" r="1.1" /></g>
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
