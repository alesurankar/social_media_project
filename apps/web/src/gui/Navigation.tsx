
const Navigation = () => {
  return (
    <div 
        id="navigation"
        className="h-14 w-full flex items-center justify-between bg-[#202020] text-white select-none"
    >
      <div className="pl-2">Navigation</div>
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
