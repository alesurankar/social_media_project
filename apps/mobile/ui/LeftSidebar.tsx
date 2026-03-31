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
          <Text style={styles.title}>Personal Info:</Text>

          {/* User info */}
          {error && <Text style={styles.errorText}>{error}</Text>}
          {user && (
            <View style={styles.content}>
              <Text style={styles.title}>Username: {user.username}</Text>
              <Text style={styles.text}>Email: {user.email}</Text>
            </View>
          )}
          {!user && !error && <Text style={styles.text}>No user logged in</Text>}
        </View>
      )}
    </>
  );
};


const styles = StyleSheet.create({
  leftSidebar: {
    flex: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    paddingTop: 50,
    alignItems: 'center',
  },
  leftSidebarControler: {
    position: 'absolute',
    top: 10, 
    left: 10,
    zIndex: 50,
    elevation: 50,
  },
  content: {
    marginTop: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 5,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default LeftSidebar;