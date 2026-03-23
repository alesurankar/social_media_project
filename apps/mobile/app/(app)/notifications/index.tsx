import { View, Text, StyleSheet } from "react-native";

const Notifications = () => {

  return (
    <View style={styles.container}>
      <Text>This is Notifications Page</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Notifications;