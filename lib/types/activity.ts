export interface ActivityPreferences {
  indoor: boolean;
  outdoor: boolean;
  accessible: boolean;
}

export interface ActivityRequest {
  location: string;
  groupSize: string;
  preferences: ActivityPreferences;
  time?: string;
  season?: string;
}

export interface Activity {
  title: string;
  description: string;
  location: string;
  specific_location?: string;
  groupSize: string;
  bestTime: string;
  best_time?: string;
  city: string;
  imageUrl?: string;
  category?: string;
  notice?: string;
}

export interface ActivityResponse {
  activities: Activity[];
  context: {
    weather: string;
    season: string;
    time: string;
  };
}

export interface SearchParams {
  location: string;
  groupSize: string;
  additionalPreferences?: string;
  offset?: number;
}