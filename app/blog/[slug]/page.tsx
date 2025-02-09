import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { posts, type Post } from '@/lib/blog-data'

interface BlogPostParams {
  params: {
    slug: string
  }
}

// 生成动态元数据
export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = posts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Free Things To Do Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://freethingstodo.net/blog/${params.slug}`
    }
  }
}

// 添加 generateStaticParams 函数
export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = posts[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
          </div>

          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 pt-8 border-t">
            <h2 className="text-lg font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center text-sm bg-primary/10 text-primary px-3 py-1 rounded"
                >
                  <Tag className="h-4 w-4 mr-2" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
} 