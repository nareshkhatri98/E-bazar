import { createSlice } from "@reduxjs/toolkit";
import { allProudcts } from "@/assets/products";

const initialState = {
  cart: [],
  items: allProudcts,
  totalQuantity: 0,
  subTotalPrice:0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // Check if the product already exists in the cart
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.quantity * parseFloat(existingItem.price.replace("$", "")); // Increment quantity
      } else {
        state.cart.push({
           ...product, quantity: 1 ,
           subtotal: parseFloat(product.price.replace("$", "")) 
          }); // Add new item
      }

      // Update totalQuantity and totalPrice
      state.totalQuantity += 1;
      state.totalPrice += parseFloat(product.price.replace("$", ""));
     
    },
   
    

  },
});

export const { addToCart, incrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
