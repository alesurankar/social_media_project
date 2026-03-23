"use client";

import { useTest } from "@packages/utils";
import { api } from "@/lib/api";


const Test = () => {
  const message = useTest(api);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Test Page</h1>
      <p className="text-red-500 mb-6">{message}</p>
    </div>
  );
};

export default Test;