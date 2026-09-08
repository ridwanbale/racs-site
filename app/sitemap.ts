import type { MetadataRoute } from "next";
import { siteRoutes } from "@/content/site";
import { getAbsoluteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
