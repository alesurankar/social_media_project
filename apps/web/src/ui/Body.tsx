"use client";

import { ReactNode, useState } from "react";
import { Icon } from "@packages/icons";
import { useMe } from "@packages/utils";
import { api } from "@/lib/api";


interface BodyProps {
  className?: string;
  children: ReactNode;
}

const Body = ({ className, children }: BodyProps) => {
  const [leftSidebar, setLeftSidebar] = useState(true);  
  const [rightSidebar, setRightSidebar] = useState(true);  
  
  const { user, error} = useMe(api);

  return (
    <div className={className}>

      {/* Left sideBar */}
      <button 
        className="absolute top-0 left-0 m-2 bg-transparent border-none z-50"
        onClick={() => setLeftSidebar(prev => !prev)}
        ><Icon name="bars_arrow_down" size={32} color="black"/>
      </button>
      
      {leftSidebar && (
        <div className="w-[18%] border bg-[#fff]">
          <h3 className="pt-20">Left Sidebar</h3>

          {/* User info */}
          {error && <p className="text-red-500">{error}</p>}
          {user && (
            <div className="mt-4">
              <p className="font-bold">{user.username}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          )}
          {!user && !error && <p>No user logged in</p>}
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
  );
};

export default Body;
