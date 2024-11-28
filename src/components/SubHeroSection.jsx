import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

import {
  CartIcon,
  HeartIcon,
  SearchIcon,
} from "@/assets/icons";

import {
  Logo,
} from "@/assets/images";

const SubHeroSection = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 lg:px-0 py-4">
        {/* Logo */}
        <a href="/">
        <Image
          src={Logo}
          alt="logo"
          className="w-[9rem] h-[2rem] lg:w-[11.4375rem] lg:h-[2.375rem] cursor-pointer mb-4 lg:mb-0"
        />

        </a>
     

        {/* Search Bar */}
        <div className="flex items-center my-4 lg:my-[1.6875rem] w-full lg:w-auto">
          <div className="flex items-center border border-r-0 border-[#E6E6E6] py-2 px-4 rounded-l-md w-full lg:w-[25rem]">
            <Image src={SearchIcon} className="h-5 w-5" alt='Search' />
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none ml-2 w-full"
            />
          </div>
          <button className="bg-[#00B207] py-3 px-4 lg:py-[0.875rem] lg:px-6 text-white font-semibold text-[0.875rem] rounded-r-md w-full lg:w-auto">
            Search
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex items-center">
          {/* Heart Icon */}
          <div className="border-r-2 border-[#E6E6E6] pr-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Image src={HeartIcon} className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer" alt='HeartIcon' />
            </motion.div>
          </div>

          {/* Shopping Cart */}
          <div className="ml-4 flex items-center relative">
            <a href=""></a>
            <Image src={CartIcon} className="w-[1.75rem] h-[1.75rem] lg:w-[2.125rem] lg:h-[2.125rem] cursor-pointer" alt='CartIcon' />
            <div className="absolute top-[-5px] left-3 cursor-pointer">
              <span className="bg-[#2C742F] text-white w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] flex items-center justify-center rounded-full cursor-pointer text-xs lg:text-sm">
                2
              </span>
            </div>
            <div className="ml-3 text-sm lg:text-base">
              <p>Shopping Cart</p>
              <p>$57.70</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
