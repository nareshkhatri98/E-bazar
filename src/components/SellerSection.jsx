import React from 'react'
import Image from "next/image";
import { bestSeller, HotSell, ratingIcon, topRated, OfferIcon } from '@/assets/products';
import { rightArrow, VectorIcon } from '@/assets/images';
import { CartIcon, EyeIcon, HeartIcon } from '@/assets/icons';
import Button from './Button';
import Start from './Start';

const SellerSection = () => {
    return (
        <div className=''>
            <section className='w-[1320px] h-[426px] container mx-auto mt-[50px] '>
                <div className='flex gap-[24px]'>
                    {/* hot deals */}
                    <div>
                        <h1 className='text[20px] font-medium text-[#1A1A1A] leading-[30px]'>Hot Deals</h1>
                        {
                            HotSell.map((hotsell,index) => (
                                <div key={index} className='mt-4'>
                                    <div className='flex items-center border border-emerald-500 w-[312px] h-[116px] rounded-[6px] shadow-lg cursor-pointer relative group'>

                                        {/* Product image */}
                                        <Image src={hotsell.image} className='w-[102px] h-[102px]' alt={hotsell.title} />

                                        {/* Product title (always visible) */}
                                        <div className='ml-3 mt-[-20px]'>
                                            <h1 className='text-[#2C742F] font-normal text-[0.875rem]'>{hotsell.title}</h1>

                                            {/* Product details (hidden on hover) */}
                                            <div className='group-hover:hidden'>
                                                <p className='text-[#1A1A1A] text-[1rem] font-medium'>{hotsell.price}</p>
                                                <Start star={hotsell.rating} />
                                            </div>
                                            <div className='hidden items-center absolute right-6 p-2 group-hover:flex transition-all duration-500 gap-[1rem]'>
                                                <Image src={CartIcon} alt="Cart icon" className='bg-[#00B207] w-[40px] h-[40px] py-[10px] rounded-full' />
                                                <Image src={EyeIcon} alt="View icon" className='bg-[#F2F2F2] w-[40px] h-[40px] py-[10px] rounded-full' />
                                                <Image src={HeartIcon} alt="Wishlist icon" className='bg-[#F2F2F2] w-[40px] h-[40px] py-[10px] rounded-full' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    {/* for best seller */}
                    <div>
                        <h1 className='text[20px] font-medium text-[#1A1A1A] leading-[30px]'>Best Seller</h1>
                        {
                            bestSeller.map((bestSeller,index) => (
                                <div key={index} className='mt-4'>
                                    <div className='flex items-center border border-emerald-500 w-[312px] h-[116px] rounded-[6px] shadow-lg cursor-pointer relative group'>

                                        {/* Product image */}
                                        <Image src={bestSeller.image} className='w-[102px] h-[102px]' alt={bestSeller.title} />

                                        {/* Product title (always visible) */}
                                        <div className='ml-3 mt-[-20px]'>
                                            <h1 className='text-[#2C742F] font-normal text-[0.875rem]'>{bestSeller.title}</h1>

                                            {/* Product details (hidden on hover) */}
                                            <div className='group-hover:hidden'>
                                                <p className='text-[#1A1A1A] text-[1rem] font-medium'>{bestSeller.price}</p>
                                                <Start star={bestSeller.rating} />
                                            </div>
                                            <div className='hidden items-center absolute right-6 p-2 group-hover:flex transition-all duration-500 gap-[1rem]'>
                                                <Image src={CartIcon} alt="Cart icon" className='bg-[#00B207] w-[40px] h-[40px] py-[10px] rounded-full' />
                                                <Image src={EyeIcon} alt="View icon" className='bg-[#F2F2F2] w-[40px] h-[40px] py-[10px] rounded-full' />
                                                <Image src={HeartIcon} alt="Wishlist icon" className='bg-[#F2F2F2] w-[40px] h-[40px] py-[10px] rounded-full' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* top rated */}
                    <div>
                        <h1 className='text[20px] font-medium text-[#1A1A1A] leading-[30px]'>Top Rated</h1>
                        {
                            topRated.map((topRated,index) => (
                                <div key={index} className='mt-4'>
                                    <div className='flex items-center border border-emerald-500 w-[312px] h-[116px] rounded-[6px] shadow-lg cursor-pointer relative group'>

                                        {/* Product image */}
                                        <Image src={topRated.image} className='w-[102px] h-[102px]' alt={topRated.title} />

                                        {/* Product title (always visible) */}
                                        <div className='ml-3 mt-[-20px]'>
                                            <h1 className='text-[#2C742F] font-normal text-[0.875rem]'>{topRated.title}</h1>

                                            {/* Product details (hidden on hover) */}
                                            <div className='group-hover:hidden'>
                                                <p className='text-[#1A1A1A] text-[1rem] font-medium'>{topRated.price}</p>
                                                <Start star={topRated.rating} />
                                            </div>
                                            <div className='hidden items-center absolute right-6 p-2 group-hover:flex transition-opacity duration-500 gap-[1rem]'>
                                                <Image src={CartIcon} alt="Cart icon" className='bg-[#00B207] w-[40px] h-[40px] py-[10px] rounded-full' />
                                                <Image src={EyeIcon} alt="View icon" className='bg-[#F2F2F2] w-[40px] h-[40px] py-[10px] rounded-full' />
                                                <Image src={HeartIcon} alt="Wishlist icon" className='bg-[#F2F2F2] w-[40px] h-[40px] py-[10px] rounded-full' />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* offer section */}
                    <div className='relative'>
                        <Image src={OfferIcon} alt='OfferIcon' />
                        <div className='absolute top-10 left-[80px]'>

                            <p className=' text-[12px] items-center uppercase font-[Poppins] text-[#1A1A1A] font-medium'>Summer Sale</p>
                            <p className='text-[#00B207] text-[2rem] font-bold font-[Poppins] leading-[32.5px] mt-2'>75% off</p>

                            <Button showImage={true} />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default SellerSection