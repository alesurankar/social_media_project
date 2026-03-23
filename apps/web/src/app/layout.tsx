import "./global.css";
import { ReactNode } from "react";


export const metadata = {
  title: "Social Media Project",
  description: "Web app for Social Media Project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
};