import React from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useRouter } from 'next/navigation';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import { useLoginMutation } from '@/Redux/api/authApi';
import { setAuthenticated, setUserData } from '@/Redux/slice/authSlice';
import { useDispatch } from 'react-redux';

// Validation Schema
const validationSchema = object({
  email: string().email('Invalid email address').required('Email is required'),
  password: string().required('Password is required'),
});

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await handleLogin(values);
        console.log(res?.data);
        if (res?.data?.token) {
          document.cookie = `authToken=${res?.data?.token}`;
          localStorage.setItem("userData", JSON.stringify(res?.data?.user));
          router.replace("/");
          dispatch(setAuthenticated(true));
          dispatch(setUserData(res?.data?.user));
        }
      } catch (error) {
        console.error('Login Error:', error);
      }
    },
  });

  return (
    <div className="container mx-auto">
      <div className="w-[520px] h-auto bg-white border border-[#F2F2F2] shadow-lg mt-10 mx-auto p-6 rounded-lg">
        <h1 className="text-center text-Heading-05 font-semibold text-Gray-9 mb-6">
          Sign In
        </h1>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <InputField
              type="text"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="mb-4">
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Remember & Forget */}
          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-Body-Small font-normal text-Gray-6 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded-md" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-Body-Small font-normal text-Gray-6 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <Button variant="primary" pageType="auth" type="submit">
            Login
          </Button>

          {/* Register Link */}
          <p className="text-center text-Body-Small font-normal text-Gray-6 mt-6">
            Don’t have an account?{' '}
            <span className="font-medium text-Gray-9 hover:underline">
              <a href="/register">Register</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
