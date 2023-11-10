
import { BsCart3 } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import StarRating from "../StarRating/StarRating"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/Reducers/CartSlice"
const ProductCard = (props) => {
    const dispatch = useDispatch()

    const navigate = useNavigate();


    //Destructing Data form the Props
    const { id, name, category, price, imgSrc, rating } = props;

    //Adding Items to the Cart
    const handleAddToCart = () => {

        dispatch(addToCart({ id, name, category, price, imgSrc, rating, quantity: 1 }))

    }

    // const Itemdata = { id, name, category, price, imgSrc, rating };

    // const navigaiontoSingleProduct = () => {
    //     navigate(`/Shop/${name}`, { state: { id } })
    // }

    return (
        <div className=" w-[340px] h-[498px] sm:w-full group  group  duration-300 cursor-pointer border rounded-xl border-gray-300 group relative">
            {/* bg-[#fffcfc] */}
            {/* bg-[#f0f0f0] */}
            <div className="w-full h-[323px]  duration-200  rounded-2xl relative flex justify-center items-center mx-auto ">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-9/12 h-[75%] rounded-full bg-primary_dark_green  duration-300"></div>

                <img src={imgSrc} className="w-9/12 object-contain rounded-lg z-10" alt="Product Image" />
                <button className="absolute bottom-3 right-3 h-10 w-10 rounded-lg bg-gradient_bg  place-items-center hidden group-hover:grid duration-300 "
                    title="Add to Cart"
                    onClick={handleAddToCart}>
                    <span className="text-white text-2xl">
                        <BsCart3 />
                    </span>

                </button>
            </div>
            <div className=" flex flex-col items-center justify-evenly gap-y-2 mt-2 p-3">

                <span className="text-[#10101075] text-base">{category}</span>
                <Link to={`/Shop/${name}`} state={id} className="hover:text-orange-300">
                    <h4 className="text-xl font-semibold">{name}</h4>
                </Link>
                {/* <button onClick={navigaiontoSingleProduct} className="hover:text-orange-300">
                    <h4 className="text-xl font-semibold">{name}</h4>
                </button> */}
                <div className="flex text-primary_green">
                    <StarRating rating={rating} />

                </div>
                <h4 className="text-xl font-semibold">${price}</h4>
            </div>
        </div >
    )
}

export default ProductCard