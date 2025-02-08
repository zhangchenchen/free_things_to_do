import { SiteHeader } from "@/components/site-header"
import { ActivitySearch } from "@/components/activity-search"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const featuredActivities = [
    {
      title: "City Parks Explorer",
      description: "Discover hidden gems in your local parks",
      location: "Various Locations",
      groupSize: "Any",
      bestTime: "Morning/Evening",
    },
    {
      title: "Museum Free Days",
      description: "Visit world-class museums without spending a dime",
      location: "Cultural District",
      groupSize: "1-5",
      bestTime: "Weekdays",
    },
    {
      title: "Nature Trails",
      description: "Experience scenic hiking trails and wildlife",
      location: "Regional Parks",
      groupSize: "2-6",
      bestTime: "All Day",
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
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Activities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredActivities.map((activity, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {activity.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4" />
                        {activity.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4" />
                        {activity.groupSize}
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4" />
                        {activity.bestTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Explore More Activities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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