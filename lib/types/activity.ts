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
  id: string;
  name: string;
  description: string;
  location: string;
  bestTime: string;
  groupSize: string;
  isIndoor: boolean;
  isOutdoor: boolean;
  isAccessible: boolean;
  category: string;
  rating?: number;
  feedback?: string[];
}

export interface ActivityResponse {
  activities: Activity[];
  context: {
    weather: string;
    season: string;
    time: string;
  };
}