import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantDetailMenu from "./index";

const mockMenu = {
  restaurantName: "Test Restaurant",
};

test("RestaurantDetailMenu component renders correctly", () => {
  render(<RestaurantDetailMenu restaurantName={mockMenu.restaurantName} />);
  const restaurantNameElement = screen.getByText("Test Restaurant Menu");
  expect(restaurantNameElement).toBeInTheDocument();
});
