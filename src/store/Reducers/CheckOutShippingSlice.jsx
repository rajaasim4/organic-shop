import { createSlice } from "@reduxjs/toolkit";


export const CheckOutShippingSlice = createSlice({
    name: "CheckOutShipping",
    initialState: {
        firstName: "", lastName: "", email: "", phoneNumber: "", address: ""
    },
    reducers: {
        getShippingValues: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
})


export const { getShippingValues } = CheckOutShippingSlice.actions;

export default CheckOutShippingSlice.reducer