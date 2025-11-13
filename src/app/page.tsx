"use client";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  const categories = [
    {
      title: "집 구하기",
      desc: "인천 전역의 진짜 매물만, 신뢰할 수 있는 인천홈 공인중개사가 직접 중개합니다.",
      icon: "/test/test_home.png",
      href: "/realestate/list",
    },
    {
      title: "집 내놓기",
      desc: "당신의 소중한 집을 인천홈을 통해 빠르고 안전하게 중개해드립니다.",
      icon: "/test/test_home.png",
      href: "/realestate/register",
    },
    {
      title: "생활 서비스",
      desc: "입주·퇴거 청소부터 생활 수리까지, 주거의 모든 불편함을 해결합니다.",
      icon: "/test/test_home.png",
      href: "/life",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header type="default" />
      <div className="relative flex flex-col items-center justify-center text-center py-16 px-4 bg-white">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          인천의 모든 집
        </h1>
        <h1 className="text-primary text-5xl font-bold mb-6 text-gray-900">
          인천홈이 함께합니다.
        </h1>
        <div className="text-lg text-gray-600 leading-relaxed max-w-2xl">
          부동산 중개부터 청소·이사·수리까지, <br />
          주거의 처음과 끝을 함께하는 <br />
          <strong className="text-primary">
            인천 지역 전용 주거관리 플랫폼
          </strong>
        </div>
      </div>

      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-transform"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {cat.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <div className="flex justify-end mt-6">
                <Image
                  src={cat.icon}
                  alt={cat.title}
                  width={60}
                  height={60}
                  className="opacity-90"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
