import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActivitySearch } from '../activity-search';

describe('ActivitySearch', () => {
  it('should render search form', () => {
    render(<ActivitySearch />);
    
    expect(screen.getByPlaceholderText(/enter your location/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should show error when searching without location', async () => {
    render(<ActivitySearch />);
    
    const searchButton = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchButton);
    
    expect(await screen.findByText(/location required/i)).toBeInTheDocument();
  });

  it('should fetch and display activities when searching with valid input', async () => {
    render(<ActivitySearch />);
    
    const locationInput = screen.getByPlaceholderText(/enter your location/i);
    await userEvent.type(locationInput, 'New York');
    
    const searchButton = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchButton);
    
    await waitFor(() => {
      expect(screen.getByText('Local Park Visit')).toBeInTheDocument();
    });
  });

  it('should toggle filters popover', async () => {
    render(<ActivitySearch />);
    
    const filtersButton = screen.getByRole('button', { name: /filters/i });
    await userEvent.click(filtersButton);
    
    expect(screen.getByText(/customize your activity search/i)).toBeInTheDocument();
  });
});