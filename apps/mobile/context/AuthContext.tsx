import { createContext, useContext } from "react";


type AuthContextType = {
  token?: string;
  ready: boolean;
  handleToken: (token: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};