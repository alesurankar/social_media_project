import { View, Text, StyleSheet } from "react-native";

const Notifications = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Notifications Page</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});

export default Notifications;