import React, { useState } from "react";
import ReactSlider from "react-slider";

interface RangeSliderPropsType {
  value: number;
  handleSliderChange: (value: number, index: number) => void;
  handleMarkerClick: (index: number) => void;
}

const marks = ["Any", "3.5", "4.0", "4.5", "5.0"];

const RangeSlider = ({
  value,
  handleSliderChange,
  handleMarkerClick,
}: RangeSliderPropsType) => {
  return (
    <div className="grow flex flex-col justify-center">
      <div className="w-full relative block">
        <ReactSlider
          className="bg-primary h-1 rounded-sm w-full"
          min={0}
          max={4}
          value={value}
          onChange={handleSliderChange}
          thumbClassName="bg-primary h-5 w-5 -mt-2 rounded-full z-idx"
        />
        <div className="flex justify-between absolute top-0 w-full z-10 left-0">
          {marks.map((mark, index) => (
            <div className="w-5" onClick={() => handleMarkerClick(index)}>
              <span
                className={`block h-5 w-5 -mt-2 rounded-full border-[6px] border-[rgb(255,255,255)] ${
                  index < value ? "bg-[rgb(232,232,232)]" : "bg-primary"
                }`}
              ></span>
              <span
                key={mark}
                className={`text-sm ${
                  index < value
                    ? "text-[rgba(0,0,0,0.54)]"
                    : "text-[rgba(0,0,0,0.87)]"
                }`}
              >
                {mark}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
