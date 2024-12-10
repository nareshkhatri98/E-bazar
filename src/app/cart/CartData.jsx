import React from 'react'
import Image from 'next/image';
import { GreenAppleIcon, RedCapsicumIcon } from "@/assets/products";
import { closeIcon } from '@/assets/images';
import { useSelector } from "react-redux";

const CartData = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)
    console.log(cart);
    return (
        <div>
            <div className=" ">
                {
                    cart.map((data) => (
                        <div className="w-[832px] h-[100px] flex items-center mt-3">
                            <div className=" flex items-center w-[248px] h-[100px]">
                                <Image
                                    src={data.image}
                                    alt="GreenAppleIcon"
                                    width={100}
                                    height={100}
                                />
                                <h1 className="ml-2 text-Body-Medium font-400 text-Gray-9">
                                    {data.title}
                                </h1>
                            </div>
                            {/* for price. quantity, subtotal */}
                            <div className="">
                                <div className="ml-[135px] flex items-center">
                                    <p className="text-Body-Medium font-400 text-Gray-9">
                                        {data.price}
                                    </p>
                                    {/*  for button */}
                                    <div className="text-4xl flex items-center justify-between  border p-3 rounded-[170px] ml-[65px]">
                                        <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                                            -
                                        </button>
                                        <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-400">
                                            {" "}
                                            5
                                        </p>
                                        <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                                            +
                                        </button>
                                    </div>
                                    <p className="ml-[62px] text-Body-Medium font-500 text-Gray-9">
                                        $70.00
                                    </p>
                                    <button className="w-[24px] h-[24px] border rounded-full ml-[72px]">
                                        <Image src={closeIcon} alt="closeIcon" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))
                }
                <div className="w-[832px] h-[100px] flex items-center mt-3">
                    <div className=" flex items-center w-[248px] h-[100px]">
                        <Image
                            src={GreenAppleIcon}
                            alt="GreenAppleIcon"
                            width={100}
                            height={100}
                        />
                        <h1 className="ml-2 text-Body-Medium font-400 text-Gray-9">
                            Green Capsicum
                        </h1>
                    </div>
                    {/* for price. quantity, subtotal */}
                    <div className="">
                        <div className="ml-[135px] flex items-center">
                            <p className="text-Body-Medium font-400 text-Gray-9">
                                $14.00
                            </p>
                            {/*  for button */}
                            <div className="text-4xl flex items-center justify-between  border p-3 rounded-[170px] ml-[65px]">
                                <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                                    -
                                </button>
                                <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-400">
                                    {" "}
                                    5
                                </p>
                                <button className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600">
                                    +
                                </button>
                            </div>
                            <p className="ml-[62px] text-Body-Medium font-500 text-Gray-9">
                                $70.00
                            </p>
                            <button className="w-[24px] h-[24px] border rounded-full ml-[72px]">
                                <Image src={closeIcon} alt="closeIcon" />
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="border-[#E6E6E6] border-[1px]" />
            </div>
        </div>
    )
}

export default CartData