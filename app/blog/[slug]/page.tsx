import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from 'next/navigation'
import { getPost, getAllPosts } from '@/lib/blog-data'

interface BlogPostParams {
  params: {
    slug: string
  }
}

// 生成动态元数据
export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = await getPost(params.slug)
  
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

// 修改 generateStaticParams 函数
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }))
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPost(params.slug)
  
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
            className="prose prose-slate lg:prose-lg max-w-none 
              dark:prose-invert
              prose-headings:scroll-mt-20
              prose-headings:font-bold 
              prose-h1:text-4xl prose-h1:mb-8
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-base prose-p:leading-7 prose-p:my-6
              prose-li:text-base prose-li:leading-7
              prose-ul:my-6 prose-ul:space-y-4
              prose-ol:my-6 prose-ol:space-y-4
              prose-blockquote:text-gray-700 prose-blockquote:border-l-primary
              prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-6
              prose-strong:text-primary prose-strong:font-bold
              prose-img:rounded-lg prose-img:shadow-md
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded
              prose-pre:bg-muted prose-pre:text-muted-foreground
              [&>*:first-child]:mt-0
              [&>*:last-child]:mb-0"
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