import Header from "@/components/layout/Header";

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header type="realestate" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
