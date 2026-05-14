export const siteConfig = {
  name: "Owalistic Sol",
  url: "https://owalisticsol.com",
  description:
    "Premium branding, custom web development, and eCommerce website solutions for agencies, startups, SaaS teams, D2C brands, and modern businesses.",
  email: "ashar@owlisticstudio.com",
  whatsappNumber: "923333323248",
  studioAddress: "Pearl Heights Office No-2, BE, ISB, PAK",
  ogImage: "/assets/owlistic_full_logo.png",
} as const;

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
