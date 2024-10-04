import React from 'react'
import Image from 'next/image'
import { Logo } from '@/assets/images'
import Button from './Button'

const Footer = () => {
  return (
    <div className='container mx-auto bg-Gray-0.5 mt-[100px]'>
      <div className='flex justify-between '>
        <Image src={Logo} alt='logo' className='mt-[55px]' />
        <div>
          <h1 className='text-Body-XXL font-500 mt-[55px]'> Subcribe our Newsletter</h1>
          <p className='text-Body-Small font-400 text-Gray-4 '>Pellentesque eu nibh eget mauris congue mattis matti.</p>
        </div>
        <div className='flex items-center mt-[55px]'>
          <input type="text" className='border-2 p-2 w-[491px] bg-white  h-[52px] rounded-[46px]' placeholder='Your email address' />
          <Button />
        </div>
      </div>


    </div>
  )
}

export default Footer