import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


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
    backgroundColor: '#ffffff',
  },
});

export default Profile;