"use client"
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { EmailIcon, LocationICon, TelephoneIcon } from "@/assets/images";
import Navbar from "@/components/Navbar";
import NavbarBakup from "@/components/NavbarBakup";
import { bannerIcon, MapIcon } from "@/assets/Banner";
import BannerSection from "../Checkout/BannerSection";

const page = () => {
  return (
    <>
    <hr />
   <NavbarBakup/>
   <BannerSection pageType="contact"/>
      <div className="container mx-auto">
       
        <div className="flex items-center">
          <div className="w-[312px] h-[507px] rounded-[8px]  mt-[80px] shadow-lg  border border-Gray-1">
            <div className="w-[272px] h-[169px]  flex items-center flex-col">
              <Image src={LocationICon} alt="location" className="mt-6" />
              <p className="text-center text-[16px] text-Gray-8 font-400 mt-4">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
              <hr />
            </div>
            <div className="w-[272px] h-[169px] flex items-center flex-col">
              <Image src={EmailIcon} alt="Email" className="mt-6" />
              <p className="text-center mt-4 text-[16px] text-Gray-8 font-400">
                Proxy@gmail.com{" "}
              </p>
              <p className="text-center mt-1 text-[16px] text-Gray-8 font-400">
                Help.proxy@gmail.com
              </p>
              <hr />
            </div>
            <div className="w-[272px] h-[169px]  flex items-center flex-col">
              <Image src={TelephoneIcon} alt="TelephoneIcon" className="mt-6" />
              <p className="text-[16px] text-Gray-8 font-400 mt-4">
                (219) 555-0114
              </p>
              <p className="text-[16px] text-Gray-8 font-400 mt-1">
                {" "}
                (164) 333-0487
              </p>
            </div>
          </div>

          <div className="w-[984px] h-[507px]  mt-[80px] ml-6 rounded-[8px] border border-Gray-1 shadow-lg ">
            <h1 className="text-Body-XXL text-Gray-9 font-600 ml-[50px] mt-[44px]">
              {" "}
              Just Say Hello!
            </h1>
            <div className="w-[486px] h-[42px] mt-2">
              <p className="text-Body-Small font-400 text-Gray-5 ml-[50px]">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
            </div>
            <form action="#">
              <div className="mt-6">
                <input
                  type="text"
                  className="ml-[50px] w-[434px] h-[49px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border"
                  placeholder="Template Cookie"
                />
                <input
                  type="text"
                  className="ml-4 w-[434px] h-[49px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border"
                  placeholder="zakirsoft@gmail.com"
                />
              </div>
              <input
                type="text"
                className="ml-[50px] w-[884px] h-[49px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border border-green-600 mt-4"
                placeholder="Hello|"
              />
              <textarea
                type="text"
                className="ml-[50px] w-[884px] h-[98px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border border-green-600 mt-4"
                placeholder="subjects"
              />
              <button className="ml-[50px] mt-[24px] w-[199px] h-[51px] bg-primary rounded-[43px] text-Body-Medium font-600 text-Gray-0.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Image src={MapIcon} alt="MapIcon" className="w-full h-full mt-[80px]"/>
      <Footer  />
     
    </>
  );
};

export default page;
