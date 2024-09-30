import { Social1, Social2,Social3,Social4,Social5,Social6 } from '@/assets/social/social'
import React from 'react'
import Image from 'next/image'

const SocialMedia = () => {
    return (
        <div className='container mx-auto ml-[300px]'>
            <h1 className='text-Heading-05 text-Gray-9 font-600 text-center mt-[100px]'>Follow us on Instagram</h1>
            <div className='flex gap-6 mt-8'>
                <Image src ={Social1} alt='social' />
                <Image src ={Social2} alt='social' />
                <Image src ={Social3} alt='social' />
                <Image src ={Social4} alt='social' />
                <Image src ={Social5} alt='social' />
                <Image src ={Social6} alt='social' />
            
            </div>
        </div>
    )
}

export default SocialMedia