
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation";

const CartTotal = () => {


    //Subtotal Price
    const SubTotal = useSelector((state) => state.CartSlice.SubTotal);

    //DiscountPrice
    const totalPriceAfterdiscount = useSelector((state) => state.CartSlice.priceAfterDiscount);


    //Actual Discount Price we give to customer 
    let totalDiscount = totalPriceAfterdiscount === 0 ? totalPriceAfterdiscount : (SubTotal - totalPriceAfterdiscount).toFixed(2)


    // console.log(`Total price is ${SubTotal} and then after 20% Discount we get ${totalPriceAfterdiscount} and hence now total is ${totalDiscount}`);

    let totalPrice = totalPriceAfterdiscount === 0 ? SubTotal : SubTotal - totalDiscount

    return (
        <motion.div
            {...fadeInFromLeft(0.5)}
            className="w-[600px] rounded-lg p-6 shadow-lg border-2 h-max pb-14  border-gray-400 ">
            <div className="">

                <h1 className="font-semibold text-3xl  border-gray-400 pb-4  text-center">Cart Total</h1>
            </div>
            <div className="flex justify-between items-center">

                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">SubTotal</h2>
                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${SubTotal.toFixed(2)}</h2>
            </div>
            <div className="flex justify-between items-center">

                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Discount</h2>
                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${totalDiscount}</h2>
            </div>



            <div className="w-full">
                <div className="flex items-center justify-between">

                    <h1 className="font-semibold text-3xl  pb-4 pt-8">Total</h1>
                    <h2 className=" text-lg  border-gray-400 pb-2 pt-3">${totalPrice.toFixed(2)}</h2>
                </div>
                <Link to={"/CheckOut"} className="bg-btn_bg w-9/12 mx-auto flex justify-center items-center mt-7 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">CheckOut</Link>
            </div>

        </motion.div>
    )
}

export default CartTotal