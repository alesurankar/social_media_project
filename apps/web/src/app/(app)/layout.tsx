"use client"

import { ReactNode, useState } from "react";
import Navigation from "@/ui/Navigation";
import { Icon } from "@packages/icons";


const AppLayout = ({ children }: { children: ReactNode }) => {
  const [leftSidebar, setLeftSidebar] = useState(true);  
  const [rightSidebar, setRightSidebar] = useState(true);  

  return (
    <div className="flex flex-col h-screen">
      <Navigation className="flex h-24 w-full"/>
      
      {/* Body */}
      <div className="flex flex-1 relative">

        {/* Left sideBar */}
        <button 
          className="absolute top-0 left-0 m-2 bg-transparent border-none z-50"
          onClick={() => setLeftSidebar(prev => !prev)}
          ><Icon name="bars_arrow_down" size={32} color="black"/>
        </button>
        
        {leftSidebar && (
          <div className="w-[18%] border bg-[#fff]">
            <h3 className="pt-20">Left Sidebar</h3>
          </div>
        )}

        {/* Main content */}
        <div className="flex-1 border bg-[#ccc] overflow-auto">
          {children}
        </div>

        {/* Right sidebar */}
        <button 
          className="absolute top-0 right-0 m-2 bg-transparent border-none z-50"
          onClick={() => setRightSidebar(prev => !prev)}
          ><Icon name="bars_arrow_down" size={32} color="black"/>
        </button>

        {rightSidebar && (
          <div className="absolute top-0 right-0 w-[18%] h-full border bg-[#fff]">
            <h3 className="pt-20">Right Sidebar</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLayout;