import CouponCard from "@/elements/CouponCard";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MenuItemCard from "../MenuItemCard";

const ResturantDetailOrder = ({ order }: any) => {
  const initialMenuCategory = order?.menuList?.menus[0].menu.id;
  const [activeCategory, setActiveCategory] = useState(initialMenuCategory);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleSmoothScroll = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop - 66;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const divRect = divRef.current.getBoundingClientRect();
        if (divRect.top <= 0) {
          console.log("below top");
          const menuSections = order?.menuList?.menus;
          if (menuSections) {
            for (let i = menuSections.length - 1; i >= 0; i--) {
              const section = menuSections[i];
              const sectionElement = document.getElementById(section.menu.id);
              if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                if (rect.top <= 80) {
                  setActiveCategory(section.menu.id);
                  return;
                }
              }
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex" ref={divRef}>
      <div className="w-[200px]">
        <div className="sticky top-14 overflow-y-auto overflow-x-hidden h-full max-h-[calc(100vh-54px)] no-scrollbar">
          {order?.menuList?.menus.map((item: any) => (
            <div
              key={item.menu.id}
              className={`text-base py-3 px-1 font-light ${
                activeCategory === item.menu.id
                  ? "text-[rgb(239,79,95)] font-medium border-r-4 border-[rgb(239,79,95)] linear-bg-pink"
                  : "text-[rgb(28,28,28)]"
              }`}
              onClick={() => handleSmoothScroll(item.menu.id)}
            >
              {item.menu.name} ({item.menu.categories[0].category.items?.length}
              )
            </div>
          ))}
        </div>
      </div>
      <div className="pl-5 grow border-l border-[rgb(232,232,232)]">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-[rgb(28,28,28)">Order Online</div>
          <div className="p-2 border rounded w-full shadow-[rgba(28,28,28,0.08)_0px_2px_8px] max-w-[250px] h-[48px] flex items-center">
            <div className="grow flex items-center">
              <Image
                src="/images/search_icon.svg"
                alt="location-icon"
                width={16}
                height={16}
                className="mx-2"
              />
              <input
                type="text"
                placeholder="Search within menu"
                className="w-full text-base text-gray-600 font-light placeholder:text-gray-400 placeholder:font-light placeholder:text-base focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/live_icon.svg"
              alt="live-icon"
              width={14}
              height={14}
            />
            <p className="text-sm text-[rgb(130,130,130)] font-light">
              Live track your order
            </p>
          </div>
          <div className="w-[1px] h-[14px] bg-[rgb(156,156,156)]"></div>
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/watch_icon.svg"
              alt="live-icon"
              width={14}
              height={14}
            />
            <p className="text-sm text-[rgb(130,130,130)] font-light">
              {order.deliveryTime}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          {order?.menuList?.promosOnMenu?.promos.map((promo: any) => (
            <CouponCard
              key={promo.offer.id}
              title={promo.offer.id}
              desc={promo.title1.text}
            />
          ))}
        </div>
        <div className="mt-4">
          <div className="py-4">
            {order?.menuList?.menus.map((item: any) => (
              <div
                className="border-b pb-4 mb-8"
                key={item.menu.id}
                id={item.menu.id}
              >
                <h4 className="text-2xl mb-4">{item.menu.name}</h4>
                {item?.menu?.categories?.map((item: any) =>
                  item.category.items.map((item: any) => (
                    <MenuItemCard
                      key={item.item.id}
                      name={item.item.name}
                      rating={item.item.rating?.value}
                      voting={item.item.rating?.total_rating_text}
                      price={item.item.price}
                      image={item.item.item_image_url}
                      tag_image={item.item.item_tag_image}
                    />
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDetailOrder;
