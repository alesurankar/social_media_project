import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Icon } from "@packages/icons"


const RightSidebar = () => {
  const [rightSidebar, setRightSidebar] = useState(false);

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
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

export default RightSidebar;