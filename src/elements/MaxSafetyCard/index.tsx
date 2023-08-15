import Image from "next/image";
import React from "react";

const MaxSafetyCard = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"
        alt="max-safety"
        width={48}
        height={18}
      />
      <p className="text-xs leading-[14px] text-gray-700">
        Follows all Max Safety measures to ensure your food is safe
      </p>
    </div>
  );
};

export default MaxSafetyCard;
