import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

test("Header component renders correctly", () => {
  render(<Header />);

  const getAppLink = screen.getByText("Get the App");
  const mobileIconImage = screen.getByAltText("mobile icon");
  const investorRelationsLink = screen.getByText("Investor Relations");
  const addRestaurantLink = screen.getByText("Add restaurant");
  const logInLink = screen.getByText("Log in");
  const signUpLink = screen.getByText("Sign up");

  expect(getAppLink).toBeInTheDocument();
  expect(mobileIconImage).toBeInTheDocument();
  expect(investorRelationsLink).toBeInTheDocument();
  expect(addRestaurantLink).toBeInTheDocument();
  expect(logInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});

test("Header component links have correct href attributes", () => {
  render(<Header />);

  const investorRelationsLink = screen.getByText("Investor Relations");
  const addRestaurantLink = screen.getByText("Add restaurant");
  const logInLink = screen.getByText("Log in");
  const signUpLink = screen.getByText("Sign up");

  expect(investorRelationsLink).toHaveAttribute("href", "#");
  expect(addRestaurantLink).toHaveAttribute("href", "#");
  expect(logInLink).toHaveAttribute("href", "#");
  expect(signUpLink).toHaveAttribute("href", "#");
});
