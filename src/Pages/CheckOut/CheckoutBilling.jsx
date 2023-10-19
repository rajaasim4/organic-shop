
import { AiOutlineUser, AiOutlineTablet } from "react-icons/ai"
import { IoMailOutline, } from "react-icons/io5"
import { FaAddressCard } from "react-icons/fa"
import { BsFillCreditCard2BackFill, BsCalendarDate } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Field, ErrorMessage, Formik, Form } from "formik"
import { useState } from "react"
const CheckOutBilling = () => {
    const [showShipping, setShowShipping] = useState(false)
    const [showBilling, setShowBilling] = useState(false)
    const [showReviewItems, setShowReviewItems] = useState(false)

    const [paymentMethod, setPaymentMethod] = useState("")

    return (
        <>
            <div className={`w-full shadow-lg py-8 px-4 rounded-lg border border-gray-300 ${showShipping ? "h-[580px]" : "h-28"}   duration-150 overflow-hidden`}>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowShipping(!showShipping)}>

                    <h4 className="text-2xl font-semibold mb-3">Shipping Address</h4>
                    <span className="text-2xl cursor-pointer" >
                        <MdKeyboardArrowDown />
                    </span>
                </div>
                <div className="w-full mt-9 ">
                    <Formik
                    // initialValues={signupInitialValues}
                    // onSubmit={handleSubmitForm}
                    // validationSchema={signUpValidation}
                    >
                        {(formik) => {
                            return (
                                <Form>
                                    <div className="flex gap-x-5 w-full  sm:flex-col">
                                        <CheckOutBillingFeild name="firstName" type="text" icon={<AiOutlineUser />} placeholder="Enter Your First Name e.g John" />
                                        <CheckOutBillingFeild name="lastName" type="text" icon={<AiOutlineUser />} placeholder="Enter Your Last Name e.g  Smith" />
                                    </div>

                                    <CheckOutBillingFeild name="email" type="email" icon={<IoMailOutline />} placeholder="Enter  Email" />
                                    <CheckOutBillingFeild name="phoneNumber" type="tel" icon={<AiOutlineTablet />} placeholder="Enter Your Phone Number" />


                                    <CheckOutBillingFeild name="address" type="text" placeholder="Enter Your Address" icon={<FaAddressCard />} />
                                    <CheckOutBillingFeild name="email" icon={<IoMailOutline />} />
                                    <CheckOutBillingFeild name="email" icon={<IoMailOutline />} />

                                </Form>
                            )
                        }}
                    </Formik>



                </div>
            </div>

            {/* Billing Details */}

            <div className={`w-full shadow-lg py-8 px-4 rounded-lg border border-gray-300 ${showBilling ? "h-max" : "h-28"}   duration-150 overflow-hidden mt-8`}>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowBilling(!showBilling)}>

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
                                <label htmlFor="cash">Cash on Delivery</label>
                                <input type="radio" id="cash" name="method" className="ml-2" value={"cash"} onChange={(e) => setPaymentMethod(e.target.value)} />
                            </div>
                            <div className="">
                                <label htmlFor="card">Via Card</label>
                                <input type="radio" id="card" name="method" className="ml-2" value={"card"} onChange={(e) => setPaymentMethod(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    {paymentMethod === "card" ?
                        <Formik
                        // initialValues={signupInitialValues}
                        // onSubmit={handleSubmitForm}
                        // validationSchema={signUpValidation}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <CheckOutBillingFeild name="firstName" type="text" icon={<BsFillCreditCard2BackFill />} placeholder="Card Number" />
                                        <CheckOutBillingFeild name="lastName" type="text" icon={<BsCalendarDate />} placeholder="MM / YY" />
                                        <CheckOutBillingFeild name="email" type="email" icon={<IoMailOutline />} placeholder="Enter  Email" />
                                        <CheckOutBillingFeild name="phoneNumber" type="tel" icon={<AiOutlineTablet />} placeholder="CVV" />


                                        <div className="flex gap-x-5 w-11/12  sm:flex-col">
                                            <CheckOutBillingFeild name="address" type="text" placeholder="Enter Your First Name" icon={<AiOutlineUser />} />
                                            <CheckOutBillingFeild name="address" type="text" placeholder="Enter Your Last Name" icon={<AiOutlineUser />} />
                                        </div>

                                    </Form>
                                )
                            }}
                        </Formik>
                        : null}



                </div>
            </div>


            {/* Review Items History */}


            <div className={`mt-9 w-full shadow-lg py-8 px-4 rounded-lg border border-gray-300 ${showReviewItems ? "h-[580px]" : "h-28"}   duration-150 overflow-hidden`}>
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowReviewItems(!showReviewItems)}>

                    <h4 className="text-2xl font-semibold mb-3">Review Items and Shipping</h4>
                    <span className="text-2xl cursor-pointer" >
                        <MdKeyboardArrowDown />
                    </span>
                </div>
                <div className="w-full mt-9 ">
                    <Formik
                    // initialValues={signupInitialValues}
                    // onSubmit={handleSubmitForm}
                    // validationSchema={signUpValidation}
                    >
                        {(formik) => {
                            return (
                                <Form>
                                    <div className="flex gap-x-5 w-full  sm:flex-col">
                                        <CheckOutBillingFeild name="firstName" type="text" icon={<AiOutlineUser />} placeholder="Enter Your First Name e.g John" />
                                        <CheckOutBillingFeild name="lastName" type="text" icon={<AiOutlineUser />} placeholder="Enter Your Last Name e.g  Smith" />
                                    </div>

                                    <CheckOutBillingFeild name="email" type="email" icon={<IoMailOutline />} placeholder="Enter  Email" />
                                    <CheckOutBillingFeild name="phoneNumber" type="tel" icon={<AiOutlineTablet />} placeholder="Enter Your Phone Number" />


                                    <CheckOutBillingFeild name="address" type="text" placeholder="Enter Your Address" icon={<FaAddressCard />} />
                                    <CheckOutBillingFeild name="email" icon={<IoMailOutline />} />
                                    <CheckOutBillingFeild name="email" icon={<IoMailOutline />} />

                                </Form>
                            )
                        }}
                    </Formik>



                </div>
            </div>
        </>
    );
};


const CheckOutBillingFeild = (props) => {
    return (
        <>
            <div className="shadow-md w-full  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
                <span className="text-2xl">
                    {props.icon}
                </span>
                <Field name={props.name} type={props.type} className="h-full w-full outline-none pl-3 bg-transparent" placeholder={props.placeholder} />
            </div>
            <ErrorMessage name={props.name}>
                {(errMsg) => {
                    return (<small className="text-red-400 font-semibold ">{errMsg}</small>)
                }}
            </ErrorMessage>

        </>
    )
}


export default CheckOutBilling;
