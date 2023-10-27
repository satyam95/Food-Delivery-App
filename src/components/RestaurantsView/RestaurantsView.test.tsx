import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  getAllByTestId,
  getByTestId,
} from "@testing-library/react";
import RestaurantsView from "./index";
import { restaurants } from "@/data/restaurant";
import InspirationBlock from "../InspirationBlock";

const filterRestaurants = (page_type: string) =>
  restaurants.filter((restaurant) =>
    restaurant.trackingData.some((item) => {
      const payload = JSON.parse(item.payload);
      return (
        payload &&
        payload.hasOwnProperty("page_type") &&
        payload.page_type === page_type
      );
    })
  );

const deliveryRestaurants = filterRestaurants("delivery");

describe("RestaurantsView", () => {
  const renderComponent = () => {
    render(
      <RestaurantsView
        restaurant={deliveryRestaurants}
        title="Test Restaurants"
        children={<InspirationBlock />}
      />
    );
  };

  it("renders the component with default values", () => {
    renderComponent();
    expect(screen.getByText("Test Restaurants")).toBeInTheDocument();
    expect(screen.getByText("Filter")).toBeInTheDocument();
    expect(screen.getByTestId("restaurants-container")).toBeInTheDocument();
  });

  it("opens and closes the filter modal", () => {
    renderComponent();
    expect(screen.queryByText("Sort by")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("Filter"));
    expect(screen.getByText("Sort by")).toBeInTheDocument();
    fireEvent.click(screen.getByAltText("close"));
    expect(screen.queryByText("Sort by")).not.toBeInTheDocument();
  });

  it("updates sorting option", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByLabelText("Delivery Time"));
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });
    expect(screen.getByTestId("filtertip-sort-value")).toBeInTheDocument();
  });

  it("selects cuisines in the filter", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("sorting-cuisine-btn"));
    fireEvent.click(screen.getByText("North Indian"));
    fireEvent.click(screen.getByText("Fast Food"));
    expect(screen.getByText("2 Selected")).toBeInTheDocument();
    fireEvent.click(screen.getByText("North Indian"));
    expect(screen.getByText("1 Selected")).toBeInTheDocument();
  });

  it("updates the rating filter", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("rating-btn"));
    const marker = screen.getByText("4.5");
    fireEvent.click(marker);
    expect(screen.getByTestId("rrating-text")).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });

    expect(screen.getByTestId("filtertip-rating")).toBeInTheDocument();
  });

  it("updates the cost filter", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("cost-per-person-text"));
    const costSlider = screen.getByTestId("cost-slider");
    fireEvent.change(costSlider, { value: [300, 1000] });
    expect(screen.getByTestId("cost-text")).toBeInTheDocument();
  });

  it("applies filters and sorts restaurants", () => {
    renderComponent();

    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("sorting-text-btn"));
    fireEvent.click(screen.getByText("North Indian"));
    fireEvent.click(screen.getByTestId("rating-btn"));
    const marker = screen.getByText("4.5");
    fireEvent.click(marker);
    const costSlider = screen.getByTestId("cost-slider");
    fireEvent.change(costSlider, { value: [200, 1000] });
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });

    expect(screen.getByTestId("not-found-block")).toBeInTheDocument();

    expect(screen.getByTestId("filtertip-cuisine")).toBeInTheDocument();
    expect(screen.getByTestId("filtertip-rating")).toBeInTheDocument();
  });

  it("removes selected cuisine and updates filter tip", () => {
    renderComponent();

    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByText("North Indian"));

    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });

    const removeCuisineBtn = screen.getByTestId("filtertip-cuisine-btn");
    fireEvent.click(removeCuisineBtn);

    expect(screen.queryByTestId("filtertip-cuisine")).not.toBeInTheDocument();
  });

  it("updates Rating: High to Low sorting option", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByLabelText("Rating: High to Low"));
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });
    expect(screen.getByTestId("filtertip-sort-value")).toBeInTheDocument();
  });

  it("updates Cost: Low to High sorting option", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByLabelText("Cost: Low to High"));
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });
    expect(screen.getByTestId("filtertip-sort-value")).toBeInTheDocument();
  });

  it("updates Cost: High to Low sorting option", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByLabelText("Cost: High to Low"));
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });
    expect(screen.getByTestId("filtertip-sort-value")).toBeInTheDocument();
  });

  it("updates tip sorting option", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("sorting-cuisine-btn"));
    fireEvent.click(screen.getByText("North Indian"));
    fireEvent.click(screen.getByTestId("rating-btn"));
    const marker = screen.getByText("4.5");
    fireEvent.click(marker);
    const costSlider = screen.getByTestId("cost-slider");
    fireEvent.change(costSlider, { value: [200, 1000] });
    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });

    expect(screen.getByTestId("not-found-block")).toBeInTheDocument();

    expect(screen.getByTestId("filtertip-cuisine")).toBeInTheDocument();
    expect(screen.getByTestId("filtertip-rating")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("filtertip-cuisine-btn"));
    fireEvent.click(screen.getByTestId("filtertip-rating-remove"));

    expect(screen.getByTestId("restaurants-container")).toBeInTheDocument();
  });

  it("updates tip sorting nby option", () => {
    renderComponent();
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("sorting-text-btn"));

    fireEvent.click(screen.getByText("Delivery Time"));

    expect(screen.getByTestId("sorting-text")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Popularity"));

    expect(screen.getByTestId("sorting-text")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Delivery Time"));

    act(() => {
      fireEvent.click(screen.getByText("Apply"));
    });

    expect(screen.getByTestId("filtertip-sort-value")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("filtertip-sort-value-remove"));
    expect(screen.getByTestId("restaurants-container")).toBeInTheDocument();
  });
});
