import Image from "next/image";
import React from "react";

const SafetyCheckCard = () => {
  return (
    <div className="flex items-center gap-3 p-2 border rounded w-max shadow-[rgba(0,0,0,0.06)_1px_0px_4px]">
      <div>
        <Image
          src="https://b.zmtcdn.com/data/o2_assets/8ecc61badb80ea685f0afc71a4d721671585754288.png"
          alt="safety check"
          height={48}
          width={48}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm text-gray-400 font-light leading-[14px]">
          RESTAURANT SAFETY MEASURE
        </p>
        <p className="text-base font-light leading-4">Daily Temp. Checks</p>
      </div>
    </div>
  );
};

export default SafetyCheckCard;
