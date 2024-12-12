import React from 'react'
import Image from 'next/image'
import { ArrowDownIcon } from '@/assets/icons'
import { CrossIcon } from '@/assets/shop-page-images'

const FilterSection = () => {

    return (
        <>

            <div className='container mx-auto'>

                <div className='flex justify-between items-center mt-10'>
                    {/* left filter */}
                    <div className='flex items-center gap-4'>
                        <div className=' flex  items-center border-2 px-10 p-2 '>
                            <p className='text-Body-Small text-Gray-7 font-400'>Select Category </p>
                            <Image src={ArrowDownIcon} alt='arrow' className='cursor-pointer ml-10' />
                        </div>
                        <div className=' flex  items-center border-2 px-10 p-2 '>
                            <p className='text-Body-Small text-Gray-7 font-400'>Select Price </p>
                            <Image src={ArrowDownIcon} alt='arrow' className='cursor-pointer ml-10' />
                        </div>
                        <div className=' flex  items-center border-2 px-10 p-2 '>
                        <select className='text-Body-Small text-Gray-7 font-400'>Sort by: rating
                            <option value="1" className='text-Body-Small text-Gray-7 font-400'>Sort by :1  rating </option>
                            <option value="2" className='text-Body-Small text-Gray-7 font-400'>Sort by: 2  rating</option>
                           <option value="3" className='text-Body-Small text-Gray-7 font-400'>Sort by: 3  rating</option>
                           <option value="4" className='text-Body-Small text-Gray-7 font-400'>Sort by:4  rating</option>
                           <option value="5" className='text-Body-Small text-Gray-7 font-400'>Sort by:5  rating</option>
                            </select>
                        </div>
                    </div>


                    {/* right filter */}
                    <div className='flex items-center gap-4'>
                        <div className=' flex  items-center border-2 px-10 p-2 '>
                            
                            <select className='text-Body-Small text-Gray-7 font-400'>Sort by: Latest 
                            <option value="relevant">Sort by : Relevant</option>
                            <option value="low-high">Sort by: Low to Hight</option>
                           <option value="high-low">Sort by: High to Low</option>

                            </select>
                        </div>
                        <div className='flex  items-center border-2 px-10 p-2 '>
                            <p className='text-Body-Small text-Gray-7 font-400'> Show: 16 </p>
                            <Image src={ArrowDownIcon} alt='arrow' className='cursor-pointer ml-10' />
                        </div>

                    </div>

                </div>
            </div>

            {/* for activity filer */}

            <div className='border-2 mt-6 '>
                <div className='flex justify-between container mx-auto p-4'>
                    <div className='flex gap-5'>
                        <h1 className='text-gray-500' >Active Filters:</h1>
                        <div className='flex gap-[9px] items-center'>
                            <p className='text-Body-Small font-500 text-Gray-9'>Wing Chair</p>
                            <Image src={CrossIcon} alt='cross' />
                        </div>
                        <div className='flex gap-[9px] items-center'>
                        <p className='text-Body-Small font-500 text-Gray-9'>Min $300 - Max 500</p>
                        <Image src={CrossIcon} alt='cross' />

                        </div>
                    </div>
                    <div>
                        <p className='text-Body-Small font-500 text-Gray-9'>2,547 <span className='text-Body-Small text-Gray-5'>Result found.</span></p>

                    </div>
                </div>


            </div>
        </>
    )
}

export default FilterSection