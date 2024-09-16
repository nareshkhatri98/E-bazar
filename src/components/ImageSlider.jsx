import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderIcon, } from "@/assets/images";
import rightArrow from '@/assets/images/right-arrow.svg';
import Image from "next/image";
import Pagination from './Pagination';
import { sliderData } from '@/assets/sliderData';
import { useState, useRef } from 'react';
import { motion } from "framer-motion"

const ImageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  console.log(sliderRef);

  const moveToIndex = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div>
      <section className="container mx-auto bg-[#EDF2EE] w-[95rem] h-[804px] mt-6 rounded-[8px] relative ">
        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={(event) => {
            setActiveIndex(event);
          }}
        >
          {
            sliderData.map((sliderItem) => (
              <div key={sliderItem.id}>
                <div className="flex flex-2">
                  <div className="py-[182px] px-[100px]">
                    <p className="text-[#00B207] text-[1.2rem] font-mediumcal">
                      {sliderItem.title}
                    </p>
                    <h1 className="text-[4.5rem] leading-[5.4rem] font-semibold mt-2">
                      {sliderItem.subTitle} <br /> {sliderItem.subTitle1}
                    </h1>
                    <p className="mt-7 text-[2rem] font-semibold">
                      Sale up to <span className="text-[#FF8A00]">{sliderItem.discount}</span>
                    </p>
                    <p className="text-[#808080] font-normal mt-3 text-[0.875rem] leading-[1.3125rem]">
                      {sliderItem.description}
                    </p>
                    <motion.button whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }} className="flex items-center mt-8 py-4 px-10 bg-[#00B207] text-white rounded-[3.3125rem] hover:bg-green-700 transition duration-150 ease-in-out ">
                      Shop Now{" "}
                      <motion.div
                        className="w-4 h-4 ml-1"
                        initial={{ x: 0 }}
                        animate={{ x: 11 }} // Move 10px to the right
                        transition={{
                          repeat: Infinity, 
                          repeatType: "reverse",
                          duration: 0.5, 
                        }}
                      >
                        <Image
                          src={rightArrow}
                          alt="right arrow"

                        />
                      </motion.div>
                    </motion.button>
                  </div>
                  <div className="flex-1 py-[118px] px-[54.2]">
                    <Image src={SliderIcon} alt="slider icon" />
                  </div>
                </div>
              </div>

            ))
          }
        </Slider>
        <Pagination activeIndex={activeIndex} moveToIndex={moveToIndex} />
      </section>

    </div>
  )
}

export default ImageSlider