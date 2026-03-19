"use client";

import { useRouter } from "next/navigation";


const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Home Page</h1>
    </div>
  );
}

export default Home;