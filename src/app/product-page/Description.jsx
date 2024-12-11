import React from 'react'
import Image from 'next/image'
import { About9Icon } from '@/assets/images'
import { PlayIcon } from '@/assets/images'
import { Icon } from '@/assets/images'
import { leafIcon } from '@/assets/about-images'
import { whiteIcon } from '@/assets/icons'
import Footer from '@/components/Footer'

const Description = () => {
  return (
    <>
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
    <Footer/>
    </>
  )
}

export default Description