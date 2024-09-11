

import React from 'react'
import Image from "next/image";
import { Cart, DownArrow, Heart, location, Logo, Search } from "@/assets/icons";
const Hero = () => {
  return (
    <div>
          {/* Header section */}
      <div className="flex justify-around py-6 ">
        <div className="flex items-center">
          <Image src={Logo} alt="logo" />
          <span className="text-[32px] font-semibold font-[Poppins] ml-2">
            Ecobazar
          </span>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            className="w-[400px] h-[45px] rounded-md  border border-[#E6E6E6] "
          />
          <button className="bg-[#00B207] w-[98px] h-[45px] rounded-r-md">
            Search
          </button>
          <div className="absolute  flex ">
            <Image src={Search} alt="search" className="ml-4" />
            <span className="ml-2 text-[15px] text-[#808080]">Search</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="border-r-2 border-[#E6E6E6] pr-4">
            <Image src={Heart} alt="heart" />
          </div>
          <div className="relative flex items-center ">
            <Image src={Cart} alt="Cart " className="ml-4" />
            <div className="absolute top-[3px] left-[2rem] bottom-0 ">
              <span className="bg-[#2C742F] text-white w-[25px] h-[25px]  flex items-center justify-center rounded-full">
                2
              </span>
            </div>
            <div className="flex flex-col ml-3">
              <span>Shopping cart:</span>
              <span className="font-semibold">$57.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
