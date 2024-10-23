"use client";
import React from "react";

import Image from "next/image";
import {
  aboutICon1,
  aboutIcon2,
  backgroundIcon,
  leafIcon,
} from "@/assets/about-images";

const Page = () => {
  return (
    <>
      <div className="w-[1364px] h-[492px] container mx-auto flex mt-[80px]">
        <div className=" w-[50%] h-[100%]">
          <h1 className="text-Heading-01 font-600 mt-[96px] text-gray-900">
            100% Trusted <br />
            Organic Food Store
          </h1>
          <p className="text-Body-Large font-400 text-Gray-6 mr-[58px]">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
        <div className=" w-[50%] h-[100%]">
          <Image src={aboutICon1} alt="aboutIcon2" />
        </div>
      </div>

      {/* button about section */}
      <div className="w-[1920px] h-[685px]  mt-[80px] flex">
        <div className="w-[50%] h-[100%] relative">
          <Image src={backgroundIcon} alt=" backgroundIcon" height={685} />
        </div>
        <div className="absolute top-[100] left-52 ">
          <Image src={aboutIcon2} alt="about2" height={582} />
        </div>
        <div className="w-[50%] h-[100%] ">
          <div className="w-[544px] h-[134px]">
            <h1 className="text-Heading-01 text-Gray-9 font-600 mt-[80px]">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-Body-Medium font-400 text-Gray-6">
              Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
              Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a
              a mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
            </p>
          </div>

          {/* for services */}
          <div className="mt-20 flex">
            <div className="bg-[#00B2071A] rounded-full h-[72px] w-[72px] flex items-center ">
              <Image src={leafIcon} alt="leaf"  className="ml-3"/>
            </div>
           <div>
           <h1>100% Organic food</h1>
           <p>100% healthy & Fresh food.</p>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
