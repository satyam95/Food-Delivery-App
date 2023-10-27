import React from "react";
import { render, screen } from "@testing-library/react";
import JombortoneBanner from "./index";

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

test("JombortoneBanner component renders correctly", () => {
  render(<JombortoneBanner />);

  const backgroundImage = screen.getByAltText("banner-image");
  const logoImage = screen.getByAltText("logo-image");
  const discoverText = screen.getByText(
    "Discover the best food and drinks in Bhopal"
  );
  const searchBar = screen.getByTestId("search-bar");

  expect(backgroundImage).toBeInTheDocument();
  expect(logoImage).toBeInTheDocument();
  expect(discoverText).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});
