import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "Google-Extended", "PerplexityBot", "anthropic-ai", "Claude-Web"],
        allow: "/",
      },
    ],
    sitemap: "https://meridyenfilm.com/sitemap.xml",
  };
}
