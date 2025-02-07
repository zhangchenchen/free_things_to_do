"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ActivityResults } from "@/components/activity-results"
import { Activity } from "@/lib/types/activity"
import { useToast } from "@/hooks/use-toast"
import { callAIAPI } from '../lib/api/ai'

export function ActivitySearch() {
  const { toast } = useToast()
  const [location, setLocation] = useState("")
  const [groupSize, setGroupSize] = useState<"1" | "2" | "3-5" | "6+">("1")
  const [additionalPreferences, setAdditionalPreferences] = useState("")
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async () => {
    if (!location) {
      toast({
        title: "Location Required",
        description: "Please enter a location to search for activities.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)
    setError(null)
    try {
      const response = await callAIAPI({
        location,
        groupSize,
        additionalPreferences: additionalPreferences || undefined,
      })
      
      let activities
      let cleanedResponse = ''
      try {
        cleanedResponse = response
          .replace(/```json\n?/g, '')  // 移除开始的 json 标记
          .replace(/\n?```/g, '')      // 移除结束的标记
          .replace(/[\u201C\u201D]/g, '"') // 替换智能引号
          .replace(/[\u2018\u2019]/g, "'") // 替换智能单引号
          .trim()

        // 尝试解析前先验证 JSON 格式
        if (!cleanedResponse.startsWith('[') || !cleanedResponse.endsWith(']')) {
          throw new Error('Response is not a valid JSON array')
        }

        activities = JSON.parse(cleanedResponse)

        // 验证活动数据结构
        if (!Array.isArray(activities) || !activities.every(isValidActivity)) {
          throw new Error('Invalid activity data structure')
        }

        setActivities(activities)
      } catch (e) {
        console.error('Raw response:', response)
        console.error('Cleaned response:', cleanedResponse)
        console.error('Parse error:', e)
        throw new Error('Failed to parse activities data')
      }
    } catch (err) {
      console.error('Search error:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch activities')
    } finally {
      setLoading(false)
    }
  }

  // 验证活动数据结构的辅助函数
  function isValidActivity(activity: any): activity is Activity {
    return (
      typeof activity === 'object' &&
      typeof activity.title === 'string' &&
      typeof activity.description === 'string' &&
      typeof activity.category === 'string' &&
      typeof activity.specific_location === 'string' &&
      typeof activity.best_time === 'string' &&
      typeof activity.notice === 'string'
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">

      {/* 搜索表单 */}
      <div className="bg-card rounded-xl shadow-sm border p-6 space-y-6">
        {/* 位置和组大小 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
          <div className="w-full md:w-48">
            <Select 
              value={groupSize} 
              onValueChange={(value: "1" | "2" | "3-5" | "6+") => setGroupSize(value)}
            >
              <SelectTrigger className="h-12">
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
        </div>

        {/* 额外需求输入框 */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <label htmlFor="preferences" className="text-sm font-medium">
              Additional Preferences
              <span className="text-muted-foreground font-normal ml-1">(Optional)</span>
            </label>
            <span className="text-xs text-muted-foreground hidden md:inline-block">
              e.g., kid-friendly, cultural activities, suitable for elderly
            </span>
          </div>
          <Textarea
            id="preferences"
            placeholder="Enter any specific requirements or preferences for your activities..."
            value={additionalPreferences}
            onChange={(e) => setAdditionalPreferences(e.target.value)}
            className="min-h-[80px] resize-none"
          />
          <span className="text-xs text-muted-foreground md:hidden block mt-1">
            e.g., kid-friendly, cultural activities, suitable for elderly
          </span>
        </div>

        {/* 搜索按钮 */}
        <div className="flex justify-center pt-2">
          <Button 
            onClick={handleSearch} 
            disabled={loading}
            size="lg"
            className="w-full md:w-auto min-w-[200px]"
          >
            {loading ? "Searching..." : "Search Activities"}
          </Button>
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-lg text-center">
          {error}
        </div>
      )}

      {/* 活动结果 */}
      {activities.length > 0 && (
        <div className="mt-12">
          <ActivityResults
            activities={activities}
            onLoadMore={() => {}}
            loading={loading}
          />
        </div>
      )}
    </div>
  )
}