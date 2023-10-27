import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import RestaurantsGridView from "./index";
import { dummyData, restaurants } from "@/data/restaurant";

test("Renders a list of restaurants correctly", () => {
  render(<RestaurantsGridView restaurantsSortedData={dummyData} />);

  const restaurantCards = screen.getAllByTestId("restaurant-card");
  expect(restaurantCards).toHaveLength(1);
});

test("Displays 'No items found' message when there are no restaurants", () => {
  render(<RestaurantsGridView restaurantsSortedData={[]} />);

  const noItemsFoundText = screen.getByText(
    "No items found that match your search/filter."
  );
  expect(noItemsFoundText).toBeInTheDocument();
});

test("Loads more restaurants when scrolled", () => {
  render(<RestaurantsGridView restaurantsSortedData={restaurants} />);
  const restaurantCards = screen.getAllByTestId("restaurant-card");
  expect(restaurantCards.length).toBe(9);

  const scrollableContainer = screen.getByTestId("restaurants-container");

  fireEvent.scroll(scrollableContainer);

  setTimeout(() => {
    render(<RestaurantsGridView restaurantsSortedData={restaurants} />);
    const restaurantCards = screen.getAllByTestId("restaurant-card");
    expect(restaurantCards.length).toBe(18);
  }, 2000);
});







