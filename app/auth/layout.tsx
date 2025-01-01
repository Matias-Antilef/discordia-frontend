import type { Metadata } from "next";

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
    <div className=" bg-white flex items-center justify-center  h-screen w-screen  overflow-hidden">
      {children}
    </div>
  );
}
