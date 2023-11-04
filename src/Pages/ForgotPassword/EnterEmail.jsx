import Logo from "../../assets/Images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMailOutline, } from "react-icons/io5";
import Img from "../../assets/Images/SVG/Enter_Email.svg";


import { useState } from "react";
import { toast } from "react-toastify";
const EnterEmail = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value;
        setEmail(enteredEmail);

        // Regular expression to validate the email format
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValidEmail = emailPattern.test(enteredEmail);
        setIsValid(isValidEmail);

    };

    //=======handle Email Submit========
    const handleFormSubmit = (e) => {
        e.preventDefault();

        isValid ? navigate("/Forgot/EmailConfimationSent") : toast.error("Please Enter Correct Email ", {
            position: "top-right",
            autoClose: 2300,
            toastId: 1
        });
    }


    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-primary_dark_green py-10">
            <div className="w-11/12 mx-auto flex justify-center shadow-2xl rounded-md gap-x-20 border-2 bg-[#f0f8ff] lg:flex-col lg:items-center max-w-[1700px] ">
                <div className="w-1/2  flex justify-center items-center lg:w-full">
                    <img src={Img} alt="" className="w-8/12 " />
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
                        <form action="" onSubmit={handleFormSubmit}>

                            <div className="">
                                <div className="shadow-md  px-3 pl-6 rounded-lg h-12 border border-gray-500  mt-4 flex items-center">
                                    <span className="text-2xl">
                                        <IoMailOutline />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        className="h-full w-full outline-none pl-3 bg-transparent"
                                        placeholder="Enter  Email"
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                            </div>
                            <button className={`rounded-xl text-white w-40 h-12 mx-auto mt-6  bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 flex justify-center items-center 
                            }`}>Reset Password</button>
                        </form>
                    </div>

                    <div className="mt-5  mx-auto w-[400px] lg:text-center sm:w-11/12">
                        <p>
                            Login With Different Account?{" "}
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

export default EnterEmail;
