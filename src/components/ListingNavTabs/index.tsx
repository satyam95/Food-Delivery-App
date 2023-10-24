"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListingNavTabs = ({ slug }: { slug: string }) => {
  return (
    <div className="mt-6">
      <div className="shadow-nav">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center">
            <div>
              <Link href="/bhopal/delivery">
                <div
                  className={
                    slug === "delivery"
                      ? "flex items-center py-2 px-6 border-primary border-b-2"
                      : "flex items-center py-2 px-6"
                  }
                >
                  <div
                    className={
                      slug === "delivery"
                        ? "h-[5rem] w-[5rem] rounded-full bg-[rgb(252,238,192)] flex items-center justify-center"
                        : "h-[5rem] w-[5rem] rounded-full flex items-center justify-center bg-[rgb(248,248,248)]"
                    }
                  >
                    <div className="w-12">
                      <Image
                        src={
                          slug === "delivery"
                            ? "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                            : "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                        }
                        alt="delivery-icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      slug === "delivery"
                        ? "text-xl text-primary ml-4 font-medium"
                        : "text-xl ml-4 font-medium text-gray-600"
                    }
                  >
                    Delivery
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/bhopal/dine-out">
                <div
                  className={
                    slug === "dine-out"
                      ? "flex items-center py-2 px-6 border-primary border-b-2"
                      : "flex items-center py-2 px-6"
                  }
                >
                  <div
                    className={
                      slug === "dine-out"
                        ? "h-[5rem] w-[5rem] rounded-full bg-[rgb(229,243,243)] flex items-center justify-center"
                        : "h-[5rem] w-[5rem] rounded-full flex items-center justify-center bg-[rgb(248,248,248)]"
                    }
                  >
                    <div className="w-12">
                      <Image
                        src={
                          slug === "dine-out"
                            ? "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                            : "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                        }
                        alt="dine-out-icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      slug === "dine-out"
                        ? "text-xl text-primary ml-4 font-medium"
                        : "text-xl ml-4 font-medium text-gray-600"
                    }
                  >
                    Dine Out
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link href="/bhopal/nightlife">
                <div
                  className={
                    slug === "nightlife"
                      ? "flex items-center py-2 px-6 border-primary border-b-2"
                      : "flex items-center py-2 px-6"
                  }
                >
                  <div
                    className={
                      slug === "nightlife"
                        ? "h-[5rem] w-[5rem] rounded-full flex items-center justify-center bg-[rgb(237,244,255)]"
                        : "h-[5rem] w-[5rem] rounded-full flex items-center justify-center bg-[rgb(248,248,248)]"
                    }
                  >
                    <div className="w-12">
                      <Image
                        src={
                          slug === "nightlife"
                            ? "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                            : "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                        }
                        alt="nightlife-icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      slug === "nightlife"
                        ? "text-xl ml-4 font-medium text-primary"
                        : "text-xl ml-4 font-medium text-gray-600"
                    }
                  >
                    Nightlife
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingNavTabs;
