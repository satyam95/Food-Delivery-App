"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const ListingHeader = () => {
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
    <>
      <header className="py-2">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-32">
              <Link href="/">
                <Image
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  alt="footer-logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
            <div className="p-2 border rounded w-full shadow-[rgba(28,28,28,0.08)_0px_2px_8px] max-w-[700px] h-[54px] flex items-center">
              <div className="flex items-center justify-between w-[200px]">
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
              <div className="h-[20px] border border-[#cfcfcf] mx-2"></div>
              <div className="grow flex items-center">
                <Image
                  src="/images/search_icon.svg"
                  alt="location-icon"
                  width={16}
                  height={16}
                  className="mx-2"
                />
                <form onSubmit={onSearch}>
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
            <nav>
              <ul className="flex items-center gap-4">
                <li className="text-lg text-gray-600 font-light">Log in</li>
                <li className="text-lg text-gray-600 font-light">Sign up</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default ListingHeader;
