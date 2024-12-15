"use client";
import Hero from "@/components/Hero";
import "./globals.css";
import SubHeroSection from "@/components/SubHeroSection";
import Navbar from "@/components/Navbar";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";
import Init from "@/Provider/Init";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export default function RootLayout({ children }) {
  let persistor = persistStore(store);
  return (
    <html lang="en">
      <head>
        {/* Include any necessary metadata, links, or title tags here */}
      </head>
      <body className={`antialiased`}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Init />
            <Hero />
            <SubHeroSection />
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
