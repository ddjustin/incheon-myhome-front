import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "인천내집",
  description: "인천내집 서비스",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <Header />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
