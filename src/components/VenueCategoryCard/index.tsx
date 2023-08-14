import Image from "next/image";
import React from "react";

interface VenueCategoryCardPropsType {
  title: string;
  subtitle: string;
  img: string;
}

const VenueCategoryCard = ({
  title,
  subtitle,
  img,
}: VenueCategoryCardPropsType) => {
  return (
    <div className="relative cursor-pointer hover:scale-105 transition duration-150 ease-in delay-0">
      <div className="relaive w-full h-[240px]">
        <Image
          src={img}
          alt={title}
          fill={true}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="bg-white absolute bottom-0 border border-[#e8e8e8] px-5 pt-2.5 pb-4 w-full rounded-b-xl">
        <h3 className="text-lg text-gray-800">{title}</h3>
        <p className="text-base text-gray-600 font-light">{subtitle}</p>
      </div>
    </div>
  );
};

export default VenueCategoryCard;
