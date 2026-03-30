"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BaseModal from "../BaseModal";
import { useLogin } from "@packages/utils";
import { api } from "@/lib/api";


type LoginModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const LoginModal = ({ modalVisible, setModalVisible }: LoginModalProps) => {
  const { login } = useLogin(api);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
    try {
      await login(email, password);
      setModalVisible(false);
      router.push("/home");
    } 
    catch (err) {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Login"
      closeText="Cancel"
      confirmText="Login"
      onConfirm={handleLogin}
    >
      <div className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </BaseModal>
  );
};

export default LoginModal;