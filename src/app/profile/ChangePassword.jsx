import React, { useEffect } from "react";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import { useChangePasswordMutation } from "@/Redux/api/authApi";
import InputField from "@/components/InputField";

// Validation Schema using Yup
const validationSchema = object({
  currentPassword: string().required("Current password is required"),
  newPassword: string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: string()
    .oneOf([ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

const ChangePassword = () => {
  const [changePassword, { isLoading, isError, error, isSuccess, data }] =
    useChangePasswordMutation();

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
         const res = await changePassword({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        });
        console.log(values.currentPassword);
        console.log(values.newPassword);
        
      console.log(res);
      } catch (err) {
        console.error("API Error:", err);
      }
    },
  
    
  });



  return (
    <div>
      <div className="w-[984px] h-auto border-[1px] mt-6 ml-[340px]">
        <form onSubmit={formik.handleSubmit}>
          <h1 className="text-Body-XL font-500 text-Gray-9 p-4">
            Change Password
          </h1>
          <hr />

          {/* Current Password */}
          <div className="m-6 relative">
            <p>Current Password</p>
            <InputField
              name="currentPassword"
              type="password"
              placeholder="Current Password"
              className="w-[936px] mt-[6px] h-[49px] border-[1px] rounded-[6px] p-4"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              error={
                 formik.errors.currentPassword
              }
            />
          </div>

          {/* New Password and Confirm Password */}
          <div className="ml-6 mt-4 flex gap-4">
            <div>
              <p>New Password</p>
              <InputField
                name="newPassword"
                type="password"
                placeholder="New Password"
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
                error={
                  
                  formik.errors.confirmPassword
                }
              />
            </div>
          </div>

          {/* Feedback */}
          {isLoading && <p className="m-6 text-blue-500">Changing password...</p>}
          {isError && (
            <p className="m-6 text-red-500">
              {error?.data?.message || "An error occurred!"}
            </p>
          )}
          {isSuccess && (
            <p className="m-6 text-green-500">Password changed successfully!</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="m-6 w-[194px] h-[45px] rounded-[43px] bg-primary text-white text-Body-Small font-600"
            disabled={isLoading}
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
