import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ModalProps {
  onClose?: () => void;
  children?: React.ReactNode;
  maxWidth?: number; // pixels
  padding?: number; // pixels
}

const Modal = ({ onClose, children, maxWidth = 600, padding = 16 }: ModalProps) => {
  return (
    <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ width: '90%', maxWidth, backgroundColor: 'white', borderRadius: 12, padding }}>
        {/* Close button */}
        <TouchableOpacity
          style={{ position: 'absolute', top: 8, right: 8 }} 
          onPress={onClose}>
          <Text>✕</Text>
        </TouchableOpacity>

        {/* Modal content */}
        {children}
      </View>
    </SafeAreaView>
  );
}
  

export default Modal;