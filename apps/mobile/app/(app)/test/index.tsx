import { View, Text, StyleSheet } from "react-native";
import { useTest } from "@packages/utils";
import { api } from "@/lib/api";


const Test = () => {
  const message = useTest(api);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text>This is Test Page</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
    message: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Test;