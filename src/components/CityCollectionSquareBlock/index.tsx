import React from "react";
import CollectionCard from "../CollectionCard";
import { collectionsData } from "@/data/venueCategories";

const CityCollectionSquareBlock = () => {
  return (
    <section
      className="my-12 md:my-24"
      data-testid="city-collection-square-block"
    >
      <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
        <div className="pb-8 md:pb-6">
          <h2 className="pb-2 md:pb-0 text-3xl">Collections</h2>
          <p className="text-lg leading-6 md:text-xl md:leading-6 text-gray-600 font-light">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bhopal, based on trends
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-0">
          {collectionsData.map((collectionData) => (
            <div
              className="w-full md:w-3/12 md:px-2"
              key={collectionData.title}
            >
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

export default CityCollectionSquareBlock;
