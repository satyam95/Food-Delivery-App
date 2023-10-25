import Image from "next/image";
import React from "react";

const NumericRating = ({
  rating,
  type,
}: {
  rating: string | undefined;
  type: "small" | "large";
}) => {
  return (
    <div
      data-testid="rating-element"
      className={`${
        rating === "-" ? "bg-[rgb(156,156,156)]" : "bg-[rgb(38,126,62)]"
      } inline-flex items-center rounded-md ${
        type === "large" ? "gap-1.5 p-1.5" : "gap-1 py-1 px-1.5"
      }`}
    >
      <div
        className={`text-white ${
          type === "large" ? "text-base leading-[16px]" : "text-xs leading-3"
        }`}
      >
        {rating}
      </div>
      <Image
        src="/images/star_icon.svg"
        alt="filter-icon"
        height={type === "large" ? 12 : 8}
        width={type === "large" ? 12 : 8}
      />
    </div>
  );
};

export default NumericRating;
