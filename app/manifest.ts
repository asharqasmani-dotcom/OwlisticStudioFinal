import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Owalistic",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fe6037",
    icons: [
      {
        src: "/assets/owlistic_logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/owlistic_logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
