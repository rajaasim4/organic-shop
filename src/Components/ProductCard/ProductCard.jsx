import { FaStar } from "react-icons/fa"
import Onions from "../../assets/Images/onions.jpg"
import { BsCart3 } from "react-icons/bs"
import { Link } from "react-router-dom"
const ProductCard = () => {
    return (
        <div className=" w-[340px] h-[498px] sm:w-full border-[1px] border-gray-300 bg-[#fffcfc] group shadow-md hover:shadow-xl duration-300 cursor-pointer rounded-xl">
            <div className="w-[315px] h-[323px] bg-[#fff]  rounded-lg relative flex justify-center items-center mx-auto">
                <img src={Onions} className="w-full h-full rounded-lg" alt="Product Image" />
                <button className="absolute bottom-3 right-3 h-10 w-10 rounded-lg bg-gradient_bg  place-items-center hidden group-hover:grid duration-300 "
                    title="Add to Cart"
                //  onClick={() => alert("clicked")}
                >
                    <span className="text-white text-2xl">

                        <BsCart3 />
                    </span>
                </button>
            </div>
            <div className=" flex flex-col items-center justify-evenly gap-y-3 mt-2 p-3">

                <span className="text-[#10101075] text-lg">Fruits, Vegetables</span>
                <Link>
                    <h4 className="text-2xl font-semibold">Savoy Cabbage</h4>
                </Link>
                <div className="flex text-primary_green">
                    <span>
                        <FaStar />
                    </span>
                    <span>
                        <FaStar />
                    </span>
                    <span>
                        <FaStar />
                    </span>
                    <span>
                        <FaStar />
                    </span>
                    <span>
                        <FaStar />
                    </span>

                </div>
                <h4 className="text-xl font-semibold">$20.11</h4>
            </div>
        </div>
    )
}

export default ProductCard