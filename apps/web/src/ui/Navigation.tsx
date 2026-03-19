"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Icon from "../../../../packages/icons/Icon";
import { navigationIcons } from "../../../../packages/icons/navigationIcons";
import TestModal from "@/components/TestModal";


const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div id="navigation"
      className="bg-[#4d5c75] h-24 w-full flex items-center justify-between p-4 px-10"
    >
      {/* Modal */}
      <TestModal 
        modalVisible={searchOpen}
        setModalVisible={setSearchOpen}
      />

      {navigationIcons.map((item) => {
        const isActive = item.route ? pathname === item.route : false;
        const handleAction = (type?: string) => {
          switch (type) {
            case "dropdown":
              // TODO open dropdown
              console.log("TODO open dropdown")
              break;
            case "search":
              // TODO open search modal
              setSearchOpen(true);
              break;
            case "logout":
              console.log("TODO logout logic")
              // TODO logout logic
              break;
            default:
              break;
          }
        };

        return (
          <button
            key={item.name}
            onClick={() => {
              if (item.actionType) {
                handleAction(item.actionType);
              }
              if (item.route) {
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