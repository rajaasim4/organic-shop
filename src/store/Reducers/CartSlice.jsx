import { createSlice } from "@reduxjs/toolkit";

//Initial State of Cart
const initialState = {
    cart: [],
    SubTotal: 0,
    priceAfterDiscount: 0,
    discountPercent: 0,
    isDiscountImplemented: false
    // Total: ""
}


export const CartSlice = createSlice({
    name: "CartSlice",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let newItem = action.payload
            let existingItem = state.cart.find((item) => item.id === newItem.id)
            if (!existingItem) {
                state.cart.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    img: newItem.imgSrc,
                    quantity: 1,
                    subtotal: newItem.price
                })
            }
            else {
                existingItem.quantity++;
                existingItem.subtotal = Number(existingItem.subtotal) + Number(existingItem.price)
            }

            //Calculating Cart SubTotal

            state.SubTotal = state.cart.map((item) => item.price * item.quantity).reduce((x, y) => x + y, 0);


            // Calculate the discount only if it's greater than 0
            if (state.priceAfterDiscount > 0) {
                state.priceAfterDiscount = state.SubTotal * (1 - state.discountPercent / 100);
            }

        },
        removeToCart: (state, action) => {
            let newItem = action.payload;
            let existingItem = state.cart.find((item) => item.id === newItem)

            if (existingItem) {
                state.cart = state.cart.filter((item) => item.id !== newItem)
            }

            //Calculating Cart SubTotal

            state.SubTotal = state.cart.map((item) => item.price * item.quantity).reduce((x, y) => x + y, 0);


            // Calculate the discount only if it's greater than 0
            if (state.priceAfterDiscount > 0) {
                state.priceAfterDiscount = state.SubTotal * (1 - state.discountPercent / 100);
            }



        },
        decreasingItemQunatity: (state, action) => {
            let newItem = action.payload;

            let existingItem = state.cart.find((item) => item.id === newItem);
            if (existingItem.quantity == 1) {
                state.cart = state.cart.filter((item) => item.id !== newItem)
            }
            else {
                existingItem.quantity--;
                existingItem.subtotal = Number(existingItem.subtotal) - Number(existingItem.price)
            }

            //Calculating Cart SubTotal

            state.SubTotal = state.cart.map((item) => item.price * item.quantity).reduce((x, y) => x + y, 0);
            // Calculate the discount only if it's greater than 0
            if (state.priceAfterDiscount > 0) {
                state.priceAfterDiscount = state.SubTotal * (1 - state.discountPercent / 100);
            }

        },
        calculateDiscount: (state, action) => {
            //Discount can be Implemented Only Once
            state.isDiscountImplemented = true;

            //How Much you want to give Discount;
            state.discountPercent = action.payload
            state.priceAfterDiscount = state.SubTotal * (1 - state.discountPercent / 100);

        }


    },
    // extraReducers: ()

})


export const { addToCart, removeToCart, decreasingItemQunatity, calculateDiscount } = CartSlice.actions;


export default CartSlice.reducer