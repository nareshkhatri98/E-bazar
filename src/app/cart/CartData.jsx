import React from 'react';
import Image from 'next/image';
import { GreenAppleIcon, RedCapsicumIcon } from "@/assets/products";
import { closeIcon } from '@/assets/images';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increaseItemQuantity, decreaseItemQuantity } from '@/Redux/slice/cartSlice';

const CartData = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();
    // console.log(cart);

    return (
        
        <div>
            {cart.length >0  ? (
                <table className="w-full table-auto border-collapse">
                <thead>
                    <tr >
                        <th className="text-Body-Medium font-500 text-Gray-5 uppercase">Product</th>
                        <th className="text-Body-Medium font-500 text-Gray-5 uppercase">Price</th>
                        <th className="text-Body-Medium font-500 text-Gray-5 uppercase">Quantity</th>
                        <th className="text-Body-Medium font-500 text-Gray-5 uppercase">Subtotal</th>
                        <th className="text-Body-Medium font-500 text-Gray-5 uppercase">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((data) => (
                        <tr key={data.id} className="border-b">
                            <td className="px-4 py-2 flex items-center">
                                <Image
                                    src={data.image}
                                    alt="Product Image"
                                    width={100}
                                    height={100}
                                />
                                <span className="ml-2 text-Body-Medium font-400 text-Gray-9">{data.title}</span>
                            </td>
                            <td className="px-4 py-2 text-Body-Medium font-400 text-Gray-9">{data.price}</td>
                            <td className="px-4 py-2">
                                <div className="flex items-center justify-between border p-3 rounded-[170px]">
                                    <button
                                        onClick={() => dispatch(decreaseItemQuantity(data.id))}
                                        className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center p-1 font-600"
                                    >
                                        -
                                    </button>
                                    <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center p-1 font-400">
                                        {data.quantity}
                                    </p>
                                    <button
                                        onClick={() => dispatch(increaseItemQuantity(data.id))}
                                        className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center p-1 font-600"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="px-4 py-2 text-Body-Medium font-500 text-Gray-9">{data.subtotal}</td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => dispatch(removeItem(data.id))}
                                    className="w-[24px] h-[24px] border rounded-full"
                                >
                                    <Image src={closeIcon} alt="closeIcon" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            ):(
                <div className='text-Body-Small text-center text-red-500'>Your cart is empty please add items on cart </div>

            )}
            
            <hr className="border-[#E6E6E6] border-[1px]" />
        </div>
    );
}

export default CartData;
