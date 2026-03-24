"use client"

import { ReactNode } from "react";


interface BaseDropdownProps {
  open: boolean;
  x: number;
  y: number;
  children?: ReactNode;
}

const BaseDropdown = ({ open, x, y, children }: BaseDropdownProps) => {
  if (!open) return null;

  return (
    <div
      className="pointer-events-auto absolute bg-gray-800 text-white p-3 rounded z-100"
      style={{ top: y, left: x }}
    >{children}
    this is Base Dropdown
    </div>
  );
};

export default BaseDropdown;