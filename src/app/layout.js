"use client";
import Hero from "@/components/Hero";
import "./globals.css";
import SubHeroSection from "@/components/SubHeroSection";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Init from "@/provider/initi";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <Init />
        <body className={`antialiased`}>
          <Hero />
          <SubHeroSection />

          {children}
        </body>
      </Provider>
    </html>
  );
}
