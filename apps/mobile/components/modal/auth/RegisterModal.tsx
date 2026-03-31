import { useRouter } from 'expo-router';
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import BaseModal from "../BaseModal";
import { useRegister } from "@packages/utils";
import { api } from "@/lib/api";


type RegisterModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  handleToken: (token: string) => Promise<void>;
};

const RegisterModal = ({ modalVisible, setModalVisible, handleToken }: RegisterModalProps) => {
  const { register } = useRegister(api);
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const options = ["male", "female", "other"];

  const handleRegistration = async() => {
    try {
      const res = await register(username, email, password, gender);
      await handleToken(res.token);
      setModalVisible(false);
      router.push("/profile");
    }
    catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

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

        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Gender</Text>

          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => setGender(option)}
            >
              <View style={styles.radio}>
                {gender === option && <View style={styles.selected} />}
              </View>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
});

export default RegisterModal;