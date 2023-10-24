import React from "react";
import VenueCategoryCard from "../VenueCategoryCard";
import { venueCategories } from "@/data/venueCategories";

const VenueCategoryBlock = () => {
  return (
    <section className="mb-16 md:mb-24 mt-10">
      <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-0">
          {venueCategories.map((venueCategory) => (
            <div className="w-full md:w-4/12 md:px-2" key={venueCategory.title}>
              <VenueCategoryCard
                url={venueCategory.url}
                title={venueCategory.title}
                subtitle={venueCategory.subtitle}
                img={venueCategory.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenueCategoryBlock;
