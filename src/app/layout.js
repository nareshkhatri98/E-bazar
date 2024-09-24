"use client";
import Hero from "@/components/Hero";
import "./globals.css";
import SubHeroSection from "@/components/SubHeroSection";
import Navbar from "@/components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
     <Hero />
     <SubHeroSection />
     <Navbar />

        {children}
      </body>
    </html>
  );
}
