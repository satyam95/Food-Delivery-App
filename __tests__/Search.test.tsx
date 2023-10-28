import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Search from "@/app/(listing)/search/page";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: jest.fn(() => "YourSearchQuery"),
    }),
  };
});

describe("Search", () => {
  it("renders search results when available", () => {
    render(<Search />);
    expect(screen.getByTestId("search-result-text")).toBeInTheDocument();
    expect(screen.getByTestId("restaurant-card")).toBeInTheDocument();
  });
});
