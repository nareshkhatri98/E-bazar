"use client"
import React from "react";

import TopBanner from "./TopBanner";
import FilterSection from "./FilterSection";
import Footer from "@/components/Footer";
import ProductPage from "./ProductPage";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
   <>
   <Navbar/>
   <TopBanner/>
   <FilterSection/>
   <ProductPage />
   <Footer/>
   </>
  );
};

export default page;
