import Image from "next/image";
import type { ProductImage } from "@/data/site";

type CampaignPhotoProps = {
  image: ProductImage;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function CampaignPhoto({ image, sizes, priority = false, className }: CampaignPhotoProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
