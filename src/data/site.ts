export const SITE = {
  name: "Kapalini",
  hindiName: "कपालिनी",
  tagline: "Har chammach mein apnapan.",
  description:
    "Kapalini Shudh Desi Ghee, presented for the moments and meals that feel like home.",
  productPath: "/product/kapalini-shudh-desi-ghee",
} as const;

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Our Ghee", href: "/shop" },
  { label: "Our Story", href: "/about" },
  { label: "Ways to Enjoy", href: "/#ways-to-enjoy" },
  { label: "Contact", href: "/contact" },
] as const;

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  images: ProductImage[];
  variants: ReadonlyArray<{ id: string; label: string; priceInPaise: number }>;
  pricingIsDemo: boolean;
};

export const PRODUCT: Product = {
  slug: "kapalini-shudh-desi-ghee",
  name: "Kapalini Shudh Desi Ghee",
  category: "Ghee",
  description:
    "A golden finishing touch for rotis, dal, and the dishes you love to share.",
  images: [
    {
      src: "/images/kapalini/kapalini-ghee-product.jpeg",
      alt: "Kapalini Shudh Desi Ghee carton with a brass bowl and a spoon pouring ghee",
      label: "The product",
      width: 1254,
      height: 1254,
    },
    {
      src: "/images/kapalini/kapalini-roti-lifestyle.jpeg",
      alt: "Kapalini ghee presented beside a freshly prepared roti",
      label: "At the table",
      width: 1536,
      height: 1024,
    },
    {
      src: "/images/kapalini/kapalini-packaging.jpeg",
      alt: "Kapalini outer carton, sealed inner pouch, and bowl of ghee",
      label: "Inside the pack",
      width: 1221,
      height: 1180,
    },
  ],
  // Preview figures only. Replace with approved pack sizes and MRP before taking orders.
  variants: [
    { id: "preview-500", label: "500 ml", priceInPaise: 49900 },
    { id: "preview-1000", label: "1 L", priceInPaise: 89900 },
  ],
  pricingIsDemo: true,
};

export const FAQS = [
  {
    question: "What is Kapalini Shudh Desi Ghee?",
    answer:
      "Kapalini is a Shudh Desi Ghee product. Explore the product photographs and packaging on this website, and contact the brand for current product details.",
  },
  {
    question: "How is the product presented?",
    answer:
      "The supplied packaging photograph shows a branded outer carton and a sealed inner pouch. Please refer to the actual pack for the complete label information.",
  },
  {
    question: "Which pack sizes are available?",
    answer:
      "The sizes shown here are demo placeholders for the client preview. Confirm actual available packs with the brand before ordering.",
  },
  {
    question: "How should I store it?",
    answer:
      "Follow the storage directions printed on your Kapalini pack. For product-specific guidance, please contact the brand through its verified business channel once available here.",
  },
  {
    question: "How can I place an order?",
    answer:
      "The cart is available to preview the shopping experience. Checkout is not active until product details and an order integration are confirmed.",
  },
];

export function getWhatsAppUrl() {
  const number = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP?.replace(/[^\d]/g, "");
  if (!number || number.length < 8 || number.length > 15) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent("Hello Kapalini, I would like to know more about Shudh Desi Ghee.")}`;
}
