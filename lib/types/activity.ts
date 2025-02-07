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
  id?: string;
  title: string;
  description: string;
  category: string;
  specific_location: string;
  best_time: string;
  notice: string;
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
  groupSize: "1" | "2" | "3-5" | "6+";
  additionalPreferences?: string;
}