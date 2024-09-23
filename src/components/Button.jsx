import React from 'react'
import Image from "next/image";
import { rightArrow, VectorIcon } from '@/assets/images';
import { motion } from "framer-motion"
const Button = () => {
  return (
    <div>
     <button className='bg-white flex items-center w-[162px] h-[45px] p-6 round text-Body-Small font-600 text-primary rounded-[43px] mt-4' >Shop now <Image src={VectorIcon} alt='vector icon' className='ml-2 text-[#00B207]' /></button>
    </div>
  )
}

export default Button