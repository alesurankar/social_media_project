import { View, Text, StyleSheet, TextInput } from "react-native";


const Profile = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Profile Page</Text>
      <TextInput style={styles.textInput}
        placeholder="Write something..."
        multiline
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#ffffaa',
  },
  text: {
    color: 'black',
    fontSize: 20,
    backgroundColor: '#ffaaaa',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 16,
    width: '70%',
    elevation: 4,
  },
});

export default Profile;