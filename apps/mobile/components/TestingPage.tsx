import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const TestingPage = () => {
  const router = useRouter();

  return(
    <View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/test')}
      ><Text style={styles.buttonText}>Test</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4d5c75',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TestingPage;