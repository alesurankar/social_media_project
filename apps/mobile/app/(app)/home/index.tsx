import { View, Text, StyleSheet } from "react-native";

const Home = () => {

  return (
    <View style={styles.container}>
      <Text>This is Home Page</Text>
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

export default Home;