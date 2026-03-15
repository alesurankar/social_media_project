import { View, StyleSheet, Pressable } from "react-native";
import Icon from "../../../packages/icons/Icon.native";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="bars_4" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="globe" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="bell" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="chat_bubble_left_right" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="users" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="arrow_right_end_rectangle" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="chevron_down" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
      <Pressable style={({ pressed }) => [
          styles.icon,
          { transform: [{ scale: pressed ? 0.85 : 1 }] }
        ]}>
        {({ pressed }) => (
          <Icon name="bars_3" size={28} color={pressed ? "#a17272" : "#381818"} />
        )}
      </Pressable>
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
  icon: {
    padding: 6,
  },
});

export default Navigation;
