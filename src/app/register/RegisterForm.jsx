import React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import InputField from '@/components/InputField';
import { useRouter } from 'next/navigation';
import { useSignupMutation } from '@/Redux/api/authApi';


let validation = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  password: string().required('Password is required'),
  confirmPassword: string()
   
});

const RegisterForm = () => {
  const router = useRouter()
  const [handleRegister] = useSignupMutation();
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
      try {
        const res = await handleRegister(values);
        console.log(res?.data);

        if (res?.data?.token) {
          router.replace("/login");
          
        }
      } catch (error) {
        console.log(error);
      }
      console.log(values);
    },
  });

  return (
    <div>
      <div className="container mx-auto">
        <div className="w-[520px] h-[550px] bg-white border border-[#F2F2F2] shadow-lg mt-[80px] ml-[33%]">
          <h1 className="text-center text-Heading-05 font-600 text-Gray-9 p-[24px]">
            Create Account
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="ml-[24px]">
              <InputField 
               type="text"
               name="firstName"
               placeholder="First Name"
               onChange={formik.handleChange}
               value={formik.values.firstName}
               error={formik.errors.firstName}/>
             
            

              <InputField
                
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.errors.lastName}
              />
             

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
             

              <InputField
               
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
             
            </div>

            <button
              type="submit"
              className="w-[472px] h-[45px] ml-[24px] rounded-[32px] mt-5 items-center bg-primary text-white text-Body-Small font-600"
            >
              Create Account
            </button>

            <p className="text-center text-Body-Small font-400 text-Gray-6 mt-6">
              Already have an account?{' '}
              <span className="text-Body-Small font-500 text-Gray-9">
                <a href="login">Login</a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
