"use client"
import React from "react";
import Image from "next/image";
import { About9Icon, BannerIcon, Icon, PlayIcon } from "@/assets/images";
import {
  productIcon1,
  productIcon2,
  productIcon3,
  productIcon4,
  ratingIcon1,
} from "@/assets/shop-page-images";
import { chaniseCabbageICon, GreenAppleIcon } from "@/assets/products";
import Star from "@/components/Start";
import { leafIcon, starsIcon } from "@/assets/about-images";
import { tickIcon } from "@/assets/about-images";
import {
  CartIcon,
  CartICons,
  FacebookIcon,
  farmaryIcon,
  HeartIcon,
  InstaIcon,
  leaf2DIcon,
  PinterestIcon,
  PlayStoreIcon,
  rectangleIcon,
  TwitterIcon,
  whiteIcon,
} from "@/assets/icons";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

const page = () => {
 

 return(
  <>
    <div className="container mx-auto mt-10">
      <div className="w-[1320px] h-[636px] flex bg-[#FFFFFF]  rounded-[8px]">
        <div className="w-[80px] h-[396px] ">
          <Image src={productIcon1} alt="productIcon1" />
          <Image src={productIcon2} alt="productIcon2" />
          <Image src={productIcon3} alt="Product3" />
          <Image src={productIcon4} alt="productIcon4" />
        </div>
        <div className="w-[556px] h-[556px] ml-3">
          <Image
            src={chaniseCabbageICon}
            alt="chaniseCabbageICon"
            height={556}
            width={556}
          />
        </div>
        <div className="  ml-6  w-[568px] h-[152px]">
          <div className="flex">
            <h1 className="text-Heading-04 font-600 text-Gray-9">
              Chinese Cabbage{" "}
            </h1>
            <div className="w-[71px] h-[29px] bg-[#20B52633] mt-[10px] ml-4 rounded-[3px]">
              <h1 className="text-Body-Small text-[#2C742F] font-400 p-1 items-center ml-2 ">
                In Stock
              </h1>
            </div>
          </div>
          {/*  for review section */}
          <div className="flex items-center gap-6 mt-[12px]">
            <div className="flex">
              <Image src={ratingIcon1} alt="ratingIcon" />
              <Image src={ratingIcon1} alt="ratingIcon" />
              <Image src={ratingIcon1} alt="ratingIcon" />
              <Image src={ratingIcon1} alt="ratingIcon" />
              <Image src={ratingIcon1} alt="ratingIcon" />
            </div>

            <span className="text-Body-Small font-400 text-Gray-6 ml-[-10px]">
              {" "}
              4 Review
            </span>
            <p className="text-Body-Small font-500 text-Gray-8 p-1">
              SKU:
              <span className="text-Body-Small font-400 text-Gray-6">
                2,51,594
              </span>
            </p>
          </div>
          {/* for price */}
          <div className="flex items-center  mt-[20px]">
            <p className="line-through text-Body-Large font-400 text-Gray-3">
              $48.00
            </p>
            <p className="text-Body-XXL text-Hard-Primary ml-1">$17.28</p>
            <div className="bg-[#EA4B481A] rounded-[30px] p-1 ml-3">
              <span className="text-Danger">64% Off</span>
            </div>
          </div>
          <hr className="border  mt-[20px]" />
          <div className="w-[568px] h-[56px]  items-center flex">
            <p>Brand:</p>
            <div className="border w-[56px] h-[56px] ml-[8px] flex-col items-center ">
              <Image src={leaf2DIcon} alt="leaf2DIcon" className="mt-3" />
              <Image src={farmaryIcon} alt="farmary" />
            </div>
            <div className="flex items-center ml-[150px]">
              <p className="text-Body-Small font-400 text-Gray-9">
                Share item:
              </p>
              <div className="flex gap-3 ml-3">
                <Image
                  src={FacebookIcon}
                  alt="facebook"
                  className="bg-primary w-[40px] h-[40px] rounded-[500px] p-2 hover:bg-primary hover:text-white cursor-pointer"
                />
                <Image
                  src={InstaIcon}
                  alt="inst"
                  className="w-[40px] h-[40px] rounded-[500px] p-[-20px] hover:bg-primary hover:text-white cursor-pointer"
                />
                <Image
                  src={TwitterIcon}
                  alt="twitter "
                  className="w-[40px] h-[40px] rounded-[500px] p-2 hover:bg-primary hover:text-white cursor-pointer"
                />
                <Image
                  src={PinterestIcon}
                  alt="pinterest"
                  className="w-[40px] h-[40px] rounded-[500px] p-2 hover:bg-primary hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
          <p
            className="mt-[16px] text-Body-Small font-400 text-Gray-5
          "
          >
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
          </p>
          <hr className="border  mt-[20px]" />

          <div className=" w-[647px] h-[88px] flex items-center">
            <div className="w-[124px] h-[50px] -400 border-[1px] rounded-[170px] p-[8px] ">
              <div className="text-4xl flex items-center justify-between ">
                <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                  -
                </p>
                <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                  {" "}
                  5
                </p>
                <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                  +
                </p>
              </div>
            </div>
            <div className="bg-primary w-[447px] h-[51px] rounded-[43px] p-[10px] m-[12px] flex items-center justify-center gap-4">
              <p className="text-center text-white">Add to Cart</p>
              <Image
                src={rectangleIcon}
                className="text-white"
                alt="rectangel"
              />
            </div>
            <div className="bg-[#20B5261A] w-[52px] h-[52px] rounded-[43px] ml-[10px] ">
              <Image
                src={HeartIcon}
                alt="HeartIcon"
                className=" flex items-center m-[10px] p-[2px]"
              />
            </div>
          </div>
          <hr className="border  mt-[20px]" />

          <div className="mt-[24px]">
            <p className="text-Body-Small font-500 text-Gray-9">
              Category:{" "}
              <span className="text-Body-Small font-400 text-Gray-5">
                Vegetables
              </span>
            </p>
            <p className="text-Body-Small font-500 text-Gray-9 mt-[12px]">
              Tag:{" "}
              <span className="text-Body-Small font-400 text-Gray-5">
                Vegetables Healthy
              </span>{" "}
              <span className="text-Body-Small font-400 text-gray-900">
                Chinese{" "}
              </span>
              <span className="text-Body-Small font-400 text-Gray-5">
                Cabbage Green Cabbage
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* down part */}
    <div className="flex  items-center  justify-center gap-4">
      <p className="text-Body-Medium font-500 text-Gray-9">Descriptions</p>
      <p className="text-Body-Medium font-500 text-Gray-5">
        Additional Information
      </p>
      <p className="text-Body-Medium font-500 text-Gray-5">Customer Feedback</p>
    </div>

    <hr className="border  mt-[20px] shadow-lg" />
    <div className="w-[132px] h-[1px] bg-primary  flex  ml-[700px]"></div>
    <div>
      <div className="container mx-auto mt-[32px] flex gap-[136px]">
        <div className="w-[648px] h-[435px] ">
          <p className="text-Body-Small font-400 text-Gray-5">
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
            posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
            vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
            porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
            Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus.
            Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
            scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
            commodo quis, egestas elementum leo. Donec convallis mollis enim.
            Aliquam id mi quam. Phasellus nec fringilla elit.
          </p>
          <p className="text-Body-Small font-400 text-Gray-5 mt-6">
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
            iaculis, metus faucibus elementum tincidunt, turpis mi viverra
            velit, pellentesque tristique neque mi eget nulla. Proin luctus
            elementum neque et pharetra.{" "}
          </p>

          <div className="mt-5 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-primary flex items-center">
              <Image src={whiteIcon} alt=" tick" className="ml-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-5">
              100 g of fresh leaves provides.
            </h1>
          </div>
          <div className="mt-4 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-primary flex items-center">
              <Image src={whiteIcon} alt=" tick" className="ml-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-5 ">
              Aliquam ac est at augue volutpat elementum.
            </h1>
          </div>
          <div className="mt-4 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-primary flex items-center">
              <Image src={whiteIcon} alt=" tick" className="ml-1 text-Gray-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-5">
              Quisque nec enim eget sapien molestie.
            </h1>
          </div>
          <div className="mt-4 flex gap-2 ">
            <div className="w-[20px] h-[20px] rounded-full bg-primary flex items-center">
              <Image src={whiteIcon} alt=" tick" className="ml-1 text-Gray-1" />
            </div>
            <h1 className="text-Body-Small font-400 text-Gray-5">
              Proin convallis odio volutpat finibus posuere.
            </h1>
          </div>
          <p className="text-Body-Small font-400 text-Gray-5 mt-[20px]">
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.{" "}
          </p>
        </div>
        {/* left side */}
        <div>
          <div className="relative">
            <Image src={About9Icon} alt="about9" />
          </div>
          <div className="bg-primary w-[50px] h-[50px] rounded-full flex justify-center absolute  left-[1200px] top-[1120px]">
            <Image src={PlayIcon} alt="PlayIcon" />
          </div>
          <div className="w-[537px] h-[95px] border mt-[20px] rounded-[6px]">
            <div className="flex justify-evenly">
              <div className="flex items-center gap-3 mt-6">
                <Image src={Icon} alt="icon" />
                <div>
                  <h1 className="text-Body-Small font-500 text-Gray-9 ">
                    64% Discount
                  </h1>
                  <p className="text-[13px] font-400 text-Gray-5 mt-[6px]">
                    Save your 64% money with us
                  </p>
                </div>
                <div></div>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <Image src={leafIcon} alt="icon" />
                <div>
                  <h1 className="text-Body-Small font-500 text-Gray-9 ">
                    100% Organic
                  </h1>
                  <p className="text-[13px] font-400 text-Gray-5 mt-[6px]">
                    100% Organic Vegetables
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
   
     
    </div>
    <Footer />
  </>
 )
}

export default page;
