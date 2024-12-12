"use client"
import NavbarBakup from '@/components/NavbarBakup'
import React from 'react'
import BannerSection from '../Checkout/BannerSection'
import Footer from '@/components/Footer'

const WishList= () => {
  return (
    <>
    <NavbarBakup/>
    <BannerSection pageType='wishlist'/>
    <h1 className='text-Heading-05 font-600 text-Gray-9 text-center mt-10'>My Wishlist</h1>
    <div className="w-[1320px] h-auto bg-red-400"></div>
    <Footer/>
    </>
  )
}

export default WishList