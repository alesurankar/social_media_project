import { View, Text, StyleSheet } from "react-native";


const Profile = () => {


  return (
    <View style={styles.container}>
      <Text>This is Profile Page</Text>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Profile;