"use client";

import { useRouter } from "next/navigation";
import Icon from "../../../../packages/icons/Icon";
import { navigationIcons } from "../../../../packages/icons/navigationIcons";


const Navigation = () => {
  const router = useRouter();

  return (
    <div id="navigation" className="bg-[#4d5c75] h-24 w-full flex items-center justify-between p-4 px-10">
      {navigationIcons.map((item) => (
        <button 
          key={item.name}
          onClick={() => router.push(item.route)}
          ><Icon name={item.name} size={36}/>
        </button>
      ))}
    </div>
  );
};

export default Navigation;
