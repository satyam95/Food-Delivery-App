import React from "react";

interface CheckBoxPropsType {
  labelText: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxField = ({ labelText, checked, onChange }: CheckBoxPropsType) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={labelText}
        id={labelText}
        checked={checked}
        value={labelText}
        className="checkbox-style"
        onChange={onChange}
      />
      <label
        htmlFor={labelText}
        className="text-base text-[rgb(28,28,28)] pl-2 font-light"
      >
        {labelText}
      </label>
    </div>
  );
};

export default CheckBoxField;
