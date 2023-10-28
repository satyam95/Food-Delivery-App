import { accordionData } from "@/data/venueCategories";
import Accordion from "@/elements/Accordion";
import React from "react";

const OptionsFAQ = () => {
  return (
    <section className="bg-[rgb(252,252,252)]" data-testid="options-faq">
      <div className="py-12 px-6 md:px-0 max-w-[1100px] mx-auto">
        <div className="pb-6">
          <h2 className="text-3xl">Explore options near me</h2>
        </div>
        {accordionData.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OptionsFAQ;
