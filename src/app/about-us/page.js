"use client";
import React from "react";

import Image from "next/image";
import {
  aboutICon1,
  aboutIcon2,
  aboutIcon3,
  aboutIcon4,
  aboutIcon5,
  aboutIcon6,
  aboutIcon7,
  backgroundIcon,
  leafIcon,
  starsIcon,
  tickIcon,
} from "@/assets/about-images";
import {
  containerIcon,
  deliveryTruck,
  headPhonesIcon,
  packageIcon,
  shoppingIcon,
} from "@/assets/images";
import { rightArrow } from "@/assets/images";
import ClientTestimonial from "@/components/ClientTestimonial";
import TestMonial from "./TestMonial";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { bannerIcon } from "@/assets/Banner";
import NavbarBakup from "@/components/NavbarBakup";
import { HomeIcon } from "@/assets/shop-page-images";
import { ArrowDownIcon } from "@/assets/icons";

const Page = () => {
  return (
    <>
    <hr />
    <NavbarBakup />
    <div className="relative w-full h-[120px] ">
        <Image src={bannerIcon} alt="banner" className="h-full w-full object-cover rotate-180"/>
      </div>
      <div className="w-[1364px] h-[492px] container mx-auto flex mt-[80px]">
      <div className="absolute top-64 flex gap-3 mt-[48px]">
          <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-Body-Medium font-400 text-primary cursor-pointer ">
            About
          </span>
        </div>
        <div className=" w-[50%] h-[100%]">
          <h1 className="text-Heading-01 font-600 mt-[96px] text-gray-900">
            100% Trusted <br />
            Organic Food Store
          </h1>
          <p className="text-Body-Large font-400 text-Gray-6 mr-[58px] mt-8">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
        <div className=" w-[50%] h-[100%]">
          <Image src={aboutICon1} alt="aboutIcon2" />
        </div>
      </div>

      {/* button about section */}
      <div className="w-[1920px] h-[685px]  mt-[80px] flex">
        <div className="w-[50%] h-[100%] relative">
          <Image src={backgroundIcon} alt=" backgroundIcon" height={685} />
        </div>
        <div className="absolute top-[100] left-52 ">
          <Image src={aboutIcon2} alt="about2" height={582} />
        </div>
        <div className="w-[50%] h-[100%] ">
          <div className="w-[544px] h-[134px]">
            <h1 className="text-Heading-01 text-Gray-9 font-600 mt-[80px]">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-Body-Medium font-400 text-Gray-6 mt-5">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
            </p>
          </div>

          {/* for services */}
          <div className="flex items-center gap-[24px]">
            <div>
              <div className="mt-28 flex">
                <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
                  <Image src={leafIcon} alt="leaf" className="ml-3" />
                </div>
                <div>
                  <h1 className="ml-4 text-Body-Large font-500 text-Gray-9">
                    100% Organic food
                  </h1>
                  <p className="ml-4 text-Body-Small font-400 text-Gray-5">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex">
                <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
                  <Image src={starsIcon} alt="leaf" className="ml-3" />
                </div>
                <div>
                  <h1 className="ml-4 text-Body-Large font-500 text-Gray-9">
                    100% Organic food
                  </h1>
                  <p className="ml-4 text-Body-Small text-Gray-5 font-400">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex">
                <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
                  <Image src={deliveryTruck} alt="leaf" className="ml-3" />
                </div>
                <div>
                  <h1 className="ml-4 text-Body-Large font-500 text-Gray-9">
                    100% Organic food
                  </h1>
                  <p className="ml-4 text-Body-Small text-Gray-5 font-400">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-28 flex">
                <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
                  <Image src={headPhonesIcon} alt="leaf" className="ml-3" />
                </div>
                <div>
                  <h1 className="ml-4 text-Body-Large font-500 text-Gray-9">
                    100% Organic food
                  </h1>
                  <p className="ml-4 text-Body-Small font-400 text-Gray-5">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex">
                <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
                  <Image src={shoppingIcon} alt="leaf" className="ml-3" />
                </div>
                <div>
                  <h1 className="ml-4 text-Body-Large font-500 text-Gray-9">
                    100% Organic food
                  </h1>
                  <p className="ml-4 text-Body-Small text-Gray-5 font-400">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex">
                <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
                  <Image src={packageIcon} alt="leaf" className="ml-3" />
                </div>
                <div>
                  <h1 className="ml-4 text-Body-Large font-500 text-Gray-9">
                    100% Organic food
                  </h1>
                  <p className="ml-4 text-Body-Small text-Gray-5 font-400">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Delivered, You Enjoy Your Order. */}
      <div className="flex w-[1476px] h-[616px] mt-[80px]  container mx-auto">
        <div className="w-[552px] h-[431px] mt-[80px]">
          <h1 className="text-Heading-02 font-600 text-Gray-9">
            We Delivered, You <br />
            Enjoy Your Order.
          </h1>
          <p className="text-Body-Medium font-400 text-Gray-6  mt-[-40px]">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          {/* for bottom part */}
          <div className="mt-5 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#00B2071A] flex items-center">
              <Image src={tickIcon} alt=" tick" className="ml-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-6">
              Sed in metus pellentesque.
            </h1>
          </div>
          <div className="mt-4 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#00B2071A] flex items-center">
              <Image src={tickIcon} alt=" tick" className="ml-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-6">
              Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
            </h1>
          </div>
          <div className="mt-4 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-[#00B2071A] flex items-center">
              <Image src={tickIcon} alt=" tick" className="ml-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-6">
              Maecenas ut nunc fringilla erat varius.
            </h1>
          </div>

          <button className="bg-primary flex items-center w-[162px] h-[45px] p-6 round text-Body-Small font-600 text-white rounded-[43px] mt-8">
            Shop now{" "}
            <Image src={rightArrow} alt="vector icon" className="ml-2" />
          </button>
        </div>
        <div className="w-[895px] h-[606px]">
          <Image src={aboutIcon3} />
        </div>
      </div>

      {/* Our Awesome Team */}
      <div className="w-[1920px] h-[736px] bg-custom-gradient">

        <div>
          <div className="w-[640px] h-[150px] ml-[640px] py-[80px]">
            <h1 className="text-Heading-02 text-Gray-9 font-600  text-center ">
              Our Awesome Team
            </h1>

            <p className="text-Body-Medium font-400 text-Gray-6 text-center ">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi.
            </p>
          </div>
          {/*  for cards */}
        <div className="flex items-center gap-6 mt-20 container mx-auto mr-16">
        <div className="w-[312px] h-[368px] bg-[#FFFF] rounded-[20px]">
            <Image src={aboutIcon4}/>
            <h1>Jenny Wilson</h1>
            <p>Ceo & Founder</p>
          </div>
          <div className="w-[312px] h-[368px] bg-[#FFFF] rounded-[20px]">
            <Image src={aboutIcon7}/>
            <h1>Jenny Wilson</h1>
            <p>Ceo & Founder</p>
          </div>
          <div className="w-[312px] h-[368px] bg-[#FFFF] rounded-[20px]">
            <Image src={aboutIcon6}/>
            <h1>Jenny Wilson</h1>
            <p>Ceo & Founder</p>
          </div>
          <div className="w-[312px] h-[368px] bg-[#FFFF] rounded-[20px]">
            <Image src={aboutIcon5}/>
            <h1>Jenny Wilson</h1>
            <p>Ceo & Founder</p>
          </div>

        </div>
        </div>
      </div>
    <TestMonial />
    <Footer />
      
    </>
  );
};

export default Page;