"use client";

import { useState } from "react";
import BaseModal from "../comon/BaseModal";
import { useUpdateUser } from "@packages/utils";
import { api } from "@/lib/api";


type AddEmailModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const AddEmailModal = ({ modalVisible, setModalVisible }: AddEmailModalProps) => {
  const { updateUser } = useUpdateUser(api);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Email cannot be empty");
      return;
    }
    try {
      await updateUser({ email });
      setModalVisible(false);
      setEmail("");
    } 
    catch (err: any) {
      alert("Something went wrong");
    }
  };


  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Add Email"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >Add Email
        </button>
      </form>
    </BaseModal>
  );
};

export default AddEmailModal;