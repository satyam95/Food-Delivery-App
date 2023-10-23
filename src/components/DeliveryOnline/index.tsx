"use client";
import React, { useEffect, useState } from "react";
import InspirationFoodCard from "../InspirationFoodCard";
import Image from "next/image";
import RestaurantCard from "../RestaurantCard";
import { Restaurant, RestaurantProps } from "@/types/types";
import { InspirationData } from "@/data/venueCategories";
import RadioField from "@/elements/RadioField";
import RangeSlider from "@/elements/RangeSlider";
import MultiRangeSlider from "@/elements/MultiRangeSlider";
import CheckBoxField from "@/elements/CheckBoxField";

const DeliveryOnline: React.FC<RestaurantProps> = ({ restaurant }) => {
  const initialFilterTipValue: {
    cost: [number, number];
    cuisine: string[];
    rating: number;
  } = {
    cost: [0, 1000],
    cuisine: [],
    rating: 0,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [tabState, setTabState] = useState(1);

  const [sorting, setSorting] = useState("Popularity");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [costValues, setCostValues] = useState<[number, number]>([0, 1000]);

  const [filterTipValue, setFilterTipValue] = useState(initialFilterTipValue);

  const [restaurantsSortedData, setRestaurantsSortedData] =
    useState<Restaurant[]>(restaurant);

  const handleSliderChange = (value: number, index: number) => {
    setRatingValue(value);
  };

  const handleMarkerClick = (index: number) => {
    if (index !== 4) {
      setRatingValue(index);
    }
  };

  const numberToRating = (value: number) => {
    if (value === 0) return "Any";
    if (value === 1) return "3.5+";
    if (value === 2) return "4.0+";
    if (value === 3) return "4.5+";
    if (value === 4) return "5.0";
  };

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

  const sortByRatingHighToLow = (restaurant: Restaurant[]) => {
    return restaurant.slice().sort((a, b) => {
      const ratingA = parseFloat(a.info.rating.aggregate_rating);
      const ratingB = parseFloat(b.info.rating.aggregate_rating);
      if (ratingA > ratingB) {
        return -1;
      } else if (ratingA < ratingB) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const sortByDeliveryTime = (restaurant: Restaurant[]) => {
    return restaurant.slice().sort((a, b) => {
      const deliveryTimeA = a.order?.deliveryTime
        ? parseInt(a.order.deliveryTime)
        : Number.MAX_SAFE_INTEGER;
      const deliveryTimeB = b.order?.deliveryTime
        ? parseInt(b.order.deliveryTime)
        : Number.MAX_SAFE_INTEGER;
      return deliveryTimeA - deliveryTimeB;
    });
  };

  const sortByCostLowToHigh = (restaurant: Restaurant[]) => {
    return restaurant.slice().sort((a, b) => {
      const costA = parseInt(a.info.cft.text.replace(/\D/g, ""));
      const costB = parseInt(b.info.cft.text.replace(/\D/g, ""));
      return costA - costB;
    });
  };

  const sortByCostHighToLow = (restaurant: Restaurant[]) => {
    return restaurant.slice().sort((a, b) => {
      const costA = parseInt(a.info.cft.text.replace(/\D/g, ""));
      const costB = parseInt(b.info.cft.text.replace(/\D/g, ""));
      return costB - costA;
    });
  };

  const sortRestaurants = (restaurant: Restaurant[], sorting: string) => {
    if (sorting === "Rating: High to Low") {
      return sortByRatingHighToLow(restaurant);
    } else if (sorting === "Delivery Time") {
      return sortByDeliveryTime(restaurant);
    } else if (sorting === "Cost: Low to High") {
      return sortByCostLowToHigh(restaurant);
    } else if (sorting === "Cost: High to Low") {
      return sortByCostHighToLow(restaurant);
    }
    return restaurant;
  };

  const handleCuisineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedCuisines((prevCuisine) =>
      prevCuisine.includes(value)
        ? prevCuisine.filter((brand) => brand !== value)
        : [...prevCuisine, value]
    );
  };

  const applySorting = () => {
    let filteredRestaurants = restaurant.slice();

    // Filter based on selected cuisines
    if (selectedCuisines.length > 0) {
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        for (const cuisine of selectedCuisines) {
          if (restaurant.info.cuisine.some((c) => c.name === cuisine)) {
            return true;
          }
        }
        return false;
      });
    }

    // Filter based on selected rating and above
    if (ratingValue > 0) {
      const ratingValueString = numberToRating(ratingValue);
      if (ratingValueString) {
        const ratingValueAsNumber = parseFloat(ratingValueString);
        if (!isNaN(ratingValueAsNumber)) {
          filteredRestaurants = filteredRestaurants.filter((restaurant) => {
            const ratingA = parseFloat(restaurant.info.rating.aggregate_rating);
            return ratingA >= ratingValueAsNumber;
          });
        }
      }
    }

    // Filter based on cost per person
    const [minCost, maxCost] = costValues;
    if (minCost !== 0) {
      filteredRestaurants = filteredRestaurants.filter((restaurant) => {
        const cost = parseInt(restaurant.info.cfo.text.replace(/\D/g, ""));
        return cost >= minCost && (maxCost === 1000 || cost <= maxCost);
      });
    }

    const sortedData = sortRestaurants(filteredRestaurants, sorting);
    setRestaurantsSortedData(sortedData);

    setFilterTipValue({
      cost: costValues, // Update the cost array
      cuisine: selectedCuisines, // Update the cuisine array
      rating: ratingValue, // Update the rating value
    });

    closeModal();
  };

  function getUniqueCuisines(restaurants: Restaurant[]): string[] {
    const uniqueCuisines = new Set<string>();

    restaurants.forEach((restaurant) => {
      restaurant.info.cuisine.forEach((cuisine) => {
        uniqueCuisines.add(cuisine.name);
      });
    });

    return Array.from(uniqueCuisines);
  }

  const handleRatingTip = () => {
    setRatingValue(0);
    setFilterTipValue((prevValue) => ({
      ...prevValue,
      rating: 0,
    }));
  };

  const handleCostRemove = () => {
    setCostValues([0, 1000]);
    setFilterTipValue((prevValue) => ({
      ...prevValue,
      cost: [0, 1000],
    }));
  };

  const handleRemoveCuisine = (cuisineToRemove: string) => {
    const updatedSelectedCuisines = selectedCuisines.filter(
      (cuisine) => cuisine !== cuisineToRemove
    );
    const updatedFilterTipCuisine = filterTipValue.cuisine.filter(
      (cuisine) => cuisine !== cuisineToRemove
    );

    setFilterTipValue((prevValue) => ({
      ...prevValue,
      cuisine: updatedFilterTipCuisine,
    }));
    setSelectedCuisines(updatedSelectedCuisines);
  };

  useEffect(() => {
    applySorting();
  }, [filterTipValue.rating, filterTipValue.cuisine, filterTipValue.cost]);

  const uniqueCuisinesList = getUniqueCuisines(restaurant);

  return (
    <>
      <section className="bg-white sticky top-0 z-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="py-6 flex items-center gap-4 flex-wrap">
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
            {filterTipValue.rating > 0 && (
              <div className="bg-primary flex items-center gap-1 shadow-[rgba(54,54,54,0.06)_0px_1px_2px] p-2 rounded-lg">
                <div className="text-base leading-[18px] text-white font-light">
                  Rating: {numberToRating(filterTipValue.rating)}
                </div>
                <div className="cursor-pointer" onClick={handleRatingTip}>
                  <Image
                    src="/images/close_white_icon.svg"
                    alt="filter-icon"
                    height={18}
                    width={18}
                  />
                </div>
              </div>
            )}
            {filterTipValue.cuisine.length > 0 &&
              filterTipValue.cuisine.map((cuisine, index) => (
                <div
                  key={index}
                  className="bg-primary flex items-center gap-1 shadow-[rgba(54,54,54,0.06)_0px_1px_2px] p-2 rounded-lg"
                >
                  <div className="text-base leading-[18px] text-white font-light">
                    {cuisine}
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleRemoveCuisine(cuisine)}
                  >
                    <Image
                      src="/images/close_white_icon.svg"
                      alt="filter-icon"
                      height={18}
                      width={18}
                    />
                  </div>
                </div>
              ))}
            {filterTipValue.cost[0] !== 0 && (
              <div className="bg-primary flex items-center gap-1 shadow-[rgba(54,54,54,0.06)_0px_1px_2px] p-2 rounded-lg">
                <div className="text-base leading-[18px] text-white font-light">
                  Cost: {filterTipValue.cost[0]}+
                </div>
                <div className="cursor-pointer" onClick={handleCostRemove}>
                  <Image
                    src="/images/close_white_icon.svg"
                    alt="filter-icon"
                    height={18}
                    width={18}
                  />
                </div>
              </div>
            )}
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
              {restaurantsSortedData.length === 0 ? (
                <div className="flex flex-col gap-4 items-center py-4">
                  <Image
                    src="https://b.zmtcdn.com/data/web_assets/92ee94aa8441af56a34dc5a61547c50a1591338812.png"
                    alt="live-icon"
                    width={264}
                    height={165}
                  />
                  <p className="text-[rgb(79,79,79)] text-[13px]">
                    No items found that match your search/filter.
                  </p>
                </div>
              ) : (
                restaurantsSortedData.map((restaurant) => (
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
                ))
              )}
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
                      <p className="text-[rgb(239,79,95)] text-sm">{sorting}</p>
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
                      {selectedCuisines.length > 0 ? (
                        <p className="text-[rgb(239,79,95)] text-sm">
                          {selectedCuisines.length} Selected
                        </p>
                      ) : (
                        ""
                      )}
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
                          value="Popularity"
                          checked={sorting === "Popularity"}
                          onChange={() => setSorting("Popularity")}
                        />
                        <RadioField
                          labelText="Rating: High to Low"
                          id="rating_option"
                          name="sort_order"
                          value="Rating: High to Low"
                          checked={sorting === "Rating: High to Low"}
                          onChange={() => setSorting("Rating: High to Low")}
                        />
                        <RadioField
                          labelText="Delivery Time"
                          id="time_option"
                          name="sort_order"
                          value="Delivery Time"
                          checked={sorting === "Delivery Time"}
                          onChange={() => setSorting("Delivery Time")}
                        />
                        <RadioField
                          labelText="Cost: Low to High"
                          id="cost_low_option"
                          name="sort_order"
                          value="Cost: Low to High"
                          checked={sorting === "Cost: Low to High"}
                          onChange={() => setSorting("Cost: Low to High")}
                        />
                        <RadioField
                          labelText="Cost: High to Low"
                          id="cost_high_option"
                          name="sort_order"
                          value="Cost: High to Low"
                          checked={sorting === "Cost: High to Low"}
                          onChange={() => setSorting("Cost: High to Low")}
                        />
                      </div>
                    </div>
                    <div className={tabState === 2 ? "block grow" : "hidden"}>
                      <div className="flex">
                        <div className="p-5 pt-6 grid grid-cols-2 gap-4 overflow-y-auto w-full max-h-[22.5rem] no-scrollbar">
                          {uniqueCuisinesList.map((cuisine, index) => (
                            <CheckBoxField
                              key={index}
                              labelText={cuisine}
                              checked={selectedCuisines.includes(cuisine)}
                              onChange={handleCuisineChange}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={tabState === 3 ? "block h-full" : "hidden"}>
                      <div className="p-5 pt-6 w-full h-full">
                        <div className="flex flex-col h-full">
                          <div className="pt-4">
                            <div className="text-[rgb(105,105,105)] text-sm">
                              Rating
                            </div>
                            <div className="text-[rgb(28,28,28)] text-base">
                              {numberToRating(ratingValue)}
                            </div>
                          </div>
                          <RangeSlider
                            value={ratingValue}
                            handleSliderChange={handleSliderChange}
                            handleMarkerClick={handleMarkerClick}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={tabState === 4 ? "block h-full" : "hidden"}>
                      <div className="p-5 pt-6 w-full h-full">
                        <div className="flex flex-col h-full">
                          <div className="pt-4">
                            <div className="text-[rgb(105,105,105)] text-sm">
                              Cost per person
                            </div>
                            <div className="text-[rgb(28,28,28)] text-base">
                              ₹{costValues[0]} -{" "}
                              {costValues[1] === 1000
                                ? "Any"
                                : `₹${costValues[1]}`}
                            </div>
                          </div>
                          <MultiRangeSlider
                            costValue={costValues}
                            setCostValue={setCostValues}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4 px-6 flex justify-end gap-4 items-center">
                <button className="px-5 py-2 text-base font-light">
                  Clear all
                </button>
                <button
                  onClick={applySorting}
                  className="bg-primary px-5 py-2 rounded text-base font-light text-white flex gap-2 items-center"
                >
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
