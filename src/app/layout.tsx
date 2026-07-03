import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest, Oooh_Baby } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "More Coffee & Space",
  description: "Company Profile for More Coffee & Space",
  icons: {
    icon: "/More Logo.png",
    apple: "/More Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} ${ooohBaby.variable} h-full antialiased`}
    >
      <body className="body min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
