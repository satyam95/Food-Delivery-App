import React from "react";
import { InspirationData } from "@/data/venueCategories";
import InspirationFoodCard from "../InspirationFoodCard";

const InspirationBlock = () => {
  return (
    <section className="bg-[rgb(248,248,248)]">
      <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
        <div className="py-12 md:py-14">
          <h2 className="text-3xl font-normal text-gray-900 pb-4 md:pb-8">
            Inspiration for your first order
          </h2>
          <div className="grid grid-cols-3 gap-8 md:gap-2 md:grid-cols-6">
            {InspirationData.map((item) => (
              <div key={item.id} data-testid="inspiration-food-card">
                <InspirationFoodCard name={item.title} image={item.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationBlock;
