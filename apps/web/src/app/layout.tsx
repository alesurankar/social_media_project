import "./global.css";

export const metadata = {
  title: "Social Media Project",
  description: "Web app for Social Media Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}