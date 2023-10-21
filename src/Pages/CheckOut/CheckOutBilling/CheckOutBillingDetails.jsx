
import CheckOutBillingField from "../../../Components/CheckOutBillingField/CheckOutBillingField"

import { AiOutlineUser, AiOutlineTablet } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { BsFillCreditCard2BackFill, BsCalendarDate } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Formik, Form } from "formik";

//State
import { useState } from "react";

//Payment Methods Images
import amzaon from "../../../assets/Images/SVG/amazon.svg";
import applepay from "../../../assets/Images/SVG/apple-pay.svg";
import discover from "../../../assets/Images/SVG/discover.svg";
import googlepay from "../../../assets/Images/SVG/google-pay.svg";
import mastercard from "../../../assets/Images/SVG/mastercard.svg";
import paypal from "../../../assets/Images/SVG/paypal.svg";
import visa from "../../../assets/Images/SVG/visa.svg";
import jazzcash from "../../../assets/Images/SVG/jazz-cash.svg";
import easypaisa from "../../../assets/Images/SVG/easypaisa.svg";
import { useDispatch } from "react-redux";
import { getCheckOutPaymentSelection } from "../../../store/Reducers/CheckDetailsSlice";
const CheckOutBillingDetails = () => {

    const dispatch = useDispatch()

    const [showBilling, setShowBilling] = useState(false);


    //Selecting Payment Method
    const [paymentMethod, setPaymentMethod] = useState("");

    //handle Payment Method

    const handlePayment = (e) => {

        //Checking Payment Selected or Not
        dispatch(getCheckOutPaymentSelection(true))


        setPaymentMethod(e.target.value)
    }
    return (

        <div
            className={`w-full shadow-lg py-8 px-4 rounded-lg border border-gray-300 ${paymentMethod === "card" && showBilling ? "h-[750px]" : showBilling ? "h-44" : "h-28"
                }   duration-150 overflow-hidden mt-8`}
        >
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowBilling(!showBilling)}
            >
                <h4 className="text-2xl font-semibold mb-3">Billing Details</h4>
                <span className="text-2xl cursor-pointer">
                    <MdKeyboardArrowDown />
                </span>
            </div>
            <div className="w-full mt-9 ">
                <div className="flex justify-between">
                    <h2 className="text-xl">Payment Method</h2>
                    <div className="flex items-center gap-x-5">
                        <div className="">
                            <label htmlFor="cash" className="cursor-pointer">Cash on Delivery</label>
                            <input
                                type="radio"
                                id="cash"
                                name="method"
                                className="ml-2 cursor-pointer"
                                value={"cash"}
                                onChange={handlePayment}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="card" className="cursor-pointer">Via Card</label>
                            <input
                                type="radio"
                                id="card"
                                name="method"
                                className="ml-2 cursor-pointer"
                                value={"card"}
                                onChange={handlePayment}
                            />
                        </div>
                    </div>
                </div>
                {paymentMethod === "card" ? (
                    <>
                        <div className="shadow-md w-full gap-x-6  px-3 pl-6 rounded-lg    mt-4 flex items-center justify-center flex-wrap gap-y-3">
                            <img src={amzaon} alt="" className="w-20 h-20" />
                            <img src={googlepay} alt="" className="w-16 h-20" />
                            <img src={applepay} alt="" className="w-20 h-20" />
                            <img src={visa} alt="" className="w-20 h-20" />
                            <img src={mastercard} alt="" className="w-20 h-20" />
                            <img src={discover} alt="" className="w-20 h-20" />
                            <img src={paypal} alt="" className="w-20 h-20" />
                            <img src={jazzcash} alt="" className="w-20 h-20" />
                            <img src={easypaisa} alt="" className="w-20 h-20" />
                        </div>
                        <Formik
                        // initialValues={signupInitialValues}
                        // onSubmit={handleSubmitForm}
                        // validationSchema={signUpValidation}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <CheckOutBillingField
                                            name="cardNumber"
                                            type="number"
                                            icon={<BsFillCreditCard2BackFill />}
                                            placeholder="Card Number"
                                        />
                                        <CheckOutBillingField
                                            name="cardDate"
                                            type="text"
                                            icon={<BsCalendarDate />}
                                            placeholder="MM / YY"
                                        />
                                        <CheckOutBillingField
                                            name="email"
                                            type="email"
                                            icon={<IoMailOutline />}
                                            placeholder="Enter Tour Email"
                                        />
                                        <CheckOutBillingField
                                            name="cardCVV"
                                            type="number"
                                            icon={<AiOutlineTablet />}
                                            placeholder="CVV"
                                        />
                                        <div className="flex gap-x-5 w-full  sm:flex-col">
                                            <CheckOutBillingField
                                                name="firstName"
                                                type="text"
                                                icon={<AiOutlineUser />}
                                                placeholder="Enter Your First Name e.g John"
                                            />
                                            <CheckOutBillingField
                                                name="lastName"
                                                type="text"
                                                icon={<AiOutlineUser />}
                                                placeholder="Enter Your Last Name e.g  Smith"
                                            />
                                        </div>
                                        <button className="bg-btn_bg w-40  flex justify-center items-center text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 mt-6" type="submit">Submit</button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default CheckOutBillingDetails