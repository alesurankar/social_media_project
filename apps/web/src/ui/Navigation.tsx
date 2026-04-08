"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@packages/icons";
import { navigationConfig } from "@packages/navigation";
import SearchModal from "@/components/modal/search/SearchModal";
import BaseDropdown from "@/components/dropdown/BaseDropdown";
import { useLogout } from "@packages/utils";
import { api } from "@/lib/api";


interface NavigationProps {
  className?: string;
}

const Navigation = ({className}: NavigationProps) => {
  const { logout } = useLogout(api);
  const router = useRouter();
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async() => {
    try {
      await logout();
      setDropdownOpen(false);
    }
    catch(err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <div className={`bg-[#333344] items-center justify-between p-4 px-10 ${className}`}>
      {/* Modal */}
      <SearchModal 
        modalVisible={searchOpen}
        setModalVisible={setSearchOpen}
      />
      {/* Dropdown */}
      <BaseDropdown 
        open={dropdownOpen}
        x={0}
        y={80}
      />

      {navigationConfig.map((item) => {
        const isActive = item.route ? pathname === item.route : false;
        const handleAction = (type?: string) => {
          switch (type) {
            case "dropdown":
              // TODO open dropdown
              setDropdownOpen(!dropdownOpen);
              break;
            case "search":
              // TODO open search modal
              setSearchOpen(true);
              break;
            case "logout":
              handleLogout();
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
            className={`transition-transform duration-150 bg-transparent
              ${ isActive ? "scale-110" : "" }`}
          >
            <Icon
              name={item.name}
              size={36}
              color={isActive ? "#d5ffce" : "#49c23c"}
            />
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;