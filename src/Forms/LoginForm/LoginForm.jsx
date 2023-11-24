
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

//FormIk Components
import { Form, ErrorMessage, Field, Formik } from "formik";
import {
    loginInitialValues,
    LoginValidation,
} from "../../utils/Schema/LoginValidationSchema";
import { useState } from "react";
import { OvalLoader } from "../../utils/Helpers/Loaders/Loaders";
import { toast } from "react-toastify";


// Firebase for Log In the User
import { app } from "../../Config/FirebaseConfig"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {

    //Firebase Function to Check User Log In
    const auth = getAuth();


    const [isloading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const navigate = useNavigate();

    //Handling Login Submit
    const handleLoginSubmit = async (values, onSubmitProps) => {

        setIsDisabled(true);


        //LogIn User

        signInWithEmailAndPassword(auth, values.email, values.password).then((user) => {

            toast("You have Successfully Loggedin ", {
                position: "top-right",
                autoClose: 2300,
            });

            //Showing Loader
            setIsLoading(true);

            //TimeOut Function to enable Button,Clear Form and Redirect to Home Page
            setTimeout(() => {
                setIsDisabled(false);
                onSubmitProps.setSubmitting(false);
                onSubmitProps.resetForm();
                //Hiding the Loader
                setIsLoading(false);
                navigate("/Home");
            }, 3000);

        }).catch((err) => {

            toast.error("An Error Occured While Log In ", {
                position: "top-right",
                autoClose: 2300,
            });
        });


    };

    return (

        <Formik
            initialValues={loginInitialValues}
            onSubmit={handleLoginSubmit}
            validationSchema={LoginValidation}
        >
            {(formik) => {
                return (
                    <Form>
                        <div className="">
                            <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
                                <span className="text-2xl">
                                    <IoMailOutline />
                                </span>
                                <Field
                                    type="email"
                                    name="email"
                                    className="h-full w-full outline-none pl-3 bg-transparent"
                                    placeholder="Enter  Email"
                                />
                            </div>
                            <ErrorMessage name="email">
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
                                    name="password"
                                    type="password"
                                    className="h-full w-full outline-none pl-3 bg-transparent"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <ErrorMessage name="password">
                                {(errMsg) => {
                                    return (
                                        <small className="text-red-400 font-semibold">
                                            {errMsg}
                                        </small>
                                    );
                                }}
                            </ErrorMessage>
                        </div>
                        <div className="mt-7 flex justify-between ">
                            <div className="flex justify-center items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="remmeber"
                                    className="h-5 w-5"
                                />
                                <label htmlFor="remmeber" className="text-sm">
                                    Remember Me
                                </label>
                            </div>
                            <Link to={"/Forgot/EnterEmail"} className="hover:text-primary_dark_green duration-150">
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            disabled={formik.onSubmitProps}
                            className={`rounded-xl text-white w-32 h-12 mt-4 mx-auto  bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 flex justify-center items-center ${isDisabled
                                ? "bg-[#f7855c] hover:bg-[#f7855c] cursor-not-allowed "
                                : ""
                                }`}
                            type="submit"
                        >
                            {isloading ? (
                                <OvalLoader width={30} height={30} />
                            ) : (
                                "Log In"
                            )}
                        </button>
                    </Form>
                );
            }}
        </Formik>

    );
};

export default LoginForm;
