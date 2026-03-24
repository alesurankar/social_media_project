import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


const TestingPage = () => {
  const router = useRouter();

  return(
    <View style={styles.container}>

      {/* Left */}
      <View style={styles.left}>
        <View style={styles.leftTop}>
          <Text style={styles.text}>L-T-1</Text>
        </View>
        <View style={styles.leftBottom}>
          <Text style={styles.text}>L-B-1</Text>
        </View>
      </View>

      {/* Right */}
      <View style={styles.right}>

        {/* Top */}
        <View style={styles.rightTop}>
          <Text style={styles.text}>R-T-1</Text>
        </View>

        {/* Bottom */}
        <View style={styles.rightBottom}>
          <View style={styles.rightBottomLeft}>
            <Text style={styles.text}>R-B-1</Text>
          </View>
          <TouchableOpacity style={styles.rightBottomRight}
            onPress={() => router.push('/test')}
          ><Text style={styles.text}>Test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'column',
    backgroundColor: '#333',
    borderWidth: 2,
    borderColor: 'white',
    width: '35%',
  },
  leftTop: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  leftBottom: {
    height: '20%',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#111',
    borderWidth: 2,
    borderColor: 'white',
  },
  rightTop: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  rightBottom: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'white',
  },
  rightBottomLeft: {
    flex: 1,
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBottomRight: {
    flex: 0.25,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 36,
  },
});

export default TestingPage;