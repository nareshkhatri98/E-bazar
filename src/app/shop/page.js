"use client"
import React from "react";

import TopBanner from "./TopBanner";
import FilterSection from "./FilterSection";
import Footer from "@/components/Footer";
import ProductPage from "./ProductPage";
import Navbar from "@/components/Navbar";
import { allProudcts } from "@/assets/products";
import { ToastContainer } from "react-toastify";


const page = () => {
  return (
   <>
     <ToastContainer position="top-right" autoClose={2000} />
   <Navbar/>
   <TopBanner/>
   <FilterSection allProducts={allProudcts}/>
   <ProductPage />
   <Footer/>
   </>
  );
};

export default page;
