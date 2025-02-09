import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { Calendar, User, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from 'next/navigation'

interface BlogPostParams {
  params: {
    slug: string
  }
}

// 添加这个类型定义
type Post = {
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  tags: string[]
}

// 添加这个常量来存储所有博客文章
const posts: Record<string, Post> = {
  "free-weekend-activities-families": {
    title: "10 Free Things to Do with Family Near You: Weekend Activities Guide",
    content: `
      <div class="article-header">
        <p class="lead text-lg text-muted-foreground mb-8">
          Looking for free things to do with your family this weekend? We've compiled the ultimate guide to family-friendly activities that won't cost you a dime. From local parks to community events, discover the best free activities near you.
        </p>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">1. Explore Local Parks and Nature Reserves</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">One of the best free things to do near you is visiting local parks. Most communities have multiple parks within easy reach, each offering unique experiences:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Create engaging scavenger hunts for different age groups</li>
            <li>Organize nature photography contests using smartphones</li>
            <li>Set up bird watching activities with free identification apps</li>
            <li>Plan picnics with homemade treats</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">2. Join Free Community Events</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Stay updated with local events through:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Library event calendars</li>
            <li>City social media accounts</li>
            <li>Community bulletin boards</li>
            <li>Local newsletters</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">3. Visit Your Local Library</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Modern libraries offer more than just books:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Story time sessions for different age groups</li>
            <li>STEAM workshops and educational programs</li>
            <li>Board game collections</li>
            <li>Free museum passes</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">4. Explore Nature Trails</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Make hiking fun for kids with:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Nature bingo cards</li>
            <li>Wildlife spotting games</li>
            <li>Geocaching adventures</li>
            <li>Photo challenges</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">5. Beach and Lake Activities</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Water-based activities include:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Swimming (in season)</li>
            <li>Sandcastle competitions</li>
            <li>Shell collecting</li>
            <li>Beach sports</li>
          </ul>
        </div>
      </div>

      <div class="quick-tips bg-primary/5 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-bold mb-4">Quick Planning Tips</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold mb-2">Before You Go:</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Check weather forecasts</li>
              <li>Pack snacks and water</li>
              <li>Bring basic supplies</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Stay Updated:</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Follow local event pages</li>
              <li>Join community groups</li>
              <li>Check seasonal activities</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="call-to-action bg-muted/30 p-6 rounded-lg text-center">
        <p class="font-semibold mb-4">Looking for more free things to do near you?</p>
        <p>Use our search tool to discover activities specific to your location and family size.</p>
      </div>
    `,
    excerpt: "Discover the best free family activities near you, from park adventures to community events. Our guide helps you find fun, cost-free things to do this weekend.",
    author: "Sarah Johnson",
    date: "2024-03-15",
    tags: ["free things to do", "family activities", "weekend activities", "things to do near me", "free entertainment"]
  },
  "best-free-museums-worldwide": {
    title: "Best Free Museums Around the World: Your Ultimate Guide",
    content: `
      <div class="article-header">
        <p class="lead text-lg text-muted-foreground mb-8">
          Discover world-class museums that won't cost you a penny. From ancient artifacts to modern art, explore the best free cultural institutions across the globe. Find out when to visit and how to make the most of your experience.
        </p>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">European Free Museums</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Europe's most prestigious museums offer free admission:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>British Museum, London - Permanent collections always free</li>
            <li>Louvre, Paris - Free first Sunday of each month</li>
            <li>Vatican Museums, Rome - Free last Sunday monthly</li>
            <li>Reina Sofia, Madrid - Free evenings and weekends</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">American Cultural Treasures</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">The United States offers numerous free museums:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Smithsonian Museums, Washington DC - Always free</li>
            <li>Getty Center, Los Angeles - Free admission daily</li>
            <li>Cleveland Museum of Art - Permanent collection free</li>
            <li>Minneapolis Institute of Art - No admission fee</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">Asian Art and History</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Explore Asian culture through these free museums:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>National Museum of China, Beijing - Free with reservation</li>
            <li>Tokyo National Museum - Free special days</li>
            <li>National Museum of Korea, Seoul - Permanent exhibitions free</li>
            <li>National Gallery Singapore - Free for citizens/residents</li>
          </ul>
        </div>
      </div>

      <div class="quick-tips bg-primary/5 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-bold mb-4">Visitor Tips</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold mb-2">Making the Most of Free Days:</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Book timed entries in advance</li>
              <li>Visit during off-peak hours</li>
              <li>Check special exhibition fees</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">What to Bring:</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>ID for free admission</li>
              <li>Camera (if permitted)</li>
              <li>Comfortable walking shoes</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="call-to-action bg-muted/30 p-6 rounded-lg text-center">
        <p class="font-semibold mb-4">Looking for free museums near you?</p>
        <p>Use our search tool to find free cultural attractions in your area.</p>
      </div>
    `,
    excerpt: "Explore the world's finest museums without spending a dime. Your comprehensive guide to free museum days and permanently free cultural institutions globally.",
    author: "Michael Chen",
    date: "2024-03-10",
    tags: ["free museums", "cultural activities", "free things to do", "art galleries", "history museums"]
  },
  "spring-outdoor-activities": {
    title: "Free Spring Activities: Outdoor Adventures That Don't Cost a Thing",
    content: `
      <div class="article-header">
        <p class="lead text-lg text-muted-foreground mb-8">
          As nature awakens from winter, discover the best free outdoor activities to enjoy the spring season. From urban nature walks to photography adventures, here's your guide to cost-free spring entertainment.
        </p>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">Spring Nature Exploration</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Experience spring's natural beauty:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Cherry blossom viewing in public parks</li>
            <li>Wildflower identification walks</li>
            <li>Bird watching during migration season</li>
            <li>Spring waterfall visits after rain</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">Urban Nature Activities</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">City-based spring adventures:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Botanical garden free days</li>
            <li>Community garden visits</li>
            <li>Public park fitness trails</li>
            <li>Urban wildlife spotting</li>
          </ul>
        </div>
      </div>

      <div class="content-section mb-8">
        <h2 class="text-2xl font-bold mb-4">Spring Photography Projects</h2>
        <div class="bg-muted/30 p-6 rounded-lg mb-4">
          <p class="mb-4">Document spring's arrival:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Morning dew photography</li>
            <li>Spring bloom time-lapse</li>
            <li>Urban renewal photo walks</li>
            <li>Nature macro photography</li>
          </ul>
        </div>
      </div>

      <div class="quick-tips bg-primary/5 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-bold mb-4">Seasonal Tips</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-semibold mb-2">Weather Preparation:</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Check rain forecasts</li>
              <li>Layer your clothing</li>
              <li>Bring rain protection</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-2">Best Times:</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>Early morning light</li>
              <li>After spring showers</li>
              <li>Weekend mornings</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="call-to-action bg-muted/30 p-6 rounded-lg text-center">
        <p class="font-semibold mb-4">Ready to explore spring activities near you?</p>
        <p>Use our search tool to find seasonal outdoor activities in your area.</p>
      </div>
    `,
    excerpt: "Welcome spring with these free outdoor activities. From nature walks to photography projects, discover cost-free ways to enjoy the season.",
    author: "Emma Wilson",
    date: "2024-03-05",
    tags: ["spring activities", "outdoor activities", "free things to do", "nature", "photography"]
  }
}

// 添加 generateStaticParams 函数
export async function generateStaticParams() {
  // 返回所有可能的 slug 参数
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }))
}

// 修改 getBlogPost 函数使用上面定义的 posts
function getBlogPost(slug: string): Post | undefined {
  return posts[slug]
}

// 生成动态元数据
export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
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

export default function BlogPost({ params }: BlogPostParams) {
  const post = getBlogPost(params.slug)
  
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