"use client";
import Image from "next/image";
import React from "react";
import ImageSlider from "@/components/ImageSlider";
import Service from "@/components/Service";
import FeatureProduct from "@/components/FeatureProduct";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <header>
          {/* hero section */}
          <Hero />

          {/* navbar */}
          <Navbar />
        </header>
        {/* Image slider */}
        <ImageSlider />

        {/* services section */}
        <Service />
        {/* Features section */}
        <FeatureProduct />
      </main>
    </>
  );
}
