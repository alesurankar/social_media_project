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
    </BaseModal>
  );
};

export default AddEmailModal;