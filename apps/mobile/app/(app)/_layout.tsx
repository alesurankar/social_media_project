import { View, Text, StyleSheet } from "react-native";
import { Slot } from "expo-router";
import Navigation from '@/ui/Navigation'


const AppLayout = () => {
  return (
    <View style={styles.container}>
      <Navigation />

      {/* Body */}
      <View style={styles.body}>

        {/* Left sidebar */}
        {/* <View style={styles.leftSidebar}>
          <Text style={styles.text}>Left Sidebar</Text>
        </View> */}

        {/* Main content */}
        <View style={styles.mainContent}>
          <Slot />
        </View>

        {/* Right sidebar */}
        <View style={styles.rightSidebar}>
          <Text style={styles.text}>Right Sidebar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSidebar: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
  rightSidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

export default AppLayout;
