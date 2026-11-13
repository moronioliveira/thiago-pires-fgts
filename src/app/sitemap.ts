import type { MetadataRoute } from "next";
import { seo } from "@/content/seo";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(seo.lastUpdated),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
