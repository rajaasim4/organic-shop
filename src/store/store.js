import { configureStore } from "@reduxjs/toolkit";
import CheckOutShippingSlice from "./Reducers/CheckOutShippingSlice";
import CheckDetailsSlice from "./Reducers/CheckDetailsSlice";
import CartSlice from "./Reducers/CartSlice";
import UserDetails from "./Reducers/User/UserDetails";

export const store = configureStore({
  reducer: {
    CheckOutShipping: CheckOutShippingSlice,
    CheckDetails: CheckDetailsSlice,
    CartSlice: CartSlice,
    UserDetails: UserDetails,
  },
});
