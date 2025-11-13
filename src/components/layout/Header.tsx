"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menus: {
  key: "list" | "register";
  label: string;
  desc: string;
  href: string;
}[] = [
  {
    key: "list",
    label: "집 구하기",
    desc: "지도에서 찾아보기",
    href: "/realestate/list",
  },
  {
    key: "register",
    label: "집 내놓기",
    desc: "매물 홍보 및 중개 의뢰",
    href: "/realestate/register",
  },
];

export default function Header({ type }: { type: "realestate" | "default" }) {
  const pathname = usePathname();

  const activeKey = pathname.includes("/register")
    ? "register"
    : pathname.includes("/list")
    ? "list"
    : undefined;

  const [activeTab, setActiveTab] = useState(activeKey);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="bg-white px-4 flex flex-row justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-gray-800">
          인천홈
        </Link>

        {type === "realestate" && (
          <nav className="hidden md:flex space-x-6">
            {menus.map((menu) => {
              const isActive = activeTab === menu.key;

              return (
                <div
                  key={menu.key}
                  onClick={() => setActiveTab(menu.key)}
                  className="cursor-pointer"
                >
                  <Link href={menu.href}>
                    <div
                      className={`block mt-4 transition-colors duration-200 text-base font-bold ${
                        isActive ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {menu.label}
                    </div>

                    <div
                      className={`text-[12px] ${
                        isActive
                          ? "text-primary"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {menu.desc}
                    </div>

                    {isActive && (
                      <div className="w-full h-[5px] bg-primary rounded-full mt-1"></div>
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>
        )}

        <div></div>
      </div>
    </header>
  );
}
