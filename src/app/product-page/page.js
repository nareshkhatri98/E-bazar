import React from "react";
import Image from "next/image";
import { BannerIcon } from "@/assets/images";
import {
  productIcon1,
  productIcon2,
  productIcon3,
  productIcon4,
  ratingIcon1,
} from "@/assets/shop-page-images";
import { chaniseCabbageICon } from "@/assets/products";
import Star from "@/components/Start";
import { starsIcon } from "@/assets/about-images";

const page = () => (
  <>
    <div className="container mx-auto mt-10">
      <div className="w-[1320px] h-[636px] flex bg-[#FFFFFF] border rounded-[8px]">
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
            width={556} />
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

            <span className="text-Body-Small font-400 text-Gray-6 ml-[-10px]"> 4 Review</span>
            <p className="text-Body-Small font-500 text-Gray-8 p-1">SKU:
              <span className="text-Body-Small font-400 text-Gray-6">2,51,594</span></p>
          </div>
            {/* for price */}
            <div className="flex items-center  mt-[20px]">
              <p className="line-through text-Body-Large font-400 text-Gray-3">$48.00</p>
              <p className="text-Body-XXL text-Hard-Primary ml-1">$17.28</p>
              <div className="bg-[#EA4B481A] rounded-[30px] p-1 ml-3">
                <span className="text-Danger">64% Off</span>

              </div>
              
            </div>
            <hr className="border  mt-[20px]" />
            <div className="w-[568px] h-[56px] bg-red-400 items-center">
              <p>Brand:</p>

            </div>

        </div>
      </div>
    </div>
  </>
);

export default page;
