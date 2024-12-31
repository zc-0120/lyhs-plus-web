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
            <body className='antialiased'>
                <NextUIProvider>
                    <div className={`w-full flex flex-col`}>
                        <Header />
                        {children}
                    </div>
                </NextUIProvider>
            </body>
        </html>
    );
}
