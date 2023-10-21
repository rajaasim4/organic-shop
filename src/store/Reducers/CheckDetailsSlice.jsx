import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    isCheckOutShippingDetialsFilled: false,
    isCheckOutPymentSelected: false
}

export const CheckDetailsSlice = createSlice({
    name: "CheckDetails",
    initialState: initialValues,
    reducers: {
        getCheckOutShippingDetails: (state, action) => {
            state.isCheckOutShippingDetialsFilled = action.payload
        },
        getCheckOutPaymentSelection: (state, action) => {
            state.isCheckOutPymentSelected = action.payload
        }
    }
})


export const { getCheckOutShippingDetails, getCheckOutPaymentSelection } = CheckDetailsSlice.actions;

export default CheckDetailsSlice.reducer