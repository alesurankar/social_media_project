"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BaseModal from "../BaseModal";


type LoginModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const LoginModal = ({ modalVisible, setModalVisible }: LoginModalProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email: ", email, "Password: ", password);

    // TODO: Replace this with real login logic
    const loginSuccess = true;

    if (loginSuccess) {
      setModalVisible(false);
      setTimeout(() => router.push("/home"), 300)
    }
    else {
      alert("Login failed, Please check yur credentials")
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