"use client";
import Image from "next/image";
import React from "react";
import ImageSlider from "@/components/ImageSlider";
import Service from "@/components/Service";
import FeatureProduct from "@/components/FeatureProduct";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopCategory from "@/components/TopCategory";
import SaleCategory from "@/components/SaleCategory";
import NewProduct from "@/components/NewProduct";
import ClientTestimonial from "@/components/ClientTestimonial";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <header>
       
         
          <Navbar /> 
        </header>
        {/* Image slider */}
        <ImageSlider />

        {/* services section */}
        <Service />
        {/* Features section */}
        <FeatureProduct />
        {/* Top Category */}
        <TopCategory />
       <SaleCategory />
       <NewProduct />
       <ClientTestimonial />
       <SocialMedia />
       <Footer />
      </main>
    </>
  );
}
