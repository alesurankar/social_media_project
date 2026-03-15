"use client";

import { useRouter } from "next/navigation";
import Icon from "../../../../packages/icons/Icon";
import type { IconName } from "../../../../packages/icons/IconPaths";


const icons: { name: IconName; route: string }[] = [
  { name: "bars_4", route: "/profile" },
  { name: "globe", route: "/profile" },
  { name: "bell", route: "/profile" },
  { name: "chat_bubble_left_right", route: "/profile" },
  { name: "users", route: "/profile" },
  { name: "chevron_down", route: "/profile" },
  { name: "bars_3", route: "/profile" },
  { name: "arrow_right_end_rectangle", route: "/" },
];

const Navigation = () => {
  const router = useRouter();

  return (
    <div id="navigation" className="bg-[#4d5c75] h-24 w-full flex items-center justify-between p-4 px-10">
      {icons.map((item) => (
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
