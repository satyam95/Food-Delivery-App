import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "./index";

const mockRestaurantData = {
  name: "Sample Restaurant",
  slug: "sample-restaurant",
  imageUrl:
    "https://b.zmtcdn.com/data/pictures/chains/9/2600549/5f0e73e475f542deb7bed86fad3354fb_o2_featured_v2.jpg",
  rating: "4.5",
  costText: "₹200 for one",
  deliveryTime: "30 min",
  isPromoted: true,
  bulkOffers: ["10% Off", "Free Delivery"],
  cuisine: [{ name: "Italian" }, { name: "Pizza" }],
};

test("RestaurantCard renders correctly", () => {
  render(<RestaurantCard {...mockRestaurantData} />);

  const restaurantName = screen.getByText("Sample Restaurant");
  const rating = screen.getByTestId("rating-element");
  const cuisineNames = screen.getByText("Italian, Pizza");
  const costText = screen.getByText("₹200 for one");
  const deliveryTime = screen.getByText("30 min");
  const promotedBadge = screen.getByText("Promoted");
  const bulkOffer1 = screen.getByText("10% Off");
  const bulkOffer2 = screen.getByText("Free Delivery");

  expect(restaurantName).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
  expect(cuisineNames).toBeInTheDocument();
  expect(costText).toBeInTheDocument();
  expect(deliveryTime).toBeInTheDocument();
  expect(promotedBadge).toBeInTheDocument();
  expect(bulkOffer1).toBeInTheDocument();
  expect(bulkOffer2).toBeInTheDocument();
});

test("RestaurantCard renders without Promoted badge when isPromoted is false", () => {
  const dataWithoutPromotion = {
    ...mockRestaurantData,
    isPromoted: false,
  };
  render(<RestaurantCard {...dataWithoutPromotion} />);

  const promotedBadge = screen.queryByText("Promoted");
  expect(promotedBadge).toBeNull();
});

test("RestaurantCard renders without bulkOffers when bulkOffers array is empty", () => {
  const dataWithoutBulkOffers = {
    ...mockRestaurantData,
    bulkOffers: [],
  };
  render(<RestaurantCard {...dataWithoutBulkOffers} />);

  const bulkOffer1 = screen.queryByText("10% Off");
  const bulkOffer2 = screen.queryByText("Free Delivery");
  expect(bulkOffer1).toBeNull();
  expect(bulkOffer2).toBeNull();
});

test("RestaurantCard renders with 'N/A' delivery time", () => {
  const dataWithNADeliveryTime = {
    ...mockRestaurantData,
    deliveryTime: "N/A",
  };
  render(<RestaurantCard {...dataWithNADeliveryTime} />);
  const costText = screen.getByText("₹200 for one");

  expect(costText).toBeInTheDocument();
});
