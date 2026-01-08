import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteLogger from "@/components/RouteLogger";

/* =========================
   FONTS
========================= */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =========================
   ROOT METADATA (SEO)
========================= */
export const metadata: Metadata = {
  title: "Brian Njata – AI-Native Product Builder & Systems Designer",
  description:
    "Brian Njata designs and ships dependable software systems using AI-assisted development, systems-first thinking, and real-world constraints. Writing on panic recovery and system stability.",

  openGraph: {
    title: "Brian Njata – AI-Native Product Builder",
    description:
      "Designing and shipping software systems with AI-assisted development and systems-first thinking.",
    siteName: "BrianNjata.org",
    type: "website",
  },
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        {/* Global Navigation */}
        <Navbar />

        {/* Internal analytics / logging */}
        <RouteLogger />

        {/* Main content wrapper owns spacing + background */}
        <main
          id="top-anchor"
          className="
            min-h-screen
            pt-20
            bg-gradient-to-br from-[#0B0F1C] via-[#101828] to-[#1B2735]
            overflow-x-hidden
          "
        >
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
