import { View, Text } from "react-native";
import Icon from "../../../packages/icons/Icon.native";

const Navigation = () => {
  return (
    <View className="bg-blue-500 w-full flex-row justify-between items-center p-4">
      <Icon name="bars_4" size={32} color="#630c0c" />
      <Icon name="globe" size={32} color="#630c0c" />
      <Icon name="bell" size={32} color="#630c0c" />
      <Icon name="chat_bubble_left_right" size={32} color="#630c0c" />
      <Icon name="users" size={32} color="#630c0c" />
      <Icon name="arrow_right_end_rectangle" size={32} color="#630c0c" />
      <Icon name="chevron_down" size={32} color="#630c0c" />
      <Icon name="bars_3" size={32} color="#630c0c" />
    </View>
  );
};

export default Navigation;
