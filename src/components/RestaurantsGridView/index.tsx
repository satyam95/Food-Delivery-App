import React, { useState } from "react";
import RestaurantCard from "../RestaurantCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Restaurant, RestaurantProps } from "@/types/types";
import Image from "next/image";
import { TailSpin } from "react-loader-spinner";

interface RestaurantsGridViewProps {
  restaurantsSortedData: Restaurant[];
}

const RestaurantsGridView: React.FC<RestaurantsGridViewProps> = ({
  restaurantsSortedData,
}) => {
  const [items, setItems] = useState(9); // Initial number of items to display
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      if (items >= restaurantsSortedData.length) {
        setHasMore(false);
      } else {
        setItems(items + 9);
        setLoading(false);
      }
    }, 2000);
  };
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
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
        <InfiniteScroll
          dataLength={items}
          next={loadMore}
          hasMore={hasMore}
          loader={
            <div className="flex items-center justify-center p-4">
              <TailSpin
                height="80"
                width="80"
                color="#efefef"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <div className="flex items-center gap-4 flex-wrap">
            {restaurantsSortedData.slice(0, items).map((restaurant) => (
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
        </InfiniteScroll>
      )}
    </div>
  );
};

export default RestaurantsGridView;
