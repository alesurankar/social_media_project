import { View, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import Navigation from '@/ui/Navigation'


const AppLayout = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});

export default AppLayout;
