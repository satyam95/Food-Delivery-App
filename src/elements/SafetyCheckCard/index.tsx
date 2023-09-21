import Image from "next/image";
import React from "react";

const SafetyCheckCard = ({image, text}: {image: string, text: string}) => {
  return (
    <div className="flex items-center gap-3 p-2 border rounded w-max shadow-[rgba(0,0,0,0.06)_1px_0px_4px]">
      <div>
        <Image
          src={image}
          alt="safety check"
          height={48}
          width={48}
        />
      </div>
      <div className="flex flex-col gap-1.5 max-w-[220px]">
        <p className="text-sm font-light leading-[14px]">{text}</p>
      </div>
    </div>
  );
};

export default SafetyCheckCard;
