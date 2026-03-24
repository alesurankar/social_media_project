import { View, Text, StyleSheet } from "react-native";
import { useTest } from "@packages/utils";
import { api } from "@/lib/api";


const Test = () => {
  const message = useTest(api);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.text}>This is Test Page</Text>
    </View> 
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
    message: {
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Test;