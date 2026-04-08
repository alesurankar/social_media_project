"use client";

import BaseModal from "../comon/BaseModal";


type AddEmailModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const AddEmailModal = ({ modalVisible, setModalVisible }: AddEmailModalProps) => {

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Add Email"
    >
      <input
        type="email"
        placeholder="Add Email"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </BaseModal>
  );
};

export default AddEmailModal;