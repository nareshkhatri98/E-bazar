import React from 'react';
import Image from 'next/image';
import { ArrowDownIcon, PhoneIcon } from '@/assets/icons';
import { motion } from "framer-motion"
import SubHeroSection from './SubHeroSection';

const menuItem = [
  { name: 'Home', hasDropDown: true  },
  { name: 'Shop', hasDropDown: true },
  { name: 'Pages', hasDropDown: true },
  { name: 'Blog', hasDropDown: true },
  { name: 'About Us', hasDropDown: false },
  { name: 'Contact Us', hasDropDown: false }
];

const Navbar = () => {
  return (
    <>
      <SubHeroSection />
      <div className="bg-[#333333]">
        <div className="flex text-white items-center justify-between container mx-auto">
          <ul className="flex items-center py-[1.1875rem]">
            {menuItem.map((item, index) => (
              <li key={index} className="flex items-center mr-8">
                <a href="#" className="text-[#999999]">
                  {item.name}
                </a>
                {item.hasDropDown && (
                  <Image
                    src={ArrowDownIcon}
                    alt="dropdown-arrow"
                    className="ml-1 h-4 w-4 cursor-pointer"
                  />
                )}
              </li>
            ))}
          </ul>
          
          {/* Right side menu with phone icon */}
          <div className="flex items-center">
            <motion.div 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            

            >
            <Image src={PhoneIcon} alt="phone-icon" className="h-8 w-8 cursor-pointer" />
            </motion.div>
            
            <span className="ml-2 text-[0.875rem] font-medium">
              (219) 555-0114
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
