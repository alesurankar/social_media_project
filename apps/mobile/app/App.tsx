import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BodyFrame from '../gui/BodyFrame'
import FooterBar from '../gui/FooterBar'
import Navigation from '../gui/Navigation'
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

      {/* Footer */}
      <FooterBar />
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