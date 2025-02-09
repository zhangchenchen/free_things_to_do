import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog-data'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const baseUrl = 'https://freethingstodo.net'
  
  // 基础页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as ChangeFreq,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 0.5,
    },
  ]

  // 博客文章页面
  const blogPages = Object.entries(posts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as ChangeFreq,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
} 