import React from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@/assets/icons";
import {
  productIcon1,
  productIcon2,
  productIcon3,
  productIcon4,
  ratingIcon1,
} from "@/assets/shop-page-images";
import { rectangleIcon, HeartIcon } from "@/assets/icons";
import {
  InstaIcon,
  TwitterIcon,
  leaf2DIcon,
  PinterestIcon,
  farmaryIcon,
  FacebookIcon,
} from "@/assets/icons";
import { chaniseCabbageICon } from "@/assets/products";
import { closeIcon } from "@/assets/images";

const page = () => {
  return (
    <>
     
      <div className="container mx-auto mt-12 relative">
        <div className="w-[1320px] h-[636px] border-[1px]">
          <div className="flex ">
            {/* for left side */}
            <div className="w-[648px] h-[556px] m-10">
              <div className="flex">
                <div>
                  {/* for arrow */}
                  <div className=" ml-5">
                    <button>
                      <Image
                        src={ArrowDownIcon}
                        className="rotate-180 w-[24px] h-[24px]"
                      />
                    </button>
                  </div>
                  {/* for images */}
                  <div className="w-[80px] h-[396px]  mt-[56px]">
                    <Image
                      src={productIcon4}
                      alt="productIcon4"
                      className="cursor-pointer mt-3"
                    />
                    <Image
                      src={productIcon2}
                      alt="productIcon2"
                      className="cursor-pointer mt-3"
                    />
                    <Image
                      src={productIcon3}
                      alt="productIcon3"
                      className="cursor-pointer mt-3"
                    />
                    <Image
                      src={productIcon1}
                      alt="productIcon1"
                      className="cursor-pointer mt-3"
                    />
                  </div>
                  <div>
                    <button className="mt-[56px] ml-5">
                      <Image src={ArrowDownIcon} width={24} height={24} />
                    </button>
                  </div>
                </div>
                {/* for image */}
                <div className="w-[556px] h-[556px] ">
                  <Image
                    src={chaniseCabbageICon}
                    alt="chaniseCabbageICon "
                    width={556}
                    height={556}
                  />
                </div>
              </div>
            </div>

            {/* for right side */}
            <div className="w-[568px] h-[501px]  mt-10">
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
              <div className=" flex mt-3 items-center">
                <Image src={ratingIcon1} />
                <Image src={ratingIcon1} />
                <Image src={ratingIcon1} />
                <Image src={ratingIcon1} />
                <Image src={ratingIcon1} />
                <span className="text-Body-Small font-400 text-Gray-6 ml-[5px]">
                  {" "}
                  4 Review
                </span>
                <p className="text-Body-Small font-500 text-Gray-8 p-1 ml-[31px]">
                  SKU:
                  <span className="text-Body-Small font-400 text-Gray-6">
                    2,51,594
                  </span>
                </p>
              </div>
              {/* price section */}
              <div className="flex items-center  mt-[10px]">
                <p className="line-through text-Body-Large font-400 text-Gray-3">
                  $48.00
                </p>
                <p className="text-Body-XXL text-Hard-Primary ml-1">$17.28</p>
                <div className="bg-[#EA4B481A] rounded-[30px] p-1 ml-3">
                  <span className="text-Danger">64% Off</span>
                </div>
              </div>
              <hr className="mt-[24px]" />
              {/* brand section */}
              <div className="w-[568px] h-[56px]  items-center flex mt-6">
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
              </div>{" "}
              <p
                className=" text-Body-Small font-400 text-Gray-5 mt-[16px]
          "
              >
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.{" "}
              </p>
              <hr className="mt-[24px]" />
              {/* cart section */}
              <div className=" w-[568px] h-[88px] flex items-center ">
                <div className="w-[124px] h-[50px] -400 border-[1px] rounded-[170px] p-[8px] ">
                  <div className="text-4xl flex items-center justify-between ">
                    <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                      -
                    </button>
                    <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                      {" "}
                      5
                    </p>
                    <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                      +
                    </button>
                  </div>
                </div>
                <button className="bg-primary w-[368px] h-[51px] rounded-[43px] p-[10px] m-[12px] flex items-center justify-center gap-4">
                  <p className="text-center text-white">Add to Cart</p>
                  <Image
                    src={rectangleIcon}
                    className="text-white"
                    alt="rectangel"
                  />
                </button>
                <div className="bg-[#20B5261A] w-[52px] h-[52px] rounded-[43px] mr-[10px] ">
                  <Image
                    src={HeartIcon}
                    alt="HeartIcon"
                    className=" flex items-center m-[10px] p-[2px]"
                  />
                </div>
              </div>
              <hr className="mt-[18.5px]" />
              {/* for tags */}
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
      </div>
      <div className=" absolute  top-[250px] left-[1490px] ">
       <button> <Image src={closeIcon}/></button>
     </div>
    </>
  );
};

export default page;
