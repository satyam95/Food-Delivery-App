import React from "react";
import { render, screen } from "@testing-library/react";
import ListingNavTabs from "./index";

test("ListingNavTabs component renders correctly", () => {
  render(<ListingNavTabs slug="delivery" />);

  const deliveryLink = screen.getByText("Delivery");
  const dineOutLink = screen.getByText("Dine Out");
  const nightlifeLink = screen.getByText("Nightlife");

  expect(deliveryLink).toBeInTheDocument();
  expect(dineOutLink).toBeInTheDocument();
  expect(nightlifeLink).toBeInTheDocument();
});

test("Active link is highlighted", () => {
  render(<ListingNavTabs slug="delivery" />);

  const activeDeliveryLink = screen.getByText("Delivery");
  const inactiveDineOutLink = screen.getByText("Dine Out");
  const inactiveNightlifeLink = screen.getByText("Nightlife");

  expect(activeDeliveryLink.parentElement).toHaveClass("border-primary border-b-2");
  expect(inactiveDineOutLink.parentElement).not.toHaveClass("border-primary border-b-2");
  expect(inactiveNightlifeLink.parentElement).not.toHaveClass("border-primary border-b-2");
});

test("Active link is highlighted (Dine Out)", () => {
  render(<ListingNavTabs slug="dine-out" />);

  const inactiveDeliveryLink = screen.getByText("Delivery");
  const activeDineOutLink = screen.getByText("Dine Out");
  const inactiveNightlifeLink = screen.getByText("Nightlife");

  expect(activeDineOutLink.parentElement).toHaveClass("border-primary border-b-2");
  expect(inactiveDeliveryLink.parentElement).not.toHaveClass("border-primary border-b-2");
  expect(inactiveNightlifeLink.parentElement).not.toHaveClass("border-primary border-b-2");
});

test("Active link is highlighted (Nightlife)", () => {
  render(<ListingNavTabs slug="nightlife" />);

  const inactiveDeliveryLink = screen.getByText("Delivery");
  const inactiveDineOutLink = screen.getByText("Dine Out");
  const activeNightlifeLink = screen.getByText("Nightlife");

  expect(activeNightlifeLink.parentElement).toHaveClass("border-primary border-b-2");
  expect(inactiveDeliveryLink.parentElement).not.toHaveClass("border-primary border-b-2");
  expect(inactiveDineOutLink.parentElement).not.toHaveClass("border-primary border-b-2");
});
