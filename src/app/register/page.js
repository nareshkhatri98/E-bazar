"use client"
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { rightArrow } from "@/assets/images";
import { bannerIcon } from "@/assets/Banner";
import NavbarBakup from "@/components/NavbarBakup";

const page = () => {
  return (
    <>
    <hr />
    <NavbarBakup/>
      <div>
      <div className="relative w-full h-[120px] ">
        <Image src={bannerIcon} alt="banner" className="h-full w-full object-cover rotate-180"/>
      </div>
        <div className="container mx-auto">
          {/* for top banner */}
          <div className=" flex gap-3  mt-[48px] absolute top-64 ">
            <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
            <Image
              src={ArrowDownIcon}
              alt="arrow down"
              className="-rotate-90 cursor-pointer"
            />
            <span className="text-Body-Medium font-400 text-Gray-4 cursor-pointer">
              Account
            </span>
            <Image
              src={ArrowDownIcon}
              alt="arrow down"
              className="-rotate-90 cursor-pointer"
            />
            <span className="text-primary text-Body-Medium font-400 cursor-pointer">
              Register
            </span>
          </div>

          <div className="w-[520px] h-[432px] bg-white border border-[#F2F2F2] shadow-lg mt-[80px] ml-[33%] ">
            <h1 className="text-center text-Heading-05 font-600 text-Gray-9 p-[24px]">
              Create Account
            </h1>
            <form action="#">
              <div className="ml-[24px] ">
                <input
                  className="w-[472px]  p-5 border border-[#E6E6E6] rounded-[6px] h-[49px]"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <input
                  className="w-[472px] p-5 border border-[#E6E6E6] rounded-[6px] h-[49px] mt-3"
                  type="text"
                  name="password"
                  placeholder="Password"
                />
                <input
                  className="w-[472px] p-5 border border-[#E6E6E6] rounded-[6px] h-[49px] mt-3"
                  type="text"
                  name=" password"
                  placeholder=" Confirm  Password"
                />
              </div>
              {/* for forget password and remember */}
              <div className=" ml-[24px] mt-[16px] flex items-center gap-2  ">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] rounded-[3px] bg-gray-200 cursor-pointer"
                />
                <div className=" flex items-center justify-between ">
                  <p className="text-Body-Small font-400 text-Gray-6">
                    Accept all terms & Conditions
                  </p>
                </div>
              </div>
              <button className="w-[472px] h-[45px] ml-[24px] rounded-[32px] mt-5  items-center bg-primary text-white text-Body-Small font-600">
                Create Account
              </button>
              <p className="text-center text-Body-Small font-400 text-Gray-6 mt-6">
                Already have account{" "}
                <span className="text-Body-Small font-500 text-Gray-9">
                  <a href="login">Login</a>
                </span>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <Footer />
    </>
  );
};

export default page;
