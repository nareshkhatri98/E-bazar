"use client"
import React from "react";

import Footer from "@/components/Footer";
import NavbarBakup from "@/components/NavbarBakup";
import SideBar from "./SideBar";
import AccountSection from "./AccountSection";
import BillingAddress from "./BillingAddress";
import ChangePassword from "./ChangePassword";
import BannerSection from "../register/BannerSection";
import HeroBanner from "./HeroBanner";

const page = () => {
  return (
    <>
    <hr />
    <NavbarBakup/>
     <HeroBanner/>
      <div className="container mx-auto mt-10">
        
        <div>
        <div className=" flex gap-6">
          {/* for right side */}
            <SideBar/>
     

          {/* for right side */}
          <AccountSection/>

             
      
          
        </div>
          {/* for billing  address */}
               
        <BillingAddress/>
    
        
        {/* for change password..... */}
        <ChangePassword/>
       


        </div>
      </div>

     
      <Footer />
    </>
  );
};

export default page;
