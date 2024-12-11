"use client"
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import Footer from "@/components/Footer";
import { GreenAppleIcon } from "@/assets/products";
import { RedCapsicum1 } from "@/assets/social/social";
import Navbar from "@/components/Navbar";
import NavbarBakup from "@/components/NavbarBakup";
import { bannerIcon } from "@/assets/Banner";
import { useSelector } from "react-redux";
import BannerSection from "./BannerSection";

const page = () => {

   const {cart,totalQuanity, totalPrice} = useSelector((state)=>state.allCart)
   console.log(cart)
  return (
    <>
    <hr />
    <NavbarBakup/>
   <BannerSection pageType="checkout"/>
      <div className="container  mx-auto  ">
        

        {/* for billing information */}
        <div className="flex">
          {/* for left section */}
          <div className="w-[872px] h-[706px]  mt-8">
            <h1 className="text-Body-XXL font-500 text-Gray-9">
              Billing Information
            </h1>
            <div className="mt-[20px] flex gap-4">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  First name
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Last name
                </p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Company name
                </p>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
            </div>
            <p className="text-Body-Small font-400 text-Gray-9 mt-4">
              Street Address
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-[872px] h-[49px] border-[1px] rounded-[6px] p-2"
            />

            <div className="mt-[20px] flex gap-4">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Country / Region
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">States</p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">Zip code</p>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
            </div>
            <div className="flex items-center gap-[6px] mt-5">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] rounded-[3px] bg-gray-200 cursor-pointer"
              />{" "}
              <span>Ship to a different address</span>
            </div>
            <hr className="mt-8" />
            <h1 className="text-Body-XXL font-500 text-Gray-9 mt-8">
              Additional Info
            </h1>
            <p className="text-Body-Small font-400 text-Gray-9 mt-5 ">
              Order Notes (Optional)
            </p>
            <div>
              <input
                type="text"
                className="w-[872px] h-[100px] border-[1px] mt-2  p-2"
                placeholder="Notes about your order, e.g. special notes for delivery"
              />
            </div>
          </div>

          {/* for right section */}
          <div className="w-[424px] h-[610px] border-[1px] mt-8 ml-6">
            <h1 className="text-Body-XL text-Gray-9 font-500 m-6">
              Order Summery
            </h1>
            <div className="w-[376px] h-[60px]   items-center justify-between ml-[6px] ">
               {
                cart.map((cartItem)=>(  
                   <div className="flex items-center">
                  <Image
                    src={cartItem.image}
                    alt=" GreenAppleIcon"
                    height={60}
                    width={60}
                  />
                  <p className="ml-[6px]">
                    {cartItem.title} <span>x{cartItem.quantity}</span>
                  </p>
                </div>

                ))
               }
           
             
            </div>
            

            {/* for calculation */}
            <div className=" flex items-center mt-[12px] m-7">
              <p className="">Subtotal:</p>
              <p className="ml-[256px]">{totalPrice}</p>
            </div>
            <hr className="m-5" />
            <div className=" flex items-center mt-[12px] m-3">
              <p className="">Shipping:</p>
              <p className="ml-[256px]">Free</p>
            </div>
            <hr className="m-5" />
            <div className=" flex items-center mt-[12px] m-3">
              <p className="">Total:</p>
              <p className="ml-[269px]">{totalPrice}</p>
            </div>

            {/* for payment method */}
            <form action="#">
              <div className="m-6">
                <h1>Payment Method</h1>

                <div className="flex items-center gap-[6px] mt-4">
                  <input
                    type="radio"
                    name="payment"
                    className="appearance-none w-[20px] h-[20px] rounded-full border-[1px] border-green-500 checked:bg-green-500"
                  />
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center gap-[6px] mt-[10px]">
                  <input
                    type="radio"
                    name="payment"
                    className="appearance-none w-[20px] h-[20px] rounded-full border-[1px] border-green-500 checked:bg-green-500"
                  />
                  <span>Paypal</span>
                </div>
                <div className="flex items-center gap-[6px] mt-[10px]">
                  <input
                    type="radio"
                    name="payment"
                    className="appearance-none w-[20px] h-[20px] rounded-full border-[1px] border-green-500 checked:bg-green-500"
                  />
                  <span>Amazon Pay</span>
                </div>
              </div>
              <button className=" w-[376px] h-[51px] bg-primary text-white rounded-[43px] ml-6 ">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
