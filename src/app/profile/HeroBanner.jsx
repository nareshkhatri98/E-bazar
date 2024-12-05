import React from 'react'
import Image from 'next/image'
import { bannerIcon } from '@/assets/Banner'
import { HomeIcon } from '@/assets/shop-page-images'
import { ArrowDownIcon } from '@/assets/icons'
const HeroBanner = () => {
    return (
        <div>

            <div className="relative w-full h-[120px] ">
                <Image src={bannerIcon} alt="banner" className="h-full w-full object-cover rotate-180" />
            </div>
            <div className="container mx-auto">
            <div className=" flex gap-3 mt-[48px] absolute top-64">
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
            Settings
          </span>
        </div>
            </div>
        </div>
    )
}

export default HeroBanner