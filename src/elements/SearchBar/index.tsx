"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const search = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (typeof searchQuery !== "string") {
      return;
    }
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };
  return (
    <div className="p-2 border rounded bg-white w-full shadow-[rgba(28,28,28,0.08)_0px_2px_8px] max-w-[700px] h-[54px] flex items-center">
      <div className="hidden md:flex items-center justify-between w-[200px]">
        <div className="flex items-center gap-1">
          <Image
            src="/images/location_icon.svg"
            alt="location-icon"
            width={24}
            height={24}
          />
          <div className="text-base text-gray-600">Bhopal</div>
        </div>
        <Image
          src="/images/down_arrow_icon.svg"
          alt="location-icon"
          width={12}
          height={12}
        />
      </div>
      <div className="hidden md:block h-[20px] border border-[#cfcfcf] mx-2"></div>
      <div className="grow flex items-center">
        <Image
          src="/images/search_icon.svg"
          alt="location-icon"
          width={16}
          height={16}
          className="mx-2"
        />
        <form className="grow" onSubmit={onSearch}>
          <input
            type="text"
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full text-base text-gray-600 font-light placeholder:text-gray-600 placeholder:font-light placeholder:text-base focus:outline-none focus:ring-0"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
