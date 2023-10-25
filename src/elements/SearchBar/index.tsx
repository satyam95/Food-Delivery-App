"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBar: React.FC = () => {
  const search = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   // const encodedSearchQuery = encodeURI(search.get("q") || "");
  //   setSearchQuery(SearchQuery);
  // }, []);

  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery !== "") {
      router.push(`/search?q=${searchQuery}`);
    }
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
          alt="down-arrow-icon"
          width={12}
          height={12}
        />
      </div>
      <div className="hidden md:block h-[20px] border border-[#cfcfcf] mx-2"></div>
      <div className="grow flex items-center">
        <Image
          src="/images/search_icon.svg"
          alt="search-icon"
          width={16}
          height={16}
          className="mx-2"
        />
        <form data-testid="search-form" className="grow" onSubmit={onSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search for restaurant, cuisine, or a dish"
            className="w-full text-base text-gray-600 font-light placeholder:text-gray-600 placeholder:font-light placeholder:text-base focus:outline-none focus:ring-0"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
