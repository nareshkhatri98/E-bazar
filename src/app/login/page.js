import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image';
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { rightArrow} from "@/assets/images";


const page = () => {
  return (
    <div >
        <div className='container mx-auto'>

      
         {/* for top banner */}
      <div className=" flex gap-3 mt-6">
        <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
        <Image
          src={ArrowDownIcon}
          alt="arrow down"
          className="-rotate-90 cursor-pointer"
        />
        <span className="text-Body-Medium font-400 text-Gray-6 cursor-pointer">
          Account
        </span>
        <Image
          src={ArrowDownIcon}
          alt="arrow down"
          className="-rotate-90 cursor-pointer"
        />
        <span className="text-primary text-Body-Medium font-400 cursor-pointer">
          Login
        </span>
      </div>

      <div className='w-[520px] h-[371px] bg-red-300  '>
        <h1 className='text-center'>Sign In</h1>
      </div>
      </div>
        <Footer/>
    </div>
  )
}

export default page