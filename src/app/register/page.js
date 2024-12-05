"use client";
import { bannerIcon } from "@/assets/Banner";
import { ArrowDownIcon } from "@/assets/icons";
import { HomeIcon } from "@/assets/shop-page-images";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import NavbarBakup from "@/components/NavbarBakup";
import { useSignupMutation } from "@/redux/api/authApi";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { object, string } from "yup";
import swal from "sweetalert";
import { setAuthenticated, setUserData } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";

const validation = object({
  firstName: string().required("This is required field"),
  lastName: string().required(),
  email: string().required().email("Please enter valid email"),
  password: string().required(),
  confirmPassword: string().required(),
});

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [handleRegister, { isLoading }] = useSignupMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      try {
        const res = await handleRegister(values);
        console.log(res?.data);

        if (res?.data?.token) {
          document.cookie = `authToken=${res.data.token}`;

          localStorage.setItem("userData", JSON.stringify(res?.data?.user));
          router.replace("/");
          dispatch(setAuthenticated(true));
          dispatch(setUserData(res?.data?.user));
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <hr />
      <NavbarBakup />
      <div>
        <div className="relative w-full h-[120px] ">
          <Image
            src={bannerIcon}
            alt="banner"
            className="object-cover w-full h-full rotate-180"
          />
        </div>
        <div className="container mx-auto">
          {/* for top banner */}
          <div className=" flex gap-3  mt-[48px] absolute top-64 ">
            <Image src={HomeIcon} alt="Home icon" className="cursor-pointer" />
            <Image
              src={ArrowDownIcon}
              alt="arrow down"
              className="-rotate-90 cursor-pointer"
            />
            <span className="cursor-pointer text-Body-Medium font-400 text-Gray-4">
              Account
            </span>
            <Image
              src={ArrowDownIcon}
              alt="arrow down"
              className="-rotate-90 cursor-pointer"
            />
            <span className="cursor-pointer text-primary text-Body-Medium font-400">
              Register
            </span>
          </div>

          <div className="w-[520px] h-[432px] bg-white border border-[#F2F2F2] shadow-lg mt-[80px] ml-[33%] ">
            <h1 className="text-center text-Heading-05 font-600 text-Gray-9 p-[24px]">
              Create Account
            </h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                formik.handleSubmit();
              }}
            >
              <div className="ml-[24px] ">
                <Input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  placeholder="First Name"
                  error={formik.errors.firstName}
                />

                <Input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                  error={formik.errors.lastName}
                />
                <Input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                  error={formik.errors.email}
                />
                <Input
                  type="text"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  placeholder="Password"
                  error={formik.errors.password}
                />
                <Input
                  type="text"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder=" Confirm  Password"
                  error={formik.errors.confirmPassword}
                />
              </div>
              {/* for forget password and remember */}
              {/* <div className=" ml-[24px] mt-[16px] flex items-center gap-2  ">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] rounded-[3px] bg-gray-200 cursor-pointer"
                />
                <div className="flex items-center justify-between ">
                  <p className="text-Body-Small font-400 text-Gray-6">
                    Accept all terms & Conditions
                  </p>
                </div>
              </div> */}
              <div className="px-4">
                <Button variant="primary" isLoading={isLoading}>
                  Create Account
                </Button>
              </div>

              <p className="mt-6 text-center text-Body-Small font-400 text-Gray-6">
                Already have account{" "}
                <span className="text-Body-Small font-500 text-Gray-9">
                  <a href="login">Login</a>
                </span>
              </p>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <Footer />
    </>
  );
};

export default Register;
