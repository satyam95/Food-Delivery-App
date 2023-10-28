import ResturantDetailTabs from "@/components/ResturantDetailTabs";
import ReviewBlock from "@/components/ReviewBlock";
import { restaurants } from "@/data/restaurant";
import ButtonWithIcon from "@/elements/ButtonWithIcon";
import Image from "next/image";
import React from "react";

const ResturantPage = ({ params }: { params: { resturantId: string } }) => {
  const resturantSlug = params.resturantId;

  const data = restaurants.find(
    (restaurant) => restaurant.slug === resturantSlug
  );

  const getPhotoUrls = (restaurant: any) => {
    const photoUrls = [];

    if (restaurant?.IMAGES) {
      for (const key in restaurant?.IMAGES) {
        if (
          restaurant?.IMAGES.hasOwnProperty(key) &&
          restaurant?.IMAGES[key]?.url
        ) {
          photoUrls.push(restaurant?.IMAGES[key]?.url);
        }
      }
    } else {
      photoUrls.push(
        "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
      );
      photoUrls.push(
        "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
      );
      photoUrls.push(
        "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
      );
      photoUrls.push(
        "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
      );
      photoUrls.push(
        "https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
      );
    }

    return photoUrls;
  };

  const photoUrls = getPhotoUrls(data);

  return (
    <div className="border-t">
      <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
        <div className="py-10">
          <section className="hidden md:flex items-center gap-2.5">
            <div className="relative h-[370px] w-3/5 overflow-hidden">
              <Image
                data-testid="photo-gallery-image"
                src={photoUrls[0]}
                alt="image"
                fill={true}
                className="object-cover hover:scale-105 duration-200"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
              />
            </div>
            <div className="flex flex-col gap-2.5 w-1/5">
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                data-testid="photo-gallery-image"
                  src={photoUrls[1]}
                  alt="image"
                  fill={true}
                  className="object-cover hover:scale-105 duration-200"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
                />
              </div>
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image
                data-testid="photo-gallery-image"
                  src={photoUrls[2]}
                  alt="image"
                  fill={true}
                  className="object-cover hover:scale-105 duration-200"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
                />
              </div>
            </div>
            <div className="relative w-1/5">
              <div className="relative w-full h-[370px] brightness-50 z-10">
                <Image
                data-testid="photo-gallery-image"
                  src={photoUrls[3]}
                  alt="image"
                  fill={true}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
                />
              </div>
              <p className="absolute h-full w-full top-[6rem] text-base font-light text-white text-center z-20">
                View Gallery
              </p>
            </div>
          </section>
          <section className="md:py-4">
            <div className="flex md:justify-between md:items-center flex-col gap-4 md:flex-row">
              <h1 data-testid="rest-name-text" className="text-3xl">{data?.info?.name}</h1>
              <div className="flex md:items-center gap-4 md:gap-20">
                <ReviewBlock
                  reviewRating={data?.info.ratingNew.ratings.DINING.rating}
                  reviewCount={data?.info.ratingNew.ratings.DINING.reviewCount}
                  reviewType={data?.info.ratingNew.ratings.DINING.sideSubTitle}
                />
                <ReviewBlock
                  reviewRating={data?.info.ratingNew.ratings.DELIVERY.rating}
                  reviewCount={
                    data?.info.ratingNew.ratings.DELIVERY.reviewCount
                  }
                  reviewType={
                    data?.info.ratingNew.ratings.DELIVERY.sideSubTitle
                  }
                />
              </div>
            </div>
            <div className="pt-4 md:pt-2">
              <div className="text-gray-600 font-light text-base">
                {data?.info.cuisine.map((item) => item.name).join(", ")}
              </div>
              <div className="pt-0.5 text-gray-500 font-light text-base">
                {data?.info.locality.name}
              </div>
              <div className="pt-1 text-gray-400 font-light text-sm">
                <span className="text-[rgb(244,162,102)]">Open</span> - 11am –
                10pm
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
          <ResturantDetailTabs
            cft={data?.info.cft.text}
            safetyCheck={data?.bottomContainers}
            cuisine={data?.info.cuisine}
            order={data?.order}
            reviews={data?.REVIEWS}
            restaurantName={data?.info?.name}
            // menu={data?.menuItems}
          />
        </div>
      </div>
    </div>
  );
};

export default ResturantPage;
