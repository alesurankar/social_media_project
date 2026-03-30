import { useState, useEffect } from "react";


const useMe = (api: any, token?: string, ready?: boolean) => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const me = async () => {

    setError(null);
    try {
      console.log("packages/utils/useMe.ts: USER DETAILS TRIGGERED");
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
      console.log("Sending headers:", headers);
      const res = await api.get("/users/me", { headers });
      setUser(res.data.user);
      return res.data.user;
    } 
    catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch user");
      setUser(null);
    } 
  };

  useEffect(() => {
      me();
  }, []);

  return { user, error, refetch: me };
};

export default useMe;