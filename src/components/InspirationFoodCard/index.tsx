import Image from "next/image";
import React from "react";

const InspirationFoodCard = () => {
  return (
    <>
      <div className="mb-2">
        <Image
          src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
          alt="food"
          height={150}
          width={150}
          className="rounded-full mx-auto"
        />
      </div>
      <h3 className="uppercase text-lg text-gray-800 text-center">Pizza</h3>
    </>
  );
};

export default InspirationFoodCard;
