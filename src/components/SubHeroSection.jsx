import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion"

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
      <div className="container mx-auto flex items-center justify-between">
        <Image
          src={Logo}
          alt="logo"
          className="w-[11.4375rem] h-[2.375rem] cursor-pointer"
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
          <div className="border-r-2 border-[#E6E6E6] pr-4 ">
            <motion.div whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <Image src={HeartIcon} className="h-8 w-8 cursor-pointer" />
            </motion.div>

          </div>
          <div className="ml-4 flex items-center relative">
            <Image src={CartIcon} className="w-[2.125rem] h-[2.125rem] cursor-pointer" />
            <div className="absolute  top-[3px] left-[18px] bottom-0 cursor-pointer">
              <span className="bg-[#2C742F] text-white w-[25px] h-[25px]  flex items-center justify-center rounded-full cursor-pointer">
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
    </div>
  )
}

export default SubHeroSection
