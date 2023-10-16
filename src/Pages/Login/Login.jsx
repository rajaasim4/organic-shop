import Logo from "../../assets/Images/Logo.png"
import { Link } from "react-router-dom"
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5"
import LoginImg from "../../assets/Images/SVG/Login.svg"


//FormIk Components
import { Form, ErrorMessage, Field, Formik } from "formik"
import { loginInitialValues, LoginValidation } from "../../utils/Schema/LoginValidationSchema"
import { useState } from "react"
import { OvalLoader } from "../../utils/Helpers/Loaders/Loaders"
const Login = () => {

    const [isloading, setIsLoading] = useState(false)

    //Handling Login Submit
    const handleLoginSubmit = (values, onSubmitProps) => {
        alert("Logedin")
        console.log(values);

        //Showing Loader
        setIsLoading(true)

        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            //Hiding the Loader
            setIsLoading(false);
        }, 3000)
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-primary_dark_green py-10">
            <div className="w-11/12 mx-auto flex justify-center shadow-2xl rounded-md gap-x-20 border-2 bg-[#f0f8ff] lg:flex-col lg:items-center">
                <div className="w-1/2  flex justify-center items-center lg:w-full">
                    <img src={LoginImg} alt="" className="w-8/12 " />
                </div>
                <div className="w-1/2  py-3 lg:w-full lg:flex lg:flex-col lg:items-center">
                    <img src={Logo} className="  mt-5 w-44 h-44 object-contain" alt="" />
                    <h1 className="text-3xl -translate-y-6 sm:text-2xl sm:text-center">Welcome to the
                        <span className="text-primary_green mx-1 font-semibold">

                            Organic Shop
                        </span>
                    </h1>
                    <div className="w-[400px] pb-20 sm:w-11/12">
                        <Formik
                            initialValues={loginInitialValues}
                            onSubmit={handleLoginSubmit}
                            validationSchema={LoginValidation}>

                            {(formik) => {
                                return (
                                    <Form>
                                        <div className="">
                                            <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
                                                <span className="text-2xl">
                                                    <IoMailOutline />
                                                </span>
                                                <Field type="email" name="email" className="h-full w-full outline-none pl-3 bg-transparent" placeholder="Enter  Email" />

                                            </div>
                                            <ErrorMessage name="email">
                                                {(errMsg) => {
                                                    return (<small className="text-red-400">{errMsg}</small>)
                                                }}
                                            </ErrorMessage>
                                        </div>

                                        <div className="">

                                            <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                                <span className="text-2xl">
                                                    <IoLockClosedOutline />
                                                </span>
                                                <Field name="password" type="password" className="h-full w-full outline-none pl-3 bg-transparent" placeholder="Enter Password" />

                                            </div>
                                            <ErrorMessage name="password">
                                                {(errMsg) => {
                                                    return (<small className="text-red-400">{errMsg}</small>)
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <div className="mt-7 flex justify-between ">
                                            <div className="flex justify-center items-center gap-x-2">

                                                <input type="checkbox" name="" id="remmeber" className="h-5 w-5" />
                                                <label htmlFor="remmeber" className="text-sm">Remember Me</label>
                                            </div>
                                            <Link className="hover:text-primary_dark_green duration-150">Forgot Password?</Link>
                                        </div>

                                        <button className="rounded-xl text-white w-32 h-12 mt-4 mx-auto  bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 flex justify-center items-center" type="submit" disabled={formik.onSubmitProps}>
                                            {isloading ?
                                                <OvalLoader width={30} height={30} />
                                                : "Log In"}

                                        </button>

                                    </Form>)
                            }}

                        </Formik>
                    </div>

                    <div className="mt-7  mx-auto w-[400px] lg:text-center sm:w-11/12">

                        <p>
                            Dont have Account Yet? <Link to={"/SignUp"} className="hover:text-primary_dark_green duration-150 ml-1">Sign Up</Link>

                        </p>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Login