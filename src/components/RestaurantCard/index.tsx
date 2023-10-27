import NumericRating from "@/elements/NumericRating";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CuisinePropType {
  name: string;
}

interface RestaurantCardPropsType {
  name: string;
  slug: string;
  imageUrl: string;
  rating: string;
  costText: string;
  deliveryTime: string | undefined;
  isPromoted: boolean;
  bulkOffers: string[];
  cuisine: CuisinePropType[];
}

const RestaurantCard = ({
  name,
  slug,
  imageUrl,
  rating,
  costText,
  deliveryTime,
  isPromoted,
  bulkOffers,
  cuisine,
}: RestaurantCardPropsType) => {
  return (
    <div data-testid="restaurant-card" className="p-2.5 hover:bg-white hover:shadow-[rgba(28,28,28,0.12)_0px_0.4rem_1.8rem] hover:border-[rgb(232,232,232)] rounded-3xl" >
      <Link href={`/resturant/${slug}`}>
        <div className="max-w-[328px]">
          <div className="relative h-[248px] w-[328px]">
            <Image
              src={imageUrl}
              alt={name}
              fill={true}
              className="object-cover rounded-3xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
            />
            {bulkOffers.length > 0
              ? bulkOffers.map((bulkOffer) => (
                  <div key={bulkOffer} className="absolute bottom-[20px] px-1 py-0.5 leading-3 text-white text-xs font-light bg-[rgb(37,111,239)]">
                    {bulkOffer}
                  </div>
                ))
              : ""}

            {isPromoted ? (
              <div className="absolute left-[10px] top-[20px] px-1 py-0.5 leading-3 text-[rgb(255,255,255)] text-xs font-light bg-[rgba(0,0,0,0.3)] opacity-50 rounded backdrop-blur-sm">
                Promoted
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="pt-2">
            <div className="flex items-center justify-between overflow-hidden">
              <h4 className="text-lg text-gray-900 text-ellipsis whitespace-nowrap overflow-hidden	">
                {name.slice(0, 28)}
              </h4>
              <NumericRating rating={rating} type="small" />
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm text-gray-600 font-light max-w-[180px] text-ellipsis whitespace-nowrap overflow-hidden">
                {cuisine.map((item) => item.name).join(", ")}
              </h4>
              <h5 className="text-sm text-gray-600 font-light">{costText}</h5>
            </div>
            {deliveryTime !== "N/A" ? (
              <div className="flex items-center justify-end">
                <h5 className="text-sm text-gray-900">{deliveryTime}</h5>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
