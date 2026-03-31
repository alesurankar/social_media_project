import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useMe } from "@packages/utils";
import { api } from "@/lib/api";
import { useAuth } from "@packages/utils";
import { Icon } from "@packages/icons"


const LeftSidebar = () => {
  const [leftSidebar, setLeftSidebar] = useState(false);
  
  const { token, ready } = useAuth();
  const { user, error, refetch } = useMe(api, ready ? token : undefined);

  return (
    <>
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

          {/* User info */}
          {error && <Text>{error}</Text>}
          {user && (
            <View>
              <Text>{user.Username}</Text>
              <Text>{user.email}</Text>
            </View>
          )}
          {!user && !error && <Text>No user logged in</Text>}
        </View>
      )}
    </>
  );
};


const styles = StyleSheet.create({
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
  text: {
    color: 'black',
    fontSize: 30,
  },
});

export default LeftSidebar;