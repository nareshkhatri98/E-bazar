import React from 'react'
import Image from 'next/image'
import { BestDealIcon, FatFreeICon, SummerIcon } from '@/assets/TopCategory'
import Button from './Button'
const SaleCategory = () => {
    return (
        <div>
            <section className=' mt-[100px] ml-[300px] mr-[300px] '>
                <div className='flex gap-6 container mx-auto '>
                    <div className=' w-[424px] h-[536px] relative'>
                        <Image src={BestDealIcon} alt='BestDealIcon' />
                        <div className='absolute top-10 right-14 flex flex-col items-center justify-center'>
                            <p className='text-[1rem] uppercase text-Gray-1 font-medium'>Summer Salee</p>
                            <h1 className='text-Gray-1 text-[2.57rem]  font[Poppins] font-semibold'>Sale of the Month</h1>
                            <p className='text-Gray-1 mt-6'>Up to <span className='w-[100px] h-[39px] p-3 bg-Gray-1 text-Warning text-[18px] items-center rounded-[5px]'>64% OFF</span></p>
                            <div className='mt-[24px]'>
                                <Button />
                            </div>
                        </div>
                    </div>
                    <div className=' w-[424px] h-[536px] relative'>
                        <Image src={FatFreeICon} alt='FatFreeICon' />
                        <div className='absolute top-10 right-14 flex flex-col items-center justify-center'>
                            <p className='text-[1rem] uppercase text-Gray-1 font-medium'>85% Fat Free</p>
                            <h1 className='text-Gray-1 text-[2.857rem]  font[Poppins] font-semibold'>Low-Fat Meat</h1>
                            <p className='text-Gray-1'>Started at <span className='text-Warning'>$79.99</span></p>
                            <Button />
                        </div>
                    </div>
                    <div className=' w-[424px] h-[536px] relative'>
                        <Image src={SummerIcon} alt='SummerIcon' />
                        <div className='absolute top-10 right-14 flex flex-col items-center justify-center'>
                            <p className='text-[1rem] uppercase text-[#1A1A1A] font-medium '>Summer Salee</p>
                            <h1 className='text-[#1A1A1A] text-[2.857rem]  font[Poppins] font-semibold'>100% Fresh Fruit</h1>
                            <p className='text-[#1A1A1A] mt-6'>Up to <span className='w-[100px] h-[39px] p-3 bg-[#1A1A1A] text-Warning text-[18px] items-center rounded-[5px]'>64% OFF</span></p>
                            <div className='mt-[20px]'>
                                <Button />
                            </div>
                        </div>
                    </div>


                </div>

            </section>
        </div>
    )
}

export default SaleCategory