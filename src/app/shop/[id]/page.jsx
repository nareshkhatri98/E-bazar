'use client';

import { useDispatch, useSelector } from 'react-redux';
import { allProudcts } from '@/assets/products'; // Assuming this is a static array of products
import Image from 'next/image';

import { addToCart, decreaseItemQuantity, increaseItemQuantity } from '@/Redux/slice/cartSlice';

import {
  productIcon1,
  productIcon2,
  productIcon3,
  productIcon4,
} from "@/assets/shop-page-images";

import Star from "@/components/Start";

import {
  FacebookIcon,
  farmaryIcon,
  HeartIcon,
  InstaIcon,
  leaf2DIcon,
  PinterestIcon,
  rectangleIcon,
  TwitterIcon,
} from "@/assets/icons";
import Footer from "@/components/Footer";
import Description from '@/app/product-page/Description';
import NavbarBakup from '@/components/NavbarBakup';
import BannerSection from '@/app/Checkout/BannerSection';

const ProductDetailPage = ({ params }) => {
  const { id } = params;
  const product = allProudcts.find((p) => p.id === Number(id));
  if (!product) return <div>Product not found</div>;

  const dispatch = useDispatch();

  // Get the cart item corresponding to the product
  const cartItem = useSelector((state) =>
    state.allCart.cart.find((item) => item.id === product.id)
  );
  const quantity = cartItem ? cartItem.quantity : 1;


  return (
    <>
      <NavbarBakup />
      <BannerSection pageType='product-details' />
      <div className="container mx-auto mt-10">
        <div className="w-[1320px] h-[636px] flex bg-[#FFFFFF] rounded-[8px]">
          <div className="w-[80px] h-[396px]">
            <Image src={productIcon1} alt="productIcon1" />
            <Image src={productIcon2} alt="productIcon2" />
            <Image src={productIcon3} alt="Product3" />
            <Image src={productIcon4} alt="productIcon4" />
          </div>
          <div className="w-[556px] h-[556px] ml-3">
            <Image
              src={product.image}
              alt="chaniseCabbageICon"
              height={556}
              width={556}
            />
          </div>
          <div className="ml-6 w-[568px] h-[152px]">
            <div className="flex">
              <h1 className="text-Heading-04 font-600 text-Gray-9">
                {product.title}
              </h1>
              <div className="w-[71px] h-[29px] bg-[#20B52633] mt-[10px] ml-4 rounded-[3px]">
                <h1 className="text-Body-Small text-[#2C742F] font-400 p-1 items-center ml-2 ">
                  In Stock
                </h1>
              </div>
            </div>

            {/* Review Section */}
            <div className="flex items-center gap-6 mt-[12px]">
              <div className="flex">
                <Star star={product.rating} />
              </div>
              <span className="text-Body-Small font-400 text-Gray-6 ml-[-10px]">
                4 Review
              </span>
              <p className="text-Body-Small font-500 text-Gray-8 p-1">
                SKU:
                <span className="text-Body-Small font-400 text-Gray-6">
                  2,51,594
                </span>
              </p>
            </div>

            {/* Price Section */}
            <div className="flex items-center mt-[20px]">
              <p className="line-through text-Body-Large font-400 text-Gray-3">
                {product.price}
              </p>
              <p className="text-Body-XXL text-Hard-Primary ml-1">$17.28</p>
              <div className="bg-[#EA4B481A] rounded-[30px] p-1 ml-3">
                <span className="text-Danger">64% Off</span>
              </div>
            </div>

            <hr className="border mt-[20px]" />

            {/* Brand Section */}
            <div className="w-[568px] h-[56px] items-center flex">
              <p>Brand:</p>
              <div className="border w-[56px] h-[56px] ml-[8px] flex-col items-center">
                <Image src={leaf2DIcon} alt="leaf2DIcon" className="mt-3" />
                <Image src={farmaryIcon} alt="farmary" />
              </div>
              <div className="flex items-center ml-[150px]">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Share item:
                </p>
                <div className="flex gap-3 ml-3">
                  <Image
                    src={FacebookIcon}
                    alt="facebook"
                    className="bg-primary w-[40px] h-[40px] rounded-[500px] p-2 hover:bg-primary hover:text-white cursor-pointer"
                  />
                  <Image
                    src={InstaIcon}
                    alt="inst"
                    className="w-[40px] h-[40px] rounded-[500px] p-[-20px] hover:bg-primary hover:text-white cursor-pointer"
                  />
                  <Image
                    src={TwitterIcon}
                    alt="twitter "
                    className="w-[40px] h-[40px] rounded-[500px] p-2 hover:bg-primary hover:text-white cursor-pointer"
                  />
                  <Image
                    src={PinterestIcon}
                    alt="pinterest"
                    className="w-[40px] h-[40px] rounded-[500px] p-2 hover:bg-primary hover:text-white cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p className="mt-[16px] text-Body-Small font-400 text-Gray-5">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
              ultrices et ipsum. Nulla varius magna a consequat pulvinar.
            </p>
            <hr className="border mt-[20px]" />

            {/* Quantity & Add to Cart */}
            <div className="w-[647px] h-[88px] flex items-center">
              <div className="w-[124px] h-[50px] -400 border-[1px] rounded-[170px] p-[8px] ">
                <div className="text-4xl flex items-center justify-between ">
                  <button
                    onClick={() => dispatch(decreaseItemQuantity(product.id))}
                    className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600"
                  >
                    -
                  </button>
                  <p className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center p-1 font-600">
                    {quantity} {/* Show the quantity from Redux */}
                  </p>
                  <button
                    onClick={() => dispatch(increaseItemQuantity(product.id))}
                    className="bg-Gray-0.5 border rounded-full w-[34px] h-[34px] text-center  p-1 font-600"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="bg-primary w-[447px] h-[51px] rounded-[43px] p-[10px] m-[12px] flex items-center justify-center gap-4">
                <button onClick={()=>dispatch(addToCart(product))} className="text-center text-white">
                  Add to Cart
                </button>
                <Image
                  src={rectangleIcon}
                  className="text-white"
                  alt="rectangel"
                />
              </div>
              <div className="bg-[#20B5261A] w-[52px] h-[52px] rounded-[43px] ml-[10px] ">
                <Image
                  src={HeartIcon}
                  alt="HeartIcon"
                  className="flex items-center m-[10px] p-[2px]"
                />
              </div>
            </div>
            <hr className="border mt-[20px]" />

            {/* Category & Tag */}
            <div className="mt-[24px]">
              <p className="text-Body-Small font-500 text-Gray-9">
                Category:
                <span className="text-Body-Small font-400 text-Gray-5">
                  Vegetables
                </span>
              </p>
              <p className="text-Body-Small font-500 text-Gray-9 mt-[12px]">
                Tag:
                <span className="text-Body-Small font-400 text-Gray-5">
                  Vegetables Healthy
                </span>
                <span className="text-Body-Small font-400 text-gray-900">
                  Chinese
                </span>
                <span className="text-Body-Small font-400 text-Gray-5">
                  Cabbage Green Cabbage
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Description />
    </>
  );
};

export default ProductDetailPage;
