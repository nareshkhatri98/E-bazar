import InputField from '@/components/InputField'
import React from 'react'
import { useFormik } from 'formik';
import { object, string } from 'yup';





let validation = object({

  email: string().email('Invalid email address').required('Email is required'),
  password: string().required('Password is required'),
  
});

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validation,
    onSubmit:  async values => {
      
      console.log(values);
    },
  });

  return (
    <div>
<div className="container mx-auto">
      
      <div className="w-[520px] h-[400px] bg-white border border-[#F2F2F2] shadow-lg mt-[10px] ml-[33%] ">
        <h1 className="text-center text-Heading-05 font-600 text-Gray-9 p-3">
          Sign In
        </h1>
        <form onSubmit={formik.handleSubmit}
        onChange={(event)=>event.preventDefault()}>
        <div className="ml-[24px] ">
        <InputField
               
               type="text"
               name="email"
               placeholder="Email"
               onChange={formik.handleChange}
               value={formik.values.email}
               error ={formik.errors.email}
             />
         <InputField
               
               type="text"
               name="password"
               placeholder="Password"
               onChange={formik.handleChange}
               value={formik.values.password}
               error ={formik.errors.password}
             />
        </div>
        {/* for forget password and remember */}
        <div className=" ml-[24px] mt-[16px] flex items-center gap-2  ">
          {/* <input
            type="checkbox"
            className="w-[20px] h-[20px] rounded-[3px] bg-gray-200 cursor-pointer"
          /> */}
          <div className=" flex items-center justify-between ">
            <p className="text-Body-Small font-400 text-Gray-6">
              Remember me
            </p>
            <p className="text-Body-Small font-400 text-Gray-6  ml-56 ">
              Forget Password
            </p>
          </div>
        </div>
        <button className="w-[472px] h-[45px] ml-[24px] rounded-[32px] mt-5  items-center bg-primary text-white text-Body-Small font-600">
          Login
        </button>
        <p className="text-center text-Body-Small font-400 text-Gray-6 mt-6">
          Don’t have account?
          <span className="text-Body-Small font-500 text-Gray-9">
            <a href="register">Register</a>
          </span>
        </p>
        </form>
      </div>
    </div>


    </div>
  )
}

export default LoginForm