import React from 'react';
import Image from 'next/image';
import { bannerIcon } from '@/assets/Banner';
import { HomeIcon } from '@/assets/shop-page-images';
import { ArrowDownIcon } from '@/assets/icons';

const BannerSection = ({ 
  children, 
  variant = "", 
  pageType = "", // New prop for page type
  ...props 
}) => {
  const getTitle = () => {
    switch (pageType) {
      case 'login':
        return 'Login';
      case 'register':
        return 'Register';
      case 'product-details':
        return 'Product Details';
      case 'checkout':
        return 'Checkout';
      case 'cart':
        return 'Shopping Cart';
       case 'contact':
        return 'Contact Us';
      case 'about':
        return 'About Us';
      
        case 'wishlist':
          return 'Wishlist'
      
      default:
        return 'Welcome to Our Shop';
    }
  };

  return (
    <div {...props}>
      <div className="relative w-[1920px] h-[120px]">
        <Image
          src={bannerIcon}
          alt="banner"
          className="h-full w-full object-cover rotate-180"
        />
      </div>
      <div className="container mx-auto">
        <div className="absolute top-64 flex gap-3 mt-[48px]">
          <Image
            src={HomeIcon}
            alt="Home icon"
            className="cursor-pointer"
          />
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-Body-Medium font-400 cursor-pointer text-primary">
            {getTitle()} {/* Dynamically rendered page title */}
          </span>
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
