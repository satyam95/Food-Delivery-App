import React from "react";
import { render, screen } from "@testing-library/react";
import ReviewBlock from "./index";

const mockReviewData = {
  reviewRating: "4.5",
  reviewCount: "10 reviews",
  reviewType: "Verified Purchaser",
};

test("ReviewBlock renders correctly", () => {
  render(<ReviewBlock {...mockReviewData} />);

  const ratingElement = screen.getByTestId("rating-element");
  const reviewCountElement = screen.getByText("10 reviews");
  const reviewTypeElement = screen.getByText("Verified Purchaser");

  expect(ratingElement).toBeInTheDocument();
  expect(reviewCountElement).toBeInTheDocument();
  expect(reviewTypeElement).toBeInTheDocument();
});

test("ReviewBlock displays rating, review count, and review type", () => {
  render(<ReviewBlock {...mockReviewData} />);

  const ratingElement = screen.getByTestId("rating-element");
  const reviewCountElement = screen.getByText("10 reviews");
  const reviewTypeElement = screen.getByText("Verified Purchaser");

  expect(ratingElement).toHaveTextContent("4.5");
  expect(reviewCountElement).toHaveTextContent("10 reviews");
  expect(reviewTypeElement).toHaveTextContent("Verified Purchaser");
});

test("ReviewBlock handles undefined values", () => {
  const emptyData = {
    reviewRating: undefined,
    reviewCount: undefined,
    reviewType: undefined,
  };
  render(<ReviewBlock {...emptyData} />);

  const ratingElement = screen.queryByTestId("numeric-rating-large");
  const reviewCountElement = screen.queryByText("10 reviews");
  const reviewTypeElement = screen.queryByText("Verified Purchaser");

  expect(ratingElement).toBeNull();
  expect(reviewCountElement).toBeNull();
  expect(reviewTypeElement).toBeNull();
});
