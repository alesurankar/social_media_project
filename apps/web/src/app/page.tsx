"use client";

import { useRouter } from "next/navigation";


export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <img
        src="/images/logo1.png"
        alt="Logo"
        className="w-42 h-42 mb-4"
      />
      <h1>Welcome to Social Platform app</h1>
      <h2>navigate</h2>
      <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
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
      </button> 
    </main>
  );
}