import { leftIcon, rightArrow } from '@/assets/images'; // Assuming you're using Next.js for importing images
import React, { useRef } from 'react';
import Image from 'next/image';
import { Client1, ClientDetails, InvertedComma } from '@/assets/Clinet-Testimonial';
import { ratingIcon } from '@/assets/products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pagination from './Pagination';

const ClientTestimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className='mt-[6.25rem] container mx-auto bg-[#EDF2EE] p-[6.25rem]'>
      {/* Header Section */}
      <div className='flex items-center justify-between'>
        <h1 className="text-Heading-03 font-bold ml-24">Client Testimonial</h1>
        <div className='flex gap-3 mr-32'>
          {/* Previous Button */}
          <div onClick={prevSlide} className='w-[45px] h-[45px] bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'>
            <Image src={leftIcon} alt="previous" />
          </div>
          {/* Next Button */}
          <div onClick={nextSlide} className='w-[45px] h-[45px] bg-primary rounded-full flex justify-center items-center cursor-pointer'>
            <Image src={rightArrow} alt="next" />
          </div>
        </div>
      </div>

      {/* Underline Decoration */}
      <div className="flex justify-start gap-1 mt-4 ml-24">
        <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700"></div>
        <div className="w-[40px] h-[4px] bg-primary"></div>
        <div className="w-[12px] h-[4px] opacity-[30%] bg-green-700"></div>
      </div>

      {/* Slider Section */}
      <div className='mt-8'>
        <Slider ref={sliderRef} {...settings}>
          {ClientDetails.map((client, index) => (
            <div className='px-4' key={index}>
              <div className='w-[424px] h-[254px] bg-white rounded-md shadow-lg p-6'>
              
                <Image src={InvertedComma} className='py-6' alt='inverted-comma' />
                <p className='text-Body-Small mb-4'>{client.description}</p>
                <div className='flex items-center justify-between '>
                  <div className="flex items-center gap-3 ">
                    <Image src={Client1} alt='client'  className='mb-6'/>
                    <div>
                      <h1 className='text-Body-Small font-bold font-600 text-gray-900'>{client.name}</h1>
                      <p className='text-Body-Small font-normal text-gray-600 mb-6'>{client.role}</p>
                    </div>
                  </div>
                  <div>
                    <Image src={ratingIcon} alt='rating' className='mb-6' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientTestimonial;
