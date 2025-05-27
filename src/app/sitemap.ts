import type { MetadataRoute } from "next";
import { prodUrl } from "~/constants/app-info";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: prodUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${prodUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${prodUrl}/connect`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
