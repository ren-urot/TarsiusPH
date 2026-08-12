import type { MetadataRoute } from "next";

// Product pages are only ever meant to be reached by tapping a physical
// NFC tag (see PRD: "not accessible through homepage navigation") - no
// reason for them to show up in search results, and definitely not for
// random/guessed product IDs.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/product/",
    },
    sitemap: "https://tarsiusph.com/sitemap.xml",
  };
}
