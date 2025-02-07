import '@testing-library/jest-dom/vitest';
import { beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const handlers = [
  http.post(process.env.NEXT_PUBLIC_AI_API_ENDPOINT ?? '', async ({ request }) => {
    const req = await request.json();
    
    // Mock response based on the request
    return HttpResponse.json({
      recommendations: [
        {
          name: 'Local Park Visit',
          description: 'Enjoy a day at the local park with various activities.',
          location: 'Central Park',
          bestTime: 'Morning',
          groupSize: '1-5',
          isIndoor: false,
          isOutdoor: true,
          isAccessible: true,
          category: 'Outdoor Activities',
        },
        // Add more mock recommendations as needed
      ],
      context: {
        weather: 'Sunny',
        season: 'Spring',
        time: '10:00 AM',
      },
    });
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());