import React, { useState } from "react";
import ReactSlider from "react-slider";

const MultiRangeSlider = () => {
  const [sliderValues, setSliderValues] = useState([0, 1000]);

  return (
    <div className="flex flex-col h-full">
      <div className="pt-4">
        <div className="text-[rgb(105,105,105)] text-sm">Cost per person</div>
        <div className="text-[rgb(28,28,28)] text-base">
          ₹{sliderValues[0]} -{" "}
          {sliderValues[1] === 1000 ? "Any" : `₹${sliderValues[1]}`}
        </div>
      </div>
      <div className="grow flex flex-col justify-center">
        <div className="w-full relative block">
          <ReactSlider
            className="bg-primary h-1 rounded-sm w-full"
            thumbClassName="bg-primary h-5 w-5 -mt-2 rounded-full cursor-pointer"
            pearling={true}
            min={0}
            max={1000}
            minDistance={200}
            value={sliderValues}
            onChange={setSliderValues}
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
    </div>
  );
};

export default MultiRangeSlider;
