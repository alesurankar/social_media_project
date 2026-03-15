import { useRouter } from 'expo-router';
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import BaseModal from "../BaseModal";


type RegisterModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const RegisterModal = ({ modalVisible, setModalVisible }: RegisterModalProps) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    console.log("Username: ", username, "Email: ", email, "Password: ", password);
    
    // TODO: Replace this with real register logic
    const registerSuccess = true;

    if (registerSuccess) {
      setModalVisible(false);
      setTimeout(() => router.push("/feed"), 300);
    }
    else {
      alert("Register failed.");
    }
  }

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Registration"
      closeText="Cancel"
      confirmText="Register"
      onConfirm={handleRegistration}
    >
      <View>
        <TextInput
          style={styles.input}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create ({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },
});

export default RegisterModal;