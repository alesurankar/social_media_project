"use client";

import { ReactNode } from "react";
import LeftSideBar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";


interface BodyProps {
  className?: string;
  children: ReactNode;
}

const Body = ({ className, children }: BodyProps) => {
  

  return (
    <div className={className}>

      {/* Left sideBar */}
      <LeftSideBar />

      {/* Main content */}
      <div className="flex-1 border bg-[#ccc] overflow-auto">
        {children}
      </div>

      {/* Right sidebar */}
      <RightSidebar />
    </div>
  );
};

export default Body;
