export type Post = {
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  tags: string[]
}

export const posts: Record<string, Post> = {
  "free-weekend-activities-families": {
    title: "10 Free Things to Do with Family Near You: Weekend Activities Guide",
    content: `...`,  // 现有内容
    excerpt: "Discover the best free family activities near you...",
    author: "Sarah Johnson",
    date: "2025-02-09",
    tags: ["free things to do", "family activities", "weekend activities"]
  },
  "best-free-museums-worldwide": {
    title: "Best Free Museums Around the World: Your Ultimate Guide",
    content: `...`,  // 现有内容
    excerpt: "Explore the world's finest museums without spending...",
    author: "Michael Chen",
    date: "2025-02-08",
    tags: ["museums", "culture", "free things to do"]
  },
  "spring-outdoor-activities": {
    title: "Spring Outdoor Activities That Don't Cost a Dime",
    content: `...`,  // 现有内容
    excerpt: "Welcome spring with these free outdoor activities...",
    author: "Emma Wilson",
    date: "2025-02-08",
    tags: ["spring activities", "outdoor activities", "free things to do"]
  }
} 