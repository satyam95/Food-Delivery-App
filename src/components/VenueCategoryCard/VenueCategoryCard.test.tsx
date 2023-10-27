import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import VenueCategoryCard from "./index";

const mockCardData = {
  title: "Sample Title",
  subtitle: "Sample Subtitle",
  img: "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg",
  url: "/sample-url",
};

test("VenueCategoryCard renders correctly", () => {
  render(<VenueCategoryCard {...mockCardData} />);

  const titleElement = screen.getByText("Sample Title");
  const subtitleElement = screen.getByText("Sample Subtitle");
  const imageElement = screen.getByAltText("Sample Title");

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

test("VenueCategoryCard navigates to the provided URL", () => {
  render(<VenueCategoryCard {...mockCardData} />);

  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute("href", "/sample-url");
});

test("VenueCategoryCard displays the provided image", () => {
  render(<VenueCategoryCard {...mockCardData} />);

  const imageElement = screen.getByAltText("Sample Title");
  expect(imageElement).toBeInTheDocument();
});

test("VenueCategoryCard displays title and subtitle", () => {
  render(<VenueCategoryCard {...mockCardData} />);

  const titleElement = screen.getByText("Sample Title");
  const subtitleElement = screen.getByText("Sample Subtitle");

  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});

