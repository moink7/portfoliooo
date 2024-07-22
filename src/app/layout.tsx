import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Front from "@/pages/Front";
import  NavbarDemo  from "@/pages/NavbarDemo";
import Page from "./Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center overflow-x-hidden">
        <Page />
        </div>
      {children}</body>
    </html>
  );
}
