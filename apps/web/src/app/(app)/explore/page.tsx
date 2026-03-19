"use client";

import { useRouter } from "next/navigation";


const Explore = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Explore Page</h1>
    </div>
  );
}

export default Explore;