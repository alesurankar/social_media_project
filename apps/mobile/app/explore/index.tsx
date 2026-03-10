import { View, Text, StyleSheet } from "react-native";

const Explore = () => {

  return (
    <View style={styles.container}>
      <Text>This is Explore Page</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

export default Explore;