import { setAuthenticated, setUserData } from "@/redux/slice/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Init = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      dispatch(setUserData(JSON.parse(userData ?? "")));
      dispatch(setAuthenticated(true));
    }
  }, []);

  return null;
};

export default Init;
