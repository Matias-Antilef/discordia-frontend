import type { Metadata } from "next";
import "./globals.css";
import ServerPannel from "@/components/server-pannel/server-pannel";
import NavPannel from "@/components/nav-pannel/nav-pannel";

export const metadata: Metadata = {
  title: "Createa Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 flex  max-h-screen max-w-screen  overflow-hidden">
        <ServerPannel />
        <NavPannel />
        {children}
      </body>
    </html>
  );
}