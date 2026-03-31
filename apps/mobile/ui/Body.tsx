import { View, StyleSheet, ViewStyle } from "react-native";
import { Slot } from "expo-router";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";


interface BodyProps {
  style?: ViewStyle | ViewStyle[];
}

const Body = ({ style }: BodyProps) => {

  return (
    <View style={[styles.container, style]}>

        {/* Left sidebar */}
        <LeftSidebar />

        {/* Main content */}
        <View style={styles.mainContent}>
          <Slot />
        </View>

        {/* Right sidebar */}
        <RightSidebar />
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

export default Body;