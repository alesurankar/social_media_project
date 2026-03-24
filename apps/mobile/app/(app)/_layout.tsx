import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Slot } from "expo-router";
import { useState } from "react";
import Navigation from '@/ui/Navigation'
import { Icon } from "@packages/icons"


const AppLayout = () => {
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);

  return (
    <View style={styles.container}>
      <Navigation />

      {/* Body */}
      <View style={styles.body}>

        {/* Left sidebar */}
        <TouchableOpacity style={styles.leftSidebarControler}
          onPress={() => setLeftSidebar(prev => !prev)}
        >
          <Text style={styles.text}>
            <Icon name="bars_arrow_down" size={32} color="black"/>
          </Text>
        </TouchableOpacity>

        {leftSidebar && (
          <View style={styles.leftSidebar}>
            <Text style={styles.text}>Left Sidebar</Text>
          </View>
        )}

        {/* Main content */}
        <View style={styles.mainContent}>
          <Slot />
        </View>

        {/* Right sidebar */}
        <TouchableOpacity style={styles.rightSidebarControler}
          onPress={() => setRightSidebar(prev => !prev)}
        >
          <Text style={styles.text}>
            <Icon name="bars_arrow_down" size={32} color="black"/>
          </Text>
        </TouchableOpacity>
        {rightSidebar && (
          <View style={styles.rightSidebar}>
            <Text style={styles.text}>Right Sidebar</Text>
          </View>
        )}
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
    paddingTop: 50,
  },
  leftSidebarControler: {
    position: 'absolute',
    top: 10, 
    left: 10,
    zIndex: 50,
    elevation: 50,
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
    paddingTop: 50,
  },
  rightSidebarControler: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 50,
    elevation: 50,
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

export default AppLayout;
