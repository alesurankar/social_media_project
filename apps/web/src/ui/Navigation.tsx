import Icon from "../../../../packages/icons/Icon";

const Navigation = () => {
  return (
    <div id="navigation" className="bg-[#4d5c75] h-14 w-full flex items-center justify-between p-4 px-10">
      <button>
        <Icon name="bars_4" size={36}/>
      </button>
      <button>
        <Icon name="globe" size={36}/>
      </button>
      <button>
        <Icon name="bell" size={36}/>
      </button>
      <button>
        <Icon name="chat_bubble_left_right" size={36}/>
      </button>
      <button>
        <Icon name="users" size={36}/>
      </button>
      <button>
        <Icon name="arrow_right_end_rectangle" size={36}/>
      </button>
      <button>
        <Icon name="chevron_down" size={36}/>
      </button>
      <button>
        <Icon name="bars_3" size={36}/>
      </button>
    </div>
  );
};

export default Navigation;
