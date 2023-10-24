import { collectionsData } from "@/data/venueCategories";
import Image from 'next/image'
import React from 'react'

const CollectionRectBlock = () => {
  return (
    <section className="bg-[rgb(248,248,248)]">
        <div className="px-6 md:px-0 max-w-[1100px] mx-auto">
          <div className="py-14">
            <h2 className="text-3xl font-normal text-gray-900 pb-2">
              Collections
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bhopal, based on trends
            </p>
            <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              {collectionsData.map((collectionData) => (
                <div className="w-full md:w-3/12" key={collectionData.title}>
                  <div className="relative cursor-pointer">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={collectionData.img}
                        alt={collectionData.title}
                        fill={true}
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full overlay-bg rounded-2xl">
                      <div className="flex flex-col justify-end h-full p-4">
                        <h3 className="text-lg text-white font-light">
                          {collectionData.title}
                        </h3>
                        <p className="text-base text-white font-light">
                          {collectionData.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default CollectionRectBlock