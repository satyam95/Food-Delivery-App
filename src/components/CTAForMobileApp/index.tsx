import Image from "next/image";
import React from "react";
import CTAForm from "../CTAForm";

const CTAForMobileApp = () => {
  return (
    <section className="bg-[rgb(255,251,247)] mt-20">
      <div className="py-20 md:py-24 max-w-[1100px] mx-auto">
        <div className="flex items-center flex-wrap gap-14 justify-center">
          <div className="">
            <Image
              src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
              alt="mobile app screenshort"
              height={500}
              width={300}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="px-6 md:px-0">
            <div className="pb-8">
              <h2 className="text-3xl md:text-4xl">Get the Zomato app</h2>
              <p className="pt-6 text-base md:text-lg text-slate-600 font-light max-w-[500px]">
                We will send you a link, open it on your phone to download the
                app
              </p>
            </div>
            <CTAForm />
            <div className="flex flex-col gap-2 pt-8">
              <div className="text-base text-slate-600 font-light">
                Download app from
              </div>
              <div className="flex flex-row gap-2">
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
    </section>
  );
};

export default CTAForMobileApp;
