"use client";

import { useState } from "react";
import { Icon } from "@packages/icons";


const RightSidebar = () => {
  const [rightSidebar, setRightSidebar] = useState(true);  

  return (
    <>
      <button 
          className="absolute top-0 right-0 m-2 bg-transparent border-none z-50"
          onClick={() => setRightSidebar(prev => !prev)}
          ><Icon name="bars_arrow_down" size={36} color="black"/>
        </button>

        {rightSidebar && (
          <div className="absolute top-0 right-0 w-[18%] h-full border bg-[#fff]">
            <h3 className="pt-20">Right Sidebar</h3>
          </div>
        )}
    </>
  );
};

export default RightSidebar;