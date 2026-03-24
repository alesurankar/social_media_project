"use client"

import { useRouter } from "next/navigation";


const TestingPage = () => {
  const router = useRouter();

  return (
    <div className="flex text-white h-screen text-4xl">

      {/* Left */}
      <div className="flex flex-col w-[20%] bg-gray-200 border-2 border-white">
        <div className="flex flex-1 bg-[#222] items-center justify-center border-2 border-white">
          L-T-1
        </div>
        <div className="flex h-[10%] bg-[#222] items-center justify-center border-2 border-white">
          L-B-1
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-1 border-2 border-white">

        {/* Top */}
        <div className="flex flex-1 bg-[#111] items-center justify-center border-2 border-white">
          R-T-1
        </div>

        {/* Bottom */}
        <div className="flex flex-1 border-2 border-white">
          <div className="flex flex-1 bg-[#333] border-1 border-white items-center justify-center ">
            R-B-1
          </div>
          <button className="flex flex-[0.25] bg-[#000] text-white border-1 border-white items-center justify-center"
            onClick={() => router.push("/test")}
            >Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestingPage;