import type { Metadata } from "next";
import NavAccount from "./components/nav-account";

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
    <div className="h-screen w-screen flex">
      <NavAccount />
      {children}
    </div>
  );
}
