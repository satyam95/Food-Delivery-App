import SearchBar from "@/elements/SearchBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingHeader = () => {
  return (
    <>
      <header className="py-2" data-testid="listing-header">
        <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-32">
              <Link href="/">
                <Image
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  alt="header-dark-logo"
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
            <div className="hidden md:flex justify-center grow">
              <SearchBar />
            </div>

            <nav>
              <ul className="flex items-center gap-4">
                <li className="text-lg text-gray-600 font-light">Log in</li>
                <li className="text-lg text-gray-600 font-light">Sign up</li>
              </ul>
            </nav>
          </div>
          <div className="pt-4 md:pt-0 md:hidden">
            <SearchBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default ListingHeader;
