import { useRouter } from 'expo-router';
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import BaseModal from "../BaseModal";


type LoginModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const LoginModal = ({ modalVisible, setModalVisible }: LoginModalProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email: ", email, "Password: ", password);
    
    // TODO: Replace this with real login logic
    const loginSuccess = true;

    if (loginSuccess) {
      setModalVisible(false);
      setTimeout(() => router.push("/feed"), 300);
    }
    else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <BaseModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      title="Login"
      closeText="Cancel"
      confirmText="Login"
      onConfirm={handleLogin}
    >
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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

export default LoginModal;