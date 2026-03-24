"use client"

import Image from "next/image";
import { useState } from "react";
import { Logo1 } from "@packages/images";
import LoginModal from "@/components/modal/auth/LoginModal"
import RegisterModal from "@/components/modal/auth/RegisterModal"


const LandingPage = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <main className="flex flex-col bg-[#cccccc] 2xl:mx-10 xl:mx-6 lg:mx-4 md:mx-2 sm:mx-1 items-center justify-center h-screen">
      <Image
        src={Logo1}
        alt="Logo"
        width={168}
        height={168}
        className="mb-4"
      />
      <h1>Welcome to Social Platform app</h1>
      <h2 className="mb-40">navigate</h2>

      <button 
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => setLoginOpen(true)}
      >Login
      </button> 

      <button 
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => setRegisterOpen(true)}
      >Sign up
      </button> 

      {/* Modal */}
      <LoginModal 
        modalVisible={loginOpen} 
        setModalVisible={setLoginOpen} 
      />
      <RegisterModal 
        modalVisible={registerOpen} 
        setModalVisible={setRegisterOpen} 
      />
    </main>
  );
};

export default LandingPage;