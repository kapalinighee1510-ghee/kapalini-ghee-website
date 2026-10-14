import Image from "next/image";

/** The supplied carton artwork is the source of truth for the custom wordmark. */
export function BrandMark({ className = "", decorative = false, priority = false }: { className?: string; decorative?: boolean; priority?: boolean }) {
  return (
    <span className={`brand-mark ${className}`.trim()} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : "Kapalini"} aria-hidden={decorative || undefined}>
      <Image
        className="brand-mark-source"
        src="/images/kapalini/kapalini-logo-reference.png"
        alt=""
        width={396}
        height={222}
        sizes="(max-width: 900px) 110px, 150px"
        priority={priority}
      />
    </span>
  );
}
