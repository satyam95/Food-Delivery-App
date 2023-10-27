import React from "react";
import { render, screen } from "@testing-library/react";
import OptionsFAQ from "./index";
import { accordionData } from "@/data/venueCategories";

test("OptionsFAQ component renders correctly", () => {
  render(<OptionsFAQ />);

  const sectionHeading = screen.getByText("Explore options near me");
  expect(sectionHeading).toBeInTheDocument();
});

test("Accordion components are rendered with data", () => {
  render(<OptionsFAQ />);

  accordionData.forEach((item) => {
    const title = screen.getByText(item.title);
    expect(title).toBeInTheDocument();
  });
});
