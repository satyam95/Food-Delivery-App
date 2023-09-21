import ButtonWithoutBorder from "@/elements/ButtonWithoutBorder";
import NumericRating from "@/elements/NumericRating";
import Image from "next/image";
import React from "react";

const ResturantReviewCard = ({
  name,
  reviewCount,
  followersCount,
  profilePic,
  rating,
  timestamp,
  ratingText,
  reviewText,
}: {
  name: string;
  reviewCount: number;
  followersCount: number;
  profilePic: string;
  rating: string;
  timestamp: string;
  ratingText: string;
  reviewText: string;
}) => {
  return (
    <div className="border-b py-4">
      <div className="flex items-center gap-3">
        <Image
          src={profilePic}
          alt={`${name} profile picture`}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div>
          <div className="text-base text-[rgb(54,54,54)]">{name}</div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-light text-[rgb(156,156,156)]">
              {reviewCount} reviews
            </div>
            <div className="w-1 h-1 bg-[rgb(156,156,156)] rounded-full"></div>
            <div className="text-sm font-light text-[rgb(156,156,156)]">
              {followersCount} Followers
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 mb-4">
        <NumericRating rating={rating} type="small" />
        <div className="text-base text-[rgb(54,54,54)]">{ratingText}</div>
        <div className="text-base text-[rgb(156,156,156)]">{timestamp}</div>
      </div>
      <div className="text-lg font-light text-[rgb(105,105,105)] mb-3">
        {reviewText}
      </div>
      <div className="text-base text-[rgb(156,156,156)] font-light mb-1">
        0 Votes for helpful, 0 Comments
      </div>
      <div className="flex items-center gap-3">
        <ButtonWithoutBorder icon="/images/help_icon.svg" text="Helpful" />
        <ButtonWithoutBorder icon="/images/comment_icon.svg" text="Comment" />
        <ButtonWithoutBorder
          icon="/images/share_filled_icon.svg"
          text="Share"
        />
      </div>
    </div>
  );
};

export default ResturantReviewCard;
