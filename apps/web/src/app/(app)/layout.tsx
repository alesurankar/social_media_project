"use client"

import Navigation from "@/ui/Navigation";
import { ReactNode, useState } from "react";
import { Icon } from "@packages/icons";


export default function AppLayout({ children }: { children: ReactNode }) {
  const [rightSidebar, setRightSidebar] = useState(true);  

  return (
    <div className="flex flex-col bg-[#363942] h-screen">
      <Navigation />
      <div className="flex flex-1">

        {/* Left sideBar */}
        <div className="border bg-[#fff] w-[18%]">
          <h3>Right Sidebar</h3>
        </div>

        
        <button 
          className="absolute top-26 right-0 m-2 bg-transparent border-none"
          onClick={() => setRightSidebar(prev => !prev)}
          ><Icon name="bars_arrow_down" size={32} color="black"/>
        </button>

        {/* Main content */}
        <div className="bg-[#ccc] flex-1 overflow-auto">
          {children}
        </div>

        {/* Right sidebar */}
        {rightSidebar && (
          <div className="border bg-[#fff] w-[18%]">
            <h3>Left Sidebar</h3>
          </div>
        )}
      </div>
    </div>
  );
};