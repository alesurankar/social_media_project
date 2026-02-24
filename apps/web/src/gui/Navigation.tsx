import Icon from "../../../../packages/icons/Icon";

const Navigation = () => {
  return (
    <div 
        id="navigation"
        className="h-14 w-full flex items-center justify-between bg-[#202020] text-white select-none"
    >
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <Icon name="bars_4" size={48} color="red" />
      </nav>
      <div className="pl-2">Navigation</div>
        <Icon name="bars_arrow_down" size={32} color="white" />
      <Icon name="bars_arrow_up" size={28} color="white" />
      <div className="flex">
        
        <button 
            id="minimize"
            className="w-12 h-10 flex items-center justify-center hover:bg-[#373737]"
        >
          ―
        </button>
        <button 
            id="maximize"
            className="w-12 h-10 flex items-center justify-center hover:bg-[#373737]"
        >
          ☐
        </button>
        <button 
            id="close"
            className="w-12 h-10 flex items-center justify-center hover:bg-red-600"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Navigation;
