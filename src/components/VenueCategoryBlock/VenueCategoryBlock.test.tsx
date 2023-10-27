import React from "react";
import { render, screen } from "@testing-library/react";
import VenueCategoryBlock from "./index";

test("VenueCategoryBlock renders correctly", () => {
  render(<VenueCategoryBlock />);

  const venueCategoryCards = screen.getAllByRole("link");
  expect(venueCategoryCards.length).toBe(3);
});
