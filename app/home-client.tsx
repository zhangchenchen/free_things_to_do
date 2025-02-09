'use client'

import { SiteHeader } from "@/components/site-header"
import { ActivitySearch } from "@/components/activity-search"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Clock, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { ActivityCarousel } from "@/components/activity-carousel"
import { useCallback } from 'react'

export function HomeClient() {
  const featuredActivities = [
    {
      title: "British Museum",
      description: "Explore one of the world's oldest museums housing human history, art, and culture. From the Rosetta Stone to the Parthenon sculptures.",
      location: "Great Russell St, Bloomsbury, London",
      groupSize: "Any",
      bestTime: "10am-5pm, Late Fridays until 8:30pm",
      city: "London",
      imageUrl: "/images/activities/british-museum.jpg",
    },
    {
      title: "Gardens by the Bay",
      description: "Visit the spectacular Supertree Grove and outdoor gardens. While some attractions are paid, the main outdoor areas are free to explore.",
      location: "18 Marina Gardens Drive, Singapore",
      groupSize: "Any",
      bestTime: "5am-2am Daily",
      city: "Singapore",
      imageUrl: "/images/activities/gardens-by-the-bay.jpg",
    },
    {
      title: "Park Güell Free Zone",
      description: "Explore the free public areas of Gaudí's whimsical park. Enjoy stunning views of Barcelona and unique architectural elements.",
      location: "Park Güell, Barcelona",
      groupSize: "Any",
      bestTime: "Morning or Sunset",
      city: "Barcelona",
      imageUrl: "/images/activities/park-guell.jpg",
    },
    {
      title: "Victoria Peak Trail",
      description: "Hike the circular trail around Victoria Peak for breathtaking views of Hong Kong's skyline, harbor, and surrounding islands.",
      location: "Victoria Peak, Hong Kong",
      groupSize: "1-10",
      bestTime: "Early Morning or Late Afternoon",
      city: "Hong Kong",
      imageUrl: "/images/activities/victoria-peak.jpg",
    },
  ]

  // 添加滚动处理函数
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80 // 根据你的 header 高度调整
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-6">
                Discover Amazing Free Activities Near You
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find the perfect free things to do in your area. Whether you're solo, with family, or in a group.
              </p>
            </div>
            <ActivitySearch />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4 bg-background scroll-mt-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Enter Location</h3>
                <p className="text-muted-foreground">Simply tell us where you are or where you plan to visit</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Specify Your Group</h3>
                <p className="text-muted-foreground">Let us know your group size and any specific preferences</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Get Personalized Results</h3>
                <p className="text-muted-foreground">Receive AI-powered suggestions tailored to your needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id="mission" className="py-20 px-4 bg-muted/30 scroll-mt-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that amazing experiences shouldn't come with a price tag. Our mission is to connect people with enriching free activities in their communities and while traveling. Through the power of AI, we make it easier than ever to discover cultural, educational, and entertaining activities that are accessible to everyone.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-8">
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">Making memorable experiences available to everyone, regardless of budget</p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Connecting people with their local culture and community resources</p>
                </div>
                <div className="p-4 bg-background rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Using AI to personalize and simplify activity discovery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Activities Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Free Activities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover some of the most popular free attractions across major cities around the world
              </p>
            </div>
            <ActivityCarousel activities={featuredActivities} />
          </div>
        </section>
      </main>

      {/* Footer - 更新链接处理 */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('mission')}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-sm text-muted-foreground hover:text-primary text-left"
                  >
                    How It Works
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:pekingzcc@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Free Things To Do. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 