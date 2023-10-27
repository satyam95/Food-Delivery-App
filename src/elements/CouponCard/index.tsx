import React from "react";

interface CouponCardPropsType {
  title: string;
  desc: string;
}

const CouponCard = ({ title, desc }: CouponCardPropsType) => {
  return (
    <div data-testid="coupon-card" className="shadow-[rgba(54,54,54,0.06)_0px_1px_2px] rounded bg-[rgb(17,85,203)] p-2 items-center flex-col inline-flex gap-1">
      <p className="text-white font-medium text-base leading-4">{title}</p>
      <p className="text-white text-sm leading-[14px]">{desc}</p>
    </div>
  );
};

export default CouponCard;
