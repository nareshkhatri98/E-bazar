import { ArrowDownIcon, Location } from "@/assets/icons";
import { setAuthenticated, setUserData } from "@/Redux/slice/authSlice";
import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const Hero = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const authData = useSelector((state) => state.auth);

  const { isAuthenticated, userData } = authData;

  const logout = () => {
    localStorage.removeItem("userData");
    dispatch(setAuthenticated(false));
    dispatch(setUserData({}));
    document.cookie = "authToken=;";
    router.push('/')
  };

  return (
    <div>
      {/* Header section */}
      <div className="py-3 border-b-2 border-Gray-1">
        <div className="container flex justify-between mx-auto">
          <div className="flex items-center">
            <Image src={Location} alt="Location" className="cursor-pointer" />
            <span className="ml-2 text-Body-Tiny font-400">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center pr-5 border-r-2 border-Gray-1">
              {isAuthenticated && (
                <button className="mx-4 text-sm" onClick={logout}>
                  Logout
                </button>
              )}
              <div className="flex items-center cursor-pointer">
                <span className="mr-[6px] text-Body-Tiny font-400">Eng</span>
                <Image src={ArrowDownIcon} alt="arrow down" />
              </div>
              <div className="flex items-center ml-5 cursor-pointer">
                <span className="mr-[6px] text-Body-Tiny font-400">USD</span>
                <Image src={ArrowDownIcon} alt="arrow down" />
              </div>
            </div>
            <div className="ml-5 cursor-pointer ">
              {isAuthenticated ? (
                <>
                  <span className=" text-Body-Tiny font-400">
                    {userData?.firstName}
                  </span>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <span className=" text-Body-Tiny font-400">Sign In</span>{" "}
                  </Link>
                  <span className="mx-1 text-Body-Tiny font-400">/</span>
                  <Link href="/register">
                    <span className="text-Body-Tiny font-400">Sign Up</span>{" "}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;