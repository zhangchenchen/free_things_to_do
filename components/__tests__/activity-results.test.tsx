import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ActivityResults } from '../activity-results';

describe('ActivityResults', () => {
  const mockActivities = [
    {
      id: '1',
      name: 'Local Park Visit',
      description: 'Enjoy a day at the local park',
      location: 'Central Park',
      bestTime: 'Morning',
      groupSize: '1-5',
      isIndoor: false,
      isOutdoor: true,
      isAccessible: true,
      category: 'Outdoor Activities',
    },
  ];

  it('should render activity cards', () => {
    render(
      <ActivityResults
        activities={mockActivities}
        onLoadMore={() => {}}
      />
    );

    expect(screen.getByText('Local Park Visit')).toBeInTheDocument();
    expect(screen.getByText('Enjoy a day at the local park')).toBeInTheDocument();
  });

  it('should handle feedback buttons', async () => {
    render(
      <ActivityResults
        activities={mockActivities}
        onLoadMore={() => {}}
      />
    );

    const helpfulButton = screen.getByRole('button', { name: /helpful/i });
    fireEvent.click(helpfulButton);

    expect(helpfulButton).toHaveClass('bg-primary');
  });

  it('should call onLoadMore when load more button is clicked', () => {
    const mockOnLoadMore = vi.fn();
    render(
      <ActivityResults
        activities={mockActivities}
        onLoadMore={mockOnLoadMore}
      />
    );

    const loadMoreButton = screen.getByRole('button', { name: /load more activities/i });
    fireEvent.click(loadMoreButton);

    expect(mockOnLoadMore).toHaveBeenCalled();
  });
});