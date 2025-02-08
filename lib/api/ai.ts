import { SearchParams } from '@/lib/types/activity';

const AI_API_ENDPOINT = process.env.NEXT_PUBLIC_AI_API_ENDPOINT;
const AI_API_KEY = process.env.NEXT_PUBLIC_AI_API_KEY;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface OpenRouterResponse {
  choices: {
    message: Message;
    finish_reason: string;
  }[];
  model: string;
  created: number;
}

interface SearchParams {
  location: string;
  groupSize: string;
  additionalPreferences?: string;
  offset?: number;
}

function buildPrompt(params: SearchParams): string {
  const groupSizeText = {
    "1": "solo traveler",
    "2": "couple",
    "3-5": "small group of 3-5 people",
    "6+": "large group of 6 or more people"
  }[params.groupSize];

  let prompt = `Suggest ${params.offset ? 'additional' : ''} 5 free activities in ${params.location} suitable for a ${groupSizeText}.`;
  
  if (params.offset) {
    prompt += ` Please provide 5 different activities from the previous ${params.offset} suggestions. These should be completely different from the previous recommendations.`;
  }
  
  if (params.additionalPreferences) {
    prompt += ` Additional preferences: ${params.additionalPreferences}.`;
  }

  prompt += `
Return a JSON array of exactly 5 activities. Each activity should include:
- title: Short, descriptive name
- description: Brief overview (max 2 sentences)
- category: One of [Historical Sites, Parks & Nature, Arts & Culture, Entertainment]
- specific_location: Address or exact location
- best_time: Brief timing info
- notice: Key visitor info (max 2 sentences)

Format: Plain JSON array only, no markdown. Example:
[{"title": "Park Name", "description": "Brief text", ...}]`;

  return prompt;
}

export async function callAIAPI(searchParams: SearchParams) {
  if (!AI_API_ENDPOINT || !AI_API_KEY) {
    console.error('API Configuration:', {
      endpoint: AI_API_ENDPOINT,
      hasKey: !!AI_API_KEY,
      env: process.env
    });
    throw new Error('AI API configuration is missing');
  }

  try {
    const fullUrl = `${AI_API_ENDPOINT}/chat/completions`;
    const prompt = buildPrompt(searchParams);
    
    console.log('Calling AI API:', {
      url: fullUrl,
      searchParams
    });

    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`,
        'HTTP-Referer': typeof window !== 'undefined' ? window.location.href : 'http://localhost:3000',
        'X-Title': 'Free Things To Do',
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-lite-preview-02-05:free",
        messages: [{
          role: "user",
          content: prompt
        }],
        temperature: 0.7,
        max_tokens: 2000,
        top_p: 0.9,
        stream: false,
        response_format: { type: "json_object" }
      }),
    });

    // 记录响应状态和头信息
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response body:', errorText);
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      const text = await response.text();
      console.error('Unexpected response type:', contentType);
      console.error('Response body:', text);
      throw new Error('API returned non-JSON response');
    }

    const data: OpenRouterResponse = await response.json();
    console.log('AI API Response:', data);
    
    return data.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('AI API Error:', error);
    throw error;
  }
} 