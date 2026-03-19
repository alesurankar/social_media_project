import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import Navigation from '../../ui/Navigation'


const FeedLayout = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default FeedLayout;
