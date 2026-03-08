import { View, Text, StyleSheet } from "react-native";

const FooterBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FooterBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b82f6",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "#ffffff",
    paddingLeft: 40,
  },
});

export default FooterBar