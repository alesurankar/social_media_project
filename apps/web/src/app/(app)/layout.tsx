import Navigation from "@/gui/Navigation";
import FooterBar from "@/gui/FooterBar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
      <FooterBar />
    </div>
  );
}