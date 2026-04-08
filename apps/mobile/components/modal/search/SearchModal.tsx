import { View, TextInput, StyleSheet } from "react-native";
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
      <View>
        <TextInput
          style={styles.input}
          placeholder="search..."
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

export default SearchModal;