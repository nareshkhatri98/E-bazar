import React from "react";

import TopBanner from "./TopBanner";
import FilterSection from "./FilterSection";
import Footer from "@/components/Footer";
import ProductPage from "./ProductPage";

const page = () => {
  return (
   <>
   <TopBanner/>
   <FilterSection/>
   <ProductPage />
   <Footer/>
   </>
  );
};

export default page;
