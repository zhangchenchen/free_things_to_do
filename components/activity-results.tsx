"use client";

import { Activity } from "@/lib/types/activity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, AlertTriangle, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ActivityResultsProps {
  activities: Activity[];
  onLoadMore: () => void;
  loading?: boolean;
}

export function ActivityResults({
  activities,
  onLoadMore,
  loading = false,
}: ActivityResultsProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {activities.map((activity) => (
          <Card key={`${activity.title}-${activity.category}`} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/50 pb-4">
              <div className="flex flex-col items-start gap-2">
                <CardTitle className="text-xl">{activity.title}</CardTitle>
                <Badge variant="secondary">
                  <Tag className="h-3 w-3 mr-1" />
                  {activity.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* 描述部分 */}
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-left">
                    {activity.description}
                  </p>
                </div>

                {/* 信息部分 */}
                <div className="grid gap-4 bg-muted/30 p-4 rounded-lg">
                  {activity.specific_location && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium">Location</span>
                      </div>
                      <div className="text-sm text-muted-foreground text-left">
                        {activity.specific_location}
                      </div>
                    </div>
                  )}
                  {activity.best_time && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium">Best Time</span>
                      </div>
                      <div className="text-sm text-muted-foreground text-left">
                        {activity.best_time}
                      </div>
                    </div>
                  )}
                  {activity.notice && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-warning shrink-0" />
                        <span className="font-medium">Important Notice</span>
                      </div>
                      <div className="text-sm text-muted-foreground text-left whitespace-pre-line">
                        {activity.notice}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {activities.length > 0 && (
        <div className="text-center mt-8">
          <Button onClick={onLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More Activities"}
          </Button>
        </div>
      )}
    </div>
  );
}