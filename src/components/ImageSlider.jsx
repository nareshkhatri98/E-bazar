import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rightArrow, SliderIcon, } from "@/assets/images";
import Image from "next/image";

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
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
                  Shop Now{" "}
                  <Image
                    src={rightArrow}
                    className="w-4 h-4 ml-4"
                    alt="right arrow"
                  />
                </button>
              </div>
              <div className="flex-1 py-[118px] px-[54.2]">
                <Image src={SliderIcon} alt="slider icon" />
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
                  Shop Now{" "}
                  <Image
                    src={rightArrow}
                    className="w-4 h-4 ml-4"
                    alt="right arrow"
                  />
                </button>
              </div>
              <div className="flex-1 py-[118px] px-[54.2]">
                <Image src={SliderIcon} alt="slider img" />
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </div>
  )
}

export default ImageSlider