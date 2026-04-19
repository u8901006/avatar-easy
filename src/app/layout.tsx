import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avatar Easy — 文字冒險式原型對話練習",
  description: "透過文字冒險的方式，練習與不同類型的內在聲音進行對話",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-gray-950 text-gray-200">
        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
