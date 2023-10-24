import React from "react";
import { InspirationData } from "@/data/venueCategories";
import InspirationFoodCard from "../InspirationFoodCard";

const InspirationBlock = () => {
  return (
    <section className="bg-[rgb(248,248,248)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="py-14">
          <h2 className="text-3xl font-normal text-gray-900 pb-8">
            Inspiration for your first order
          </h2>
          <div className="flex items-center">
            {InspirationData.map((item) => (
              <div className="w-1/6" key={item.id}>
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
