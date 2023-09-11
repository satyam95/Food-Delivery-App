import DeliveryOnline from "@/components/DeliveryOnline";
import DiningOut from "@/components/DiningOut";
import ListingNavTabs from "@/components/ListingNavTabs";
import Nightlife from "@/components/Nightlife";
import { restaurants } from "@/data/restaurant";
import React from "react";

const Delivery = ({ params }: { params: { restType: string } }) => {

  const filterRestaurants = (page_type: string) => restaurants.filter(
    restaurant => restaurant.trackingData.some(
      item => {
        const payload = JSON.parse(item.payload);
        return payload && payload.hasOwnProperty("page_type") && payload.page_type === page_type;
      }
    )
  );

  const deliveryRestaurants = filterRestaurants("delivery")
  const dineoutRestaurants = filterRestaurants("dineout")
  const nightlifeRestaurants = filterRestaurants("nightlife")

  const screenToDisplay = (slug: string) => {
    if (slug === "delivery") {
      return <DeliveryOnline restaurant={deliveryRestaurants} />;
    }
    if (slug === "dine-out") {
      return <DiningOut restaurant={dineoutRestaurants} />;
    }
    if (slug === "nightlife") {
      return <Nightlife restaurant={nightlifeRestaurants} />;
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
