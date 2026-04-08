"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BaseModal from "../BaseModal";
import { useRegister } from "@packages/utils";
import { api } from "@/lib/api";


type RegisterModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const RegisterModal = ({ modalVisible, setModalVisible }: RegisterModalProps) => {
  const { register } = useRegister(api);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const options = ["male", "female", "other"];

  const handleRegistration = async() => {
    try {
      await register(username, password, gender);
      setModalVisible(false);
      router.push("/profile");
    }
    catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Registration"
      closeText="Cancel"
      confirmText="Register"
      onConfirm={handleRegistration}
    >
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="mt-3">
          <p className="font-bold mb-2">Gender</p>

          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 mb-1 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={gender === option}
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="capitalize">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </BaseModal>
  );
};

export default RegisterModal;