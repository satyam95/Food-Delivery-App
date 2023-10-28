import React from "react";
import { render, screen } from "@testing-library/react";
import ListingLayout from "@/app/(listing)/layout";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

describe("ListingLayout", () => {
  it("renders children", () => {
    render(
      <ListingLayout>
        <div>Test Child Element</div>
      </ListingLayout>
    );

    const childElement = screen.getByText("Test Child Element");
    expect(childElement).toBeInTheDocument();
  });

  it("renders ListingHeader and Footer components", () => {
    render(
      <ListingLayout>
        <div>Test Child Element</div>
      </ListingLayout>
    );

    const listingHeader = screen.getByTestId("listing-header");
    const footer = screen.getByTestId("main-footer");

    expect(listingHeader).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
