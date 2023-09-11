import Image from "next/image";
import React from "react";

const JombortoneBanner = () => {
  return (
    <section className="relative">
      <div className="relative h-[63vh] max-h-[570px]">
        <div className="absolute w-full h-full">
          <Image
            src="/images/banner1.jpg"
            alt="image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="mb-7">
              <Image
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="image"
                height={84}
                width={300}
              />
            </div>
            <h1 className="text-white text-4xl">
              Discover the best food and drinks in Bhopal
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JombortoneBanner;
