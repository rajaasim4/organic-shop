
import { BsCart3 } from "react-icons/bs"
import { Link } from "react-router-dom"
import StarRating from "../StarRating/StarRating"
const ProductCard = (props) => {

    //Destructing Data form the Props
    const { id, name, category, price, imgSrc, rating } = props



    return (
        <div className=" w-[340px] h-[498px] sm:w-full group  group  duration-300 cursor-pointer">
            {/* bg-[#fffcfc] */}
            {/* bg-[#f0f0f0] */}
            <div className="w-full h-[323px] group-hover:shadow-xl duration-200  rounded-lg relative flex justify-center items-center mx-auto bg-[#f0f0f0]">

                <img src={imgSrc} className="w-9/12 object-contain rounded-lg" alt="Product Image" />
                <button className="absolute bottom-3 right-3 h-10 w-10 rounded-lg bg-gradient_bg  place-items-center hidden group-hover:grid duration-300 "
                    title="Add to Cart"
                >
                    <span className="text-white text-2xl">
                        <BsCart3 />
                    </span>

                </button>
            </div>
            <div className=" flex flex-col items-center justify-evenly gap-y-3 mt-2 p-3">

                <span className="text-[#10101075] text-lg">{category}</span>
                <Link>
                    <h4 className="text-2xl font-semibold">{name}</h4>
                </Link>
                <div className="flex text-primary_green">
                    <StarRating rating={rating} />

                </div>
                <h4 className="text-xl font-semibold">${price}</h4>
            </div>
        </div>
    )
}

export default ProductCard