import React from "react";
import InspirationFoodCard from "../InspirationFoodCard";
import Image from "next/image";
import RestaurantCard from "../RestaurantCard";
import { RestaurantProps } from "@/types/types";
import { InspirationData } from "@/data/venueCategories";

const DeliveryOnline: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <>
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
    </>
  );
};

export default DeliveryOnline;
