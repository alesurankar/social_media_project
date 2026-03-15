"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Logo1 } from "@packages/images";
import LoginModal from "../components/auth/LoginModal"
import RegisterModal from "../components/auth/RegisterModal"


export default function LandingPage() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
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

      <button 
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/test")} 
      >Test
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
      {/* <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/create")} 
      >Create
      </button> 
      <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/explore")} 
      >Explore
      </button> 
      <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/feed")} 
      >Feed
      </button> 
      <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/notifications")} 
      >Notifications
      </button>
      <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/profile")} 
      >Profile
      </button> */}
    </main>
  );
}