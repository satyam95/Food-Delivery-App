import Image from "next/image";
import React from "react";

const WHOCard = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png"
        alt="max-safety"
        width={48}
        height={18}
      />
      <p className="text-xs leading-[14px] text-gray-700">
        Restaurant partner follows WHO protocol
      </p>
    </div>
  );
};

export default WHOCard;
