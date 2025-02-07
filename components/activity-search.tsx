"use client"

import { useState } from "react"
import { MapPin, Users, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ActivityResults } from "@/components/activity-results"
import { getActivityRecommendations } from "@/lib/api/activity"
import { Activity, ActivityPreferences } from "@/lib/types/activity"
import { useToast } from "@/hooks/use-toast"

export function ActivitySearch() {
  const { toast } = useToast()
  const [location, setLocation] = useState("")
  const [groupSize, setGroupSize] = useState("1")
  const [showFilters, setShowFilters] = useState(false)
  const [preferences, setPreferences] = useState<ActivityPreferences>({
    indoor: false,
    outdoor: false,
    accessible: false,
  })
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "Please enter a location to search for activities.",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)
      const response = await getActivityRecommendations({
        location,
        groupSize,
        preferences,
        time: new Date().toLocaleTimeString(),
        season: undefined, // Will be determined by the API
      })
      setActivities(response.activities)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch activity recommendations. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = async () => {
    // Implementation for loading more activities
    // This would typically involve pagination or fetching additional recommendations
    try {
      setLoading(true)
      const response = await getActivityRecommendations({
        location,
        groupSize,
        preferences,
      })
      setActivities((prev) => [...prev, ...response.activities])
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load more activities. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="w-full md:w-48">
          <Select value={groupSize} onValueChange={setGroupSize}>
            <SelectTrigger>
              <SelectValue placeholder="Group size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Solo</SelectItem>
              <SelectItem value="2">Couple</SelectItem>
              <SelectItem value="3-5">Small Group (3-5)</SelectItem>
              <SelectItem value="6+">Large Group (6+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Popover open={showFilters} onOpenChange={setShowFilters}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Preferences</h4>
                <p className="text-sm text-muted-foreground">
                  Customize your activity search
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="indoor">Indoor Activities</Label>
                  <Switch
                    id="indoor"
                    checked={preferences.indoor}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, indoor: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="outdoor">Outdoor Activities</Label>
                  <Switch
                    id="outdoor"
                    checked={preferences.outdoor}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, outdoor: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="accessible">Accessible</Label>
                  <Switch
                    id="accessible"
                    checked={preferences.accessible}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, accessible: checked }))
                    }
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Button onClick={handleSearch} className="w-full md:w-auto" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {activities.length > 0 && (
        <ActivityResults
          activities={activities}
          onLoadMore={handleLoadMore}
          loading={loading}
        />
      )}
    </div>
  )
}