import ButtonWithIcon from "@/elements/ButtonWithIcon";
import SafetyCheckCard from "@/elements/SafetyCheckCard";
import { TabOverType } from "@/types/types";
import Image from "next/image";
import React from "react";

const ResturantDetailOverview = ({ cuisine, safetyCheck, cft }: TabOverType) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3">
        <div className="text-2xl text-[rgb(28,28,28)">About this place</div>
        {safetyCheck?.length === 0 ? "" :(
          <div className="pt-4 pl-1">
            {safetyCheck?.map((item) => (
              <SafetyCheckCard key={item.text} image={item.image.url} text={item.text} />
            ))}
          </div>
        )}
        <div className="pt-6">
          <h3 className="text-xl">Cuisines</h3>
          <div className="flex flex-wrap gap-4 pt-2">
            {cuisine?.map((item) => (
              <div key={item.name} className="text-base font-light leading-4 text-[rgb(17,145,153)] border border-[rgb(207,207,207)] p-2.5 rounded-[59px] cursor-pointer">
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6">
          <h3 className="text-xl text-[rgb(28,28,28)]">Average Cost</h3>
          <p className="text-base text-[rgb(79,79,79)] pt-2">
            {cft}
          </p>
          <p className="text-sm text-[rgb(156,156,156)] font-light">
            Exclusive of applicable taxes and charges, if any
          </p>
        </div>
        <div className="pt-6">
          <h3 className="text-xl text-[rgb(28,28,28)]">More Info</h3>
          <div className="flex w-full flex-wrap pt-4">
            <div className="w-1/2 flex items-center gap-2">
              <Image
                src="/images/green_tick_icon.svg"
                alt="green-tick"
                width={20}
                height={20}
              />
              <p className="text-base leading-4 text-[rgb(79,79,79)]">
                Home Delivery
              </p>
            </div>
            <div className="w-1/2 flex items-center gap-2">
              <Image
                src="/images/green_tick_icon.svg"
                alt="green-tick"
                width={20}
                height={20}
              />
              <p className="text-base leading-4 text-[rgb(79,79,79)]">
                Takeaway Available
              </p>
            </div>
            <div className="w-1/2 flex items-center gap-2 pt-4">
              <Image
                src="/images/red_cross_icon.svg"
                alt="green-tick"
                width={20}
                height={20}
              />
              <p className="text-base leading-4 text-[rgb(79,79,79)]">
                No Seating Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/3">
        <div className="border rounded p-6 w-full border-[rgb(248,248,248)] shadow-[rgba(28,28,28,0.12)_0px_2px_8px]">
          <div>
            <h3 className="text-xl text-[rgb(28,28,28)]">Call</h3>
            <p className="text-base text-primary">+91 9999999999</p>
          </div>
          <div className="pt-4">
            <h3 className="text-xl text-[rgb(28,28,28)]">Direction</h3>
          </div>
          <div className="pt-4 flex items-center gap-6">
            <ButtonWithIcon icon="/images/copy_icon.svg" text="Copy" />
            <ButtonWithIcon
              icon="/images/direction_filled_icon.svg"
              text="Direction"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantDetailOverview;
