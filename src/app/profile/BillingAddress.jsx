import React from 'react'
import InputField from '@/components/InputField'
import { useFormik } from 'formik';
import { object, string } from 'yup'


let validation = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  companyName: string().required('Company Name  is required'),
  country: string().required('Country is required'),
  zipCode: string().required('Zip Code is required'),
  stateName: string().required('State/Province is required'),
  orderNotes: string().required('Order Notes is required'),
  Street : string().required('Street is required')
  
   
});

const BillingAddress = () => {
    const formik = useFormik({
       initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         companyName: '',
         country:'',
         zipCode:',',
         stateName:'',
         orderNotes:'',
         Street:''
       },
       validationSchema: validation,
      
     });
  
  return (
    <div>
        <div className="w-[984px] h-auto border-[1px] mt-6 ml-[340px] ">
          <form action="#" onSubmit={formik.handleSubmit}>
            <h1 className="text-Body-XL font-500 p-5">Billing Address</h1>
            <hr />
            <div className="mt-[20px] flex gap-4 ml-6">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  First name
                </p>
                <InputField
                pageType='checkout'
                type="text"
                placeholder="your first name"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                error={formik.errors.firstName}
                  
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Last name
                </p>
                <InputField

                 pageType='checkout'
                  type="text"
                  name="lastName"
                  placeholder="your last name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  error={formik.errors.lastName}
                 
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Company name
                </p>
                <InputField
                name="companyName"
                 pageType='checkout'
                  type="text"
                  placeholder="Company name"
                  onChange={formik.handleChange}
                  values={formik.companyName}
                  error={formik.errors.companyName}
                 
                />
              </div>
            </div>
            <p className="text-Body-Small font-400 text-Gray-9 mt-4 ml-6">
              Street Address
            </p>
            <InputField
            
              type="text"
              name='Street'
              placeholder="street"
              className="w-[872px] h-[49px] border-[1px] rounded-[6px] p-2 ml-6"
              error={formik.errors.Street}
              onChange={formik.handleChange}
              values={formik.Street}
            />
            <div className="mt-[20px] flex gap-4 ml-6">
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">
                  Country / Region
                </p>
                <InputField pageType= 'checkout'
                name="country"
                  type="text"
                  placeholder="your first name"
                  onChange={formik.handleChange}
                  values={formik.country}
                  error={formik.errors.country}
                 
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">States</p>
                <InputField pageType= 'checkout'
                name = "stateName"
                  type="text"
                  placeholder="your last name"
                 onChange={formik.handleChange}
                 values={formik.stateName}
                 error={formik.errors.stateName}
                />
              </div>
              <div className="">
                <p className="text-Body-Small font-400 text-Gray-9">Zip code</p>
                <InputField pageType= 'checkout'
                 name=" zipCode"
                  type="text"
                  placeholder="Zip Code"
                  onChange={formik.handleChange}
                  values={formik.zipCode}
                  error={formik.errors.zipCode}
                />
              </div>
            </div>
            {/* for email and Phone */}
          <div className=" flex gap-4 ml-6 mt-4 ">
          <div>
          <p htmlFor="Email">Email</p>
          <InputField pageType= 'checkout' name='email'
           type="text"
          placeholder="dianne.russell@gmail.com" 
          onChange={formik.handleChange}
          values={formik.email}
          error={formik.errors.email}
          />
      
          </div>
          <div>
          <p htmlFor="Email">Phone</p>
          <InputField pageType= 'checkout'

           type="text" placeholder="(603) 555-0123"  />
      
          </div>
          </div>
          <button className="m-6 w-[167px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600 ">Save Changes</button>
          </form>
        </div>
    </div>
  )
}

export default BillingAddress