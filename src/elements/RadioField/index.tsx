import React from "react";

interface RadioBtnPropsType {
  id: string;
  name: string;
  value: string;
  labelText: string;
  checked: boolean;
  onChange: () => void;
}

const RadioField = ({
  id,
  name,
  value,
  labelText,
  checked,
  onChange,
}: RadioBtnPropsType) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="text-base text-[rgb(28,28,28)] pl-2 pt-1 font-light"
      >
        {labelText}
      </label>
    </div>
  );
};

export default RadioField;
