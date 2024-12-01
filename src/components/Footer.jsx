import React from 'react'
import Image from 'next/image'
import { Logo } from '@/assets/images'
import { AppleIcon, CartICons, FacebookIcon, InstaIcon, MethodApplePayIcon, MethodDiscoverIcon, MethodMasterCardIcon, MethodVisaIcon, PinterestIcon, PlayStoreIcon, TwitterIcon } from '@/assets/icons'


const Footer = () => {
  return (
    <>
      <div className=' bg-Gray-0.5 mt-[100px] py-12'>
        <div className='flex justify-between container mx-auto '>
          <Image src={Logo} alt='logo' className='mt-[55px]' />
          <div>
            <h1 className='text-Body-XXL font-500 mt-[55px]'> Subcribe our Newsletter</h1>
            <p className='text-Body-Small font-400 text-Gray-4 '>Pellentesque eu nibh eget mauris congue mattis matti.</p>
          </div>
          <div className='flex items-center mt-[55px]'>
            <form action="#">
            <input type="text" className='border-2 p-2 w-[491px] bg-white py-4  rounded-l-[46px] relative' placeholder='Your email address' />
            <button className='bg-primary text-Body-Medium text-white  py-4 px-10 mr-10 rounded-[46px] absolute right-[112px]'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <section className='bg-black  '>
        <div className='container mx-auto flex  justify-between py-12'>
          <div className='text-white'>
            <h1 className='text-Body-XL font-500'>About Shopery</h1>
            <p className='text-Body-Small font-400 text-Gray-5 mt-4'>Morbi cursus porttitor enim lobortis molestie.
              <br /> Duis gravida
              turpis dui, eget bibendum magna congue nec.</p>
            <p className='mt-4 border-b border-green-500'>(219) 555-0114 <span className='ml-4 mr-4'> or</span> Proxy@gmail.com </p>
          </div>
          <div className='text-white'>
            <h1 className='text-Body-XL font-500'>My Account</h1>
            <h1 className='text-Body-Small mt-5 text-Gray-5'>Account</h1>
            <h1 className='text-Body-Small mt-3'>Shoping Cart</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Wishlist</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Settings</h1>
          </div>
          <div className='text-white'>
            <h1 className='text-Body-XL font-500'>Helps</h1>
            <h1 className='text-Body-Small mt-5 text-Gray-5'>Contact</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Faqs</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Terms & Condition</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Privacy Policy</h1>
          </div>
          <div className='text-white'>
            <h1 className='text-Body-XL font-500'>Proxy</h1>
            <h1 className='text-Body-Small mt-5 text-Gray-5'>About</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Shop</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Product</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Products Details</h1>
            <h1 className='text-Body-Small mt-3 text-Gray-5'>Track Order</h1>
          </div>
          <div className='text-white '>
            <h1 className='text-Body-XL font-500'>Download our Mobile App</h1>
            <div className='mt-5 flex gap-2 '>
              <div className='flex items-center bg-Gray-8 py-3 p-3 w-40'>
                <Image src={AppleIcon} />
                <div>
                  <p className='ml-[6px] text-Gray-3 text-[11px]'>Download on the</p>
                  <h1 className='ml-[6px] text-Body-Medium'>App Store</h1>
                </div>
              </div>

              <div className='flex items-center bg-Gray-8 py-3 p-3 w-40'>
                <Image src={PlayStoreIcon} />
                <div>
                  <p className='ml-[6px] text-Gray-3 text-[11px]'>Download on the</p>
                  <h1 className='ml-[6px] text-Body-Medium'>Google play</h1>
                </div>
              </div>
            </div>
          
          </div>
          
        </div>
        <hr className='border-b border-Gray-8 container mx-auto' />

        <div className='mt-6 flex items-center container mx-auto justify-between'>
          <div className='flex gap-4'>
            <Image src={FacebookIcon} alt="facebook" />
            <Image src={InstaIcon} alt="inst" /> 
            <Image  src={TwitterIcon} alt="twitter"/>
            <Image  src={PinterestIcon} alt="pinter"/>
          </div>
          <div className='text-white'>
            <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          </div>
          <div className='flex gap-2'>
         <Image src={MethodApplePayIcon} alt="methodapple" />
         <Image src={MethodDiscoverIcon} alt="methodDescover" />
         <Image src={MethodVisaIcon} alt="MethodVisaIcon"/>
         <Image src={MethodMasterCardIcon}  alt="MethodMasterCardIcon"/>
         <Image src={CartICons} alt="CartICons" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer