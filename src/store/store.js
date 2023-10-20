import { configureStore } from "@reduxjs/toolkit";
import CheckOutShippingSlice from "./Reducers/CheckOutShippingSlice";

export const store = configureStore({
  reducer: {
    CheckOutShipping: CheckOutShippingSlice,
  },
});
