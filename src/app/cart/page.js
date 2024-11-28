import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";
import { GreenAppleIcon, RedCapsicumIcon } from "@/assets/products";
import { closeIcon } from "@/assets/images";
import { RedCapsicum1 } from "@/assets/social/social";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className=" flex gap-3 mt-6 ">
          <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-Body-Medium font-400  cursor-pointer text-primary">
            Shopping cart
          </span>
        </div>

        <h1 className="text-Heading-05 font-600 text-Gray-9 text-center mt-[40px]">
          My Shopping Cart
        </h1>

        {/* for items and left side */}
        <div className="flex">
         <div>

         <div className="w-[872px] h-[371px] border mt-8 rounded-[2px] p-4 ">
            <div className="flex  items-center border-b-2 py-2">
              <div>
                <p className="text-Body-Medium font-500 text-Gray-5 uppercase">
                  product
                </p>
              </div>
              <div className="flex  w-1/2 ">
                <p className="text-Body-Medium font-500 text-Gray-5 uppercase ml-[314px] ">
                  Price
                </p>
                <p className="text-Body-Medium font-500 text-Gray-5 uppercase ml-[73px]">
                  Quantity
                </p>
                <p className="text-Body-Medium font-500 text-Gray-5 uppercase mr-[96px] ml-[114px]">
                  Subtotal
                </p>
              </div>
            </div>
            {/* for data */}
            <div className=" ">
              <div className="w-[832px] h-[100px] flex items-center mt-3">
                <div className=" flex items-center w-[248px] h-[100px]">
                  <Image
                    src={GreenAppleIcon}
                    alt="GreenAppleIcon"
                    width={100}
                    height={100}
                  />
                  <h1 className="ml-2 text-Body-Medium font-400 text-Gray-9">
                    Green Capsicum
                  </h1>
                </div>
                {/* for price. quantity, subtotal */}
                <div className="">
                  <div className="ml-[135px] flex items-center">
                    <p className="text-Body-Medium font-400 text-Gray-9">
                      $14.00
                    </p>
                    {/*  for button */}
                    <div className="text-4xl flex items-center justify-between  border p-3 rounded-[170px] ml-[65px]">
                      <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                        -
                      </button>
                      <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-400">
                        {" "}
                        5
                      </p>
                      <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                        +
                      </button>
                    </div>
                    <p className="ml-[62px] text-Body-Medium font-500 text-Gray-9">
                      $70.00
                    </p>
                    <button className="w-[24px] h-[24px] border rounded-full ml-[72px]">
                      <Image src={closeIcon} alt="closeIcon" />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border-[#E6E6E6] border-[1px]" />
            </div>

            <div className=" ">
              <div className="w-[832px] h-[100px] flex items-center mt-3">
                <div className=" flex items-center w-[248px] h-[100px]">
                  <Image
                    src={RedCapsicum1}
                    alt="RedCapsicum"
                    width={100}
                    height={100}
                  />
                  <h1 className="ml-2 text-Body-Medium font-400 text-Gray-9">
                    Red Capsicum
                  </h1>
                </div>
                {/* for price. quantity, subtotal */}
                <div>
                  <div className="ml-[135px] flex items-center ">
                    <p className="text-Body-Medium font-400 text-Gray-9 py-36">
                      $14.00
                    </p>
                    {/*  for button */}
                    <div className="text-4xl flex items-center justify-between  border p-3 rounded-[170px] ml-[65px]">
                      <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                        -
                      </button>
                      <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-400">
                        {" "}
                        5
                      </p>
                      <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                        +
                      </button>
                    </div>
                    <p className="ml-[62px] text-Body-Medium font-500 text-Gray-9">
                      $14.00
                    </p>
                    <button className="w-[24px] h-[24px] border rounded-full ml-[72px]">
                      <Image src={closeIcon} alt="closeIcon" />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border-[#E6E6E6] border-[1px]" />
            </div>

            {/* for button*/}
            <div className="flex items-center justify-between">
              <button
                className="w-[168px] h-[45px] rounded-[43px] bg-Gray-0.5 mt-4 text-Body-Small font-600 text-Gray-7  p-[14px] pr-[32px] pb-[14px] pl-[32px]
"
              >
                Return to shop
              </button>
              <button
                className="w-[168px] h-[45px] rounded-[43px] bg-Gray-0.5 mt-4 text-Body-Small font-600 text-Gray-7  p-[14px] pr-[32px] pb-[14px] pl-[32px]
"
              >
                Update Cart
              </button>
            </div>

            {/* for coupon section */}
          
          </div>
          <div className="w-[872px] h-[92px] p-5 rounded-[8px] border-[#E6E6E6]  border-[1px] mt-[24px]">
            <div className="flex items-center">
              <h1 className="text-Body-XL font-500 text-Gray-9">Coupon Code</h1>
              <input
                type="text"
                placeholder="Enter code"
                className="w-[531px] h-[52px] border-[1px] rounded-[46px] ml-[24px] p-5"
              />
              <button className="w-[196px] h-[52px] border-[1px] bg-Gray-8 text-white font-600 rounded-[43px] ml-[-60px] p-3 ">
                Apply Coupon
              </button>
            </div>
          </div> 

         </div>


          {/* right section */}
          <div className="w-[424px] h-[296px] border-[1px]  mt-[32px] ml-[24px]">
            <h1 className="text-Body-XL font-500 text-Gray-9 m-4">Cart Total</h1>
            <div className="flex items-center justify-between  m-5 ">
            <p className="text-Body-Small font-400 text-Gray-7">Subtotal:</p>
           <p className="text-Body-Small font-500 text-Gray-9 ">$84.00</p>
           
           </div>
           <hr />
           <div className="flex items-center justify-between  m-4 ">
            <p className="text-Body-Small font-400 text-Gray-7">Shipping:</p>
           <p className="text-Body-Small font-500 text-Gray-9 ">Free</p>
           
           </div>
           <hr />
           <div className="flex items-center justify-between  m-4 ">
            <p className="text-Body-Small font-400 text-Gray-7">Total:</p>
           <p className="text-Body-Small font-500 text-Gray-9 ">$84.00</p>
           
           </div>
           <button className="w-[376px] h-[51px] bg-primary m-3 text-Body-Medium font-600 text-white rounded-[43px]">
           Proceed to checkout</button>
          
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
