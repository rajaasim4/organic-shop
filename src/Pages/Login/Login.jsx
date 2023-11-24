import Logo from "../../assets/Images/Logo.png";
import LoginImg from "../../assets/Images/SVG/Login.svg";
import { Link } from "react-router-dom";
import LoginForm from "../../Forms/LoginForm/LoginForm";

const Login = () => {

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-primary_dark_green py-10">
      <div className="w-11/12 mx-auto flex justify-center shadow-2xl rounded-md gap-x-20 border-2 bg-[#f0f8ff] lg:flex-col lg:items-center max-w-[1700px]">
        <div className="w-1/2  flex justify-center items-center lg:w-full">
          <img src={LoginImg} alt="" className="w-8/12 " />
        </div>
        <div className="w-1/2  py-3 lg:w-full lg:flex lg:flex-col lg:items-center">
          <Link to={"/Home"}>
            <img src={Logo} className="  mt-5 w-44 h-44 object-contain" alt="" />
          </Link>
          <h1 className="text-3xl -translate-y-6 sm:text-2xl sm:text-center">
            Welcome to the
            <span className="text-primary_green mx-1 font-semibold">
              Organic Shop
            </span>
          </h1>
          <div className="w-[400px] pb-20 sm:w-11/12">

            <LoginForm />
          </div>

          <div className="mt-5  mx-auto w-[400px] lg:text-center sm:w-11/12">
            <p>
              Dont have Account Yet?{" "}
              <Link
                to={"/SignUp"}
                className="hover:text-primary_dark_green duration-150 ml-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
