import { View, StyleSheet } from "react-native";
import Icon from "../../../packages/icons/Icon.native";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Icon name="bars_4" size={28} color="#630c0c" />
      <Icon name="globe" size={28} color="#630c0c" />
      <Icon name="bell" size={28} color="#630c0c" />
      <Icon name="chat_bubble_left_right" size={28} color="#630c0c" />
      <Icon name="users" size={28} color="#630c0c" />
      <Icon name="arrow_right_end_rectangle" size={28} color="#630c0c" />
      <Icon name="chevron_down" size={28} color="#630c0c" />
      <Icon name="bars_3" size={28} color="#630c0c" />
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
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default Navigation;
