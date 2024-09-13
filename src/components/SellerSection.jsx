import React from 'react'
import Image from "next/image";
import { bestSeller, HotSell, ratingIcon, topRated, OfferIcon } from '@/assets/products';
import { rightArrow, VectorIcon } from '@/assets/images';

const SellerSection = () => {
    return (
        <div className=''>
            <section className='w-[1320px] h-[426px] container mx-auto mt-[50px] '>
                <div className='flex gap-[24px]'>
                    {/* hot deals */}
                    <div>
                        <h1 className='text[20px] font-medium text-[#1A1A1A] leading-[30px]'>Hot Deals</h1>
                        {
                            HotSell.map((hotsell) => (
                                <div key={hotsell} className='mt-4'>
                                    <div className='flex items-center border border-emerald-500 w-[312px] h-[116px] rounded-[6px] shadow-lg'>
                                        <Image src={hotsell.image} className='w-[102px] h-[102px]' />
                                        <div className='ml-3'>
                                            <h1 className='text-[#2C742F] font-normal text-[0.875rem]'>{hotsell.title}</h1>
                                            <p className='text-[#1A1A1A] text-[1rem] font-medium'>{hotsell.price}</p>
                                            <Image src={ratingIcon} className='mt-[6px]' />
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
                            bestSeller.map((bestseller) => (
                                <div key={bestseller} className='mt-4'>
                                    <div className='flex items-center border border-emerald-500 w-[312px] h-[116px] rounded-[6px] shadow-lg'>
                                        <Image src={bestseller.image} className='w-[102px] h-[102px]' />
                                        <div className='ml-3'>
                                            <h1 className='text-[#2C742F] font-normal text-[0.875rem]'>{bestseller.title}</h1>
                                            <p className='text-[#1A1A1A] text-[1rem] font-medium'>{bestseller.price}</p>
                                            <Image src={ratingIcon} className='mt-[6px]' />
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
                            topRated.map((topRated) => (
                                <div key={topRated} className='mt-4'>
                                    <div className='flex items-center border border-emerald-500 w-[312px] h-[116px] rounded-[6px] shadow-lg'>
                                        <Image src={topRated.image} className='w-[102px] h-[102px]' />
                                        <div className='ml-3'>
                                            <h1 className='text-[#2C742F] font-normal text-[0.875rem]'>{topRated.title}</h1>
                                            <p className='text-[#1A1A1A] text-[1rem] font-medium'>{topRated.price}</p>
                                            <Image src={ratingIcon} className='mt-[6px]' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* offer section */}
                    <div className='relative'>
                        <Image src={OfferIcon} />
                        <div className='absolute top-10 left-[80px]'>

                            <p className=' text-[12px] items-center uppercase font-[Poppins] text-[#1A1A1A] font-medium'>Summer Sale</p>
                            <p className='text-[#00B207] text-[2rem] font-bold font-[Poppins] leading-[32.5px] mt-2'>75% off</p>

                            <button className='bg-[#FFFFFF] flex items-center w-[162px] h-[45px] p-6 round text-[1rem] font-semibold text-[#20B526] rounded-[43px] mt-4' >Shop now <Image src={VectorIcon} alt='vector icon' className='ml-2 text-[#00B207]' /></button>
                        </div>
                    </div>

                </div>


            </section>

        </div>
    )
}

export default SellerSection