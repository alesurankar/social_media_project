import { useRouter, usePathname } from "expo-router";
import { View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import Icon from "../../../packages/icons/Icon.native";
import { navigationIcons } from "../../../packages/icons/navigationIcons";
import TestModal from "components/TestModal";


const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <View style={styles.container}>

      {/* Modal */}
      <TestModal 
        modalVisible={searchOpen}
        setModalVisible={setSearchOpen}
      />

      {navigationIcons.map((item) => {
        const isActive = item.route ? pathname === item.route : false;
        const handleAction = (type?: string) => {
          switch (type) {
            case "dropdown":
              // TODO open dropdown
              console.log("TODO open dropdown")
              break;
            case "search":
              // TODO open search modal
              setSearchOpen(true);
              break;
            case "logout":
              // TODO logout logic
              console.log("TODO logout logic")
                router.dismissAll();
              break;
            default:
              break;
          }
        };

        return(
          <Pressable 
            key={item.name}
            onPress={() => {
              if (item.actionType) {
                handleAction(item.actionType);
              }
              if (item.route) {
                router.push(item.route);
              }
            }}
            style={({ pressed }) => [
              styles.icon, 
              { transform: [{ scale: pressed ? 0.85 : isActive ? 1.1 : 1 }] }
            ]}>
              <Icon 
              name={item.name} 
              size={28} 
              color={isActive ? "#a17272" : "#381818"} />
          </Pressable>
        );
      })}
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
