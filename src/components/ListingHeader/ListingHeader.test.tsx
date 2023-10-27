import React from "react";
import { render, screen } from "@testing-library/react";
import ListingHeader from "./index";

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

test("ListingHeader component renders correctly", () => {
  render(<ListingHeader />);
  const darkLogoLink = screen.getByAltText("header-dark-logo");
  const loginLink = screen.getByText("Log in");
  const signupLink = screen.getByText("Sign up");

  expect(darkLogoLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
  expect(signupLink).toBeInTheDocument();
});