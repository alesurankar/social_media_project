"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@packages/icons";
import { useMe } from "@packages/utils";
import { api } from "@/lib/api";
import { BlackNinja } from "@packages/images";
import TestModal from "@/components/modal/TestModal";


const LeftSideBar = () => {
  const [leftSidebar, setLeftSidebar] = useState(true);  
  const { user, error } = useMe(api);
  const [addEmailOpen, setAddEmailOpen] = useState(false);

  return (
    <>
      <button 
        className="absolute top-0 left-0 m-2 bg-transparent border-none z-50"
        onClick={() => setLeftSidebar(prev => !prev)}
        ><Icon name="bars_arrow_down" size={36} color="black"/>
      </button>

      {/* Modal */}
      <TestModal 
        modalVisible={addEmailOpen}
        setModalVisible={setAddEmailOpen}
      />
      
      {leftSidebar && (
        <div className="flex flex-col items-center w-[18%] min-w-[200px] border bg-[#fff]">
          <Image
            src={BlackNinja}
            alt="picture"
            width={120}
            height={120}
            className="mt-6"
          />
          <h2 className="pt-8">Personal Info:</h2>

          {/* User info */}
          {error && <p className="text-red-500">{error}</p>}
          {user && (
            <div className="mt-4">
              <p className="text-lg font-bold mb-1">Username: {user.username}</p>
              {user.email ? (
                <p className="text-lg mb-1">Email: {user.emai}</p>
              ) : (
                <button 
                  className="text-blue-600 underline bg-white"
                  onClick={() => setAddEmailOpen(true)}
                  >+ Add email
                </button>
              )}
            </div>
          )}
          {!user && !error && <p>No user logged in</p>}
        </div>
      )}
    </>
  );
};

export default LeftSideBar;