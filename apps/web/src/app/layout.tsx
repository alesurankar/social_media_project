import "./global.css";
import { ReactNode } from "react";


export const metadata = {
  title: "Social Media Project",
  description: "Web app for Social Media Project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#363942]">
        <div className="2xl:mx-10 xl:mx-6 lg:mx-4 md:mx-2 sm:mx-1 bg-[#cccccc]">
          {children}
        </div>
      </body>
    </html>
  );
};