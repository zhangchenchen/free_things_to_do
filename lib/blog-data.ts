import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type Post = {
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  tags: string[]
  slug: string
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    // 在转换后添加 class
    const contentHtml = processedContent.toString()
      .replace(/<h([1-6])/g, '<h$1 class="scroll-mt-20"')

    return {
      slug,
      title: data.title,
      content: contentHtml,
      excerpt: data.excerpt,
      author: data.author,
      date: data.date,
      tags: data.tags,
    }
  } catch (e) {
    return null
  }
}

export async function getAllPosts(): Promise<Record<string, Post>> {
  // 确保目录存在
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Blog posts directory does not exist');
    return {};
  }

  const slugs = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''))

  const posts: Record<string, Post> = {}
  
  for (const slug of slugs) {
    try {
      const post = await getPost(slug)
      if (post) {
        posts[slug] = post
      }
    } catch (error) {
      console.error(`Error loading post ${slug}:`, error)
    }
  }

  // 按日期排序（最新的在前）
  return Object.fromEntries(
    Object.entries(posts).sort(([,a], [,b]) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  )
}

// 缓存所有文章
let postsCache: Record<string, Post> | null = null

export async function getPosts(): Promise<Record<string, Post>> {
  if (!postsCache) {
    postsCache = await getAllPosts()
  }
  return postsCache
} 