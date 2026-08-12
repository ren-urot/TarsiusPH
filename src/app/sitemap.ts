import type { MetadataRoute } from "next";

// Product pages are intentionally excluded - see robots.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tarsius-ph.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
