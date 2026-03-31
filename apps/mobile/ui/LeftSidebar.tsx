import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useMe } from "@packages/utils";
import { api } from "@/lib/api";
import { useAuth } from "@packages/utils";
import { Icon } from "@packages/icons"
import { BlackNinja } from "@packages/images";
import { RedNinja } from "@packages/images";


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
          <Image 
            source={BlackNinja}
            style={styles.image} 
          />
          <Text style={styles.title}>Personal Info:</Text>

          {/* User info */}
          {error && <Text style={styles.errorText}>{error}</Text>}
          {user && (
            <View style={styles.content}>
              <Text style={styles.subTitle}>Username: {user.username}</Text>
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
    alignItems: 'center',
  },
  leftSidebarControler: {
    position: 'absolute',
    top: 10, 
    left: 10,
    zIndex: 50,
    elevation: 50,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 24,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 32,
  },
  content: {
    paddingTop: 32,
  },
  subTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default LeftSidebar;