import { useEffect, useState } from "react";


const useTest = (api: any) => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api
      .get("/test")
      .then((res: any) => setMessage(res.data.message || "API OK"))
      .catch((err: any) => setMessage("API error: " + (err?.message || "Unknown error")));
  }, [api]);

  return message;
};

export default useTest;
