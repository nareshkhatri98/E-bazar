import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownIcon, PhoneIcon } from '@/assets/icons';
import { motion } from 'framer-motion';

const menuItem = [
  { name: 'Home', href: '/', hasDropDown: true },
  { name: 'Shop', href: '/shop', hasDropDown: true },
 
  { name: 'About Us', href: '/about-us', hasDropDown: false },
  { name: 'Contact Us', href: '/contact', hasDropDown: false },
];
const NavbarBakup = () => {
  return (
    <div className="">
    <div className="flex text-black items-center justify-between container mx-auto">
      {/* Left side menu */}
      <ul className="flex items-center py-[1.1875rem]">
        {menuItem.map((item, index) => (
          <li key={index} className="flex items-center mr-8">
            <Link href={item.href}>
              {item.name}
            </Link>
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

      {/* Right side with phone icon */}
      <div className="flex items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image src={PhoneIcon} alt="phone-icon" className="h-8 w-8 cursor-pointer" />
        </motion.div>
        <span className="ml-2 text-[0.875rem] font-medium">
          (219) 555-0114
        </span>
      </div>
    </div>
  </div>
  )
}

export default NavbarBakup