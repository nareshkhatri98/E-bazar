"use client";
import Hero from "@/components/Hero";
import "./globals.css";
import SubHeroSection from "@/components/SubHeroSection";
import Navbar from "@/components/Navbar";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Provider store={store}>
      <body className={`antialiased`}>
     <Hero />
     <SubHeroSection />
     

        {children}
      </body>
      </Provider>
    </html>
  );
}
