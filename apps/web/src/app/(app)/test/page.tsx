"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/api"

type TestResponse = { message: string };

const Test = () => {
  const router = useRouter();
  const [feedMessage, setFeedMessage] = useState<string>("Loading...");

  useEffect(() => {
    api
      .get<TestResponse>("/test")
      .then((res: { data: TestResponse }) => setFeedMessage(res.data.message || "API OK"))
      .catch((err: unknown) => {
      const message = err instanceof Error ? err.message : "Unknown API error";
      setFeedMessage("API error: " + message);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Test Page</h1>
      <p className="text-red-500 mb-6">{feedMessage}</p>

      <button
        className="hover:text-black text-white py-4 px-8 mb-2 w-64 rounded"
        onClick={() => router.push("/")}
      >Back
      </button>
    </div>
  );
};

export default Test;