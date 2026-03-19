"use client";

import { useRouter, usePathname } from "next/navigation";
import Icon from "../../../../packages/icons/Icon";
import { navigationIcons } from "../../../../packages/icons/navigationIcons";


const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div id="navigation"
      className="bg-[#4d5c75] h-24 w-full flex items-center justify-between p-4 px-10"
    >
      {navigationIcons.map((item) => {
        const isActive = pathname === item.route;

        return (
          <button
            key={item.name}
            onClick={() => {
              if (item.reset) {
                router.replace(item.route);
              } 
              else {
                router.push(item.route);
              }
            }}
            className={`transition-transform duration-150 
              ${ isActive ? "scale-110" : "" }`}
          >
            <Icon
              name={item.name}
              size={36}
              color={isActive ? "#a17272" : "#381818"}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;