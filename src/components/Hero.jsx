
import React from 'react'
import Image from "next/image";
import {
  ArrowDownIcon,
  CartIcon,
  HeartIcon,
  Location,
  PhoneIcon,
  SearchIcon,
} from "@/assets/icons";
const Hero = () => {
  return (
    <div>
          {/* Header section */}
          <div className="py-3 border-b-2 border-Gray-1">
          <div className="flex justify-between container mx-auto">
            <div className="flex items-center">
              <Image src={Location} alt="Location" className='cursor-pointer' />
              <span className="ml-2 text-Body-Tiny font-400">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center border-r-2 border-Gray-1 pr-5">
                <div className="flex items-center cursor-pointer">
                  <span className="mr-[6px] text-Body-Tiny font-400">Eng</span>
                  <Image src={ArrowDownIcon} alt="arrow down" />
                </div>
                <div className="flex items-center ml-5 cursor-pointer">
                  <span className="mr-[6px] text-Body-Tiny font-400">USD</span>
                  <Image src={ArrowDownIcon} alt="arrow down" />
                </div>
              </div>
              <div className="ml-5 cursor-pointer ">
                <span className=' text-Body-Tiny font-400'>Sign In</span>
                <span className="mx-1  text-Body-Tiny font-400">/</span>
                <span className='text-Body-Tiny font-400'>Sign Up</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
