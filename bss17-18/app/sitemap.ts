import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3000/posts',
      lastModified: '2024-08-29',
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]
}