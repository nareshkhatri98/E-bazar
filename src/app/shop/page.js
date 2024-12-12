"use client"
import React from "react";

import TopBanner from "./TopBanner";
import FilterSection from "./FilterSection";
import Footer from "@/components/Footer";
import ProductPage from "./ProductPage";
import Navbar from "@/components/Navbar";
import { allProudcts } from "@/assets/products";

const page = () => {
  return (
   <>
   <Navbar/>
   <TopBanner/>
   <FilterSection allProducts={allProudcts}/>
   <ProductPage />
   <Footer/>
   </>
  );
};

export default page;
