"use client"
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { MapIcon } from "@/assets/Banner";
import { EmailIcon, LocationICon, TelephoneIcon } from "@/assets/images";

import NavbarBakup from "@/components/NavbarBakup";

import BannerSection from "../Checkout/BannerSection";

import { useFormik } from 'formik';
import { object, string } from 'yup';
import InputField from '@/components/InputField';


// Validation schema using Yup
let validationSchema = object({
  fullName: string().required('Full name is required'),
  message: string().required('Message is required'),
  subjects: string().required('Subjects is required'),
  email: string().email('Invalid email address').required('Email is required'),
  
});

const page = () => {
    const formik = useFormik({
      initialValues: {
       fullName: '',
        message: '',
        subjects:'',
        email: '',
      },
      validationSchema, // Using validationSchema for Yup
      onSubmit: (values) => {
        console.log('Form values:', values);
      },
    });
  return (
    <>
    <hr />
   <NavbarBakup/>
   <BannerSection pageType="contact"/>
      <div className="container mx-auto">
       
        <div className="flex items-center">
          <div className="w-[312px] h-[507px] rounded-[8px]  mt-[80px] shadow-lg  border border-Gray-1">
            <div className="w-[272px] h-[169px]  flex items-center flex-col">
              <Image src={LocationICon} alt="location" className="mt-6" />
              <p className="text-center text-[16px] text-Gray-8 font-400 mt-4">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
              <hr />
            </div>
            <div className="w-[272px] h-[169px] flex items-center flex-col">
              <Image src={EmailIcon} alt="Email" className="mt-6" />
              <p className="text-center mt-4 text-[16px] text-Gray-8 font-400">
                Proxy@gmail.com{" "}
              </p>
              <p className="text-center mt-1 text-[16px] text-Gray-8 font-400">
                Help.proxy@gmail.com
              </p>
              <hr />
            </div>
            <div className="w-[272px] h-[169px]  flex items-center flex-col">
              <Image src={TelephoneIcon} alt="TelephoneIcon" className="mt-6" />
              <p className="text-[16px] text-Gray-8 font-400 mt-4">
                (219) 555-0114
              </p>
              <p className="text-[16px] text-Gray-8 font-400 mt-1">
                {" "}
                (164) 333-0487
              </p>
            </div>
          </div>

          <div className="w-[984px] h-auto mt-[80px] ml-6 rounded-[8px] border border-Gray-1 shadow-lg ">
            <h1 className="text-Body-XXL text-Gray-9 font-600 ml-[50px] mt-[44px]">
              {" "}
              Just Say Hello!
            </h1>
            <div className="w-[486px] h-[42px] mt-2">
              <p className="text-Body-Small font-400 text-Gray-5 ml-[50px]">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>
            </div>
            <form action="#" onSubmit={formik.handleSubmit}>
              <div className="mt-6">
                <InputField
                pageType='contact'
                onchange={formik.handleChange}
                values ={formik.fullName}
                error = {formik.errors.fullName}
                  type="text"
                  name="fullName"
                 
                  placeholder="Template Cookie"
                />
                <InputField
              pageType='contact'
                onchange={formik.handleChange}
                values ={formik.email}
                error = {formik.errors.email}
                  type="text"
                  name="email"
                 
                  placeholder="zakirsoft@gmail.com"
                />
              </div>
              <InputField
              onchange={formik.handleChange}
              values ={formik.message}
              error = {formik.errors.message}
                type="text"
                name="message"
                className="ml-[10px] w-[884px] h-[49px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border border-green-600 mt-2"
                placeholder="Hello|"
              />
              <textarea
                type="text"
                name="subjects"
                onChange={formik.handleBlur}
                values={formik.subjects}
                error = {formik.errors.subjects}
                className="ml-[10px] w-[884px] h-[98px] rounded-[6px] font-400 p-4 text-Gray-6 text-[16px] border border-green-600 mt-4"
                placeholder="subjects"
              />
              <button className="ml-[10px] mt-[2px] w-[199px] h-[51px] bg-primary rounded-[43px] text-Body-Medium font-600 text-Gray-0.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Image src={MapIcon} alt="MapIcon" className="w-full h-full mt-[80px]"/>
      <Footer  />
     
    </>
  );
};

export default page;
