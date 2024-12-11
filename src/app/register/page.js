"use client"
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

import NavbarBakup from "@/components/NavbarBakup";

import RegisterForm from "./RegisterForm";
import BannerSection from "../Checkout/BannerSection";


const page = () => {
  return (
    <>
   
      <div>
      <hr />
    <NavbarBakup/>
   <BannerSection pageType="register"/>
    <RegisterForm/>
    <Footer />
     
        

      </div>
      
    </>
  );
};

export default page;
