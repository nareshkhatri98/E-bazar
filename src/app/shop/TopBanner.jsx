"use client";
import React, { useEffect, useState } from 'react'


import Image from "next/image";
import DiscountImage from "@/assets/shop-page-images/discount.jpg";

import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { rightArrow} from "@/assets/images";

const TopBanner = () => {

  return (
    <div className="container mx-auto">
      {/* for top banner */}
      <div className=" flex gap-3 mt-6">
        <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
        <Image
          src={ArrowDownIcon}
          alt="arrow down"
          className="-rotate-90 cursor-pointer"
        />
        <span className="text-Body-Medium font-400 text-Gray-6 cursor-pointer">
          Categories
        </span>
        <Image
          src={ArrowDownIcon}
          alt="arrow down"
          className="-rotate-90 cursor-pointer"
        />
        <span className="text-primary text-Body-Medium font-400 cursor-pointer">
          Vegetables
        </span>
      </div>

      {/*for discount banner */}
      <div
        className="w-[1590px] h-[358px] container mx-auto  bg-no-repeat bg-cover bg-center rounded-md mt-6 relative "
        style={{
          backgroundImage: `url(${DiscountImage.src})`,
          transform: "rotate(180deg)",
        }}
      ></div>
      <div className=" w-[424px] h-[223px] absolute top-96 left-[22rem] ">
        <span className="uppercase text-white">Best Deals</span>
        <h1 className="text-Heading-03 text-white font-600 mt-4">
          Sale of the Month
        </h1>
        <div className="mt-[20px]">
          <h1 className="text-Body-XXL font-400 text-primary">
            00 : <span className="ml-[9px]"> 02 : </span>{" "}
            <span className="ml-[9px]"> 18 : </span> <span>45 </span>{" "}
          </h1>
         
          <h1 className="text-Body-Tiny uppercase text-Gray-4 mt-1">
            DAYS <span className="ml-[22px]">Hours </span>{" "}
            <span className="ml-[22px]">Mins </span>{" "}
            <span className="ml-[22px]"> Secs </span>
          </h1>
        </div>
        <button className="bg-primary flex items-center w-[162px] h-[45px] p-6 round text-Body-Small font-600 text-white rounded-[43px] mt-8">
          Shop now <Image src={rightArrow} alt="vector icon" className="ml-2" />
        </button>
      </div>
     
    </div>
  )
}

export default TopBanner