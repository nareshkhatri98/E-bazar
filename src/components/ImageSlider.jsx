// components/ImageSlider.js
import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { closeIcon, popupImage, SliderIcon } from "@/assets/images";
import rightArrow from '@/assets/images/right-arrow.svg';
import Image from "next/image";
import Pagination from './Pagination';
import { sliderData } from '@/assets/sliderData';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';


const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const sliderRef = useRef(null);

  // Redux state
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);  // Access authentication status

  const router = useRouter();

  useEffect(() => {
    // Simulating a check for an existing user session (e.g., checking localStorage or cookies)
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      dispatch(setAuthenticated(true));  // Update Redux state if already authenticated
    }
    
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [dispatch]);

  const moveToIndex = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const handleRedirect = () => {
    if (!isAuthenticated) {
      router.push('/login');  // Redirect to login page if not authenticated
    } else {
      router.push('/shop');  // Redirect to shop page if authenticated
    }
  };

  return (
    <div className="px-4 relative">
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
                    onClick={handleRedirect}
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

        {/* Popup section */}
        {showPopup && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[872px] h-[400px] rounded-[8px] flex bg-white shadow-lg z-50">
            <div>
              <Image src={popupImage} alt="popupImage" className="w-[354px] h-[380px] rounded-[4px] mt-[10px] ml-[10px]" />
            </div>
            <div className="right-4 top-[8px] text-3xl absolute cursor-pointer" onClick={() => setShowPopup(false)}>
              <Image src={closeIcon} alt="close icon" />
            </div>
            <div>
              <h1 className="text-Heading-03 font-600 text-Gray-9 ml-10 mt-[50px] text-center">
                Subscribe to Our <span className="ml-10">Newsletter</span>
              </h1>
              <p className="text-Body-Medium font-400 text-Gray-4 ml-10 text-center mt-[10px]">
                Subscribe to our newsletter and Save your <span className="font-600 text-Warning">20% money</span> with discount code today.
              </p>
              <div className="flex items-center mt-[24.5px]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-[343px] h-[49px] ml-[40px] border-2 rounded-l-[46px] p-5"
                />
                <button className="w-[147px] h-[49px] bg-primary text-Body-Small font-600 text-white ml-[-20px] rounded-[46px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ImageSlider;
