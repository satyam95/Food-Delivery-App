import Image from "next/image";
import React from "react";

interface StarRatingPropsType {
  rating: number;
}

const StarRating = ({ rating }: StarRatingPropsType) => {
  const fullStars = Math.floor(rating);
  const remaining = rating - fullStars;
  const halfStar = remaining >= 0.25 && remaining < 0.75;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={i}
          src="/images/star_full_icon.svg"
          alt="star-full"
          width={14}
          height={14}
        />
      );
    }

    if (halfStar) {
      stars.push(
        <Image
          key={fullStars}
          src="/images/star_half_icon.svg"
          alt="star-half"
          width={14}
          height={14}
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Image
          key={fullStars + i + (halfStar ? 1 : 0)}
          src="/images/star_empty_icon.svg"
          alt="star-empty"
          width={14}
          height={14}
        />
      );
    }

    return stars;
  };
  return <div data-testid="star-rating" className="flex items-center gap-1">{renderStars()}</div>;
};

export default StarRating;
