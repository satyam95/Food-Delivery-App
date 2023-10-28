"use client";

import RestaurantCard from "@/components/RestaurantCard";
import { restaurants } from "@/data/restaurant";
import { Restaurant } from "@/types/types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const [searchData, setSearchData] = useState<any>(null);

  const capitalize = (str: string) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const fetchSearchResults = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    return restaurants.filter((restaurant) => {
      const lowercaseName = restaurant.info.name.toLowerCase();
      const lowercaseCuisines = restaurant.info.cuisine.map((c) =>
        c.name.toLowerCase()
      );

      const hasNameMatch = lowercaseName.includes(lowercaseQuery);
      const hasCuisineMatch = lowercaseCuisines.some((cuisineName) =>
        cuisineName.includes(lowercaseQuery)
      );

      const hasFoodItemMatch = restaurant?.order?.menuList?.menus.map(
        (menu) => {
          menu.menu.categories.some((category) =>
            category.category.items.some((item) =>
              item.item.name.toLowerCase().includes(lowercaseQuery)
            )
          );
        }
      );

      // return hasFoodItemMatch
      return hasNameMatch || hasCuisineMatch || hasFoodItemMatch;
    });
  };

  useEffect(() => {
    if (searchQuery) {
      const results = fetchSearchResults(searchQuery);
      setSearchData(results);
    }
  }, [searchQuery]);

 

  if (searchData?.length === 0 || searchData === null) {
    return (
      <div className="flex flex-col gap-4 items-center py-8">
        <Image
          src="https://b.zmtcdn.com/data/web_assets/92ee94aa8441af56a34dc5a61547c50a1591338812.png"
          alt="live-icon"
          width={264}
          height={165}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
        />
        <p className="text-[rgb(79,79,79)] text-[13px]">
          No items found that match your search/filter.
        </p>
      </div>
    );
  } else {
    return (
      <div className="max-w-[1100px] mx-auto">
        <div className="py-10">
          <div
            data-testid="search-result-text"
            className="text-3xl font-normal text-gray-900 pb-8"
          >
            Showing result for: {capitalize(searchQuery!)}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {searchData.map((restaurant: Restaurant) => (
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
    );
  }
};

export default Search;
