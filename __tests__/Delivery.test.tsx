import Delivery from '@/app/(listing)/[cityName]/[restType]/page';
import { render } from '@testing-library/react';

describe('Delivery Component', () => {
  test('Renders Delivery screen with Delivery Restaurants', () => {
    const { getByText } = render(<Delivery params={{ restType: 'delivery' }} />);
    expect(getByText('Delivery Restaurants in Bhopal')).toBeInTheDocument();
  });

  test('Renders Dine-out screen with Trending Dining Restaurants', () => {
    const { getByText } = render(<Delivery params={{ restType: 'dine-out' }} />);
    expect(getByText('Trending dining restaurants in Bhopal')).toBeInTheDocument();
  });

  test('Renders Nightlife screen with Nightlife Restaurants', () => {
    const { getByText } = render(<Delivery params={{ restType: 'nightlife' }} />);
    expect(getByText('Nightlife Restaurants in Bhopal')).toBeInTheDocument();
  });
});
