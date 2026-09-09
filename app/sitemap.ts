import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://abhi-ultracore.nagashree143.chatgpt.site/',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
