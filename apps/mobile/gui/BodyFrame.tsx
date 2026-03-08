import { View, Text, StyleSheet } from "react-native";
import Modal from "../components/Modal";

interface BodyFrameProps {
  style?: object;
}

const BodyFrame: React.FC<BodyFrameProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.redText}>React Frontend</Text>
        <Text>{'\n\n\n'}</Text>
        <Text style={styles.whiteText}>BodyFrame</Text>
        <Text style={styles.whiteText}>BodyFrame</Text>
        <Text style={styles.whiteText}>BodyFrame</Text>
        <Text style={styles.whiteText}>BodyFrame</Text>
        <Modal>
          <Text style={styles.blackText}>Modal</Text>
          <Text style={styles.blackText}>Modal</Text>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f2937",
    padding: 16,
  },
  redText: {
    color: "#f87171",
    textAlign: "center",
  },
  whiteText: {
    color: "#ffffff",
    textAlign: "center",
  },
  blackText: {
    color: "#000000",
    textAlign: "center",
  },
});

export default BodyFrame;