import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderIcon } from "@/assets/images";
import rightArrow from '@/assets/images/right-arrow.svg';
import Image from "next/image";
import Pagination from './Pagination';
import { sliderData } from '@/assets/sliderData';
import { motion } from "framer-motion";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const moveToIndex = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="px-4">
      <section className="container mx-auto bg-[#EDF2EE] rounded-[8px] relative w-full lg:w-[95rem] h-auto lg:h-[804px] mt-6">
        <Slider
          ref={sliderRef}
          {...settings}
          afterChange={(event) => {
            setActiveIndex(event);
          }}
        >
          {sliderData.map((sliderItem) => (
            <div key={sliderItem.id}>
              <div className="flex flex-col lg:flex-row">
                <div className="py-[50px] lg:py-[182px] px-[20px] lg:px-[100px]">
                  <p className="text-primary text-Body-Small lg:text-[1.2rem] font-500">
                    {sliderItem.title}
                  </p>
                  <h1 className="text-display-01 lg:text-[4.5rem] leading-[2.5rem] lg:leading-[5.4rem] font-600 mt-2">
                    {sliderItem.subTitle} <br /> {sliderItem.subTitle1}
                  </h1>
                  <p className="mt-4 lg:mt-7 text-Heading-05 lg:text-[2rem] font-400">
                    Sale up to <span className="text-Warning text-Heading-05 font-600">{sliderItem.discount}</span>
                  </p>
                  <p className="text-Gray-5 font-400 mt-3 text-Body-Small">
                    {sliderItem.description}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    className="flex items-center mt-6 lg:mt-8 py-3 lg:py-4 px-6 lg:px-10 bg-primary text-white rounded-[3.3125rem] hover:bg-green-700 transition duration-150 ease-in-out"
                  >
                    Shop Now
                    <motion.div
                      className="w-4 h-4 ml-1"
                      initial={{ x: 0 }}
                      animate={{ x: 11 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.5,
                      }}
                    >
                      <Image src={rightArrow} alt="right arrow" />
                    </motion.div>
                  </motion.button>
                </div>
                <div className="flex-1 py-[50px] lg:py-[118px] px-[20px] lg:px-[54px]">
                  <Image src={SliderIcon} alt="slider icon" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Pagination activeIndex={activeIndex} moveToIndex={moveToIndex} />
      </section>
    </div>
  );
};

export default ImageSlider;
