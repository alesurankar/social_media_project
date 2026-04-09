import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import BaseModal from "../comon/BaseModal";
import { useUpdateUser } from "@packages/utils";
import { api } from "@/lib/api";


type AddEmailModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  token?: string;
};

const AddEmailModal = ({ modalVisible, setModalVisible, token }: AddEmailModalProps) => {
  const { updateUser } = useUpdateUser(api, token);
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
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
      <View>
        <TextInput
          style={styles.input}
          placeholder="Add Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Pressable
          style={styles.button}
          onPress={handleSubmit}
        ><Text style={styles.buttonText}>Add Email</Text>
        </Pressable>
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
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddEmailModal;