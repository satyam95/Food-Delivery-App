import React from "react";

const ResturantDetailMenu = ({
  restaurantName,
}: {
  restaurantName: string | undefined;
}) => {
  return (
    <>
      <div className="text-2xl text-[rgb(28,28,28)">{restaurantName} Menu</div>
      <div className="w-8/12 md:w-1/4 pt-6"></div>
    </>
  );
};

export default ResturantDetailMenu;
