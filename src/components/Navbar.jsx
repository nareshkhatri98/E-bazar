import React from 'react'
import Image from "next/image";
import { CellPhone, DownArrow } from '@/assets/icons';

const Navbar = () => {
    const menuItem = [
        { name: 'Home', hasDropDown: true },
        { name: 'Shop', hasDropDown: true },
        { name: 'Pages', hasDropDown: true },
        { name: "Blog", hasDropDown: true },
        { name: 'about Us', hasDropDown: false },
        { name: 'Contact Us', hasDropDown: false }
    ];

    return (
        <div>
            <div className=' bg-[#333333]'>
                <nav className='flex justify-between container  mx-auto p-4 text-[#999999]'>
                    {/* left menu */}
                    <div className='flex items-center'>
                        <div className='flex space-x-11 '>
                            {
                                menuItem.map((item, index) => (
                                    <div key={item} className='flex items-center'>
                                        <span className='mr-1'> {item.name}</span>
                                        {item.hasDropDown && <Image src={DownArrow} alt='DownArrow' />}
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    {/* right menu */}
                    <div className='flex items-center'>
                        <Image src={CellPhone} alt='CellPhone' className=' cursor-pointer' />
                        <span>(219) 555-0114</span>
                    </div>

                </nav>

            </div>

        </div>
    );
}

export default Navbar;
