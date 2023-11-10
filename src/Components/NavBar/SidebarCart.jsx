//Icons from React-icons 

import { IoMdClose } from "react-icons/io"
import { HiOutlineShoppingBag, } from "react-icons/hi"
import { AiOutlineCloseCircle } from "react-icons/ai"


//Images
import Empty_Cart from "../../assets/Images/SVG/EmptyCart.svg"

//States
import { Link, } from "react-router-dom"

//Reducer
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../../store/Reducers/CartSlice"

import { forwardRef } from "react"

const SidebarCart = forwardRef(({ showCart, setShowCart }, ref) => {
    // const SidebarCart = forwardRef(({ showCart, setShowCart }, ref) => {


    const dispatch = useDispatch()

    //=====Getting Cart Data from Reducer======

    const cartdata = useSelector((state) => state.CartSlice);


    return (
        <div className={`duration-150 
    ${showCart ? "w-[300px]" : "w-0"}
      h-full fixed top-0 right-0 bg-white z-50 rounded-l-2xl shadow-xl`} ref={ref}>
            <div className=" py-4 px-5 flex flex-col justify-between h-full w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl  flex items-center">
                        <span className="mr-3"><HiOutlineShoppingBag /></span>
                        My Cart
                    </h1>
                    <span className="text-xl cursor-pointer" onClick={() => setShowCart(false)}>
                        <IoMdClose />
                    </span>
                </div>
                <div className=" h-full">
                    {cartdata.cart.length === 0 ?
                        <div className="flex justify-center items-center h-full">

                            <img src={Empty_Cart} alt="" />
                        </div>
                        :
                        cartdata.cart.map((item) => {
                            const { id, name, price, quantity, img } = item
                            return (
                                <div className="flex items-center gap-x-2" key={id}>
                                    <span className="duration-300 hover:text-red-400 cursor-pointer" onClick={() => dispatch(removeToCart(id))}><AiOutlineCloseCircle /></span>
                                    <img src={img} alt="Product Image" className="w-20 h-20" />
                                    <div className="">
                                        <h2>{name}</h2>
                                        <div className="">
                                            <span className="text-primary_green mr-1">

                                                {quantity}
                                            </span>
                                            x ${price}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className="">

                    <Link
                        onClick={() => setShowCart(false)}
                        to={"/Cart"}
                        className="bg-btn_bg flex items-center justify-center max-w-40 w-9/12 mx-auto text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">View Cart
                    </Link>
                </div>
            </div>
        </div>
    )
})

SidebarCart.displayName = "SidebarCart";

export default SidebarCart
