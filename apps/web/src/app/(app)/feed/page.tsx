"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@packages/utils";


const Feed = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-2xl font-bold mb-4">This is Feed Page</h1>
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

export default Feed;