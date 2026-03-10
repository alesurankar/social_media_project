import BaseModal from "./BaseModal";

type TestModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const TestModal = ({ modalVisible, setModalVisible }: TestModalProps) => {

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Test Modal"
    >
     
    </BaseModal>
  );
};

export default TestModal;