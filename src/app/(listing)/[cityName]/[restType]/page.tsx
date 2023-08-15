import DeliveryOnline from "@/components/DeliveryOnline";
import DiningOut from "@/components/DiningOut";
import ListingNavTabs from "@/components/ListingNavTabs";
import Nightlife from "@/components/Nightlife";
import React from "react";

const Delivery = ({ params }: { params: { restType: string } }) => {
  const screenToDisplay = (slug: string) => {
    if (slug === "delivery") {
      return <DeliveryOnline />;
    }
    if (slug === "dine-out") {
      return <DiningOut />;
    }
    if (slug === "nightlife") {
      return <Nightlife />;
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
