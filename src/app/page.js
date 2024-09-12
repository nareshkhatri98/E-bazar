"use client";
import Image from "next/image";

import {
  containerIcon,
  deliveryTruck,
  headPhonesIcon,
  Logo,
  packageIcon,
  rightArrow,
  shoppingIcon,
  SliderIcon,
} from "@/assets/images";
import {
  ArrowDownIcon,
  CartIcon,
  HeartIcon,
  Location,
  PhoneIcon,
  SearchIcon,
} from "@/assets/icons";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <header>
        <div className="py-3 border-b-2 border-[#E6E6E6]">
          <div className="flex justify-between container mx-auto">
            <div className="flex items-center">
              <Image src={Location} alt="Location" />
              <span className="ml-2">
                Store Location: Lincoln- 344, Illinois, Chicago, USA
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center border-r-2 border-[#E6E6E6] pr-5">
                <div className="flex items-center">
                  <span className="mr-[6px]">Eng</span>
                  <Image src={ArrowDownIcon} alt="arrow down" />
                </div>
                <div className="flex items-center ml-5">
                  <span className="mr-[6px]">USD</span>
                  <Image src={ArrowDownIcon} alt="arrow down" />
                </div>
              </div>
              <div className="ml-5">
                <span>Sign In</span>
                <span className="mx-1">/</span>
                <span>Sign Up</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex items-center justify-between">
          <Image
            src={Logo}
            alt="logo"
            className="w-[11.4375rem] h-[2.375rem]"
          />

          <div className="flex items-center my-[1.6875rem] ">
            <div className="flex items-center border border-r-0 border-[#E6E6E6] py-3 px-4 rounded-l-md min-w-[25rem]">
              <Image src={SearchIcon} className="h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none ml-2"
              />
            </div>
            <button className="bg-[#00B207] py-[0.875rem] px-6 text-white font-semibold text-[0.875rem] rounded-r-md">
              Search
            </button>
          </div>

          <div className="flex items-center">
            <div className="border-r-2 border-[#E6E6E6] pr-4">
              <Image src={HeartIcon} className="h-8 w-8" />
            </div>
            <div className="ml-4 flex items-center relative">
              <Image src={CartIcon} className="w-[2.125rem] h-[2.125rem]" />
              <div className="absolute  top-[3px] left-[18px] bottom-0">
                <span className="bg-[#2C742F] text-white w-[25px] h-[25px]  flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
              <div className="ml-3">
                <p> Shopping Cart</p>
                <p> $57.70</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#333333] ">
          <div className="flex text-white items-center justify-between container mx-auto">
            <div>
              <ul className="flex items-center py-[1.1875rem]">
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Home
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Shop
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Pages
                  </a>
                  <Image
                    src={ArrowDownIcon}
                    alt="ar-d"
                    className="ml-1 h-4 w-4"
                  />
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    About Us
                  </a>
                </li>
                <li className="flex items-center mr-8">
                  <a href="" className="text-[#999999]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <Image src={PhoneIcon} alt="phone" className="h-8 w-8" />
              <span className="ml-2 text-[0.875rem] font-medium">
                (219) 555-0114
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto bg-[#EDF2EE] w-[95rem] h-[804px] mt-6 rounded-[8px] relative ">
        <Slider {...settings}>
          <div>
            <div className="flex flex-2">
              <div className="py-[182px] px-[100px]">
                <p className="text-[#00B207] text-[1.2rem] font-mediumcal">
                  Welcome to shopery
                </p>
                <h1 className="text-[4.5rem] leading-[5.4rem] font-semibold mt-2">
                  Fresh & Healthy <br />
                  Organic Food
                </h1>
                <p className="mt-7 text-[2rem] font-semibold">
                  Sale up to <span className="text-[#FF8A00]">30% OFF</span>
                </p>
                <p className="text-[#808080] font-normal mt-3 text-[0.875rem] leading-[1.3125rem]">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
                <button className="flex items-center mt-8 py-4 px-10 bg-[#00B207] text-white rounded-[3.3125rem]">
                  Shop Now <Image src={rightArrow} className="w-4 h-4 ml-4" />
                </button>
              </div>
              <div className="flex-1 py-[118px] px-[54.2]">
                <Image src={SliderIcon} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-2">
              <div className="py-[182px] px-[100px]">
                <p className="text-[#00B207] text-[1.2rem] font-mediumcal">
                  Welcome to shopery
                </p>
                <h1 className="text-[4.5rem] leading-[5.4rem] font-semibold mt-2">
                  Fresh & Healthy <br />
                  Organic Food
                </h1>
                <p className="mt-7 text-[2rem] font-semibold">
                  Sale up to <span className="text-[#FF8A00]">30% OFF</span>
                </p>
                <p className="text-[#808080] font-normal mt-3 text-[0.875rem] leading-[1.3125rem]">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
                <button className="flex items-center mt-8 py-4 px-10 bg-[#00B207] text-white rounded-[3.3125rem]">
                  Shop Now <Image src={rightArrow} className="w-4 h-4 ml-4" />
                </button>
              </div>
              <div className="flex-1 py-[118px] px-[54.2]">
                <Image src={SliderIcon} />
              </div>
            </div>
          </div>
        </Slider>
       <Image  src={containerIcon } className="  absolute top-[48.9rem] right-96 left-[750px]" />
      </section>
      {/* services section */}
      <section className="flex justify-between bg-[#FFFFFF] px-20 container mx-auto p-[2.5rem] my-[-10px] w-[87.5rem] h-[128px]  rounded-[8px] shadow-lg  absolute top-[65rem] left-64">
        <div className="flex">
          <Image src={deliveryTruck} alt="delivery truck"  />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">Free Shipping</h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">Free shipping on all your order</p>
          </div>
        </div>
        <div className="flex">
          <Image src={headPhonesIcon} alt="head phone" />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">Customer Support 24/7</h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">Instant access to Support</p>
          </div>
        </div>
        <div className="flex">
          <Image src={shoppingIcon}  />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">100% Secure Payment</h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">We ensure your money is save</p>
          </div>
        </div>
        <div className="flex">
          <Image src={packageIcon} alt="package icon"  />
          <div className="ml-4 py-[.5rem]">
            <h1 className="text-[1rem] font-semibold text-[#1A1A1A] font-[Poppins ]">Money-Back Guarantee</h1>
            <p className="mt-2 font-normal text-[#999999] leading-[1.3125rem]">30 Days Money-Back Guarantee</p>
          </div>
        </div>
      </section>
      {/* Features section */}
      <section className="mt-[15.25rem]">
        <h1 className="text-center text-[2.5rem] font-semibold  leading-[2.375rem]">Featured Products</h1>
      </section>
    </main>
  );
}
