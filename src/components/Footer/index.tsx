import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="pt-12 pb-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10 w-32" >
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
          </div>
          <div className="flex gap-8">
            <div className="w-1/5">
              <h4 className="text-lg tracking-wider uppercase text-gray-800 mb-2">
                About Zomato
              </h4>
              <ul>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Who We Are</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Blog</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Work With Us</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Investor Relations</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Report Fraud</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h4 className="text-lg tracking-wider uppercase text-gray-800 mb-2">
                Zomaverse
              </h4>
              <ul>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Zomato</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Blinkit</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Feeding India</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Hyperpure</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Zomaland</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h4 className="text-lg tracking-wider uppercase text-gray-800 mb-2">
                FOR RESTAURANTS
              </h4>
              <ul>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Partner With Us</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Apps For You</Link>
                </li>
              </ul>
              <h4 className="text-lg tracking-wider uppercase text-gray-800 mt-6 mb-2">
                For Enterprises
              </h4>
              <ul>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Zomato For Enterprise</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h4 className="text-lg tracking-wider uppercase text-gray-800 mb-2">
                Learn More
              </h4>
              <ul>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Privacy</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Security</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Work With Us</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Terms</Link>
                </li>
                <li className="text-base text-gray-600 font-light mb-1">
                  <Link href="#">Sitemap</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h4 className="text-lg tracking-wider uppercase text-gray-800 mb-2">
                Social Links
              </h4>
              <div className="flex flex-col gap-2 pt-2">
                <Image
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt="app store logo"
                  width={137}
                  height={40}
                />
                <Image
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt="play store logo"
                  width={137}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <div className="border-t border-slate-300 py-4 text-slate-600 text-center font-light">
          This clone is for educational purpose only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
