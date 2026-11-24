import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRIX — Buy. Sell. Rent | Luxury Real Estate & Developments",
  description:
    "Discover your dream home with a trusted advisory partner. Exclusive residential properties, office leasing, and luxury architectural developments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 overflow-x-hidden w-full">{children}</body>
    </html>
  );
}
