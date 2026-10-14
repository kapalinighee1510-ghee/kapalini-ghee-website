export const SITE = {
  name: "Kapalini",
  hindiName: "कपालिनी",
  tagline: "Har chammach mein apnapan.",
  description:
    "Kapalini Shudh Desi Ghee, presented for the moments and meals that feel like home.",
  productPath: "/product/kapalini-shudh-desi-ghee",
  contact: {
    phone: "92204 28942",
    phoneHref: "tel:+919220428942",
    addressLines: ["I-1-11A", "Sohn Rewari Road", "Dharuhera, Rewari, Haryana"],
  },
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

const campaignImage = (file: string, alt: string, label: string): ProductImage => ({
  src: `/images/kapalini/campaign/${file}.jpg`,
  alt,
  label,
  width: 1448,
  height: 1086,
});

export const CAMPAIGN_IMAGES = {
  goldenTable: campaignImage("golden-table", "Kapalini ghee carton beside a brass bowl, spoon and fresh rotis", "Golden table"),
  rotiPour: campaignImage("roti-pour", "Ghee being poured onto warm rotis beside the Kapalini carton", "Warm rotis"),
  openPack: campaignImage("open-pack", "Open Kapalini carton showing the inner pouch beside a bowl of ghee", "Inside the pack"),
  ceremonialTable: campaignImage("ceremonial-table", "Kapalini carton and brass ghee bowl arranged with flowers and a red cloth", "A golden welcome"),
  heldPack: campaignImage("held-pack", "A hand holding the Kapalini carton beside rotis and a brass bowl", "At your table"),
  welcomeTray: campaignImage("welcome-tray", "Kapalini carton and bowl of ghee presented on a brass tray", "Made for sharing"),
  familyRoti: campaignImage("family-roti", "A hand serving fresh roti with Kapalini ghee at the table", "Shared moments"),
  servingRoti: campaignImage("serving-roti", "A spoon adding ghee to fresh rotis beside the Kapalini carton", "The finishing touch"),
} as const;

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  images: ProductImage[];
  variants: ReadonlyArray<{ id: string; label: string }>;
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
    CAMPAIGN_IMAGES.goldenTable,
    CAMPAIGN_IMAGES.heldPack,
  ],
  variants: [
    { id: "box-450", label: "450 ml box" },
    { id: "box-900", label: "900 ml box" },
  ],
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
      "Kapalini Shudh Desi Ghee is available in 450 ml and 900 ml boxes. Contact us to ask about ordering.",
  },
  {
    question: "How should I store it?",
    answer:
      "Follow the storage directions printed on your Kapalini pack. For product-specific guidance, please contact the brand through its verified business channel once available here.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Choose a box and call us on 92204 28942 to ask about ordering. Online checkout is not active yet.",
  },
];
