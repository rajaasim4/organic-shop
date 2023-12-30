import { useLayoutEffect, useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import Brands from "../../Layout/Brands/Brands";
import Product from "../../Data/Product";
import PageTransition from "../../utils/Helpers/Animation/PageTransition";

//Icons
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/Reducers/CartSlice";
import { useLocation } from "react-router-dom";

const SingleProduct = (props) => {
  //Getting Data to display here we click on the product card

  const location = useLocation();

  let SingleItemId = location.state;

  let getdata = Product.find((item) => item.id === SingleItemId);

  const { id, name, category, price, imgSrc, rating } = getdata;

  const [review, setReview] = useState(null);

  useLayoutEffect(() => {
    let randomReview = (Math.random() * 60).toFixed(0);
    setReview(randomReview);
  }, []);

  // hadnling Cart Qunatity

  const [itemquantity, setItemQuantity] = useState(1);

  const decreaseQuantity = () => {
    itemquantity > 1 ? setItemQuantity(itemquantity - 1) : setItemQuantity(1);
  };

  //Add to Cart

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        category,
        price,
        imgSrc,
        rating,
        quantity: itemquantity,
      })
    );
  };

  return (
    <>
      <PageTransition>
        <Helmet>
          <div className="pb-28">
            <div className="flex justify-between min-h-[400px] gap-x-5  ">
              <div className="w-5/12 flex items-center justify-center rounded-lg border border-gray-200 shadow-xl">
                <img
                  src={imgSrc}
                  className="w-9/12 h-full object-contain"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-5">
                <h1 className="text-3xl font-light sm:text-3xl md:text-4xl xsm:text-2xl  my-8">
                  {name}
                </h1>
                <div className="flex text-primary_green gap-x-1 items-center">
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
                  <span className="ml-2 text-lg">({review}) Review</span>
                </div>

                <h3 className="text-primary_green mt-5 text-3xl">${price}</h3>
                <span className=" w-full h-1 mt-10 block  bg-gradient_lines"></span>
                <div className="mt-2">
                  <div className="flex  w-max pr-3 py-2 items-center flex-wrap">
                    <span className="text-lg mr-2">Quantity:</span>
                    <button
                      className="w-9 border h-9 border-gray-400 rounded-lg grid place-items-center text-xl"
                      onClick={decreaseQuantity}
                    >
                      <BiMinus />
                    </button>
                    <div className="w-20  text-2xl font-semibold flex justify-center items-center">
                      {itemquantity}
                    </div>
                    <button
                      className="w-9 border h-9 border-gray-400 rounded-lg grid place-items-center text-xl"
                      onClick={() => setItemQuantity((prev) => prev + 1)}
                    >
                      <BiPlus />
                    </button>

                    <button
                      className="rounded-xl text-white w-32 h-12  mx-auto  bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 flex items-center justify-center ml-8"
                      onClick={handleAddToCart}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold">Category:</h3>
                  <p className="ml-2 text-gray-600 text-lg">{category}</p>
                </div>
                <div className="flex items-center mt-4">
                  <h3 className="text-xl ">Availability:</h3>
                  <p className="ml-2 text-gray-600 text-base">In Stock</p>
                </div>
              </div>
            </div>
          </div>
        </Helmet>
      </PageTransition>
      <Brands />
    </>
  );
};

export default SingleProduct;
