"use client";

import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "../NextJsImage";

const ResturantDetailMenu = ({
  restaurantName,
  menu,
}: {
  restaurantName: string | undefined;
  menu: any | undefined;
}) => {

  const [open, setOpen] = useState(false);
  const allPages = menu?.pages;
  const imageUrls = [];
  for (const page of allPages) {
    imageUrls.push(page.url);
  }
  const slides = imageUrls.map((imageUrl) => ({
    src: imageUrl,
  }));

  return (
    <>
      <div className="text-2xl text-[rgb(28,28,28)">{restaurantName} Menu</div>
      <div className="w-1/4 pt-6">
        <div className="w-full" onClick={() => setOpen(true)}>
          <div className="first-bg-menu"></div>
          <div className="second-bg-menu"></div>
          <div className="relative w-full h-[18rem] border rounded-[0.6rem]">
            <Image
              src={menu.pages[0].url}
              alt="menu"
              fill={true}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
            />
          </div>
        </div>
        <h4 className="text-lg leading-[18px] text-[rgb(79,79,79)] mt-4">
          Menu
        </h4>
        <p className="text-[rgb(156,156,156)] text-sm font-light">
          {menu.subtitle}
        </p>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </>
  );
};

export default ResturantDetailMenu;
