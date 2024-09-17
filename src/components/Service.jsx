import React from 'react'
import Image from "next/image";
import {
    containerIcon,
    deliveryTruck,
    headPhonesIcon,
    Logo,
    packageIcon,
   
    shoppingIcon,
    
  } from "@/assets/images";

const Service = () => {
  return (
    <div>
        <section className="flex justify-between bg-[#FFFFFF] px-20 container mx-auto p-[2.5rem] my-[-10px] w-[87.5rem] h-[128px]  rounded-[8px] shadow-lg  absolute top-[65rem] left-64">
        <div className="flex">
          <Image src={deliveryTruck} alt="delivery truck" />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">
              Free Shipping
            </h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">
              Free shipping on all your order
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={headPhonesIcon} alt="head phone" />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">
              Customer Support 24/7
            </h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">
              Instant access to Support
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={shoppingIcon} alt="shoppingIcon" />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">
              100% Secure Payment
            </h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">
              We ensure your money is save
            </p>
          </div>
        </div>
        <div className="flex">
          <Image src={packageIcon} alt="package icon" />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">
              Money-Back Guarantee
            </h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service