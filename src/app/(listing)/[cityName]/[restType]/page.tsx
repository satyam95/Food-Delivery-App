import ListingNavTabs from "@/components/ListingNavTabs";
import { restaurants } from "@/data/restaurant";
import React from "react";
import RestaurantsView from "@/components/RestaurantsView";
import InspirationBlock from "@/components/InspirationBlock";
import AdBanner from "@/elements/AdBanner";
import CollectionRectBlock from "@/components/CollectionRectBlock";

const Delivery = ({ params }: { params: { restType: string } }) => {
  const filterRestaurants = (page_type: string) =>
    restaurants.filter((restaurant) =>
      restaurant.trackingData.some((item) => {
        const payload = JSON.parse(item.payload);
        return (
          payload &&
          payload.hasOwnProperty("page_type") &&
          payload.page_type === page_type
        );
      })
    );

  const deliveryRestaurants = filterRestaurants("delivery");
  const dineoutRestaurants = filterRestaurants("dineout");
  const nightlifeRestaurants = filterRestaurants("nightlife");

  const screenToDisplay = (slug: string) => {
    if (slug === "delivery") {
      return (
        <RestaurantsView
          restaurant={deliveryRestaurants}
          title="Delivery Restaurants in Bhopal"
        >
          <InspirationBlock />
        </RestaurantsView>
      );
    }
    if (slug === "dine-out") {
      return (
        <>
          <CollectionRectBlock />
          <RestaurantsView
            restaurant={dineoutRestaurants}
            title="Trending dining restaurants in Bhopal"
          >
            <AdBanner />
          </RestaurantsView>
        </>
      );
    }
    if (slug === "nightlife") {
      return (
        <>
          <CollectionRectBlock />
          <RestaurantsView
            restaurant={nightlifeRestaurants}
            title="Nightlife Restaurants in Bhopal"
          >
            <AdBanner />
          </RestaurantsView>
        </>
      );
    }
  };
  return (
    <>
      <ListingNavTabs slug={params.restType} />
      {screenToDisplay(params.restType)}
    </>
  );
};

export default Delivery;
