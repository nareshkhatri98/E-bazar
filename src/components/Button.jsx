import React from 'react'
import Image from "next/image";
import { rightArrow, VectorIcon } from '@/assets/images';
import { motion } from "framer-motion"
const Button = () => {
  return (
    <div>
     <button className='bg-[#FFFFFF] flex items-center w-[162px] h-[45px] p-6 round text-[1rem] font-semibold text-[#20B526] rounded-[43px] mt-4' >Shop now <Image src={VectorIcon} alt='vector icon' className='ml-2 text-[#00B207]' /></button>
    </div>
  )
}

export default Button