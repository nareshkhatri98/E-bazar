import { Social1, Social2, Social3, Social4, Social5, Social6 } from '@/assets/social/social'
import React from 'react'
import Image from 'next/image'
import { FacebookIcon, InstaIcon, PinterestIcon, TwitterIcon } from '@/assets/icons'

const SocialMedia = () => {
    return (
        <div className='container mx-auto ml-[300px]'>
            <h1 className='text-Heading-05 text-Gray-9 font-600 text-center mt-[100px]'>Follow us on Instagram</h1>
            <div className='flex gap-6 mt-8'>
                {/* Facebook */}
                <div className="relative group">
                    <div className="">
                        <Image src={Social1} alt="social" className="w-full h-auto" />
                    </div>
                    <div
                        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Image src={FacebookIcon} alt="FacebookIcon" className="w-10 h-10 bg-gray-400 rounded-lg p-1 cursor-pointer" />
                    </div>
                </div>

                {/* Twitter */}
                <div className="relative group">
                    <div className="">
                        <Image src={Social2} alt="social" className="w-full h-auto" />
                    </div>
                    <div
                        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Image src={TwitterIcon} alt="TwitterIcon" className="w-10 h-10 bg-gray-100 rounded-lg p-1 cursor-pointer" />
                    </div>
                </div>

                {/* Instagram */}
                <div className="relative group">
                    <div className="bg-green-400">
                        <Image src={Social3} alt="social" className="w-full h-auto" />
                    </div>
                    <div
                        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Image src={InstaIcon} alt="InstaIcon" className="w-10 h-10 bg-gray-100 rounded-lg p-1 cursor-pointer" />
                    </div>
                </div>

                {/* Pinterest */}
                <div className="relative group">
                    <div className="">
                        <Image src={Social4} alt="social" className="w-full h-auto" />
                    </div>
                    <div
                        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Image src={PinterestIcon} alt="PinterestIcon" className="w-10 h-10 bg-gray-100 rounded-lg p-1 cursor-pointer" />
                    </div>
                </div>
                <Image  src={Social5}/>
                <Image src={Social6}/>

            </div>
        </div>
    )
}

export default SocialMedia
