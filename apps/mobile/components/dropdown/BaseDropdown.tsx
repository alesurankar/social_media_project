import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native"


interface BaseDropdownProps {
  open: boolean;
  x: number;
  y: number;
  children?: ReactNode;
}

const BaseDropdown = ({ open, x, y, children }: BaseDropdownProps) => {
  if (!open) return null;

  return (
    <View style={ [styles.container, {top: y, left: x }] }>
      <Text style={styles.content}>{children}this is Base Dropdown</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    pointerEvents: "auto",
    zIndex: 999,
    backgroundColor: "#1E2939",
    padding: 15,
    borderRadius: 4,
  },
  content: {
    color: "#ffffff",
  }
})

export default BaseDropdown;