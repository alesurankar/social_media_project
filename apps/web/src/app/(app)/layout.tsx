"use client"

import { ReactNode } from "react";
import Navigation from "@/ui/Navigation";
import Body from "@/ui/Body";


const AppLayout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="flex flex-col h-screen">
      <Navigation className="flex h-24 w-full"/>
      <Body className="flex flex-1 relative">
        {children}
      </Body>
    </div>
  );
};

export default AppLayout;