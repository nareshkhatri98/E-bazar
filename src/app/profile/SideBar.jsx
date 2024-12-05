import React from 'react'
import Image  from 'next/image'
import { DashboardIcon } from '@/assets/icons'
import { RefreshIcon } from '@/assets/icons'
import { WishListIcon } from '@/assets/icons'

import { CartDashboardIcon } from '@/assets/icons'
import { LogoutIcon } from '@/assets/icons'
import { settingIcon } from '@/assets/icons'

const SideBar = () => {
  return (
    <div>
     <div className="w-[312px] h-[418px] mt-8 border-[1px] rounded-[8px]">
            <h1 className="text-Body-XL font-500 text-Gray-9 mt-6 ml-5">
              Navigation
            </h1>
            <div className=" flex gap-[10px] mt-4  ml-5 w-[312px] h-[56px] items-center cursor-pointer">
              <Image src={DashboardIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6 ">
                Dashboard
              </span>
            </div>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={RefreshIcon} alt=" RefreshIcon" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Order History
              </span>
            </div>
            <div className=" flex gap-[10px]  ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={WishListIcon} alt="" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Wishlist
              </span>
            </div>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={CartDashboardIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Shopping Cart
              </span>
            </div>
            <div className=" flex gap-[10px]  ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={settingIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Settings
              </span>
            </div>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={LogoutIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Log-out
              </span>
            </div>
          </div>

    </div>
  )
}

export default SideBar