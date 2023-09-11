import Image from "next/image";
import React from "react";

interface InspirationFoodCardPropsType {
  name: string;
  image: string;
}

const InspirationFoodCard = ({ name, image }: InspirationFoodCardPropsType) => {
  return (
    <>
      <div className="mb-2">
        <Image
          src={image}
          alt={`${name} image`}
          height={150}
          width={150}
          className="rounded-full mx-auto"
        />
      </div>
      <h3 className="uppercase text-lg text-gray-800 text-center">{name}</h3>
    </>
  );
};

export default InspirationFoodCard;
