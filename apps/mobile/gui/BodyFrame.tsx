import { View, Text } from "react-native";
import Modal from "../../../packages/components/Modal"

interface BodyFrameProps {
  className?: string;
}

const BodyFrame: React.FC<BodyFrameProps> = ({ className }) => {
  return (
    <View className={`bg-gray-800 p-4 ${className ?? ''}`}>
      <View>
        <Text className="text-red-500 text-center">React Frontend</Text>
        <Text className="text-white text-center">{'\n\n\n'}</Text>
        <Text className="text-white text-center">BodyFrame</Text>
        <Text className="text-white text-center">BodyFrame</Text>
        <Text className="text-white text-center">BodyFrame</Text>
        <Text className="text-white text-center">BodyFrame</Text>
        <Modal>
            <Text>Content</Text>
        </Modal>
      </View>
    </View>
  );
};

export default BodyFrame;