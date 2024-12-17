import React from 'react'
import Image  from 'next/image'
import { DashboardIcon } from '@/assets/icons'
import { RefreshIcon } from '@/assets/icons'
import { WishListIcon } from '@/assets/icons'

import { CartDashboardIcon } from '@/assets/icons'
import { LogoutIcon } from '@/assets/icons'
import { settingIcon } from '@/assets/icons'
import { useSelector } from 'react-redux'
import Link from 'next/link'



const SideBar = () => {
  const {cart} = useSelector((state)=>state.allCart);
  const {wishlist } = useSelector((state)=>state.wishList);

  
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
            <Link href='/wishlist'>
            <div className=" flex gap-[10px]  ml-5 w-[312px] h-[56px] items-center  cursor-pointer relative">
             <Image src={WishListIcon} alt="" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Wishlist
              </span>
           
            </div>
            </Link>
            <div className="absolute top-[630px] left-[12.5rem;] cursor-pointer">
              <span className="bg-[#2C742F] text-white w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer  lg:text-sm">
                {wishlist.length}
              </span>
            </div>


            <Link href='/cart'>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer relative">
              <Image src={CartDashboardIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Shopping Cart
              </span>
            </div>
            </Link>
            <div className="absolute top-[686px] left-[12.5rem;] cursor-pointer">
              <span className="bg-[#2C742F] text-white w-[20px] h-[20px] flex items-center justify-center rounded-full cursor-pointer  lg:text-sm">
                {cart.length}
              </span>
              </div>
            <Link href='/profile'>
            <div className=" flex gap-[10px]  ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={settingIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Settings
              </span>
            </div>
            </Link>
          
        
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