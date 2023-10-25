import React from 'react';
import { render, screen } from '@testing-library/react';
import WHOCard from '.';

describe('WHOCard Component', () => {
  it('renders the WHOCard component correctly', () => {
    render(<WHOCard />);
    
    // Assert that the image with alt text "max-safety" is rendered
    const image = screen.getByAltText('max-safety');
    expect(image).toBeInTheDocument();

    // Assert that the text "Restaurant partner follows WHO protocol" is present
    const text = screen.getByText('Restaurant partner follows WHO protocol');
    expect(text).toBeInTheDocument();
  });
});
