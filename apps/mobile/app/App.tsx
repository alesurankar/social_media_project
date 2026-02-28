import React from "react";
import { ScrollView } from "react-native";
import BodyFrame from '../gui/BodyFrame'
import FooterBar from '../gui/FooterBar'
import Navigation from '../gui/Navigation'
import { SafeAreaView } from "react-native-safe-area-context";
 
const App = () => {
  return (
    <SafeAreaView className="flex-1 w-full bg-white">
      {/* Top Navigation */}
      <Navigation />

      {/* Scrollable Body */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BodyFrame className="flex-1"/>
      </ScrollView>

      {/* Footer */}
      <FooterBar />
    </SafeAreaView>
  );
}

export default App;