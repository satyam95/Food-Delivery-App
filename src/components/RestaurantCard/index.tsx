import NumericRating from "@/elements/NumericRating";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantCard = () => {
  return (
    <div className="p-2.5 hover:bg-white hover:shadow-[rgba(28,28,28,0.12)_0px_0.4rem_1.8rem] hover:border-[rgb(232,232,232)] rounded-3xl">
      <Link href="#">
        <div className="max-w-[328px]">
          <div className="relative h-[248px] w-[328px]">
            <Image
              src="https://b.zmtcdn.com/data/pictures/4/19199674/ed573cab492471152bbf16949c66446f_o2_featured_v2.jpg"
              alt="image"
              fill={true}
              className="object-cover rounded-3xl"
            />
            <div className="absolute bottom-[20px] px-1 py-0.5 leading-3 text-white text-xs font-light bg-[rgb(37,111,239)]">
              50% OFF up to 100
            </div>
            <div className="absolute left-[10px] top-[20px] px-1 py-0.5 leading-3 text-[rgb(255,255,255)] text-xs font-light bg-[rgba(0,0,0,0.3)] opacity-50 rounded backdrop-blur-sm">
              Promoted
            </div>
          </div>
          <div className="pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg text-gray-900">Maa Annpurna Restaurant</h4>
              <NumericRating rating={3.2} />
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm text-gray-600 font-light max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden">
                North Indian, Chinese, Italian, Burger
              </h4>
              <h5 className="text-sm text-gray-600 font-light">₹150 for one</h5>
            </div>
            <div className="flex items-center justify-end">
              <h5 className="text-sm text-gray-900">47 min</h5>
            </div>
          </div>
          {/* <div className="h-[1px] bg-[rgb(232,232,232)] mt-1.5 mb-2"></div> */}
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
