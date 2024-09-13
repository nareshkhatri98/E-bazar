
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
          <div className="py-3 border-b-2 border-[#E6E6E6]">
          <div className="flex justify-between container mx-auto">
            <div className="flex items-center">
              <Image src={Location} alt="Location" className='cursor-pointer' />
              <span className="ml-2">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center border-r-2 border-[#E6E6E6] pr-5">
                <div className="flex items-center cursor-pointer">
                  <span className="mr-[6px]">Eng</span>
                  <Image src={ArrowDownIcon} alt="arrow down" />
                </div>
                <div className="flex items-center ml-5 cursor-pointer">
                  <span className="mr-[6px]">USD</span>
                  <Image src={ArrowDownIcon} alt="arrow down" />
                </div>
              </div>
              <div className="ml-5 cursor-pointer">
                <span>Sign In</span>
                <span className="mx-1">/</span>
                <span>Sign Up</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
