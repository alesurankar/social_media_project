import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {

  return (
    <View style={styles.container}>
      {/* Custom header */}
      <StatusBar style="light" />
      <View style={styles.landingHeader} />
      <Slot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#363942",
  },
  landingHeader: {
    backgroundColor: "#363942",
    height: 35,
    justifyContent: "center",
  }
});