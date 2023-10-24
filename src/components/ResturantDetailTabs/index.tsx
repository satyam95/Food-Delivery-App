"use client";

import React, { useState } from "react";
import ResturantDetailOverview from "../ResturantDetailOverview";
import ResturantDetailOrder from "../ResturantDetailOrder";
import ResturantDetailReview from "../ResturantDetailReview";
import { TabType } from "@/types/types";
import ResturantDetailMenu from "../ResturantDetailMenu";

const ResturantDetailTabs = ({
  cuisine,
  safetyCheck,
  cft,
  order,
  reviews,
  restaurantName,
  menu,
}: TabType) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: React.SetStateAction<number>) => {
    setActiveTab(id);
  };
  return (
    <>
      <section className="relative flex items-center sticky top-0 z-30 pt-4 bg-white">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleTabClick(1)}
        >
          <h2
            className={`${
              activeTab === 1
                ? "text-[rgb(239,79,95)]"
                : "text-[rgb(105,105,105)]"
            } text-lg px-2 md:px-4 pt-1 font-light`}
          >
            Overview
          </h2>
          <hr
            className={`${
              activeTab === 1 ? "bg-[rgb(255,126,139)]" : ""
            } rounder h-[3px] z-10 mt-1 w-full border-none`}
          />
        </div>
        {order.menuList !== undefined && (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleTabClick(2)}
          >
            <h2
              className={`${
                activeTab === 2
                  ? "text-[rgb(239,79,95)]"
                  : "text-[rgb(105,105,105)]"
              } text-lg px-2 md:px-4 pt-1 font-light`}
            >
              Order Online
            </h2>
            <hr
              className={`${
                activeTab === 2 ? "bg-[rgb(255,126,139)]" : ""
              } rounder h-[3px] z-10 mt-1 w-full border-none`}
            />
          </div>
        )}
        {reviews !== undefined && (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleTabClick(3)}
          >
            <h2
              className={`${
                activeTab === 3
                  ? "text-[rgb(239,79,95)]"
                  : "text-[rgb(105,105,105)]"
              } text-lg px-2 md:px-4 pt-1 font-light`}
            >
              Reviews
            </h2>
            <hr
              className={`${
                activeTab === 3 ? "bg-[rgb(255,126,139)]" : ""
              } rounder h-[3px] z-10 mt-1 w-full border-none`}
            />
          </div>
        )}
        {menu !== undefined && (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleTabClick(5)}
          >
            <h2
              className={`${
                activeTab === 5
                  ? "text-[rgb(239,79,95)]"
                  : "text-[rgb(105,105,105)]"
              } text-lg px-2 md:px-4 pt-1 font-light`}
            >
              Menu
            </h2>
            <hr
              className={`${
                activeTab === 5 ? "bg-[rgb(255,126,139)]" : ""
              } rounder h-[3px] z-10 mt-1 w-full border-none`}
            />
          </div>
        )}
        <hr className="rounded w-[calc(100%-2px)] border-t-[3px] absolute bottom-0 border-[rgb(207,207,207)]" />
      </section>
      <section className="py-6">
        {activeTab === 1 && (
          <ResturantDetailOverview
            cft={cft}
            safetyCheck={safetyCheck}
            cuisine={cuisine}
          />
        )}
        {activeTab === 2 && <ResturantDetailOrder order={order} />}
        {activeTab === 3 && (
          <ResturantDetailReview
            reviews={reviews}
            restaurantName={restaurantName}
          />
        )}
        {activeTab === 5 && (
          <ResturantDetailMenu restaurantName={restaurantName} menu={menu} />
        )}
      </section>
    </>
  );
};

export default ResturantDetailTabs;
