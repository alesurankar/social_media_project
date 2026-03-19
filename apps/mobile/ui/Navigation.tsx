import { useRouter } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import Icon from "../../../packages/icons/Icon.native";
import { navigationIcons } from "../../../packages/icons/navigationIcons";


const Navigation = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {navigationIcons.map((item) => (
        <Pressable 
          key={item.name}
          onPress={() => {
            if (item.reset) {
              router.dismissAll();
            } 
            else {
              router.replace(item.route);
            }
          }}
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
