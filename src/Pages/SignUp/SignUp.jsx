import Logo from "../../assets/Images/Logo.png"
import { Link } from "react-router-dom"
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5"
import SignUpImg from "../../assets/Images/SVG/SignUp.svg"
import { AiOutlineUser, AiOutlineTablet } from "react-icons/ai"

//Formik Imports
import { Form, ErrorMessage, Field, Formik } from "formik"
import { signupInitialValues, signUpValidation } from "../../utils/Schema/SignupValidationSchema"

const SignUp = () => {
    let handleSubmitForm = (values, onSubmitProps) => {
        alert("Form has been Submited")
        console.log(values)

        //Clearing the Form Values After Submitting and Disabling Button for 3 Seconds
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
        }, 3000);
    }

    return (
        <div className="w-full h-max flex justify-center items-center bg-primary_dark_green py-20">
            <div className="w-11/12 mx-auto flex justify-center shadow-2xl rounded-md gap-x-20 border-2 bg-[#f0f8ff] lg:flex-col lg:items-center lg:pt-10 ">
                <div className="w-1/2  flex justify-center items-center lg:w-full">
                    <img src={SignUpImg} alt="" className="w-8/12 " />
                </div>
                <div className="w-1/2  py-3 lg:w-full lg:flex lg:flex-col lg:items-center">
                    <img src={Logo} className="mt-5 w-44 h-44 object-contain  " alt="" />
                    <h1 className="text-3xl -translate-y-6 sm:text-center sm:text-2xl">Welcome to the
                        <span className="text-primary_green mx-1 font-semibold">

                            Organic Shop
                        </span>
                    </h1>
                    <div className="w-[400px] sm:w-11/12 pb-20">
                        <Formik
                            initialValues={signupInitialValues}
                            onSubmit={handleSubmitForm}
                            validationSchema={signUpValidation}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <SignUpFeild name="name" type="text" icon={<AiOutlineUser />} placeholder="Enter Your Name e.g John Smith" />
                                        <SignUpFeild name="email" type="email" icon={<IoMailOutline />} placeholder="Enter  Email" />
                                        <SignUpFeild name="phoneNumber" type="tel" icon={<AiOutlineTablet />} placeholder="Enter Your Phone Number" />
                                        <SignUpFeild name="password" type="password" icon={<IoLockClosedOutline />} placeholder="Enter Password" />
                                        <SignUpFeild name="confirmPassword" type="password" icon={<IoLockClosedOutline />} placeholder="Confirm Your Password" />

                                        <div className="mt-7 flex justify-between ">
                                            <div className="flex justify-center items-center gap-x-2">

                                                <input type="checkbox" name="" id="remmeber" className="h-5 w-5" />
                                                <label htmlFor="remmeber" className="text-sm">Remember Me</label>
                                            </div>
                                            <Link className="hover:text-primary_dark_green duration-150">Forgot Password?</Link>
                                        </div>

                                        <button className="rounded-xl text-white w-32 h-12 mt-4 mx-auto block bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300" disabled={formik.onSubmitProps} type="submit">
                                            Sign Up
                                        </button>
                                    </Form>
                                )
                            }}
                        </Formik>


                    </div>
                    <div className="mt-7  mx-auto w-[400px] lg:text-center sm:w-full">
                        <p>
                            Already have Account? <Link to={"/Login"} className="hover:text-primary_dark_green duration-150 ml-1">Log In</Link>

                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

const SignUpFeild = (props) => {
    return (
        <>
            <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
                <span className="text-2xl">
                    {props.icon}
                </span>
                <Field name={props.name} type={props.type} className="h-full w-full outline-none pl-3 bg-transparent" placeholder={props.placeholder} />
            </div>
            <ErrorMessage name={props.name}>
                {(errMsg) => {
                    return (<small className="text-red-400">{errMsg}</small>)
                }}
            </ErrorMessage>

        </>
    )
}


export default SignUp