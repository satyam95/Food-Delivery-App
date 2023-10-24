"use client";
import React, { useEffect, useState } from "react";

const CTAForm = () => {
  const [linkType, setLinkType] = useState("");
  useEffect(() => {
    setLinkType("Email");
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="Email"
              name="send_link_type"
              value="Email"
              defaultChecked={linkType === "Email"}
              onChange={() => setLinkType("Email")}
            />
            <label
              htmlFor="Email"
              className="text-base font-light text-slate-600"
            >
              Email
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="Phone"
              name="send_link_type"
              value="Phone"
              defaultChecked={linkType === "Phone"}
              onChange={() => setLinkType("Phone")}
            />
            <label
              htmlFor="Phone"
              className="text-base font-light text-slate-600"
            >
              Phone
            </label>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            {linkType === "Email" ? (
              <input
                type="text"
                placeholder="Email"
                className="w-[300px] px-4 py-2 border rounded text-base font-light text-slate-600 placeholder:text-slate-600 placeholder:font-light"
              />
            ) : (
              <input
                type="number"
                placeholder="Phone Number"
                className="w-[300px] px-4 py-2 border rounded text-base font-light text-slate-600 placeholder:text-slate-600 placeholder:font-light"
              />
            )}
          </div>
          <div>
            <button className="bg-primary px-4 py-2 rounded text-base font-light text-white">
              Share App Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTAForm;
