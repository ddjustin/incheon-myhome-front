"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

type Property = {
  id: number;
  title: string;
  area: string;
  floor: string;
  price: string;
  location: string;
  tags: string[];
  management: string;
  image: string;
};

const mockProperties: Property[] = [
  {
    id: 1,
    title: "원룸(오픈형)",
    area: "19.8㎡",
    floor: "반지층",
    price: "월세 2000/45",
    location: "서울특별시 강서구 화곡동",
    tags: ["#풀옵션"],
    management: "관리비 8만",
    image: "/test/test_home.png",
  },
  {
    id: 2,
    title: "원룸(오픈형)",
    area: "16.11㎡",
    floor: "지상 5층",
    price: "월세 1억3000/10",
    location: "서울특별시 송파구 삼전동",
    tags: ["#풀옵션"],
    management: "관리비 5만",
    image: "/test/test_home.png",
  },
  {
    id: 3,
    title: "원룸(오픈형)",
    area: "23.1㎡",
    floor: "지상 3층",
    price: "월세 1000/80",
    location: "서울특별시 강남구 청담동",
    tags: ["#주차", "#풀옵션"],
    management: "관리비 15만",
    image: "/test/test_home.png",
  },
];

export default function PropertyContainer() {
  const [sort, setSort] = useState("추천 순");

  return (
    <div className="absolute z-10 top-10 bg-white w-[400px] h-[calc(100vh)] overflow-y-auto border-r border-gray-200 shadow-md">
      <div className="flex items-center gap-2 p-4 border-b mt-6">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-grow">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="지하철명, 학교명, 지역 검색"
            className="bg-transparent outline-none text-sm flex-grow"
          />
        </div>
        <button className="p-2 text-gray-600 hover:text-gray-800">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2 px-4 py-2 border-b">
        {["추천 순", "최신 순"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSort(tab)}
            className={`px-4 py-2 text-sm rounded-md font-medium ${
              sort === tab
                ? "bg-gray-200 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {mockProperties.map((item) => (
          <div
            key={item.id}
            className="border-b pb-4 last:border-none cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500">
                  {item.title} · {item.area} · {item.floor}
                </p>
                <p className="text-lg font-bold text-gray-900">{item.price}</p>
                <p className="text-sm text-gray-600">{item.location}</p>

                <div className="flex justify-between items-center mt-1">
                  <div className="text-xs text-gray-500">
                    {item.tags.join(" ")}
                  </div>
                  <div className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-md">
                    {item.management}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
