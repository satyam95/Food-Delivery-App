import React from "react";
import ResturantReviewCard from "../ResturantReviewCard";

const ResturantDetailReview = ({ reviews, restaurantName }: any) => {
  return (
    <>
      <div className="text-2xl text-[rgb(28,28,28)">
        {restaurantName} Reviews
      </div>
      {reviews !== undefined ? Object.values(reviews).map((review: any) => (
        <ResturantReviewCard
          key={review.reviewId}
          name={review.userName}
          reviewCount={review.userReviewsCount}
          followersCount={review.userFollowersCount}
          profilePic={review.userProfilePic}
          rating={review.ratingV2}
          timestamp={review.timestamp}
          ratingText={review.ratingV2Text}
          reviewText={review.reviewText}
        />
      )) : ""}
    </>
  );
};

export default ResturantDetailReview;
