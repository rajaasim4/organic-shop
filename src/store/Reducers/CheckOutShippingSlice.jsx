import { createSlice } from "@reduxjs/toolkit";


export const CheckOutShippingSlice = createSlice({
    name: "CheckOutShipping",
    initialState: {
        firstName: "", lastName: "", email: "", phoneNumber: "", address: ""
    },
    reducers: {
        getShippingValues: (state, action) => {
            const { firstName, lastName, email, phoneNumber, address } = action.payload;
            state = { firstName, lastName, email, phoneNumber, address }
            // console.log(state)
        }
    }
})


export const { getShippingValues } = CheckOutShippingSlice.actions;

export default CheckOutShippingSlice.reducer