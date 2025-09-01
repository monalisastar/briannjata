import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteLogger from "@/components/RouteLogger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Njata – Visionary Engineer",
  description: "Building the future of Web3, AI, Climate, and Digital Trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* ✅ Navbar locked at the very top with max z-index */}
        <div className="fixed top-0 left-0 right-0 z-[9999]">
          <Navbar />
        </div>

        <RouteLogger />

        {/* ✅ Add top padding so content doesn't sit behind fixed nav */}
        <main id="top-anchor" className="min-h-screen pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

