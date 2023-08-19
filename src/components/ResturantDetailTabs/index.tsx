"use client";

import React, { useState } from "react";
import ResturantDetailOverview from "../ResturantDetailOverview";
import ResturantDetailMenu from "../ResturantDetailMenu";
import ResturantDetailOrder from "../ResturantDetailOrder";
import ResturantDetailPhotos from "../ResturantDetailPhotos";
import ResturantDetailReview from "../ResturantDetailReview";

const ResturantDetailTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: React.SetStateAction<number>) => {
    setActiveTab(id);
  };
  return (
    <>
      <section className="relative flex items-center">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleTabClick(1)}
        >
          <h2
            className={`${
              activeTab === 1
                ? "text-[rgb(239,79,95)]"
                : "text-[rgb(105,105,105)]"
            } text-lg px-4 pt-1 font-light`}
          >
            Overview
          </h2>
          <hr
            className={`${
              activeTab === 1 ? "bg-[rgb(255,126,139)]" : ""
            } rounder h-[3px] z-10 mt-1 w-full border-none`}
          />
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleTabClick(2)}
        >
          <h2
            className={`${
              activeTab === 2
                ? "text-[rgb(239,79,95)]"
                : "text-[rgb(105,105,105)]"
            } text-lg px-4 pt-1 font-light`}
          >
            Order Online
          </h2>
          <hr
            className={`${
              activeTab === 2 ? "bg-[rgb(255,126,139)]" : ""
            } rounder h-[3px] z-10 mt-1 w-full border-none`}
          />
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleTabClick(3)}
        >
          <h2
            className={`${
              activeTab === 3
                ? "text-[rgb(239,79,95)]"
                : "text-[rgb(105,105,105)]"
            } text-lg px-4 pt-1 font-light`}
          >
            Reviews
          </h2>
          <hr
            className={`${
              activeTab === 3 ? "bg-[rgb(255,126,139)]" : ""
            } rounder h-[3px] z-10 mt-1 w-full border-none`}
          />
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleTabClick(4)}
        >
          <h2
            className={`${
              activeTab === 4
                ? "text-[rgb(239,79,95)]"
                : "text-[rgb(105,105,105)]"
            } text-lg px-4 pt-1 font-light`}
          >
            Photos
          </h2>
          <hr
            className={`${
              activeTab === 4 ? "bg-[rgb(255,126,139)]" : ""
            } rounder h-[3px] z-10 mt-1 w-full border-none`}
          />
        </div>
        {/* <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => handleTabClick(5)}
        >
          <h2
            className={`${
              activeTab === 5
                ? "text-[rgb(239,79,95)]"
                : "text-[rgb(105,105,105)]"
            } text-lg px-4 pt-1 font-light`}
          >
            Menu
          </h2>
          <hr
            className={`${
              activeTab === 5 ? "bg-[rgb(255,126,139)]" : ""
            } rounder h-[3px] z-10 mt-1 w-full border-none`}
          />
        </div> */}
        <hr className="rounded w-[calc(100%-2px)] border-t-[3px] absolute bottom-0 border-[rgb(207,207,207)]" />
      </section>
      <section className="py-6">
        {activeTab === 1 && <ResturantDetailOverview />}
        {activeTab === 2 && <ResturantDetailOrder />}
        {activeTab === 3 && <ResturantDetailReview />}
        {activeTab === 4 && <ResturantDetailPhotos />}
        {/* {activeTab === 5 && <ResturantDetailMenu />} */}
      </section>
    </>
  );
};

export default ResturantDetailTabs;