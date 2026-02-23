import "./globals.css";

export const metadata = {
  title: "Social Media Project",
  description: "Web app for Social Media Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}