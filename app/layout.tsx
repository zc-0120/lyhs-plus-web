import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "LYHS+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased min-h-dvh flex flex-col overflow-x-hidden font-custom">
        <NextUIProvider>
          <div className={`w-full flex flex-col`}>
            <Header />
            {children}
          </div>
        </NextUIProvider>
        <footer className="flex items-end justify-center m-4 flex-grow">
          <p className={"text-gray-800 text-sm font-custom"}>
            LYCA © 2024–2025
          </p>
        </footer>
      </body>
    </html>
  );
}
