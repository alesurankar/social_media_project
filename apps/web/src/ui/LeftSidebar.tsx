"use client";

import { useState } from "react";
import { Icon } from "@packages/icons";
import { useMe } from "@packages/utils";
import { api } from "@/lib/api";


const LeftSideBar = () => {
  const [leftSidebar, setLeftSidebar] = useState(true);  
  const { user, error } = useMe(api);

  return (
    <>
      <button 
        className="absolute top-0 left-0 m-2 bg-transparent border-none z-50"
        onClick={() => setLeftSidebar(prev => !prev)}
        ><Icon name="bars_arrow_down" size={32} color="black"/>
      </button>
      
      {leftSidebar && (
        <div className="flex flex-col items-center w-[18%] min-w-[200px] border bg-[#fff]">
          <h3 className="pt-20">Personal Info:</h3>

          {/* User info */}
          {error && <p className="text-red-500">{error}</p>}
          {user && (
            <div className="mt-4">
              <p className="text-lg font-bold">Username: {user.username}</p>
              <p className="text-lg text-gray-600">Email: {user.email}</p>
            </div>
          )}
          {!user && !error && <p>No user logged in</p>}
        </div>
      )}
    </>
  );
};

export default LeftSideBar;