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
      .use(html, {
        sanitize: false // 允许 HTML 标签
      })
      .process(content)
    
    const contentHtml = processedContent.toString()
      // 标题样式
      .replace(/<h1/g, '<h1 class="text-4xl font-bold mt-8 mb-6"')
      .replace(/<h2/g, '<h2 class="text-3xl font-semibold mt-12 mb-6"')
      .replace(/<h3/g, '<h3 class="text-2xl font-semibold mt-8 mb-4"')
      .replace(/<h4/g, '<h4 class="text-xl font-semibold mt-6 mb-4"')
      .replace(/<h5/g, '<h5 class="text-lg font-semibold mt-6 mb-4"')
      .replace(/<h6/g, '<h6 class="text-base font-semibold mt-6 mb-4"')
      
      // 段落和列表样式
      .replace(/<p>/g, '<p class="mb-6 leading-7 text-gray-700 dark:text-gray-300">')
      .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">')
      .replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">')
      
      // 引用和图片样式
      .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-primary pl-4 py-2 my-6 bg-gray-50 dark:bg-gray-800 italic text-gray-700 dark:text-gray-300">')
      .replace(/<img/g, '<img class="rounded-lg shadow-md my-8 mx-auto max-w-full h-auto"')
      
      // 其他元素样式
      .replace(/<hr>/g, '<hr class="my-8 border-t border-gray-200 dark:border-gray-700">')
      .replace(/<strong>/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">')
      .replace(/<em>/g, '<em class="italic text-gray-800 dark:text-gray-200">')
      
      // 列表项样式
      .replace(/<li>/g, '<li class="text-gray-700 dark:text-gray-300">')

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