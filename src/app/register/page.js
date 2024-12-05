"use client"
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

import NavbarBakup from "@/components/NavbarBakup";
import BannerSection from "./BannerSection";
import RegisterForm from "./RegisterForm";


const page = () => {
  return (
    <>
   
      <div>
      <hr />
    <NavbarBakup/>
    <BannerSection/>
    <RegisterForm/>
    <Footer />
     
        

      </div>
      
    </>
  );
};

export default page;
