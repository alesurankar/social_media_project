"use client";

import BaseModal from "../comon/BaseModal";


type SearchModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const SearchModal = ({ modalVisible, setModalVisible }: SearchModalProps) => {

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Search"
    >
    </BaseModal>
  );
};

export default SearchModal;