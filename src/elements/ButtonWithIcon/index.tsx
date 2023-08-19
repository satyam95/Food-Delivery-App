import Image from "next/image";
import React from "react";

interface ButtonWithIconPropsType {
  icon: string;
  text: string;
}

const ButtonWithIcon = ({ icon, text }: ButtonWithIconPropsType) => {
  return (
    <button className="text-gray-500 font-light text-sm flex items-center gap-1.5 rounded px-2 py-1 border border-gray-300">
      <Image src={icon} alt={`${text}-icon`} height={16} width={16} />
      {text}
    </button>
  );
};

export default ButtonWithIcon;
