import { useState } from "react";


export interface LoginResponse {
  user: {
    _id: string;
    username: string;
    email: string;
  };
  token: string;
}

const useLogin = (api: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<LoginResponse | null> => {
    console.log("packages/utils/useLogin.ts: LOGIN TRIGGERED")
    setLoading(true);
    setError(null);

    try {
      const res = await api.post("/users/login", { email, password });
      setLoading(false);
      return res.data;
    } 
    catch (err: any) {
      setLoading(false);

      let message = "Login failed";
      if (err.response?.data?.message) {
        message = err.response.data.message;
      } 
      else if (err.message) {
        message = err.message;
      }

      setError(message);
      return null;
    }
  };

  return { login, loading, error };
};

export default useLogin;