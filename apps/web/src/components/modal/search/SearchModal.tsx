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
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="search..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </BaseModal>
  );
};

export default SearchModal;