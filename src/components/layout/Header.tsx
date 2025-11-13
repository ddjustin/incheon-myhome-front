"use client";

import Link from "next/link";
import { useState } from "react";

const menus = [
  { key: "map", label: "집 구하기", desc: "지도에서 찾아보기", href: "/" },
  {
    key: "property",
    label: "집 내놓기",
    desc: "매물 홍보 및 중개 의뢰",
    href: "/property",
  },
  {
    key: "clean",
    label: "입주 청소",
    desc: "고민끝 깨끗한 집을 원하다면?",
    href: "/clean",
  },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="bg-white px-4 flex flex-row justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-gray-800">
          인천홈
        </Link>

        <nav className="hidden md:flex space-x-6">
          {menus.map((menu) => {
            const isActive = activeTab === menu.key;

            return (
              <div
                key={menu.key}
                onClick={() => setActiveTab(menu.key)}
                className="cursor-pointer"
              >
                <Link
                  href={menu.href}
                  className={`block mt-4 transition-colors duration-200 text-base font-bold`}
                >
                  <div>{menu.label}</div>
                </Link>
                <div
                  className={"text-black-100 hover:text-bg-primary text-[12px]"}
                >
                  {menu.desc}
                </div>

                {isActive && (
                  <div className="w-full h-[5px] bg-primary rounded-full"></div>
                )}
              </div>
            );
          })}
        </nav>
        <div></div>
      </div>
    </header>
  );
}
