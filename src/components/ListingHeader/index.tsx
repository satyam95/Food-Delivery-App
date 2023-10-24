import SearchBar from "@/elements/SearchBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingHeader = () => {
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
            <SearchBar/>
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
