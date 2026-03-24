import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Navigation from '@/ui/Navigation'
import Body from "@/ui/Body";


const AppLayout = () => {

  return (
    <View style={styles.container}>
      <Navigation style={styles.navigation}/>
      <Body style={styles.body}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navigation: {
    width: "100%",
    height: 50,
  },
  body: {
    flex: 1,
  },
});

export default AppLayout;
