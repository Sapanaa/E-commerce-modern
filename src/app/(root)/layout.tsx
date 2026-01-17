import type { Metadata } from "next";
import {  Geist_Mono } from "next/font/google";
import "../globals.css"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike",
  description: "Ecommerce for Nike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
