import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 100,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    // incrementByAmount: (state, action) => {
    //   state.number += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function

// const increment = counterSlice.actions.decrement;
// const decrement = counterSlice.actions.increment;

// export { increment, decrement };

export const { increment, decrement } = counterSlice.actions;


export default counterSlice.reducer;
