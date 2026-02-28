import Icon from "../../../../packages/icons/Icon";

const Navigation = () => {
  return (
    <div 
        id="navigation"
        className="h-14 w-full flex items-center justify-between bg-[#202020] text-white select-none"
    >
      <Icon name="bars_4" size={32} color="red" />
      <Icon name="globe" size={32} color="red" />
      <Icon name="bell" size={32} color="red" />
      <Icon name="chat_bubble_left_right" size={32} color="red" />
      <Icon name="users" size={32} color="red" />
      <Icon name="arrow_right_end_rectangle" size={32} color="red" />
      <Icon name="chevron_down" size={32} color="red" />
      <Icon name="bars_3" size={32} color="red" />
    </div>
  );
};

export default Navigation;
