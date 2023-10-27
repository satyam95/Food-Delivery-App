import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ResturantDetailPhotos from "./index";

describe("ResturantDetailPhotos", () => {
  it("renders the component and handles filtering correctly", () => {
    render(<ResturantDetailPhotos />);

    expect(screen.getByText("Kundan Namkeen Center Photos")).toBeInTheDocument();
    expect(screen.getByText("All (4)")).toBeInTheDocument();
    expect(screen.getAllByTestId("category-button")).toHaveLength(2);

    const foodFilterButton = screen.getByText("food (3)");
    fireEvent.click(foodFilterButton);

    expect(screen.getByText("Kundan Namkeen Center Photos")).toBeInTheDocument();
    expect(screen.getByText("food (3)")).toBeInTheDocument();
    expect(screen.queryByText("food (2)")).toBeNull();
  });

  it("handles filtering when 'All' is clicked", () => {
    render(<ResturantDetailPhotos />);

    const foodFilterButton = screen.getByText("food (3)");
    fireEvent.click(foodFilterButton);

    const allFilterButton = screen.getByText("All (4)");
    fireEvent.click(allFilterButton);

    expect(screen.getByText("Kundan Namkeen Center Photos")).toBeInTheDocument();
    expect(screen.getByText("All (4)")).toBeInTheDocument();
  });

  it("displays images correctly", () => {
    render(<ResturantDetailPhotos />);

    const images = screen.getAllByTestId("category-food-image");
    expect(images).toHaveLength(4);
  });

  it("handles selecting a category button", () => {
    render(<ResturantDetailPhotos />);

    const categoryButton = screen.getByText("amdience (1)");
    fireEvent.click(categoryButton);

    expect(screen.getByText("Kundan Namkeen Center Photos")).toBeInTheDocument();
    expect(screen.getByText("amdience (1)")).toBeInTheDocument();
  });
});
