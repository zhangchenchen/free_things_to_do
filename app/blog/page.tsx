import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, Tag } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Free Activities Blog - Tips and Guides | Free Things To Do',
  description: 'Discover tips, guides and recommendations for free activities around the world. Learn about hidden gems, local favorites, and budget-friendly entertainment.',
  keywords: 'free activities blog, free things to do, travel tips, budget activities, local guides, free entertainment',
  openGraph: {
    title: 'Free Activities Blog - Tips and Guides | Free Things To Do',
    description: 'Discover tips, guides and recommendations for free activities around the world.',
    type: 'website',
    url: 'https://freethingstodo.net/blog',
  },
  alternates: {
    canonical: 'https://freethingstodo.net/blog'
  }
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readingTime: string
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    slug: "free-weekend-activities-families",
    title: "10 Free Weekend Activities for Families",
    excerpt: "Discover amazing free activities you can do with your family this weekend, from park adventures to community events.",
    author: "Sarah Johnson",
    date: "2025-02-09",
    category: "Family Activities",
    readingTime: "5 min read",
    tags: ["family", "weekend", "outdoor", "community"]
  },
  {
    slug: "best-free-museums-worldwide",
    title: "Best Free Museums Around the World",
    excerpt: "A comprehensive guide to free museum days and permanently free museums in major cities across the globe.",
    author: "Michael Chen",
    date: "2025-02-08",
    category: "Cultural Activities",
    readingTime: "7 min read",
    tags: ["museums", "culture", "art", "history"]
  },
  {
    slug: "spring-outdoor-activities",
    title: "Spring Outdoor Activities That Don't Cost a Dime",
    excerpt: "Welcome the warmer weather with these fantastic free outdoor activities perfect for everyone.",
    author: "Emma Wilson",
    date: "2025-02-07",
    category: "Outdoor Activities",
    readingTime: "6 min read",
    tags: ["spring", "outdoor", "seasonal", "nature"]
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Blog Header */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Activities Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Discover tips, guides, and recommendations for amazing free activities around the world.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="inline-flex items-center text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}