import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../store/reducers/cart";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
