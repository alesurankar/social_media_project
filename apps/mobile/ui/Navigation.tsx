import { View, StyleSheet } from "react-native";
import Icon from "../../../packages/icons/Icon.native";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Icon name="bars_4" size={28} color="#482020" />
      <Icon name="globe" size={28} color="#482020" />
      <Icon name="bell" size={28} color="#482020" />
      <Icon name="chat_bubble_left_right" size={28} color="#482020" />
      <Icon name="users" size={28} color="#482020" />
      <Icon name="arrow_right_end_rectangle" size={28} color="#482020" />
      <Icon name="chevron_down" size={28} color="#482020" />
      <Icon name="bars_3" size={28} color="#482020" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4d5c75",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default Navigation;
