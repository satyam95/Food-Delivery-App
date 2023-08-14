import Image from "next/image";
import React from "react";

interface CollectionCardPropsType {
  title: string;
  subtitle: string;
  img: string;
}

const CollectionCard = ({ title, subtitle, img }: CollectionCardPropsType) => {
  return (
    <div className="relative cursor-pointer">
      <div className="relaive w-full h-[240px]">
        <Image
          src={img}
          alt={title}
          fill={true}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full overlay-bg rounded-2xl">
        <div className="flex flex-col justify-end h-full p-4">
          <h3 className="text-xl text-white">{title}</h3>
          <p className="text-base text-white font-light">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
