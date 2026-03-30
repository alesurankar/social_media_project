import { useRouter } from 'expo-router';
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import BaseModal from "../BaseModal";
import { useLogin } from "@packages/utils";
import { api } from "@/lib/api";


type LoginModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  handleToken: (token: string) => Promise<void>;
};

const LoginModal = ({ modalVisible, setModalVisible, handleToken }: LoginModalProps) => {
  const { login } = useLogin(api);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async() => {
    try {
      const res = await login(email, password);
      console.log("Token received in LoginModal:", res.token);
      await handleToken(res.token);
      setModalVisible(false);
      router.push("/home");
    } 
    catch (err) {
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