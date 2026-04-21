export type ServiceItem = {
  title: string;
  slug: string;
  image: string;
  alt: string;
  cls: string;
  short: string;
  intro: string;
  provided: string[];
  impact: string[];
  technology: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Brand & Identity Design",
    slug: "brand-identity-design",
    image: "/assets/brand_identity.png",
    alt: "Brand identity design presentation",
    cls: "sp-orange",
    short: "Custom brand identities ensuring your business stands out.",
    intro:
      "We shape the visual and strategic foundation your audience remembers. From logo direction to complete brand systems, we create identities that feel consistent, premium, and ready for every customer touchpoint.",
    provided: [
      "Brand discovery, audience positioning, and competitive review",
      "Logo direction, color palette, typography, and visual language",
      "Brand guidelines for web, social, print, pitch decks, and campaigns",
      "Launch-ready creative assets for profiles, banners, ads, and email",
    ],
    impact: [
      "Builds trust before a visitor reads a word",
      "Makes marketing more consistent and easier to scale",
      "Improves recognition across web, social, and sales material",
      "Gives your team a clear creative system instead of one-off designs",
    ],
    technology: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva-ready systems", "Design tokens"],
  },
  {
    title: "Custom Web Development",
    slug: "custom-web-development",
    image: "/assets/custom_web_dev_2.png",
    alt: "Custom website development workspace",
    cls: "sp-teal",
    short: "Bespoke website solutions that drive high conversion rates.",
    intro:
      "We design and build fast, responsive websites that turn brand attention into measurable action. Every page is structured around clarity, performance, conversion, and long-term maintainability.",
    provided: [
      "Custom landing pages, business websites, and portfolio websites",
      "Responsive UI across desktop, tablet, and mobile",
      "Conversion-focused section hierarchy, CTAs, forms, and contact flows",
      "Performance setup, SEO-friendly structure, analytics, and launch support",
    ],
    impact: [
      "Turns more visitors into inquiries, bookings, or sales conversations",
      "Improves credibility with a polished digital presence",
      "Reduces friction through cleaner navigation and faster pages",
      "Creates a scalable foundation for future campaigns and content",
    ],
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    title: "eCommerce & CMS Sites",
    slug: "ecommerce-cms-sites",
    image: "/assets/ecommerce.jpg",
    alt: "Ecommerce website management",
    cls: "sp-blue",
    short: "Shopify, Wix, and Squarespace sites that accelerate sales.",
    intro:
      "We create online stores and CMS websites that are easy to manage, easy to buy from, and easy to grow. The goal is a smoother customer journey with a backend your team can confidently update.",
    provided: [
      "Shopify, Wix, Squarespace, and CMS website setup or redesign",
      "Product/category structure, collection pages, and checkout flow improvements",
      "CMS training so your team can update products, blogs, and pages",
      "Payment, shipping, forms, basic automations, and third-party integrations",
    ],
    impact: [
      "Makes it easier for customers to discover and purchase products",
      "Improves store trust with stronger visuals and clearer product pages",
      "Reduces manual work through CMS workflows and integrations",
      "Supports campaigns, promotions, and seasonal launches with less stress",
    ],
    technology: ["Shopify", "Wix", "Squarespace", "WordPress", "Stripe", "Klaviyo", "Google Analytics"],
  },
];

export const serviceStats = [
  ["11+ Years", "Digital strategy and delivery experience"],
  ["800+ Brands", "Trusted by founders, studios, and growth teams"],
  ["3000+ Projects", "Built across brand, web, and commerce"],
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
