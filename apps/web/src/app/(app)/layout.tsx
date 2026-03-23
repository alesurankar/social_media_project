import Navigation from "@/ui/Navigation";
import { ReactNode } from "react";


export default function AppLayout({ children }: { children: ReactNode }) {
    
  return (
    <div className="flex flex-col bg-[#363942] h-screen">
      <Navigation />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};