import StarRating from "@/elements/StarRating";
import Image from "next/image";
import React from "react";

const MenuItemCard = ({
  name,
  rating,
  voting,
  price,
  image,
  tag_image
}: {
  name: string;
  rating: number;
  voting: string;
  price: number;
  image: string | undefined;
  tag_image: string;
}) => {
  return (
    <div className="flex gap-4 items-start pb-4 last:pb-0">
      <div className="relative w-[130px] h-[130px]">
        {image !== undefined ? (
          <Image
            src={image}
            alt={name}
            fill={true}
            className="object-cover rounded-2xl z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
          />
        ) : (
          <Image
            src="https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
            alt="dummy food item"
            fill={true}
            className="object-cover rounded-2xl z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
          />
        )}
        <Image
          src={tag_image}
          alt="live-icon"
          width={14}
          height={14}
          className="absolute top-2 right-2 z-20 bg-white rounded"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
        />
      </div>
      <div className="flex flex-col gap-3 pt-1.5">
        <h4 className="text-lg leading-[18px]">{name}</h4>
        <div className="flex items-center gap-2.5">
          {rating && <StarRating rating={rating} />}
          {voting && <div className="text-base font-light">{voting}</div>}
        </div>
        <div className="text-base font-light">₹{price}</div>
      </div>
    </div>
  );
};

export default MenuItemCard;
