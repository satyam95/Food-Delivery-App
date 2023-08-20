import CouponCard from "@/elements/CouponCard";
import Image from "next/image";
import React from "react";
import MenuItemCard from "../MenuItemCard";

const ResturantDetailOrder = () => {
  return (
    <div className="flex">
      <div className="w-[200px]">
        <div>
          <div className="text-base py-3 px-1 text-[rgb(239,79,95)] border-r-[rgb(239,79,95)] border-r-[3px] linear-active-bg">
            Extra
          </div>
          <div className="text-base py-3 px-1 text-[rgb(28,28,28)] font-light">
            Most Loved Combos (4)
          </div>
        </div>
      </div>
      <div className="pl-5 grow border-l border-[rgb(232,232,232)]">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-[rgb(28,28,28)">Order Online</div>
          <div className="p-2 border rounded w-full shadow-[rgba(28,28,28,0.08)_0px_2px_8px] max-w-[250px] h-[48px] flex items-center">
            <div className="grow flex items-center">
              <Image
                src="/images/search_icon.svg"
                alt="location-icon"
                width={16}
                height={16}
                className="mx-2"
              />
              <input
                type="text"
                placeholder="Search within menu"
                className="w-full text-base text-gray-600 font-light placeholder:text-gray-400 placeholder:font-light placeholder:text-base focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/live_icon.svg"
              alt="live-icon"
              width={14}
              height={14}
            />
            <p className="text-sm text-[rgb(130,130,130)] font-light">
              Live track your order
            </p>
          </div>
          <div className="w-[1px] h-[14px] bg-[rgb(156,156,156)]"></div>
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/watch_icon.svg"
              alt="live-icon"
              width={14}
              height={14}
            />
            <p className="text-sm text-[rgb(130,130,130)] font-light">34 min</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <CouponCard title="Free Lemonade" desc="order above ₹298" />
          <CouponCard title="50% OFF up to ₹100" desc="use code WELCOME50" />
          <CouponCard title="Flat ₹80 OFF" desc="use code SBITREATS" />
          <CouponCard title="₹25 - ₹250 cashback" desc="use code PAYTMWEE..." />
          <CouponCard
            title="20% OFF up to ₹125 OFF"
            desc="use code YESDELIGHT"
          />
        </div>
        <div className="mt-4">
          <div className="py-4 border-b">
            <h4 className="text-2xl mb-4">Extra</h4>
            <MenuItemCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDetailOrder;
