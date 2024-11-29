import React from "react";
import Image from "next/image";
import { HomeIcon } from "@/assets/shop-page-images";
import {
  ArrowDownIcon,
  Avatar,
  CartDashboardIcon,
  DashboardIcon,
  EyeIcon,
  LogoutIcon,
  RefreshIcon,
  settingIcon,
  WishListIcon,
} from "@/assets/icons";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className=" flex gap-3 mt-6">
          <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-Body-Medium font-400 text-Gray-6 cursor-pointer">
            Account
          </span>
          <Image
            src={ArrowDownIcon}
            alt="arrow down"
            className="-rotate-90 cursor-pointer"
          />
          <span className="text-primary text-Body-Medium font-400 cursor-pointer">
            Register
          </span>
        </div>

        <div>
        <div className=" flex gap-6">
          {/* for right side */}

          <div className="w-[312px] h-[418px] mt-8 border-[1px] rounded-[8px]">
            <h1 className="text-Body-XL font-500 text-Gray-9 mt-6 ml-5">
              Navigation
            </h1>
            <div className=" flex gap-[10px] mt-4  ml-5 w-[312px] h-[56px] items-center cursor-pointer">
              <Image src={DashboardIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6 ">
                Dashboard
              </span>
            </div>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={RefreshIcon} alt=" RefreshIcon" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Order History
              </span>
            </div>
            <div className=" flex gap-[10px]  ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={WishListIcon} alt="" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Wishlist
              </span>
            </div>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={CartDashboardIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Shopping Cart
              </span>
            </div>
            <div className=" flex gap-[10px]  ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={settingIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Settings
              </span>
            </div>
            <div className=" flex gap-[10px] ml-5 w-[312px] h-[56px] items-center  cursor-pointer">
              <Image src={LogoutIcon} alt=" dashboard" />
              <span className="text-Body-Medium font-400 text-Gray-6">
                Log-out
              </span>
            </div>
          </div>

          {/* for right side */}
          <div className="w-[984px] h-[533px] border-[1px] mt-8 rounded-[8px] ">
            <h1 className="text-Body-XL font-500 text-Gray-900 p-5">
              Account Settings
            </h1>
            <hr />

            <div className=" flex  items-center gap-[112px]">
              {/* for form */}
              <div className="w-[512px] h-[352px]">
                <div className="m-6">
                  <label htmlFor="First name">First name</label>
                  <input
                    type="text"
                    placeholder="Dianne"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>
                <div className="ml-6 mt-4">
                  <label htmlFor="Last Name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Russell"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>

                <div className="ml-6 mt-4">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="text"
                    placeholder="dianne.russell@gmail.com"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>
                <div className="ml-6 mt-4">
                  <label htmlFor="Phone Number">First name</label>
                  <input
                    type="text"
                    placeholder="(603) 555-0123"
                    className="w-[512px] h-[49px] border-[1px] rounded-[6px] p-3"
                  />
                </div>
                <button className="w-[167px] h-[45px] bg-primary rounded-[43px] m-6 text-white text-Body-Small font-600">
                  Save Changes
                </button>
              </div>

              {/* for image section */}
              <div>
                <Image src={Avatar} alt="avatar" />
                <button className="w-[159px] h-[45px] mt-5 border-[2px]  ml-10 rounded-[43px] text-primary border-primary">
                  Chose Image
                </button>
              </div>
            </div>
          </div>

               {/* for billing  address */}
      
          
        </div>
    
        <div className="w-[984px] h-[533px] border-[1px] mt-6 ml-[340px] ">
            <h1 className="text-Body-XL font-500 p-5">Billing Address</h1>
            <hr />
            <div className="mt-[20px] flex gap-4 ml-6">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  First name
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Last name
                </p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Company name
                </p>
                <input
                  type="text"
                  placeholder="Company name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
            </div>
            <p className="text-Body-Small font-400 text-Gray-9 mt-4 ml-6">
              Street Address
            </p>
            <input
              type="text"
              placeholder="Email"
              className="w-[872px] h-[49px] border-[1px] rounded-[6px] p-2 ml-6"
            />
            <div className="mt-[20px] flex gap-4 ml-6">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Country / Region
                </p>
                <input
                  type="text"
                  placeholder="your first name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">States</p>
                <input
                  type="text"
                  placeholder="your last name"
                  className="border-[1px] mt-2 w-[280px] h-[49px] rounded-[6px] p-2"
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">Zip code</p>
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border-[1px] mt-2 w-[302px] h-[49px] rounded-[6px] p-2"
                />
              </div>
            </div>
            {/* for email and Phone */}
          <div className=" flex gap-4 ml-6 mt-4 ">
          <div>
          <p htmlFor="Email">Email</p>
          <input type="text" placeholder="dianne.russell@gmail.com" className="w-[460px] p-2 h-[49px] border-[1px] rounded-[6px]" />
      
          </div>
          <div>
          <p htmlFor="Email">Phone</p>
          <input type="text" placeholder="(603) 555-0123" className="w-[460px] p-2  h-[49px] border-[1px] rounded-[6px]" />
      
          </div>
          </div>
          <button className="m-6 w-[167px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600 ">Save Changes</button>
       
        </div>
        {/* for change password..... */}
        <div className="w-[984px] h-[349px] border-[1px] mt-6 ml-[340px] "> 
            <h1 className="text-Body-XL font-500 text-Gray-9 p-4">Change Password</h1>
            <hr />
            <div className="m-6 relative">
                <p>Current password</p>
                <input type="password" placeholder="password " className="w-[936px] mt-[6px] h-[49px] border-[1px] rounded-[6px] p-4" />
                
            </div>
            <div className="ml-6 mt-4 flex gap-4">
                <div>
                <p>New Password Password</p>
                <input type="text" className="w-[460px] h-[49px]  border-[1px] p-3" placeholder="password" />
                </div>
                <div>
                <p>Confirm Password</p>
                <input type="text" className="w-[460px] h-[49px]  border-[1px] p-3" placeholder="password" />
                </div>
            </div>
            <button className="m-6 w-[194px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600 ">Change Password</button>
           

        </div>



        </div>
      </div>

     
      <Footer />
    </>
  );
};

export default page;
