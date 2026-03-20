import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";

export default function RootLayout() {

  return (
    <View style={styles.container}>
      {/* Custom header */}
      <View style={styles.landingHeader} />
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d5c75",
  },
  landingHeader: {
    backgroundColor: "#4d5c75",
    height: 35,
    justifyContent: "center",
  },
});