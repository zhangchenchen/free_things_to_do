'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from "react"
import Image from "next/image"

interface Activity {
  title: string
  description: string
  location: string
  groupSize: string
  bestTime: string
  city: string
  imageUrl: string
}

interface ActivityCarouselProps {
  activities: Activity[]
}

export function ActivityCarousel({ activities }: ActivityCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {activities.map((activity, index) => (
            <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] pl-4 first:pl-0" key={index}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-background h-full overflow-hidden">
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={activity.imageUrl}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
                    >
                      {activity.city}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">
                    {activity.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Location</div>
                          <div className="text-sm text-muted-foreground">{activity.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Group Size</div>
                          <div className="text-sm text-muted-foreground">{activity.groupSize}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Best Time</div>
                          <div className="text-sm text-muted-foreground">{activity.bestTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hidden md:flex"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hidden md:flex"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
} 