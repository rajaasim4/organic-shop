import Logo from "../../assets/Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";
import LoginImg from "../../assets/Images/SVG/Login.svg";

//FormIk Components
import { Form, ErrorMessage, Field, Formik } from "formik";

import { useState } from "react";
import { OvalLoader } from "../../utils/Helpers/Loaders/Loaders";
import { toast } from "react-toastify";

import *as Yup from "yup"
const ForgotPassword = () => {
    const [isloading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const navigate = useNavigate();

    //======Validation Schemas for the Password=====

    const passwordValidation = Yup.object({
        newPassword: Yup.string().min(8, "Password must be atleat 8 Characters")
            .max(25, "Password can not be more than 25 Characters").required("Password Required Can not be empty"),
        confirmPassword: Yup.string()
            .min(8, "Password must be atleat 8 Characters")
            .max(25, "Password can not be more than 25 Characters")
            .required("Confirm Password Cannot be Empty")
            .oneOf([Yup.ref("newPassword"), null], "Password did not match"),

    })

    //Handling Login Submit
    const handleLoginSubmit = (values, onSubmitProps) => {
        toast("Password Reset Succesfully ", {
            position: "top-right",
            autoClose: 2300,
        });
        setIsDisabled(true);
        console.log(values);

        //Showing Loader
        setIsLoading(true);

        setTimeout(() => {
            setIsDisabled(false);
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            //Hiding the Loader
            setIsLoading(false);
            navigate("/Login");
        }, 3000);
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-primary_dark_green py-10">
            <div className="w-11/12  flex justify-center shadow-2xl rounded-md gap-x-20 border-2 bg-[#f0f8ff] lg:flex-col lg:items-center max-w-[1700px] mx-auto">
                <div className="w-1/2  flex justify-center items-center lg:w-full">
                    <img src={LoginImg} alt="" className="w-8/12 " />
                </div>
                <div className="w-1/2  py-3 lg:w-full lg:flex lg:flex-col lg:items-center">
                    <Link to={"/"}>
                        <img src={Logo} className="  mt-5 w-44 h-44 object-contain" alt="" />
                    </Link>
                    <h1 className="text-3xl -translate-y-6 sm:text-2xl sm:text-center">
                        Welcome to the
                        <span className="text-primary_green mx-1 font-semibold">
                            Organic Shop
                        </span>
                    </h1>
                    <div className="w-[400px] pb-20 sm:w-11/12">
                        <Formik
                            initialValues={{
                                newPassword: "",
                                confirmPassword: ""
                            }}
                            onSubmit={handleLoginSubmit}
                            validationSchema={passwordValidation}
                        >
                            {(formik) => {
                                return (
                                    <Form>


                                        <div className="">
                                            <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                                <span className="text-2xl">
                                                    <IoLockClosedOutline />
                                                </span>
                                                <Field
                                                    name="newPassword"
                                                    type="password"
                                                    className="h-full w-full outline-none pl-3 bg-transparent"
                                                    placeholder="Enter New Password"
                                                />
                                            </div>
                                            <ErrorMessage name="newPassword">
                                                {(errMsg) => {
                                                    return (
                                                        <small className="text-red-400 font-semibold">
                                                            {errMsg}
                                                        </small>
                                                    );
                                                }}
                                            </ErrorMessage>
                                        </div>
                                        <div className="">
                                            <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-6 flex items-center">
                                                <span className="text-2xl">
                                                    <IoLockClosedOutline />
                                                </span>
                                                <Field
                                                    name="confirmPassword"
                                                    type="password"
                                                    className="h-full w-full outline-none pl-3 bg-transparent"
                                                    placeholder="Enter Confirm Password"
                                                />
                                            </div>
                                            <ErrorMessage name="confirmPassword">
                                                {(errMsg) => {
                                                    return (
                                                        <small className="text-red-400 font-semibold">
                                                            {errMsg}
                                                        </small>
                                                    );
                                                }}
                                            </ErrorMessage>
                                        </div>


                                        <button
                                            disabled={formik.onSubmitProps}
                                            className={`rounded-xl text-white w-40 h-12 mt-4 mx-auto  bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 flex justify-center items-center ${isDisabled
                                                ? "bg-[#f7855c] hover:bg-[#f7855c] cursor-not-allowed "
                                                : ""
                                                }`}
                                            type="submit"
                                        >
                                            {isloading ? (
                                                <OvalLoader width={30} height={30} />
                                            ) : (
                                                "Change Password"
                                            )}
                                        </button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>

                    <div className="mt-5  mx-auto w-[400px] lg:text-center sm:w-11/12">
                        <p>
                            Login With Different Account?
                            <Link
                                to={"/Login"}
                                className="hover:text-primary_dark_green duration-150 ml-1"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
