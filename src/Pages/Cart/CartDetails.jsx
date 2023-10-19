import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi"
import { AiOutlineDelete } from "react-icons/ai"
import img from "../../assets/Images/onions.jpg"
const CartDetails = () => {
    return (
        <div className="w-8/12  px-4 py-3 md:w-full  md:px-1">
            <div className="flex flex-col gap-y-5 pt-7 ">

                <h1 className="text-3xl text-center ">Your Cart is Empty</h1>
                <p className="text-center  text-xl">Want to Buy Items</p>
                <button className="bg-btn_bg w-40 mx-auto flex justify-center items-center  text-lg h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 animate-pulse ">Shop Now</button>
            </div>
            <div className="w-full CartProductDetails">
                <table className="w-full">
                    <thead className="">
                        <tr className="border-b-2 h-16 border-gray-300 py-5">
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qunatity</th>
                            <th>SubTotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className=" h-32 md:h-max md:py-5 border-gray-300 shadow-md">
                            <td className="text-center">
                                <img
                                    src={img}
                                    className="h-28 w-28 hover:scale-110 duration-200 inline-block"
                                    alt=""
                                    loading="lazy"
                                />
                            </td>
                            <td
                                className="text-center font-bold hover:text-[#ffc900] cursor-pointer"
                                data-aria-label="Product"
                            >
                                <a href="/Shop/3">Chicken Burger</a>
                            </td>
                            <td className="text-center font-bold" data-aria-label="Price">
                                $15.99
                            </td>
                            <td
                                className=" text-center font-bold md:text-right"
                                data-aria-label="Qunatity"
                            >
                                <div className="flex justify-evenly items-center md:w-max md:gap-x-3">
                                    <button className="w-7 h-7 border border-slate-400 flex justify-center items-center rounded-md">
                                        <HiOutlinePlusSm />
                                    </button>
                                    <span>1</span>
                                    <button className="w-7 h-7 border border-slate-400 flex justify-center items-center rounded-md">
                                        <HiMinusSm />
                                    </button>
                                </div>
                            </td>
                            <td className="text-center font-bold" data-aria-label="SubTotal">
                                $15.99
                            </td>
                            <td className="text-center font-bold" data-aria-label="Remove">
                                <span className="inline-block text-2xl duration-200 hover:text-red-500 cursor-pointer" title="Remove Item">
                                    <AiOutlineDelete />
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className=" flex w-full justify-between mt-6 md:w-full flex-wrap md:gap-y-5">
                    <div className=" flex gap-x-3 flex-wrap md:gap-y-4 md:justify-center items-center">
                        <input
                            type="text"
                            placeholder="Cupon Code"
                            className="px-3 py-3 border-[2px] border-gray-300 outline-none   focus:border-[#fb7645]  rounded-md"
                        />
                        <button className="bg-btn_bg w-40 mx-auto flex justify-center items-center  text-lg h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">Apply Cupon</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDetails