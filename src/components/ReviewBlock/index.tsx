import NumericRating from "@/elements/NumericRating";
import React from "react";

interface ReviewBlockPropsType {
  reviewRating: string | undefined;
  reviewCount: string | undefined;
  reviewType: string | undefined;
}

const ReviewBlock = ({
  reviewRating,
  reviewCount,
  reviewType,
}: ReviewBlockPropsType) => {
  return (
    <div className="flex items-center gap-1.5">
      <NumericRating rating={reviewRating} type="large" />
      <div className="flex flex-col">
        <div className="text-sm font-semibold leading-[14px]">
          {reviewCount}
        </div>
        <div className="text-gray-500 font-light text-xs underline underline-offset-2 decoration-dashed">
          {reviewType}
        </div>
      </div>
    </div>
  );
};

export default ReviewBlock;
