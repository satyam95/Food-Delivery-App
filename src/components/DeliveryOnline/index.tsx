"use client";
import React, { useState } from "react";
import InspirationFoodCard from "../InspirationFoodCard";
import Image from "next/image";
import RestaurantCard from "../RestaurantCard";
import { RestaurantProps } from "@/types/types";
import { InspirationData } from "@/data/venueCategories";
import RadioField from "@/elements/RadioField";
import RangeSlider from "@/elements/RangeSlider";
import MultiRangeSlider from "@/elements/MultiRangeSlider";

const DeliveryOnline: React.FC<RestaurantProps> = ({ restaurant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabState, setTabState] = useState(1);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };
  const openModal = () => {
    setIsOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <section className="bg-white sticky top-0 z-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="py-6">
            <button
              onClick={openModal}
              className="flex items-center gap-2 text-base text-gray-600 font-light border rounded border-[rgb(207,207,207)] px-3 py-1.5 shadow-filter-btn"
            >
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
      <section className="bg-[rgb(248,248,248)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="py-14">
            <h2 className="text-3xl font-normal text-gray-900 pb-8">
              Inspiration for your first order
            </h2>
            <div className="flex items-center">
              {InspirationData.map((item) => (
                <div className="w-1/6" key={item.id}>
                  <InspirationFoodCard name={item.title} image={item.image} />
                </div>
              ))}
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
              {restaurant.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.info.resId}
                  slug={restaurant.slug}
                  name={restaurant.info.name}
                  imageUrl={restaurant.info.image.url}
                  rating={restaurant.info.rating.rating_text}
                  costText={restaurant.info.costText.text}
                  deliveryTime={restaurant.order?.deliveryTime || "N/A"}
                  isPromoted={restaurant.isPromoted}
                  bulkOffers={restaurant.bulkOffers.map(
                    (offer: { text: any }) => offer?.text
                  )}
                  cuisine={restaurant.info.cuisine}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center"
        >
          <div className="fixed top-0 left-0 w-full h-full bg-[rgb(28,28,28)] z-30 opacity-90"></div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="z-50 bg-white w-6/12 h-4/5 opacity-100 block shadow-[rgba(28,28,28,0.15)_0px_1.2rem_7rem] rounded-lg"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center py-5 px-6">
                <h2 className="text-[rgb(28,28,28)] text-2xl">Filters</h2>
                <Image
                  src="/images/close_icon.svg"
                  alt="close"
                  width={24}
                  height={24}
                  onClick={closeModal}
                  className="cursor-pointer"
                />
              </div>
              <div className="border-t border-b border-[rgb(207,207,207)] grow">
                <div className="flex h-full flex-row">
                  <div className="h-full w-44 bg-[#f5f5f5]">
                    <div
                      onClick={() => setTabState(1)}
                      className={
                        tabState === 1
                          ? "w-full bg-white pl-5 text-left h-16 flex flex-col justify-center cursor-pointer border-l-[3px] border-[rgb(239,79,95)]"
                          : "w-full pl-6 text-left h-16 flex flex-col justify-center cursor-pointer"
                      }
                    >
                      <p
                        className={`text-[rgb(79,79,79)] text-base leading-[18px] ${
                          tabState === 1 ? "font-medium" : "font-normal"
                        }`}
                      >
                        Sort by
                      </p>
                      <p className="text-[rgb(239,79,95)] text-sm">
                        Popularity
                      </p>
                    </div>
                    <div
                      onClick={() => setTabState(2)}
                      className={
                        tabState === 2
                          ? "w-full bg-white pl-5 text-left h-16 flex flex-col justify-center cursor-pointer border-l-[3px] border-[rgb(239,79,95)]"
                          : "w-full pl-6 text-left h-16 flex flex-col justify-center cursor-pointer"
                      }
                    >
                      <p
                        className={`text-[rgb(79,79,79)] text-base leading-[18px] ${
                          tabState === 2 ? "font-medium" : "font-normal"
                        }`}
                      >
                        Cuisines
                      </p>
                    </div>
                    <div
                      onClick={() => setTabState(3)}
                      className={
                        tabState === 3
                          ? "w-full bg-white pl-5 text-left h-16 flex flex-col justify-center cursor-pointer border-l-[3px] border-[rgb(239,79,95)]"
                          : "w-full pl-6 text-left h-16 flex flex-col justify-center cursor-pointer"
                      }
                    >
                      <p
                        className={`text-[rgb(79,79,79)] text-base leading-[18px] ${
                          tabState === 3 ? "font-medium" : "font-normal"
                        }`}
                      >
                        Rating
                      </p>
                    </div>
                    <div
                      onClick={() => setTabState(4)}
                      className={
                        tabState === 4
                          ? "w-full bg-white pl-5 text-left h-16 flex flex-col justify-center cursor-pointer border-l-[3px] border-[rgb(239,79,95)]"
                          : "w-full pl-6 text-left h-16 flex flex-col justify-center cursor-pointer"
                      }
                    >
                      <p
                        className={`text-[rgb(79,79,79)] text-base leading-[18px] ${
                          tabState === 4 ? "font-medium" : "font-normal"
                        }`}
                      >
                        Cost per person
                      </p>
                    </div>
                  </div>
                  <div className="h-full grow">
                    <div className={tabState === 1 ? "block" : "hidden"}>
                      <div className="p-5 pt-6 flex flex-col gap-3">
                        <RadioField
                          labelText="Popularity"
                          id="popularity_option"
                          name="sort_order"
                          value="popularity"
                        />
                        <RadioField
                          labelText="Rating: High to Low"
                          id="rating_option"
                          name="sort_order"
                          value="rating"
                        />
                        <RadioField
                          labelText="Delivery Time"
                          id="time_option"
                          name="sort_order"
                          value="time"
                        />
                        <RadioField
                          labelText="Cost: Low to High"
                          id="cost_low_option"
                          name="sort_order"
                          value="cost_low_high"
                        />
                        <RadioField
                          labelText="Cost: High to Low"
                          id="cost_high_option"
                          name="sort_order"
                          value="cost_high_low"
                        />
                      </div>
                    </div>
                    <div className={tabState === 2 ? "block" : "hidden"}>
                      <div className="p-5 pt-6">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="Abruzzese"
                            id="Abruzzese"
                            className="checkbox-style"
                          />
                          <label
                            htmlFor="Abruzzese"
                            className="text-base text-[rgb(28,28,28)] pl-2 font-light"
                          >
                            Abruzzese
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className={tabState === 3 ? "block h-full" : "hidden"}>
                      <div className="p-5 pt-6 w-full h-full">
                        <RangeSlider />
                      </div>
                    </div>
                    <div className={tabState === 4 ? "block h-full" : "hidden"}>
                      <div className="p-5 pt-6 w-full h-full">
                        <MultiRangeSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 px-6 flex justify-end gap-4 items-center">
                <button className="px-5 py-2 text-base font-light">
                  Clear all
                </button>
                <button className="bg-primary px-5 py-2 rounded text-base font-light text-white flex gap-2 items-center">
                  Apply
                  <Image
                    src="/images/right_triangle_icon.svg"
                    alt="right triangle"
                    width={12}
                    height={12}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeliveryOnline;
