"use client";

import { useRouter } from "next/navigation";


const Explore = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Explore Page</h1>
      <button className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/")} 
      >
        Back
      </button> 
    </div>
  );
}

export default Explore;