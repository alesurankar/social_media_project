"use client"

import Navigation from "@/ui/Navigation";
import { ReactNode, useState } from "react";
import { Icon } from "@packages/icons";


export default function AppLayout({ children }: { children: ReactNode }) {
  const [rightSidebar, setRightSidebar] = useState(true);  

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      
      {/* Body */}
      <div className="flex flex-1 relative">

        {/* Left sideBar */}
        <div className="w-[18%] border bg-[#fff]">
          <h3>Right Sidebar</h3>
        </div>

        <button 
          className="absolute top-0 right-0 m-2 bg-transparent border-none z-50"
          onClick={() => setRightSidebar(prev => !prev)}
          ><Icon name="bars_arrow_down" size={32} color="black"/>
        </button>

        {/* Main content */}
        <div className="flex-1 border bg-[#ccc] overflow-auto">
          {children}
        </div>

        {/* Right sidebar */}
        {rightSidebar && (
          <div className="absolute top-0 right-0 w-[18%] h-full border bg-[#fff]">
            <h3>Left Sidebar</h3>
          </div>
        )}
      </div>
    </div>
  );
};