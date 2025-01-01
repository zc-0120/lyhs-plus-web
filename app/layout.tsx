import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
    title: "LYHS Plus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="zh-TW">
            <body className='antialiased min-h-dvh flex flex-col overflow-x-hidden'>
                <NextUIProvider>
                    <div className={`w-full flex flex-col`}>
                        <Header />
                        {children}
                    </div>
                </NextUIProvider>
                <footer className='flex items-end justify-center m-4 flex-grow'>
                    <p className={'text-gray-800 text-sm font-sans'}>Copyright © 2025 LYHS+ 保留一切權利。</p>
                </footer>
            </body>
        </html>
    );
}
