import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userData: {}
};

export const authSlice = createSlice({
  name: "authSlide",
  initialState: initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setAuthenticated, setUserData } = authSlice.actions;

export default authSlice.reducer;
