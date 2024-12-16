"use client";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/Redux/store";

import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

// Lazy load components
const Hero = React.lazy(() => import("@/components/Hero"));
const SubHeroSection = React.lazy(() => import("@/components/SubHeroSection"));
const Init = React.lazy(() => import("@/Provider/Init"));

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Init />
            <Hero />
            <SubHeroSection />
            <Toaster
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />

            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
