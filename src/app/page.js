"use client";
import Image from "next/image";
import { Cart, DownArrow, Heart, location, Logo, Search } from "@/assets";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      {/* Top section */}
      <header className="py-3 border-b-2 border[#E6E6E6]">
        <div className=" container mx-auto flex justify-between">
          <div className=" flex items-center ">
            <Image src={location} alt="location" />
            <span className="ml-2">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center border-r-2 border-[#E6E6E6] pr-5 ">
              <div className="flex items-center">
                <span className="mr-[6px]">Eng</span>
                <Image src={DownArrow} alt="arrow down" />
              </div>
              <div className="flex items-center ml-5">
                <span className="mr-[6px]">USD</span>
                <Image src={DownArrow} alt="arrow down" />
              </div>
            </div>
            <div className="ml-5">
              <span>Sign In</span>
              <span className="ml-1"> / </span>
              <span className="ml-1"> Sign Up</span>
            </div>
          </div>
        </div>
      </header>
    <Hero />
    </div>
  );
}
