import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  userData: {}
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthenticated: (state,action) => {
      
      state.isAuthenticated = action.payload;
    },
    setUserData: (state, action) => {
        state.userData = action.payload;
      },
    
  },
})

// Action creators are generated for each case reducer function
export const { setAuthenticated, setUserData} = authSlice.actions

export default authSlice.reducer