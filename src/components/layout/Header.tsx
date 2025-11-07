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
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="bg-white px-4 flex flex-row justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-gray-800">
          인천내집
        </Link>

        <nav className="hidden md:flex space-x-6 font-bold">
          {menus.map((menu) => {
            const isActive = activeTab === menu.key;

            return (
              <div
                key={menu.key}
                onClick={() => setActiveTab(menu.key)}
                className="w-16 text-center cursor-pointer"
              >
                <Link
                  href={menu.href}
                  className={`block mt-4 mb-4 transition-colors duration-200 text-base ${
                    isActive
                      ? "text-gray-900 font-bold cursor-default"
                      : "text-gray-400 hover:text-bg-primary"
                  }`}
                >
                  {menu.label}
                </Link>

                {isActive && (
                  <div className="w-16 h-[3px] bg-primary rounded-full mx-auto"></div>
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
