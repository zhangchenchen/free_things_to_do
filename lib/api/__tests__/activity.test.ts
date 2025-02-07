import { describe, it, expect, vi } from 'vitest';
import { getActivityRecommendations } from '../activity';
import { ActivityRequest } from '@/lib/types/activity';

describe('Activity API', () => {
  it('should fetch activity recommendations successfully', async () => {
    const mockRequest: ActivityRequest = {
      location: 'New York',
      groupSize: '2',
      preferences: {
        indoor: true,
        outdoor: true,
        accessible: true,
      },
    };

    const response = await getActivityRecommendations(mockRequest);

    expect(response).toHaveProperty('activities');
    expect(response).toHaveProperty('context');
    expect(response.activities).toBeInstanceOf(Array);
    expect(response.activities[0]).toHaveProperty('name');
    expect(response.activities[0]).toHaveProperty('description');
  });

  it('should handle API errors gracefully', async () => {
    // Mock a failed API response
    server.use(
      http.post(process.env.NEXT_PUBLIC_AI_API_ENDPOINT ?? '', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    const mockRequest: ActivityRequest = {
      location: 'New York',
      groupSize: '2',
      preferences: {
        indoor: true,
        outdoor: true,
        accessible: true,
      },
    };

    await expect(getActivityRecommendations(mockRequest)).rejects.toThrow();
  });
});