import { configureStore } from "@reduxjs/toolkit";
import CheckOutShippingSlice from "./Reducers/CheckOutShippingSlice";
import CheckDetailsSlice from "./Reducers/CheckDetailsSlice";
import CartSlice from "./Reducers/CartSlice";

export const store = configureStore({
  reducer: {
    CheckOutShipping: CheckOutShippingSlice,
    CheckDetails: CheckDetailsSlice,
    CartSlice: CartSlice,
  },
});
