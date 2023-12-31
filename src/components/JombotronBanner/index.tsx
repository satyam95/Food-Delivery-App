import SearchBar from "@/elements/SearchBar";
import Image from "next/image";
import React from "react";

const JombortoneBanner = () => {
  return (
    <section className="relative" data-testid="jumbotron-banner">
      <div className="relative h-[75vh] md:h-[63vh] max-h-[570px]">
        <div className="absolute w-full h-full">
          <Image
            src="/images/banner1.jpg"
            alt="banner-image"
            fill={true}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
          />
        </div>
        <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="px-6 md:px-0 flex flex-col items-center">
            <div className="mb-4 md:mb-7">
              <Image
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="logo-image"
                height={84}
                width={300}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                sizes="(max-width: 640px) 200px, 300px"
              />
            </div>
            <h1 className="text-white text-center text-xl md:text-4xl mb-4">
              Discover the best food and drinks in Bhopal
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JombortoneBanner;
