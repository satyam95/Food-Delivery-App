import Image from "next/image";
import React from "react";

const AdBanner = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="py-10">
          <div className="relative w-full h-[250px]">
            <Image
              src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
              alt="ad banner"
              fill={true}
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
