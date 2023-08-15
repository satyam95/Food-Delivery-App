import { collectionsData } from "@/data/venueCategories";
import Image from "next/image";
import React from "react";
import RestaurantCard from "../RestaurantCard";

const DiningOut = () => {
  return (
    <>
      <section className="bg-[rgb(248,248,248)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="py-14">
            <h2 className="text-3xl font-normal text-gray-900 pb-2">
              Collections
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bhopal, based on trends
            </p>
            <div className="pt-6 flex justify-between items-center gap-4">
              {collectionsData.map((collectionData) => (
                <div className="w-3/12" key={collectionData.title}>
                  <div className="relative cursor-pointer">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={collectionData.img}
                        alt={collectionData.title}
                        fill={true}
                        className="object-cover rounded-2xl"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full overlay-bg rounded-2xl">
                      <div className="flex flex-col justify-end h-full p-4">
                        <h3 className="text-lg text-white font-light">
                          {collectionData.title}
                        </h3>
                        <p className="text-base text-white font-light">
                          {collectionData.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white sticky top-0 z-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="py-6">
            <button className="flex items-center gap-2 text-base text-gray-600 font-light border rounded border-[rgb(207,207,207)] px-3 py-1.5 shadow-filter-btn">
              <Image
                src="/images/filter_icon.svg"
                alt="filter-icon"
                height={18}
                width={18}
              />
              Filter
            </button>
          </div>
        </div>
      </section>
      <section className="relative bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="py-10">
            <div className="relative w-full h-[250px]">
              <Image
                src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
                alt="ad banner"
                fill={true}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="pt-8 pb-14">
            <h2 className="text-3xl font-normal text-gray-900 pb-8">
              Delivery Restaurants in Bhopal
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiningOut;
