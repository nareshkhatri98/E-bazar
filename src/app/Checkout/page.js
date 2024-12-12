"use client";
import React from "react";
import Image from "next/image";

import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import NavbarBakup from "@/components/NavbarBakup";

import { useSelector } from "react-redux";
import BannerSection from "./BannerSection";

const page = () => {
  const { cart, totalQuanity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  console.log(cart);
  return (
    <>
      <hr />
      <NavbarBakup />
      <BannerSection pageType="checkout" />
      <div className="container  mx-auto  ">
        {/* for billing information */}
        <div className="flex">
          {/* for left section */}
          <div className="w-[54.5rem] h-[44.125rem]  mt-8">
            <h1 className="text-Body-XXL font-500 text-Gray-9">
              Billing Information
            </h1>
            <form action="#">

            <div className="mt-[1.25rem] flex gap-4">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  First name
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Last name
                </p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Company name
                </p>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2"
                  />
              </div>
            </div>
            <p className="text-Body-Small font-400 text-Gray-9 mt-4">
              Street Address
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-[54.5rem] h-[3.0625rem] border-[0.0625rem] rounded-[0.375rem] p-2"
              />

            <div className="mt-[1.25rem] flex gap-4">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Country / Region
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2"
                  />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">States</p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2"
                  />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">Zip code</p>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border-[0.0625rem] mt-2 w-[17.5rem] h-[3.0625rem] rounded-[0.375rem] p-2"
                  />
              </div>
            </div>
            <div className="flex items-center gap-[0.375rem] mt-5">
              <input
                type="checkbox"
                className="w-[1.25rem] h-[1.25rem] rounded-[0.1875rem] bg-gray-200 cursor-pointer"
                />{" "}
              <span>Ship to a different address</span>
            </div>
            <hr className="mt-8" />
            <h1 className="text-Body-XXL font-500 text-Gray-9 mt-8">
              Additional Info
            </h1>
            <p className="text-Body-Small font-400 text-Gray-9 mt-5 ">
              Order Notes (Optional)
            </p>
            <div>
              <input
                type="text"
                className="w-[54.5rem] h-[6.25rem] border-[0.0625rem] mt-2  p-2"
                placeholder="Notes about your order, e.g. special notes for delivery"
                />
            </div>
           </form>
          </div>

          {/* for right section */}
          <div className=" border-[0.0625rem] mt-8 ml-6">
            <h1 className="text-Body-XL text-Gray-9 font-500 m-6">
              Order Summary
            </h1>
            <table className="w-[95%] mx-auto border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cartItem) => (
                  <tr key={cartItem.id} className="border-b">
                    <td className="flex items-center py-2">
                      <Image
                        src={cartItem.image}
                        alt="Product Image"
                        height={60}
                        width={60}
                      />
                      <span className="ml-2">{cartItem.title}</span>
                    </td>
                    <td className="py-2 text-center">x{cartItem.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Subtotal, Shipping, Total */}
            <div className="mt-4 m-6">
              <div className="flex justify-between py-1">
                <p>Subtotal:</p>
                <p>{totalPrice}</p>
              </div>
              <hr />
              <div className="flex justify-between py-1">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between py-1 font-bold">
                <p>Total:</p>
                <p>{totalPrice}</p>
              </div>
            </div>

            {/* Payment Method */}
            <form action="#">
              <div className="m-6">
                <h1 className="text-lg font-bold mb-3">Payment Method</h1>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="payment"
                    className="appearance-none w-[1.25rem] h-[1.25rem] rounded-full border-[0.0625rem] border-green-500 checked:bg-green-500"
                  />
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="payment"
                    className="appearance-none w-[1.25rem] h-[1.25rem] rounded-full border-[0.0625rem] border-green-500 checked:bg-green-500"
                  />
                  <span>Paypal</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="radio"
                    name="payment"
                    className="appearance-none w-[1.25rem] h-[1.25rem] rounded-full border-[0.0625rem] border-green-500 checked:bg-green-500"
                  />
                  <span>Amazon Pay</span>
                </div>
              </div>
              <button className="w-[23.5rem] h-[3.1875rem] bg-primary text-white rounded-[2.6875rem] ml-6">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
