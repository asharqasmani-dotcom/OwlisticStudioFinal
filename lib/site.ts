export const siteConfig = {
  name: "Owalistic Sol",
  url: "https://owalisticsol.com",
  description:
    "Premium branding, custom web development, and eCommerce website solutions for agencies, startups, SaaS teams, D2C brands, and modern businesses.",
  email: "Hello@owalisticsol.com",
  whatsappNumber: "923451180314",
  studioAddress: "Pearl Heights Office No-2, BE, ISB, PAK",
  ogImage: "/assets/owlistic_full_logo.png",
} as const;

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
