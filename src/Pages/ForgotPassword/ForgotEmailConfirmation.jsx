import Logo from "../../assets/Images/Logo.png";
import { Link, } from "react-router-dom";

import ConfirmEmail from "../../assets/Images/SVG/Confirmation_Email_Sent.svg"

const ForgotEmailConfirmation = () => {



    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-primary_dark_green py-10">
            <div className="w-11/12 mx-auto flex justify-center  shadow-2xl rounded-md gap-x-20 border-2 bg-[#f0f8ff] lg:flex-col lg:items-center max-w-[1700px] ">

                <div className="  py-3  flex flex-col items-center">
                    <Link to={"/"}>
                        <img src={Logo} className="  mt-5 w-44 h-44 object-contain" alt="" />
                    </Link>
                    <h1 className="text-xl -translate-y-6  sm:text-center">
                        An Email with Password Reset Instruction has been Sent

                    </h1>
                    <div className="w-[400px] pb-20 sm:w-11/12">
                        <img src={ConfirmEmail} alt="" />
                    </div>

                    <div className="mt-5  mx-auto  lg:text-center sm:w-11/12">
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

export default ForgotEmailConfirmation;
