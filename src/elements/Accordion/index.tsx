"use client";
import React, { useState } from "react";

interface AccordionPropsType {
  title: string;
  description: string;
}

const Accordion = ({ title, description }: AccordionPropsType) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="pb-4">
      <div className="w-full bg-white py-3 px-5 md:py-5 md:px-6 border rounded">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <h5 className="text-left text-lg font-light">
            {title}
          </h5>
          <div className="text-base text-slate-700 font-light">
            {isActive ? "-" : "+"}
          </div>
        </div>
        {isActive && (
          <div className="text-left text-base pt-4 text-slate-700 font-light">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
