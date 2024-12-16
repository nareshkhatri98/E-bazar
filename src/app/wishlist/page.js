"use client";
import Image from "next/image";
import NavbarBakup from "@/components/NavbarBakup";
import React from "react";
import BannerSection from "../Checkout/BannerSection";
import Footer from "@/components/Footer";
import { closeIcon } from "@/assets/images";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/Redux/slice/cartSlice";
import { removeFromWishlist } from "@/Redux/slice/wishListSlice";

const WishList = () => {
  const { wishlist, items } = useSelector((state) => state.wishList);

  // const wishlistProducts = items.filter((item) => wishlist.includes(item.id));
  const dispatch = useDispatch();

  return (
    <>
      <NavbarBakup />
      <BannerSection pageType="wishlist" />
      <div className="container mx-auto">
        <h1 className="text-Heading-05 font-600 text-Gray-9 text-center mt-10">
          My Wishlist
        </h1>
        <div className="overflow-x-auto mt-8">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 uppercase text-Body-Small text-Gray-5 font-500">
                <th className="border border-gray-200 p-4 text-left">
                  Product
                </th>
                <th className="border border-gray-200 p-4 text-center">
                  Price
                </th>
                <th className="border border-gray-200 p-4 text-center">
                  Stock Status
                </th>
                <th className="border border-gray-200 p-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((data) => (
                <tr key={data.id} className="even:bg-gray-50">
                  <td className="p-4 flex items-center gap-4">
                    <Image
                      src={data.image} // Check if 'data.image' exists and is a valid image source
                      alt={data.title}
                      width={60}
                      height={60}
                    />
                    <p className="text-Gray-7 font-500">{data.title}</p>
                  </td>
                  <td className="p-4 text-center text-Gray-7">{data.price}</td>
                  <td className="p-4 text-center text-[#2C742F] font-400">
                    In Stock
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center gap-4">
                      <button
                        onClick={() => dispatch(addToCart(data))}
                        className="bg-primary text-white px-4 py-2 rounded-[43px]"
                      >
                        Add to cart
                      </button>
                      <Image
                        src={closeIcon}
                        alt="Remove from Wishlist"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                        onClick={() => dispatch(removeFromWishlist(data.id))}
                      />
                    </div>
                  </td>
                </tr>
              ))}

              {wishlist.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-8 text-gray-500 font-500"
                  >
                    Your wishlist is empty.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
