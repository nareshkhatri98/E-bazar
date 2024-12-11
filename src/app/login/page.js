"use client"
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { rightArrow } from "@/assets/images";
import Navbar from "@/components/Navbar";
import { bannerIcon } from "@/assets/Banner";
import NavbarBakup from "@/components/NavbarBakup";

import LoginForm from "./LoginForm";
import BannerSection from "../Checkout/BannerSection";

const page = () => {
  return (
    <div>
      <hr />
      <NavbarBakup/>
     <BannerSection pageType="login" />
      <LoginForm/>
     
      
      <Footer />
    </div>
  );
};

export default page;
