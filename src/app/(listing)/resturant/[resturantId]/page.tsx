import ResturantDetailTabs from "@/components/ResturantDetailTabs";
import ReviewBlock from "@/components/ReviewBlock";
import ButtonWithIcon from "@/elements/ButtonWithIcon";
import Image from "next/image";
import React from "react";

const images = [
  "https://b.zmtcdn.com/data/pictures/7/18802737/536290ac7cc8f9611a301cae91094813.jpg",
  "https://b.zmtcdn.com/data/pictures/3/19836323/3d4c1639c5e5e8cba370766ed7cd42e2.jpg",
  "https://b.zmtcdn.com/data/reviews_photos/382/7dbd8e282ef39014aed3a1df8a3f3382_1628678842.jpg",
  "https://b.zmtcdn.com/data/reviews_photos/a59/6fea625d003c92a7a4957c9102c9ba59_1689269879.jpg",
];

const ResturantPage = () => {
  return (
    <div className="border-t">
      <div className="max-w-[1100px] mx-auto">
        <div className="py-10">
          <section className="flex items-center gap-2.5">
            <div className="relative h-[370px] w-3/5 overflow-hidden">
              <Image
                src={images[0]}
                alt="image"
                fill={true}
                className="object-cover hover:scale-105 duration-200"
              />
            </div>
            <div className="flex flex-col gap-2.5 w-1/5">
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src={images[1]}
                  alt="image"
                  fill={true}
                  className="object-cover hover:scale-105 duration-200"
                />
              </div>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                  src={images[2]}
                  alt="image"
                  fill={true}
                  className="object-cover hover:scale-105 duration-200"
                />
              </div>
            </div>
            <div className="relative w-1/5">
              <div className="relative w-full h-[370px] brightness-50 z-10">
                <Image
                  src={images[3]}
                  alt="image"
                  fill={true}
                  className="object-cover"
                />
              </div>
              <p className="absolute h-full w-full top-[6rem] text-base font-light text-white text-center z-20">
                View Gallery
              </p>
            </div>
          </section>
          <section className="py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl">Kundan Namkeen Center</h1>
              <div className="flex items-center gap-20">
                <ReviewBlock
                  reviewRating={4.1}
                  reviewCount={156}
                  reviewType="Dining Reviews"
                />
                <ReviewBlock
                  reviewRating={4.0}
                  reviewCount={7646}
                  reviewType="Delivery Reviews"
                />
              </div>
            </div>
            <div className="pt-2">
              <div className="text-gray-600 font-light text-base">
                Mithai, Street Food
              </div>
              <div className="pt-0.5 text-gray-500 font-light text-base">
                Peer Gate Area, Bhopal
              </div>
              <div className="pt-1 text-gray-400 font-light text-sm">
                <span className="text-[rgb(244,162,102)]">Open</span> - now 11am
                – 10pm (Today)
              </div>
            </div>
            <div className="pt-4 flex items-center gap-4">
              <ButtonWithIcon
                icon="/images/direction_icon.svg"
                text="Direction"
              />
              <ButtonWithIcon
                icon="/images/bookmark_icon.svg"
                text="Bookmark"
              />
              <ButtonWithIcon icon="/images/share_icon.svg" text="Share" />
            </div>
          </section>
          <ResturantDetailTabs />
        </div>
      </div>
    </div>
  );
};

export default ResturantPage;
