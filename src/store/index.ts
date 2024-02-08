import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../store/reducers/cart";

import api from "../services/api";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
