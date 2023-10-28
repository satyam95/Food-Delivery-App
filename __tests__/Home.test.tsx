import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(main)/page";

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

describe("Home", () => {
  it("Renders Home Component", () => {
    render(<Home />);

    const jumbotronBanner = screen.getByTestId("jumbotron-banner");
    expect(jumbotronBanner).toBeInTheDocument();

    const venueCategoryBlock = screen.getByTestId("venue-category-block");
    expect(venueCategoryBlock).toBeInTheDocument();

    const cityCollectionSquareBlock = screen.getByTestId(
      "city-collection-square-block"
    );
    expect(cityCollectionSquareBlock).toBeInTheDocument();

    const ctaForMobileApp = screen.getByTestId("cta-for-mobile-app");
    expect(ctaForMobileApp).toBeInTheDocument();

    const optionsFAQ = screen.getByTestId("options-faq");
    expect(optionsFAQ).toBeInTheDocument();
  });
});
