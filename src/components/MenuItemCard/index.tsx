import StarRating from "@/elements/StarRating";
import Image from "next/image";
import React from "react";

const MenuItemCard = () => {
  return (
    <div className="flex gap-4 items-start">
      <div className="relative w-[130px] h-[130px]">
        <Image
          src="https://b.zmtcdn.com/data/dish_photos/7bd/d63e53554fe50f45bb809c1bf8c0d7bd.jpg"
          alt="dish"
          fill={true}
          className="object-cover rounded-2xl z-10"
        />
        <Image
          src="/images/veg_icon.svg"
          alt="live-icon"
          width={14}
          height={14}
          className="absolute top-2 right-2 z-20 bg-white rounded"
        />
      </div>
      <div className="flex flex-col gap-3 pt-1.5">
        <h4 className="text-lg leading-[18px]">Lemonade</h4>
        <div className="flex items-center gap-2.5">
          <StarRating rating={3.5} />
          <div className="text-base font-light">106 votes</div>
        </div>
        <div className="text-base font-light">₹63</div>
      </div>
    </div>
  );
};

export default MenuItemCard;
