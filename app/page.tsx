import { SiteHeader } from "@/components/site-header"
import { ActivitySearch } from "@/components/activity-search"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { ActivityCarousel } from "@/components/activity-carousel"

export default function Home() {
  const featuredActivities = [
    {
      title: "Central Park Walking Tour",
      description: "Take a self-guided walking tour through NYC's iconic Central Park. Visit Bethesda Fountain, Belvedere Castle, and Strawberry Fields.",
      location: "Central Park, New York City",
      groupSize: "Any",
      bestTime: "Morning or Late Afternoon",
      city: "New York",
      imageUrl: "/images/activities/central-park.jpg",
    },
    {
      title: "Getty Center Art Museum",
      description: "Explore world-class art collections and stunning architecture with free admission. Enjoy panoramic views of Los Angeles.",
      location: "1200 Getty Center Dr, Los Angeles",
      groupSize: "1-10",
      bestTime: "Tuesday-Sunday, 10am-5:30pm",
      city: "Los Angeles",
      imageUrl: "/images/activities/getty-center.jpg",
    },
    {
      title: "Lincoln Park Zoo",
      description: "One of the oldest zoos in North America offering free admission. Home to a diverse collection of animals in the heart of Chicago.",
      location: "2001 N Clark St, Chicago",
      groupSize: "Any",
      bestTime: "Year-round, 10am-5pm",
      city: "Chicago",
      imageUrl: "/images/activities/lincoln-park-zoo.jpg",
    },
    {
      title: "Smithsonian Museums",
      description: "Visit the world's largest museum complex with free admission. Explore art, history, and science exhibits.",
      location: "National Mall, Washington, DC",
      groupSize: "Any",
      bestTime: "Weekdays, 10am-5:30pm",
      city: "Washington DC",
      imageUrl: "/images/activities/smithsonian.jpg",
    },
    {
      title: "Golden Gate Park",
      description: "Discover 1,017 acres of gardens, museums, and hidden treasures. Perfect for picnics and outdoor activities.",
      location: "San Francisco, CA",
      groupSize: "Any",
      bestTime: "Year-round, Dawn to Dusk",
      city: "San Francisco",
      imageUrl: "/images/activities/golden-gate-park.jpg",
    },
    {
      title: "Pike Place Market",
      description: "Experience the historic public market with street performers, local artisans, and amazing water views.",
      location: "85 Pike St, Seattle",
      groupSize: "Any",
      bestTime: "Morning to Early Afternoon",
      city: "Seattle",
      imageUrl: "/images/activities/pike-place.jpg",
    },
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
    {
      title: "Sensō-ji Temple",
      description: "Visit Tokyo's oldest Buddhist temple. Experience traditional architecture, street food, and shopping along Nakamise Shopping Street.",
      location: "2-3-1 Asakusa, Taito City, Tokyo",
      groupSize: "Any",
      bestTime: "Early Morning or Evening",
      city: "Tokyo",
      imageUrl: "/images/activities/sensoji-temple.jpg",
    },
    {
      title: "Royal Botanic Gardens",
      description: "Explore 30 hectares of stunning gardens, featuring Australian natives and exotic species. Perfect for picnics and nature walks.",
      location: "Mrs Macquaries Rd, Sydney",
      groupSize: "Any",
      bestTime: "9am-5pm Daily",
      city: "Sydney",
      imageUrl: "/images/activities/sydney-gardens.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto text-center space-y-8">
            <Link href="/" className="inline-block">
              <h1 className="text-4xl font-bold tracking-tight mb-4 hover:text-primary/90 transition-colors">
                Discover Amazing Free Activities
              </h1>
            </Link>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by AI to find the perfect free activities in your area. 
              Get personalized recommendations for families, students, and anyone 
              looking for cost-free entertainment.
            </p>
            <ActivitySearch />
          </div>
        </section>

        {/* Featured Activities */}
        <section className="py-20 px-4 bg-muted/30">
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

        {/* Footer */}
        <footer className="border-t py-8 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Activity Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      Instagram
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
      </main>
    </div>
  )
}