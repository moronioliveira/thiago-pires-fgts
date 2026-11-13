import type { MetadataRoute } from "next";
import { seo } from "@/content/seo";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.brand} ${site.brandTagline}`,
    short_name: site.brand,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b161b",
    theme_color: "#0b161b",
    lang: "pt-BR",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
