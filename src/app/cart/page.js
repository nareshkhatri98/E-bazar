"use client";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";

import { RedCapsicum1 } from "@/assets/social/social";
import Footer from "@/components/Footer";
import { bannerIcon } from "@/assets/Banner";
import NavbarBakup from "@/components/NavbarBakup";
import { useSelector } from "react-redux";
import CartData from "./CartData";
import Link from "next/link";
import BannerSection from "../Checkout/BannerSection";

const page = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  // console.log(cart);

  return (
    <div>
      <hr />
      <NavbarBakup />
      <BannerSection pageType="cart" />

      <div className="container mx-auto">
        <h1 className="text-Heading-05 font-600 text-Gray-9 text-center mt-[40px]">
          My Shopping Cart
        </h1>

        {/* for items and left side */}
        <div className="flex">
          <div>
            <div className="w-[872px] h-auto border mt-8 rounded-[2px] p-4 ">
              {/* for data */}

              <CartData />

              {/* for button*/}
              <div className="flex items-center justify-between">
                <Link href="/shop">
                  <button
                    className="w-[168px] h-[45px] rounded-[43px] bg-Gray-0.5 mt-4 text-Body-Small font-600 text-Gray-7  p-[14px] pr-[32px] pb-[14px] pl-[32px]
"
                  >
                    Return to shop
                  </button>
                </Link>
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
              <form action="#">
                <div className="flex items-center">
                  <h1 className="text-Body-XL font-500 text-Gray-9">
                    Coupon Code
                  </h1>
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-[531px] h-[52px] border-[1px] rounded-[46px] ml-[24px] p-5"
                  />
                  <button className="w-[196px] h-[52px] border-[1px] bg-Gray-8 text-white font-600 rounded-[43px] ml-[-60px] p-3 ">
                    Apply Coupon
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* right section */}
          <div className="w-[424px] h-[296px] border-[1px]  mt-[32px] ml-[24px]">
            <h1 className="text-Body-XL font-500 text-Gray-9 m-4">
              Cart Total
            </h1>
            <div className="flex items-center justify-between  m-5 ">
              <p className="text-Body-Small font-400 text-Gray-7">Subtotal:</p>
              <p className="text-Body-Small font-500 text-Gray-9 ">
                {totalPrice}
              </p>
            </div>
            <hr />
            <div className="flex items-center justify-between  m-4 ">
              <p className="text-Body-Small font-400 text-Gray-7">Shipping:</p>
              <p className="text-Body-Small font-500 text-Gray-9 ">Free</p>
            </div>
            <hr />
            <div className="flex items-center justify-between  m-4 ">
              <p className="text-Body-Small font-400 text-Gray-7">Total:</p>
              <p className="text-Body-Small font-500 text-Gray-9 ">
                {totalPrice}
              </p>
            </div>
            <Link href="/Checkout">
              <button className="w-[376px] h-[51px] bg-primary m-3 text-Body-Medium font-600 text-white rounded-[43px]">
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
