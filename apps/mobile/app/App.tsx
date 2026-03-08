import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BodyFrame from '../ui/BodyFrame'
import Navigation from '../ui/Navigation'
import { SafeAreaView } from "react-native-safe-area-context";
 
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Navigation */}
      <Navigation />

      {/* Scrollable Body */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BodyFrame style={{ flex: 1 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});

export default App;