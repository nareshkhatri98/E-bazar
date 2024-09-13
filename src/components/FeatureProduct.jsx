import React from 'react'
import Image from "next/image";
import { GreenAppleIcon, products, ratingIcon } from "@/assets/products";
import { CartIcon } from "@/assets/icons";
import { motion } from "framer-motion"
import SellerSection from './SellerSection';
const FeatureProduct = () => {
  return (
    <div>

<section className="mt-[11.25rem]">
        <h1 className="text-center text-[2.5rem] font-semibold  leading-[2.375rem]">
          Featured Products
        </h1>
        <div className="flex items-center justify-center gap-1 mt-4">
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700  "></div>
          <div className="w-[40px] h-[4px] bg-[#00B207]  "></div>
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700  "></div>
        </div>
        {/* cart section */}
        <div className="w-[1320px] h-[339px] container mx-auto relative ">
          <div className="grid grid-cols-5 mt-[50px] gap-4">
            {products.map((product, index) => (
              <div key={index} className="w-[248px] border relative">
                <Image src={product.image} alt="apple" />
                <div className="mt-3 ml-4">
                  <p className="font-normal font-[Poppins] text-[0.875rem] leading-[1.3125rem]">
                    {product.title}
                  </p>
                  <p className="text-[1rem] font-medium text-[#1A1A1A] leading-[1.5rem]">
                    {product.price}
                  </p>
                  <Image
                    src={ratingIcon}
                    alt="rating icon"
                    className="mb-4 mt-[6px]"
                  />
                </div>
                <motion.div className="absolute bottom-[1rem] left-[11rem] w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center cursor-pointer"
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}>
                  <Image src={CartIcon} alt="cart icon" className="w-10 h-8" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
       
      </section>
      <SellerSection />
     
    </div>
  )
}

export default FeatureProduct