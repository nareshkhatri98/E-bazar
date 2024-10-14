'use client';
import React from 'react';
import Image from 'next/image';
import { CartIcon, EyeIcon, HeartIcon } from '@/assets/icons';
import { motion } from 'framer-motion';
import Start from '@/components/Start';
import { allProudcts } from '@/assets/products';

const ProductPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allProudcts.map((product, index) => (
                    <div
                        key={index}
                        className="w-full border relative group bg-white rounded-lg overflow-hidden shadow-sm"
                    >
                        <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm font-[Poppins] text-gray-800">
                                {product.title}
                            </p>
                            <p className="text-lg font-medium text-gray-900 mt-2">
                                {product.price}
                            </p>
                            <div className="mt-2 mb-4">
                                <Start star={product.rating} />
                            </div>
                        </div>
                        <motion.div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image src={CartIcon} alt="cart icon" className="w-6 h-6" />
                        </motion.div>
                        <div className="absolute top-16 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                            <Image
                                src={EyeIcon}
                                alt="Eye Icon"
                                className="w-10 h-10 bg-gray-200 rounded-full p-2"
                            />
                            <Image
                                src={HeartIcon}
                                alt="Heart Icon"
                                className="w-10 h-10 bg-gray-200 rounded-full p-2"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
