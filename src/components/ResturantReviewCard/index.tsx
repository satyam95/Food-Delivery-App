import ButtonWithoutBorder from "@/elements/ButtonWithoutBorder";
import NumericRating from "@/elements/NumericRating";
import Image from "next/image";
import React from "react";

const ResturantReviewCard = () => {
  return (
    <div className="border-b py-4">
      <div className="flex items-center gap-3">
        <Image
          src="https://b.zmtcdn.com/data/user_profile_pictures/856/1ffc98b0e659af862f8d76d11ade7856.jpg"
          alt="user-image"
          width={44}
          height={44}
          className="rounded-full"
        />
        <div>
          <div className="text-base text-[rgb(54,54,54)]">Govind Gaurva</div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-light text-[rgb(156,156,156)]">
              8 reviews
            </div>
            <div className="w-1 h-1 bg-[rgb(156,156,156)] rounded-full"></div>
            <div className="text-sm font-light text-[rgb(156,156,156)]">
              0 Followers
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 mb-4">
        <NumericRating rating={5} type="small" />
        <div className="text-base text-[rgb(54,54,54)]">DELIVERY</div>
        <div className="text-base text-[rgb(156,156,156)]">yesterday</div>
      </div>
      <div className="text-lg font-light text-[rgb(105,105,105)] mb-3">
        very bad kwality and taste again disappointed for Kundan please don't
        compromise for taste and brand . sir please don't mind.यह दूसरी बार हुआ
        है।आप लोग बटर पनीर मसाला का स्वाद बरकरार नहीं रख पा रहे हैं। please
        manage your test from butter paneer masala
      </div>
      <div className="text-base text-[rgb(156,156,156)] font-light mb-1">
        0 Votes for helpful, 0 Comments
      </div>
      <div className="flex items-center gap-3">
        <ButtonWithoutBorder icon="/images/help_icon.svg" text="Helpful" />
        <ButtonWithoutBorder icon="/images/comment_icon.svg" text="Comment" />
        <ButtonWithoutBorder
          icon="/images/share_filled_icon.svg"
          text="Share"
        />
      </div>
    </div>
  );
};

export default ResturantReviewCard;
