import React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import InputField from '@/components/InputField';

// Validation schema using Yup
let validationSchema = object({
  currentPassword: string().required('Current password is required'),
  newPassword: string().required('New password is required'),
  confirmPassword: string().required('Confirm password is required'),
});

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema, // Using validationSchema for Yup
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });

  return (
    <div>
      <div className="w-[984px] h-auto border-[1px] mt-6 ml-[340px] ">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-Body-XL font-500 text-Gray-9 p-4">Change Password</h1>
          <hr />
          <div className="m-6 relative">
            <p>Current Password</p>
            <InputField
              name="currentPassword"
              type="password"
              placeholder="Password"
              className="w-[936px] mt-[6px] h-[49px] border-[1px] rounded-[6px] p-4"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
            
              error={ formik.errors.currentPassword}
            />
          </div>

          <div className="ml-6 mt-4 flex gap-4">
            <div>
              <p>New Password</p>
              <InputField
                name="newPassword"
                type="password"
                placeholder="Password"
                className="w-[460px] h-[49px] border-[1px] p-3"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
             
                error={formik.errors.newPassword}
              />
            </div>

            <div>
              <p>Confirm Password</p>
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-[460px] h-[49px] border-[1px] p-3"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              
                error={ formik.errors.confirmPassword}
              />
            </div>
          </div>

          <button
            type="submit"
            className="m-6 w-[194px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
