"use client";

import { useState } from "react";
import Button from "./Button";
import api from "../../../../packages/utils/api"

export interface AuthFormProps {
  onSuccess: () => void;
  setUser: (user: any) => void;
}

const AuthForm = ({ onSuccess, setUser }: AuthFormProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [form, setForm] = useState({ 
    username: "", 
    email: "", 
    password: "" 
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      //console.log("Login successful");
      const { data } = await api.post("/users/login", {
        email: form.email,
        password: form.password,
      }); 
      console.log("Login payload:", data);
      setUser(data.user);
      onSuccess();
    }
    catch (err: any) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );

    }
  };

  const handleSignup = async () => {
    try {
      //console.log("Register successful");
      const { data } = await api.post("/users/register", {
        name: form.username,
        email: form.email,
        password: form.password,
      });
      console.log("Signup successful:", data);
      setUser(data.user);
      onSuccess();
    }
    catch (err: any) {
      console.error(
        "Signup failed:",
        err.response?.data?.message || err.message
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === "login") {
      await handleLogin();
    } 
    else {
      await handleSignup();
    }
  };

  return (
    <div className="rounded-xl w-full max-w-4xl bg-white grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT PANEL */}
      <div className="bg-cover bg-center p-4 bg-no-repeat">
        {/* Content */}
        <div className="text-white font-bold text-xl">
          {mode === "login" ? (
            <p className="mt-4 text-center text-[#4a5748]">Log in</p>
          ) : (
            <p className="mt-4 text-center text-[#4a5748]">Sign up</p>
          )}
        </div>
      </div>
      {/* RIGHT PANEL */}
      <div className="bg-[#4a5748] py-6 lg:py-12 px-10 lg:px-12">
        {/* Content */}
        <form onSubmit={handleSubmit} className="text-center">
          <h2 className="text-black text-xl lg:text-4xl mb-6">
            {mode === "login" ? "LOG IN" : "SIGN UP"}
          </h2>
          {mode === "signup" && (
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              placeholder="Username"
              className="mb-2 w-full max-w-sm border rounded px-2 py-2 placeholder:text-sm lg:placeholder:text-lg"
            />
          )}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="E-mail"
            className="mb-2 w-full max-w-sm border rounded px-2 py-2 placeholder:text-sm lg:placeholder:text-lg"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="mb-4 w-full max-w-sm border rounded px-2 py-2 placeholder:text-sm lg:placeholder:text-lg"
          />

          <div className="flex justify-center mb-4">
            <Button
              type="submit"
              title={mode === "login" ? "Log In" : "Sign Up"}
              mainClassName="bg-[#7c2923] hover:bg-[#d5453a]"
              titleClassName="text-black"
            />
          </div>

          <div className="text-center">
            {mode === "login" ? (
              <>
                <span>Don't have an account?</span>
                <button
                  type="button"
                  className="text-[#0a9c38] hover:underline ml-2"
                  onClick={() => setMode("signup")}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span>Already have an account?</span>
                <button
                  type="button"
                  className="text-[#0a9c38] hover:underline ml-2"
                  onClick={() => setMode("login")}>
                  Log In
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;