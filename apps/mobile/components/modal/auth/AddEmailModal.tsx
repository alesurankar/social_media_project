import { View, TextInput, StyleSheet } from "react-native";
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
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add Email"
        />
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddEmailModal;