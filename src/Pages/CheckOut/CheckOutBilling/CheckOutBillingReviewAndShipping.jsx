//Icons form Reac-icons
import { AiOutlineUser, AiOutlineTablet } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

//State
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../../utils/Helpers/Animation/FadeFromLeftAnimation";
import { Link } from "react-router-dom";

const CheckOutBillingReviewAndShipping = () => {
  //Getting CartItems from the State for the Review
  const cartItems = useSelector((state) => state.CartSlice);

  //Getting Detials Data from the State;
  const data = useSelector((state) => state.CheckOutShipping);

  //Showing and Hidding the Elements
  const [showReviewItems, setShowReviewItems] = useState(false);

  return (
    <motion.div
      className={`mt-9 w-full shadow-lg py-8 px-4 rounded-lg border border-gray-300 ${
        showReviewItems ? "h-max" : "h-28"
      } duration-150 overflow-hidden`}
      {...fadeInFromLeft(0.6)}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowReviewItems(!showReviewItems)}
      >
        <h4 className="text-2xl font-semibold mb-3">
          Review Items and Shipping
        </h4>
        <span className="text-2xl cursor-pointer">
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="w-full mt-9 ">
        <table className="w-full">
          <thead className="">
            <tr className="border-b-2 h-16 border-gray-300 py-5">
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qunatity</th>
              <th>SubTotal</th>
              {/* <th>Remove</th> */}
            </tr>
          </thead>
          <tbody className="bg-white">
            {cartItems.cart.map((item, Index) => {
              return (
                <tr
                  key={Index}
                  className=" h-32 md:h-max md:py-5 border-gray-300 shadow-md"
                >
                  <td className="text-center">
                    <img
                      src={item.img}
                      className="h-28 w-28 hover:scale-110 duration-200 inline-block"
                      alt=""
                      loading="lazy"
                    />
                  </td>
                  <td
                    className="text-center font-bold hover:text-primary_dark_green cursor-pointer"
                    data-aria-label="Product"
                  >
                    <Link to={`/Shop/${item.name}`} state={item.id}>
                      {item.name}
                    </Link>
                  </td>
                  <td className="text-center font-bold" data-aria-label="Price">
                    ${item.price}
                  </td>
                  <td
                    className=" text-center font-bold md:text-right"
                    data-aria-label="Qunatity"
                  >
                    <div className="flex justify-evenly items-center md:w-max md:gap-x-3">
                      <span>{item.quantity}</span>
                    </div>
                  </td>
                  <td
                    className="text-center font-bold"
                    data-aria-label="SubTotal"
                  >
                    ${item.subtotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-7 flex flex-col gap-y-8">
          <div className="flex items-center gap-x-3">
            <h3 className="flex items-center border border-gray-300 px-3 py-2 rounded-lg shadow-md">
              <span className="text-xl mr-3">
                <AiOutlineUser />
              </span>
              Name:
            </h3>
            <p>
              {data.firstName} {data.lastName}
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <h3 className="flex items-center border border-gray-300 px-3 py-2 rounded-lg shadow-md">
              <span className="text-xl mr-3">
                <IoMailOutline />
              </span>
              Email:
            </h3>
            <p>{data.email}</p>
          </div>
          <div className="flex items-center gap-x-3">
            <h3 className="flex items-center border border-gray-300 px-3 py-2 rounded-lg shadow-md">
              <span className="text-xl mr-3">
                <AiOutlineTablet />
              </span>
              Phone Number:
            </h3>
            <p>{data.phoneNumber}</p>
          </div>
          <div className="flex items-center gap-x-3">
            <h3 className="flex items-center border border-gray-300 px-3 py-2 rounded-lg shadow-md">
              <span className="text-xl mr-3">
                <FaAddressCard />
              </span>
              Address:
            </h3>
            <p>{data.address}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckOutBillingReviewAndShipping;
