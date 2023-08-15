import React from "react";
import VenueCategoryCard from "../VenueCategoryCard";
import { venueCategories } from "@/data/venueCategories";

const VenueCategoryBlock = () => {
  return (
    <section className="mb-24 mt-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between items-center gap-6">
          {venueCategories.map((venueCategory) => (
            <div className="w-4/12" key={venueCategory.title}>
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
