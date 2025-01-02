import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/context/ReduxProvider";

export const metadata: Metadata = {
  title: "Core",
  description: "Core",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-bg max-h-screen max-w-screen overflow-hidden">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
