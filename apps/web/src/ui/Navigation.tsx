import Icon from "../../../../packages/icons/Icon";

const Navigation = () => {
  return (
    <div id="navigation" className="bg-blue-500 h-14 w-full flex items-center justify-between p-4 px-10">
      <Icon name="bars_4" size={36} color="#630c0c" />
      <Icon name="globe" size={36} color="#630c0c" />
      <Icon name="bell" size={36} color="#630c0c" />
      <Icon name="chat_bubble_left_right" size={36} color="#630c0c" />
      <Icon name="users" size={36} color="#630c0c" />
      <Icon name="arrow_right_end_rectangle" size={36} color="#630c0c" />
      <Icon name="chevron_down" size={36} color="#630c0c" />
      <Icon name="bars_3" size={36} color="#630c0c" />
    </div>
  );
};

export default Navigation;
