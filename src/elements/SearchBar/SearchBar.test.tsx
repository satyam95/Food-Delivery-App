import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./index";

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

describe("SearchBar component", () => {
  test("renders correctly", () => {
    render(<SearchBar />);
    const searchBar = screen.getByPlaceholderText(
      "Search for restaurant, cuisine, or a dish"
    ) as HTMLInputElement;
    const locationIcon = screen.getByAltText("location-icon");
    const arrowIcon = screen.getByAltText("down-arrow-icon");
    const text = screen.getByText("Bhopal");
    const searchIcon = screen.getByAltText("search-icon");

    expect(searchBar).toBeInTheDocument();
    expect(locationIcon).toBeInTheDocument();
    expect(arrowIcon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();

    fireEvent.change(searchBar, { target: { value: "23" } });
    expect(searchBar.value).toBe("23");
  });

  test("submits search form", () => {
    render(<SearchBar />);

    const searchBar = screen.getByPlaceholderText(
      "Search for restaurant, cuisine, or a dish"
    ) as HTMLInputElement;
    
    const mockRouter = require("next/navigation");
    const mockPush = jest.fn();
    mockRouter.useRouter = () => ({
      push: mockPush,
    });

    fireEvent.change(searchBar, { target: { value: "pizza with spaces" } });
    fireEvent.submit(screen.getByTestId("search-form"));
    expect(mockPush).toHaveBeenCalledWith(`/search?q=pizza with spaces`);
  });

  test("submits search form empty", () => {
    render(<SearchBar />);

    const searchBar = screen.getByPlaceholderText(
      "Search for restaurant, cuisine, or a dish"
    ) as HTMLInputElement;
    
    const mockRouter = require("next/navigation");
    const mockPush = jest.fn();
    mockRouter.useRouter = () => ({
      push: mockPush,
    });

    fireEvent.change(searchBar, { target: { value: null } });
    fireEvent.submit(screen.getByTestId("search-form"));
    expect(mockPush).not.toBeCalled()
  });
});
