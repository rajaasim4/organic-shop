import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Reducers/CartSlice";
import { OvalLoader } from "../../utils/Helpers/Loaders/Loaders";
const ProductCard = (props) => {
  const dispatch = useDispatch();

  //Destructing Data form the Props
  const { id, name, category, price, imgSrc, rating } = props;

  //Adding Items to the Cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({ id, name, category, price, imgSrc, rating, quantity: 1 })
    );
  };

  return (
    <div
      className={` w-[340px] h-[498px] sm:w-full group  group  duration-300 cursor-pointer border rounded-xl border-gray-300 group relative shadow-lg ${props.bg}`}
    >
      {/* bg-[#fffcfc] */}
      {/* bg-[#f0f0f0] */}
      <div className="w-full h-[323px]  duration-200  rounded-2xl relative flex justify-center items-center mx-auto ">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-9/12 h-[75%] rounded-full bg-primary_dark_green  duration-300 sm:w-full sm:h-full sm:rounded-xl"></div>

        <img
          src={imgSrc}
          className="w-9/12 object-contain rounded-lg z-10"
          alt="Product Image"
        />
        <button
          className="absolute bottom-3 right-3 h-10 w-10 rounded-lg bg-gradient_bg  place-items-center opacity-0 group-hover:opacity-100 grid duration-500 "
          title="Add to Cart"
          onClick={handleAddToCart}
        >
          <OvalLoader
            width={30}
            height={30}
            strokeWidth={3}
            primaryColor="white"
            secondaryColor="#22c157"
          />
          {/* <span className="text-white text-2xl">
            <BsCart3 />
          </span> */}
        </button>
      </div>
      <div className=" flex flex-col items-center justify-evenly gap-y-2 mt-2 p-3">
        <span className="text-[#10101075] text-base">{category}</span>
        <Link
          to={`/Shop/${name}`}
          state={id}
          className="hover:text-primary_green"
        >
          <h4 className="text-xl font-semibold">{name}</h4>
        </Link>

        <div className="flex text-primary_green">
          <StarRating rating={rating} />
        </div>
        <h4 className="text-xl font-semibold">${price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
