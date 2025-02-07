import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Free Weekend Activities for Families",
      excerpt: "Discover amazing free activities you can do with your family this weekend, from park adventures to community events.",
      author: "Sarah Johnson",
      date: "2025-03-15",
      category: "Family Activities",
    },
    {
      title: "Best Free Museums in Major Cities",
      excerpt: "A comprehensive guide to free museum days and permanently free museums in major cities across the country.",
      author: "Michael Chen",
      date: "2025-03-10",
      category: "Cultural Activities",
    },
    {
      title: "Spring Outdoor Activities That Don't Cost a Dime",
      excerpt: "Welcome the warmer weather with these fantastic free outdoor activities perfect for everyone.",
      author: "Emma Wilson",
      date: "2025-03-05",
      category: "Outdoor Activities",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
          <div className="grid gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    <span className="inline-flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <a href="#" className="text-primary hover:underline">
                      Read more →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}