import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header data-testid="main-header" className="absolute top-0 w-full z-10">
      <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
        <div className="py-5">
          <nav
            className="flex justify-between items-center"
            aria-label="main naviagtion menu"
            role="navigation"
          >
            <div
              className="text-white text-sm flex items-center gap-2 cursor-pointer"
              aria-label="Get the App"
              tabIndex={0}
            >
              <Image
                src="/images/mobile_icon.svg"
                alt="mobile icon"
                height={20}
                width={20}
              />
              Get the App
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-6">
                <li className="text-white text-lg font-light cursor-pointer">
                  <Link href="#" tabIndex={0}>
                    Investor Relations
                  </Link>
                </li>
                <li className="text-white text-lg font-light cursor-pointer">
                  <Link href="#" tabIndex={0}>
                    Add restaurant
                  </Link>
                </li>
                <li className="text-white text-lg font-light cursor-pointer">
                  <Link href="#" tabIndex={0}>
                    Log in
                  </Link>
                </li>
                <li className="text-white text-lg font-light cursor-pointer">
                  <Link href="#" tabIndex={0}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
