import { createSlice } from "@reduxjs/toolkit";

type CheckoutState = {
  isCheckoutOpen: boolean;
};

const initialState: CheckoutState = {
  isCheckoutOpen: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    openCheckout: (state) => {
      console.log(state.isCheckoutOpen);
      state.isCheckoutOpen = true;
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false;
    },
  },
});

export const { openCheckout, closeCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
