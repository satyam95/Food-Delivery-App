import React from "react";
import CollectionCard from "../CollectionCard";
import { collectionsData } from "@/data/venueCategories";

const CityCollectionBlock = () => {
  return (
    <section className="my-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="pb-6">
          <h2 className="text-3xl">Collections</h2>
          <p className="text-xl text-gray-600 font-light">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bhopal, based on trends
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          {collectionsData.map((collectionData) => (
            <div className="w-3/12" key={collectionData.title}>
              <CollectionCard
                title={collectionData.title}
                subtitle={collectionData.subtitle}
                img={collectionData.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityCollectionBlock;
