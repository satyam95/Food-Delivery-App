import React from "react";
import { render, screen } from "@testing-library/react";
import ResturantReviewCard from "./index";

const mockReviewData = {
  name: "John Doe",
  reviewCount: 10,
  followersCount: 20,
  profilePic:
    "https://b.zmtcdn.com/data/user_profile_pictures/fc6/af42e8c693fe726300221e7035485fc6.jpg",
  rating: "4.5",
  timestamp: "2 hours ago",
  ratingText: "Great experience",
  reviewText: "This is a great restaurant with excellent service.",
};

test("ResturantReviewCard renders correctly", () => {
  render(<ResturantReviewCard {...mockReviewData} />);

  const nameElement = screen.getByText("John Doe");
  const reviewCountElement = screen.getByText("10 reviews");
  const followersCountElement = screen.getByText("20 Followers");
  const ratingTextElement = screen.getByText("Great experience");
  const reviewTextElement = screen.getByText(
    "This is a great restaurant with excellent service."
  );

  expect(nameElement).toBeInTheDocument();
  expect(reviewCountElement).toBeInTheDocument();
  expect(followersCountElement).toBeInTheDocument();
  expect(ratingTextElement).toBeInTheDocument();
  expect(reviewTextElement).toBeInTheDocument();
});

test("ResturantReviewCard displays rating and timestamp", () => {
  render(<ResturantReviewCard {...mockReviewData} />);

  const ratingElement = screen.getByTestId("rating-element");
  const timestampElement = screen.getByText("2 hours ago");

  expect(ratingElement).toBeInTheDocument();
  expect(timestampElement).toBeInTheDocument();
});

test("ResturantReviewCard displays profile picture", () => {
  render(<ResturantReviewCard {...mockReviewData} />);

  const profileImage = screen.getByAltText("John Doe profile picture");

  expect(profileImage).toBeInTheDocument();
});

test("ResturantReviewCard displays helpful, comments, and action buttons", () => {
  render(<ResturantReviewCard {...mockReviewData} />);

  const helpButton = screen.getByText("Helpful");
  const commentButton = screen.getByText("Comment");
  const shareButton = screen.getByText("Share");

  expect(helpButton).toBeInTheDocument();
  expect(commentButton).toBeInTheDocument();
  expect(shareButton).toBeInTheDocument();
});

test("ResturantReviewCard should handle empty data", () => {
  const emptyData = {
    name: "",
    reviewCount: 0,
    followersCount: 0,
    profilePic: "",
    rating: "",
    timestamp: "",
    ratingText: "",
    reviewText: "",
  };
  render(<ResturantReviewCard {...emptyData} />);

  const nameElement = screen.queryByText("John Doe");
  const ratingElement = screen.queryByText("4.5");
  const timestampElement = screen.queryByText("2 hours ago");
  const profileImage = screen.queryByAltText("John Doe profile picture");
  const ratingTextElement = screen.queryByText("Great experience");
  const reviewTextElement = screen.queryByText(
    "This is a great restaurant with excellent service."
  );

  expect(nameElement).toBeNull();
  expect(ratingElement).toBeNull();
  expect(timestampElement).toBeNull();
  expect(profileImage).toBeNull();
  expect(ratingTextElement).toBeNull();
  expect(reviewTextElement).toBeNull();
});
