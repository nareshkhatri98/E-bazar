"use client";
import Image from "next/image";

import {
  Logo, 
} from "@/assets/images";
import {
  ArrowDownIcon,
  CartIcon,
  HeartIcon,
  Location,
  PhoneIcon,
  SearchIcon,
} from "@/assets/icons";
import React from "react";


import ImageSlider from "@/components/ImageSlider";
import Service from "@/components/Service";
import FeatureProduct from "@/components/FeatureProduct";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
    <main>
      <header>
     {/* hero section */}
     <Hero />

        <div className="container mx-auto flex items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="w-[11.4375rem] h-[2.375rem]"
          />

          <div className="flex items-center my-[1.6875rem] ">
            <div className="flex items-center border border-r-0 border-[#E6E6E6] py-3 px-4 rounded-l-md min-w-[25rem]">
              <Image src={SearchIcon} className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none ml-2"
              />
            </div>
            <button className="bg-[#00B207] py-[0.875rem] px-6 text-white font-semibold text-[0.875rem] rounded-r-md">
              Search
            </button>
          </div>

          <div className="flex items-center">
            <div className="border-r-2 border-[#E6E6E6] pr-4">
              <Image src={HeartIcon} className="h-8 w-8" />
            </div>
            <div className="ml-4 flex items-center relative">
              <Image src={CartIcon} className="w-[2.125rem] h-[2.125rem]" />
              <div className="absolute  top-[3px] left-[18px] bottom-0">
                <span className="bg-[#2C742F] text-white w-[25px] h-[25px]  flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
              <div className="ml-3">
                <p> Shopping Cart</p>
                <p> $57.70</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#333333] ">
          <div className="flex text-white items-center justify-between container mx-auto">
            <div>
              <ul className="flex items-center py-[1.1875rem]">
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Home
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Shop
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Pages
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    About Us
                  </a>
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <Image src={PhoneIcon} alt="phone" className="h-8 w-8" />
              <span className="ml-2 text-[0.875rem] font-medium">
                (219) 555-0114
              </span>
            </div>
          </div>
        </div>
      </header>
{/* Image slider */}
  <ImageSlider />
      
      {/* services section */}
    <Service />
      {/* Features section */}
    <FeatureProduct />
    </main>
    </>
  );
}
