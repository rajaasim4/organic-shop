import { Link } from "react-router-dom"

const CartTotal = () => {
    return (
        <div className="w-[600px] rounded-lg p-6 shadow-lg  border-gray-400 ">
            <div className="">

                <h1 className="font-semibold text-3xl  border-gray-400 pb-4  text-center">Cart Total</h1>
            </div>
            <div className="">

                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">SubTotal</h2>
            </div>
            <div className="">

                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Shipping Cost</h2>
            </div>
            <div className="">

                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Tax</h2>
            </div>
            <div className="">

                <h2 className=" text-lg  border-gray-400 pb-2 pt-3">Discount</h2>
            </div>
            <div className="w-full">
                <div className="">

                    <h1 className="font-semibold text-3xl  pb-4 pt-8">Total</h1>
                </div>
                <Link to={"/CheckOut"} className="bg-btn_bg w-9/12 mx-auto flex justify-center items-center mt-7 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">CheckOut</Link>
            </div>

        </div>
    )
}

export default CartTotal