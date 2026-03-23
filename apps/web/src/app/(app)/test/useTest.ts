import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export const useTest = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api
      .get<{ message: string }>("/test")
      .then((res) => setMessage(res.data.message || "API OK"))
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : "Unknown error";
        setMessage("API error: " + msg);
      });
  }, []);

  return message;
};