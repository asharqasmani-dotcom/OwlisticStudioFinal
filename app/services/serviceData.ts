export type ServiceItem = {
  title: string;
  slug: string;
  aliases?: string[];
  image: string;
  alt: string;
  cls: string;
  tag: string;
  short: string;
  description: string;
  mainHeading: string;
  includes: string[];
  helps: string[];
  tools: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Brand Identity",
    slug: "brand-identity",
    aliases: ["brand-identity-design"],
    image: "/assets/service-brand-identity.png",
    alt: "Brand identity design system",
    cls: "sp-orange",
    tag: "BRAND",
    short:
      "Complete visual identity systems that help your business look clear, professional and consistent across every platform.",
    description:
      "We shape the visual and strategic foundation of your brand. From logo direction to color palette, typography and brand guidelines, we create identities that feel consistent, premium and ready for real business use.",
    mainHeading: "Build a visual identity your audience remembers.",
    includes: [
      "Logo system",
      "Color palette",
      "Typography direction",
      "Brand guidelines",
      "Stationery concepts",
      "Brand mockups",
      "Visual direction",
    ],
    helps: [
      "Builds trust before visitors read a word",
      "Makes your brand easier to recognize",
      "Keeps your visuals consistent everywhere",
      "Gives your team a clear creative system",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Brand Guidelines",
      "Logo Files",
      "Mockups",
    ],
  },
  {
    title: "Website Design",
    slug: "website-design",
    aliases: ["custom-web-development"],
    image: "/assets/service-website-design.png",
    alt: "Modern responsive website design",
    cls: "sp-teal",
    tag: "WEB",
    short:
      "Modern, responsive and conversion-focused website design that matches your brand and helps visitors take action.",
    description:
      "Your website should feel like a natural extension of your brand. We design clean, responsive and conversion-focused websites that improve clarity, build trust and make it easier for visitors to understand your services and contact you.",
    mainHeading: "Turn your website into a stronger first impression.",
    includes: [
      "Homepage design",
      "Inner page layouts",
      "Landing pages",
      "Desktop and mobile UI",
      "Service sections",
      "CTA flow",
      "Contact structure",
    ],
    helps: [
      "Improves first impression",
      "Makes services easier to understand",
      "Creates a better mobile experience",
      "Helps visitors take the next step",
    ],
    tools: [
      "Figma",
      "Responsive UI layouts",
      "Website mockups",
      "Section structure",
      "Design assets",
      "Developer-ready direction",
    ],
  },
  {
    title: "Packaging Design",
    slug: "packaging-design",
    image: "/assets/service-packaging-design.png",
    alt: "Premium product packaging design",
    cls: "sp-blue",
    tag: "PACKAGE",
    short:
      "Thoughtful packaging concepts for labels, boxes, pouches and product presentations that feel polished and market-ready.",
    description:
      "Packaging should make your product feel trustworthy and easy to understand. We design packaging that connects with your brand identity, improves product presentation and helps your product stand out across shelves, online stores and launch campaigns.",
    mainHeading: "Make your product look ready for the market.",
    includes: [
      "Box design",
      "Label design",
      "Pouch design",
      "Bottle or jar packaging",
      "Product mockups",
      "Print-ready direction",
      "Packaging presentation",
    ],
    helps: [
      "Improves product presentation",
      "Builds trust with customers",
      "Makes your product feel more premium",
      "Keeps packaging aligned with the brand",
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Print-ready files",
      "Packaging mockups",
      "Label layouts",
      "Product presentation",
    ],
  },
  {
    title: "Social Media Design",
    slug: "social-media-design",
    image: "/assets/service-social-media-design.png",
    alt: "Branded social media visuals",
    cls: "sp-orange",
    tag: "SOCIAL",
    short:
      "Branded social media visuals for posts, stories, campaigns and launch content so your business looks consistent online.",
    description:
      "Social media should not feel random from post to post. We create branded visual systems for social media content so your business looks polished, recognizable and aligned with your website, packaging and brand identity.",
    mainHeading: "Keep your brand consistent online.",
    includes: [
      "Instagram posts",
      "Story templates",
      "Launch graphics",
      "Ad creatives",
      "Promotional banners",
      "Profile visuals",
      "Campaign direction",
    ],
    helps: [
      "Keeps your brand consistent online",
      "Makes content look more professional",
      "Improves recognition across campaigns",
      "Saves time with reusable design systems",
    ],
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva-ready systems",
      "Social templates",
      "Post and story layouts",
      "Campaign graphics",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find(
    (service) => service.slug === slug || service.aliases?.includes(slug),
  );
}
