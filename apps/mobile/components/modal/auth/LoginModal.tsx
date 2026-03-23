import { useRouter } from 'expo-router';
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import BaseModal from "../BaseModal";
import { useLogin } from "@packages/utils";
import { api } from "@/lib/api";


type LoginModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const LoginModal = ({ modalVisible, setModalVisible }: LoginModalProps) => {
  const { login, loading, error } = useLogin(api);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
    console.log("Email: ", email, "Password: ", password);
    try {
      const data = await login(email, password);

      if (data) {
        setModalVisible(false);
        setTimeout(() => router.push("/home"), 300);
      } 
      else {
        alert(error || "Login failed. Please check your credentials.");
      }
    } 
    catch (err) {
      alert("Unexpected error. Please try again.");
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