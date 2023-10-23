import React, { useState } from "react";
import ReactSlider from "react-slider";

interface MultiRangeSliderPropsType {
  costValue: [number, number];
  setCostValue: (costValue: [number, number]) => void;
}

const MultiRangeSlider = ({
  costValue,
  setCostValue,
}: MultiRangeSliderPropsType) => {
  return (
    <div className="grow flex flex-col justify-center">
      <div className="w-full relative block">
        <ReactSlider
          className="bg-primary h-1 rounded-sm w-full"
          thumbClassName="bg-primary h-5 w-5 -mt-2 rounded-full cursor-pointer"
          pearling={true}
          min={0}
          max={1000}
          minDistance={200}
          value={costValue}
          onChange={setCostValue}
          step={200}
          renderThumb={(props, state) => (
            <div {...props}>
              <span className="tooltip-container">
                <span className="tooltip-inner">
                  <span className="tooltip-text">
                    {state.valueNow === 1000 ? "Any" : `₹${state.valueNow}`}
                  </span>
                </span>
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default MultiRangeSlider;
