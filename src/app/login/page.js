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
import Herosection from "./Herosection";
import LoginForm from "./LoginForm";

const page = () => {
  return (
    <div>
      <hr />
      <NavbarBakup/>
      <Herosection/>
      <LoginForm/>
     
      
      <Footer />
    </div>
  );
};

export default page;
