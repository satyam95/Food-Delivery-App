import Image from "next/image";
import React from "react";

const NumericRating = ({ rating }: { rating: number }) => {
  return (
    <div className="bg-[rgb(58,183,87)] flex items-center gap-1 p-1 rounded-md">
      <div className="text-white text-xs leading-3">{rating}</div>
      <Image
        src="/images/star_icon.svg"
        alt="filter-icon"
        height={8}
        width={8}
      />
    </div>
  );
};

export default NumericRating;
