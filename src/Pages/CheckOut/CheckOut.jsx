//States
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import CheckOutBilling from "./CheckOutBilling/CheckoutBilling";
import CheckOutOrder from "./CheckOutOrder";
import Brands from "../../Layout/Brands/Brands";
import { toast } from "react-toastify";
import PageTransition from "../../utils/Helpers/Animation/PageTransition";
// Functions
import { calculateDiscount } from "../../store/Reducers/CartSlice";
const CheckOut = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  //Checking Cupon Code implemented or not
  const cuponApplied = useSelector(
    (state) => state.CartSlice.isDiscountImplemented
  );

  //Handle Cupon Code
  const handleCuponCode = (e) => {
    e.preventDefault();
    if (!cuponApplied) {
      //Pass the amount how much percent you want to give discount
      dispatch(calculateDiscount(20));
    } else {
      toast.error("You have Already Applied Cupon Code", {
        position: "top-right",
        autoClose: 2300,
        toastId: 2,
      });
    }
  };

  return (
    <>
      <PageTransition>
        <section className="py-10 w-full mb-20 ">
          <div
            className={`w-[89%] duration-300  mx-auto xxl:w-[1700px] mb-7   ${
              visible ? "h-52 " : "h-16"
            } `}
          >
            <div className="w-full  bg-primary_dark_green px-4 h-16 rounded-lg   flex items-center">
              <p className="text-white font-medium">
                Have a coupon?
                <span
                  className="cursor-pointer hover:text-zinc-300"
                  onClick={() => setVisible(!visible)}
                >
                  Click here to enter your code
                </span>
              </p>
            </div>
            {visible && (
              <form action="" onSubmit={handleCuponCode}>
                <div className="w-8/12 mt-5 flex items-center duration-300 flex-wrap gap-y-5 sm:justify-center sm:w-full ">
                  <input
                    type="text"
                    className="w-full py-3 px-3 border-gray-300 border outline-none rounded-lg  focus-visible:border-[#007d56] focus-visible:border-2 mr-5"
                    name=""
                    placeholder="Cupon Code"
                    id=""
                  />
                  <button className="bg-btn_bg w-40  flex justify-center items-center text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">
                    Apply Cupon
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="w-11/12 mx-auto flex justify-center md:flex-col-reverse xxl:w-[1700px]">
            <div className="w-8/12  px-4 py-3 md:w-full">
              <CheckOutBilling />
            </div>
            <div className="w-4/12  py-5 md:mt-5 md:w-full">
              <CheckOutOrder />
            </div>
          </div>
        </section>
      </PageTransition>
      <Brands />
    </>
  );
};

export default CheckOut;
