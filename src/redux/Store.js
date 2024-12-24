import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice";
import categoryReducer from "./slices/CategorySlice"
import searchReducer from "./slices/SearchSlice"

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    category:categoryReducer,
    search:searchReducer

  },
});
