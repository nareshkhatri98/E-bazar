import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GreenAppleIcon, products, ratingIcon } from "@/assets/products";
import { CartIcon, EyeIcon, HeartIcon } from "@/assets/icons";
import { motion } from "framer-motion";
import SellerSection from "./SellerSection";
import Start from "./Start";
import { useGetProductsQuery } from "@/redux/api/productsApi";

// http://10.10.1.95:8000/api/products

const FeatureProductManual = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/products")

      const resJson = await res.json()

      setProducts(resJson?.products)
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchProducts()
  } , [])


  return (
    <div>
      <section className="mt-[11.25rem]">
        <h1 className="text-center text-[2.5rem] font-semibold leading-[2.375rem]">
          Featured Products
        </h1>
        <div className="flex items-center justify-center gap-1 mt-4">
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700"></div>
          <div className="w-[40px] h-[4px] bg-[#00B207]"></div>
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700"></div>
        </div>
        {/* cart section */}
        {/* <div className="container relative w-full px-4 mx-auto cursor-pointer lg:px-0"> */}
        <div>
          <div className="container mx-auto mt-10 ">
            <div className="grid grid-cols-5 px-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {products?.map((product, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[200px] md:w-[248px] border relative group"
                >
                  <Image
                    src={product.thumbnail?.imgurUrl}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="h-[15.5rem] w-[15.5rem] object-cover"
                  />
                  <div className="mt-3 ml-4">
                    <p className="font-normal font-[Poppins] text-[0.875rem] leading-[1.3125rem]">
                      {product.title}
                    </p>
                    <p className="text-[1rem] font-medium text-[#1A1A1A] leading-[1.5rem]">
                      {product.price}
                    </p>
                    <div className="mb-4">
                      <Start star={product.rating} />
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-[1rem] left-[70%] transform-translate-x-1/2 w-10 h-10 bg-[#f2f2f2] rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Image src={CartIcon} alt="cart icon" className="w-6 h-6" />
                  </motion.div>
                  <div className="absolute top-[64px] right-[10px] sm:left-[180px] md:left-[190px] lg:left-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                    <Image
                      src={EyeIcon}
                      alt="Eye Icon"
                      className="w-[40px] h-[40px] bg-[#F2F2F2] border rounded-full p-[10px]"
                    />
                    <Image
                      src={HeartIcon}
                      alt="Heart Icon"
                      className="w-[40px] h-[40px] bg-[#F2F2F2] border rounded-full p-[10px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SellerSection />
    </div>
  );
};

export default FeatureProductManual;
