import React, { useRef } from 'react';
import Image from 'next/image';
import { topCategory } from '@/assets/TopCategory';
import { rightArrow } from '@/assets/images';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCategory = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 slides at once
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: false,
    variableWidth: false,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='container mx-auto'>
      <section className='mt-[6.25rem]'>
        <h1 className="text-center text-[2.5rem] font-semibold leading-[2.375rem]">
          Top Category
        </h1>
        <div className="flex items-center justify-center gap-1 mt-4">
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700"></div>
          <div className="w-[40px] h-[4px] bg-[#00B207]"></div>
          <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700"></div>
        </div>

        <div className='m-2 relative'>
          <Slider ref={sliderRef} {...settings}>
            {topCategory.map((topcategory, index) => (
              <div key={index} className='mt-[50px]'>
                <div className='w-[200px] h-[210px] bg-gray-1 flex flex-col items-center border rounded-[6px]'>
                  <Image 
                    src={topcategory.image} 
                    alt={topcategory.title}
                    
                    className='mt-[32px]'
                  />
                  <h1 className='mt-[10px]'>{topcategory.title}</h1>
                  <p>{topcategory.no}</p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <div 
            className='absolute top-[50%] left-[-60px] rotate-180 bg-gray-300 w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer transform -translate-y-1/2' 
            onClick={prevSlide}
          >
            <Image src={rightArrow} alt="Previous Arrow" />
          </div>
          <div 
            className='absolute top-[50%] right-[-25px] bg-gray-300 w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer transform -translate-y-1/2' 
            onClick={nextSlide}
          >
            <Image src={rightArrow} alt="Next Arrow" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
