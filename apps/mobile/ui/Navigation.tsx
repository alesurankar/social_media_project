import { useRouter } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import Icon from "../../../packages/icons/Icon.native";
import type { IconName } from "../../../packages/icons/IconPaths";


const icons: { name: IconName; route: string }[] = [
  { name: "bars_4", route: "/" },
  { name: "globe", route: "/" },
  { name: "bell", route: "/"  },
  { name: "chat_bubble_left_right", route: "/"  },
  { name: "users", route: "/"  },
  { name: "arrow_right_end_rectangle", route: "/"  },
  { name: "chevron_down", route: "/"  },
  { name: "bars_3", route: "/"  },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {icons.map((item) => (
        <Pressable 
          key={item.name}
          onPress={() => router.push(item.route)}
          style={({ pressed }) => [
            styles.icon, 
            { transform: [{ scale: pressed ? 0.85 : 1 }] }
          ]}>
          {({ pressed }) => (
            <Icon name={item.name} size={28} color={pressed ? "#a17272" : "#381818"} />
          )}
        </Pressable>
      ))}
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
