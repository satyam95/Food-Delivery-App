import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from './index';

describe('StarRating Component', () => {
  it('renders full stars correctly', () => {
    render(<StarRating rating={4.5} />);

    // Assert that the full stars are rendered
    const fullStars = screen.getAllByAltText('star-full');
    expect(fullStars).toHaveLength(4);
  });

  it('renders a half star correctly', () => {
    render(<StarRating rating={3.5} />);

    // Assert that the half star is rendered
    const halfStar = screen.getByAltText('star-half');
    expect(halfStar).toBeInTheDocument();
  });

  it('renders empty stars correctly', () => {
    render(<StarRating rating={2.0} />);

    // Assert that the empty stars are rendered
    const emptyStars = screen.getAllByAltText('star-empty');
    expect(emptyStars).toHaveLength(3);
  });

  it('renders the correct number of stars for a rating of 0', () => {
    render(<StarRating rating={0} />);

    // Assert that all stars are empty
    const emptyStars = screen.getAllByAltText('star-empty');
    expect(emptyStars).toHaveLength(5);
  });

  it('renders the correct number of stars for a rating of 5', () => {
    render(<StarRating rating={5} />);

    // Assert that all stars are full
    const fullStars = screen.getAllByAltText('star-full');
    expect(fullStars).toHaveLength(5);
  });
});
