"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "../../../components/auth/LoginModal"
import RegisterModal from "../../../components/auth/RegisterModal"


const Profile = () => {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Profile Page</h1>

      <button
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => setLoginOpen(true)}
      >Open Modal
      </button>

      <button 
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/")} 
      >Back
      </button> 

      {/* Modal */}
      <RegisterModal 
        modalVisible={loginOpen} 
        setModalVisible={setLoginOpen} 
      />
    </div>
  );
}

export default Profile;