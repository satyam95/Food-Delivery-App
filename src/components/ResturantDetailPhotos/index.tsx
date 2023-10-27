import Image from "next/image";
import React, { useState } from "react";

interface ImagesType {
  image: string;
  category: string;
  name: string;
}

const images = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/7/18802737/536290ac7cc8f9611a301cae91094813.jpg",
    category: "food",
    name: "banner",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/19836323/3d4c1639c5e5e8cba370766ed7cd42e2.jpg",
    category: "amdience",
    name: "shop-picture",
  },
  {
    image:
      "https://b.zmtcdn.com/data/reviews_photos/382/7dbd8e282ef39014aed3a1df8a3f3382_1628678842.jpg",
    category: "food",
    name: "food-1",
  },
  {
    image:
      "https://b.zmtcdn.com/data/reviews_photos/a59/6fea625d003c92a7a4957c9102c9ba59_1689269879.jpg",
    category: "food",
    name: "food-2",
  },
];

const ResturantDetailPhotos = () => {
  const [items, setItems] = useState<ImagesType[]>(images);
  const [selectedOption, setSelectedOption] = useState("all");

  const filteredPhotos = (categItem: string) => {
    setSelectedOption(categItem);
    if (categItem === "all") {
      setItems(images);
    } else {
      const updatedItems = images.filter((item) => {
        return item.category === categItem;
      });

      setItems(updatedItems);
    }
  };

  const getUniqueCategoryCounts = (images: ImagesType[]) => {
    const categoryCountMap: Record<string, number> = {};

    images.forEach((item) => {
      if (categoryCountMap[item.category]) {
        categoryCountMap[item.category]++;
      } else {
        categoryCountMap[item.category] = 1;
      }
    });

    const uniqueCategoriesWithCount = Object.entries(categoryCountMap).map(
      ([category, count]) => ({
        category,
        count,
      })
    );

    return uniqueCategoriesWithCount;
  };

  const uniqueCategoriesWithCount = getUniqueCategoryCounts(images);

  return (
    <>
      <div className="text-2xl text-[rgb(28,28,28)">
        Kundan Namkeen Center Photos
      </div>
      <div className="flex items-center gap-4 pt-8 pb-6">
        <button
          className={`text-sm leading-[14px] rounded px-4 font-light py-2  border ${
            selectedOption === "all"
              ? "text-white border-[rgb(239,79,95)] bg-[rgb(239,79,95)]"
              : "text-[rgb(156,156,156)] border-[rgb(156,156,156)]"
          }`}
          onClick={() => filteredPhotos("all")}
        >
          All ({images.length})
        </button>
        {uniqueCategoriesWithCount.map((item) => (
          <button
            data-testid="category-button"
            key={item.category}
            className={`text-sm leading-[14px] rounded px-4 font-light py-2 capitalize border ${
              selectedOption === item.category
                ? "text-white border-[rgb(239,79,95)] bg-[rgb(239,79,95)]"
                : "text-[rgb(156,156,156)] border-[rgb(156,156,156)]"
            }`}
            onClick={() => filteredPhotos(item.category)}
          >
            {item.category} ({item.count})
          </button>
        ))}
      </div>
      <div className="flex items-center flex-wrap gap-4">
        {items.map((item) => (
          <div
            className="relative h-[200px] w-[200px] overflow-hidden"
            key={item.name}
          >
            <Image
              data-testid="category-food-image"
              src={item.image}
              alt={item.name}
              fill={true}
              className="object-cover hover:scale-105 duration-200 rounded-md"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 640px, 960px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ResturantDetailPhotos;
