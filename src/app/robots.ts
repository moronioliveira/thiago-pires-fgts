import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Libera a página para buscadores e para os robôs de assistentes de IA
 * (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), o que ajuda no GEO.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
