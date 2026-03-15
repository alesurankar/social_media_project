import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Logo1 } from "@packages/images";
import LoginModal from '../components/auth/LoginModal';
import RegisterModal from '../components/auth/RegisterModal';
import { useState } from 'react';


const HomeScreen = () => {
  const router = useRouter();
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image 
        source={Logo1}
        style={styles.image} 
      />
      <Text style={styles.title}>Welcome to Social Platform app</Text>
      <Text style={styles.subtitle}>navigate</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={ () => setLoginOpen(true) }
      ><Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={ () => setRegisterOpen(true) }
      ><Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/create')}
      ><Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/explore')}
      ><Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/feed')}
      ><Text style={styles.buttonText}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/notifications')}
      ><Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/profile')}
      ><Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      {/* Modal */}
      <LoginModal 
        modalVisible={loginOpen}
        setModalVisible={setLoginOpen}
      />
      <RegisterModal 
        modalVisible={registerOpen}
        setModalVisible={setRegisterOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
    color: '#000000',
  },
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

export default HomeScreen
