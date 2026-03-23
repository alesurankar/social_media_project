import { useState } from "react";


export interface LoginResponse {
  user: {
    _id: string;
    username: string;
    email: string;
  };
  token: string;
}

export interface LoginError {
  message: string;
}

const useLogin = (api: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<LoginResponse | null> => {
    setLoading(true);
    setError(null);

    return null;
  };

  return { login, loading, error };
};

export default useLogin;