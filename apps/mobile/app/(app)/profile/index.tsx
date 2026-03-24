import { View, Text, StyleSheet } from "react-native";


const Profile = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Profile Page</Text>
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

export default Profile;