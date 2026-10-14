"use client";

import Image from "next/image";
import { useRef } from "react";
import { CloseIcon } from "@/components/icons";
import { useModalFocus } from "@/components/use-modal-focus";
import type { ProductImage } from "@/data/site";

type ImageLightboxProps = {
  image: ProductImage;
  open: boolean;
  onClose: () => void;
};

export function ImageLightbox({ image, open, onClose }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalFocus(open, dialogRef, onClose);

  return (
    <div className={`zoom-root${open ? " open" : ""}`} aria-hidden={!open}>
      <button className="zoom-backdrop" type="button" tabIndex={open ? 0 : -1} onClick={onClose} aria-label="Close enlarged image" />
      <div
        className="zoom-dialog"
        ref={dialogRef}
        role={open ? "dialog" : undefined}
        aria-modal={open ? "true" : undefined}
        aria-label={`${image.label} enlarged`}
        inert={!open}
      >
        <button className="icon-button zoom-close" type="button" onClick={onClose} aria-label="Close enlarged image"><CloseIcon /></button>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="90vw" />
        <p>{image.label}</p>
      </div>
    </div>
  );
}
