"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@packages/utils";


const Test = () => {
  const router = useRouter();
  const [feedMessage, setFeedMessage] = useState<string>("Loading...");

  useEffect(() => {
    // Test your API endpoint
    api
      .get("/test")
      .then((res) => setFeedMessage(res.data.message || "API OK"))
      .catch((err) => setFeedMessage("API error: " + err.message));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Test Page</h1>
      <p className="text-red-500 mb-6">{feedMessage}</p>

      <button
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/")}
      >
        Back
      </button>
    </div>
  );
};

export default Test;