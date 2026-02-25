import { View, Text } from "react-native";
import Icon from "../../../packages/icons/Icon.native";

const Navigation = () => {
  return (
    <View className="bg-blue-500 w-full flex-row justify-between items-center p-4">
      <Text className="text-white">Navigation</Text>
      <Icon name="bars_4" size={32} color="#a86b6b" />
    </View>
  );
};

export default Navigation;
