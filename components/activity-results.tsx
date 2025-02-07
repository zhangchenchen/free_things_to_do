"use client";

import { Activity } from "@/lib/types/activity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Users, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
  const [feedback, setFeedback] = useState<Record<string, "like" | "dislike">>({});

  const handleFeedback = (activityId: string, type: "like" | "dislike") => {
    setFeedback((prev) => ({ ...prev, [activityId]: type }));
    // Here you would also send the feedback to your backend
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <CardTitle className="text-xl">{activity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{activity.description}</p>
              <div className="grid gap-2">
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {activity.location}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4" />
                  Best time: {activity.bestTime}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4" />
                  Group size: {activity.groupSize}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleFeedback(activity.id, "like")}
                    className={feedback[activity.id] === "like" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleFeedback(activity.id, "dislike")}
                    className={feedback[activity.id] === "dislike" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <ThumbsDown className="h-4 w-4 mr-1" />
                    Not Helpful
                  </Button>
                </div>
                <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                  {activity.category}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {activities.length > 0 && (
        <div className="text-center">
          <Button onClick={onLoadMore} disabled={loading}>
            {loading ? "Loading..." : "Load More Activities"}
          </Button>
        </div>
      )}
    </div>
  );
}