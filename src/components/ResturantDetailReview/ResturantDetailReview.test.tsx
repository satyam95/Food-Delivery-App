import React from "react";
import { render } from "@testing-library/react";
import ResturantDetailReview from "./index";

describe("ResturantDetailReview", () => {
  it("renders restaurant name and reviews when reviews are provided", () => {
    const reviews = {
      1: {
        reviewId: 1,
        userName: "User1",
        userReviewsCount: 10,
        userFollowersCount: 20,
        userProfilePic: "/user1.jpg",
        ratingV2: 4,
        timestamp: "2023-10-27",
        ratingV2Text: "Good",
        reviewText: "This is a good restaurant.",
      },
    };

    const restaurantName = "My Restaurant";

    const { getByText } = render(
      <ResturantDetailReview reviews={reviews} restaurantName={restaurantName} />
    );

    expect(getByText("My Restaurant Reviews")).toBeInTheDocument();
    expect(getByText("User1")).toBeInTheDocument();
    expect(getByText("This is a good restaurant.")).toBeInTheDocument();
  });

  it("does not render reviews when reviews are undefined", () => {
    const { queryByText } = render(
      <ResturantDetailReview reviews={undefined} restaurantName="My Restaurant" />
    );

    expect(queryByText("My Restaurant Reviews")).toBeInTheDocument();
    expect(queryByText("User1")).toBeNull();
  });
});
