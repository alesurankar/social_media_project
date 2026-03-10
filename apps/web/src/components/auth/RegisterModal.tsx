"use client";

import BaseModal from "../BaseModal";

type RegisterModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const RegisterModal = ({ modalVisible, setModalVisible }: RegisterModalProps) => {


  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    >
     
    </BaseModal>
  );
};

export default RegisterModal;