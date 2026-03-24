import { useRouter, usePathname } from "expo-router";
import { View, StyleSheet, Pressable, ViewStyle  } from "react-native";
import { useState } from "react";
import { Icon } from "@packages/icons";
import { navigationConfig } from "@packages/navigation";
import TestModal from "@/components/modal/TestModal";
import BaseDropdown from "@/components/dropdown/BaseDropdown";
import { useLogout } from "@packages/utils";
import { api } from "@/lib/api";


interface NavigationProps {
  style?: ViewStyle | ViewStyle[];
}

const Navigation = ({ style }: NavigationProps) => {
  const { logout } = useLogout(api);
  const router = useRouter();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async() => {
    try {
      await logout();
      setDropdownOpen(false);
      router.dismissAll();
    }
    catch(err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <View style={[styles.container, style]}>

      {/* Modal */}
      <TestModal 
        modalVisible={searchOpen}
        setModalVisible={setSearchOpen}
      />

      {/* Dropdown */}
      <BaseDropdown
        open={dropdownOpen}
        x={0}
        y={60}
      />

      {navigationConfig.map((item) => {
        const isActive = item.route ? pathname === item.route : false;
        const handleAction = (type?: string) => {
          switch (type) {
            case "dropdown":
              // TODO open dropdown
              setDropdownOpen(!dropdownOpen);
              break;
            case "search":
              // TODO open search modal
              setSearchOpen(true);
              break;
            case "logout":
              handleLogout();
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
              color={isActive ? "#d5ffce" : "#49c23c"} />
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333344",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 6,
  },
});

export default Navigation;
