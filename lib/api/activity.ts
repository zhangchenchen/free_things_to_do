import { ActivityRequest, ActivityResponse, Activity } from "@/lib/types/activity";

const API_ENDPOINT = process.env.NEXT_PUBLIC_AI_API_ENDPOINT;
const API_KEY = process.env.AI_API_KEY;

export async function getActivityRecommendations(
  request: ActivityRequest
): Promise<ActivityResponse> {
  try {
    const response = await fetch(API_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: formatPrompt(request),
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recommendations");
    }

    const data = await response.json();
    return parseAIResponse(data);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
}

function formatPrompt(request: ActivityRequest): string {
  return `Generate 5 free activity recommendations based on the following criteria:
Location: ${request.location}
Group Size: ${request.groupSize}
Preferences:
- Indoor: ${request.preferences.indoor}
- Outdoor: ${request.preferences.outdoor}
- Accessible: ${request.preferences.accessible}
Time: ${request.time || "Any"}
Season: ${request.season || getCurrentSeason()}

Please provide structured recommendations including:
- Activity name
- Description
- Location details
- Best time to visit
- Accessibility information
- Category
`;
}

function getCurrentSeason(): string {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "Spring";
  if (month >= 5 && month <= 7) return "Summer";
  if (month >= 8 && month <= 10) return "Fall";
  return "Winter";
}

function parseAIResponse(data: any): ActivityResponse {
  // Parse the AI response and convert it to our ActivityResponse format
  // This is a simplified example - you'll need to adapt this based on your AI model's output
  const activities: Activity[] = data.recommendations.map((rec: any) => ({
    id: crypto.randomUUID(),
    name: rec.name,
    description: rec.description,
    location: rec.location,
    bestTime: rec.bestTime,
    groupSize: rec.groupSize,
    isIndoor: rec.isIndoor,
    isOutdoor: rec.isOutdoor,
    isAccessible: rec.isAccessible,
    category: rec.category,
  }));

  return {
    activities,
    context: {
      weather: data.context.weather,
      season: data.context.season,
      time: data.context.time,
    },
  };
}