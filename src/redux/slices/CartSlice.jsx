import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [], // Initial cart is an empty array
  },
  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Increment quantity if the item already exists
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add a new item to the cart
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    // Increment quantity
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1; // Increase the quantity by 1
      }
    },

    // Decrement quantity, ensuring it doesn't go below 1
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) {
        item.qty -= 1; // Decrease the quantity by 1 only if it's greater than 1
      }
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;

// Export reducer
export default CartSlice.reducer;
