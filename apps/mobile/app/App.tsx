import { View, ScrollView } from "react-native";
import BodyFrame from '../gui/BodyFrame'
import FooterBar from '../gui/FooterBar'
import Navigation from '../gui/Navigation'
import { SafeAreaView } from "react-native-safe-area-context";
 
const App = () => {
  return (
    <SafeAreaView className="flex-1 w-full bg-green-500">
      {/* Top Navigation */}
      <Navigation />

      {/* Scrollable Body */}
      <ScrollView className="flex-1">
        <BodyFrame />
      </ScrollView>

      {/* Footer */}
      <FooterBar />
    </SafeAreaView>
  );
}

export default App;