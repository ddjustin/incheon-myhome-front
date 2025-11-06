import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Incheon Myhome",
  description: "인천내집 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
