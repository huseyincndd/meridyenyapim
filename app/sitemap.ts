import { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://meridyenfilm.com";
  
  const staticRoutes = [
    { url: "", priority: 1.0, freq: "weekly" },
    { url: "/hakkimizda", priority: 0.8, freq: "monthly" },
    { url: "/hizmetler", priority: 0.9, freq: "weekly" },
    { url: "/hizmetler/post-produksiyon", priority: 0.8, freq: "monthly" },
    { url: "/hizmetler/reklam-filmi", priority: 0.8, freq: "monthly" },
    { url: "/hizmetler/dizi-yapimi", priority: 0.8, freq: "monthly" },
    { url: "/hizmetler/sinema-filmi", priority: 0.8, freq: "monthly" },
    { url: "/projeler", priority: 0.9, freq: "weekly" },
    { url: "/blog", priority: 0.9, freq: "weekly" },
    { url: "/iletisim", priority: 0.8, freq: "monthly" },
    { url: "/oyuncu-basvurusu", priority: 0.8, freq: "monthly" },
  ];

  const legalRoutes = [
    "/yasal/aydinlatma-metni",
    "/yasal/acik-riza-onayi",
    "/yasal/kvkk-politikasi",
    "/yasal/bgys-politikasi",
    "/yasal/kvkk-basvuru-formu",
    "/yasal/gizlilik-politikasi",
    "/yasal/cerez-politikasi",
    "/yasal/site-haritasi"
  ];

  const allPages: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.url}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: route.freq as "weekly" | "monthly",
      priority: route.priority,
    })),
    ...legalRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  ];

  return allPages;
}
