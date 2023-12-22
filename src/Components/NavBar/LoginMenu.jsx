import { forwardRef, useEffect, useState } from "react";
//Icons from React-icons
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { MdFeedback } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

//Images
import profimeImg from "../../assets/Images/Profile.jpeg";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Config/FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";

const LoginMenu = forwardRef(
  ({ showloginDropdown, setShowloginDopdown, setShowFeedbackModal }, ref) => {
    const [isLogedIn, setisLogedIn] = useState(false);

    //Getting User Info and showing

    const authInfo = useSelector((state) => state.UserDetails);

    //Checking User is Logged In or Not
    useEffect(() => {
      onAuthStateChanged(auth, (data) => {
        if (data) {
          setisLogedIn(true);
        } else {
          setisLogedIn(false);
        }
      });
    }, [auth]);

    return (
      <>
        {isLogedIn ? (
          <div className="relative" ref={ref}>
            <button
              className="w-11 h-11 rounded-full bg-red-300 flex justify-center items-center overflow-hidden"
              onClick={() => setShowloginDopdown(!showloginDropdown)}
            >
              <img src={profimeImg} alt="" />
            </button>
            {showloginDropdown && (
              <div className="absolute top-14 z-50 -right-2/4  bg-white shadow-lg rounded-lg w-[300px] pb-3 px-2  xsm:-right-[134%] xsm:w-[270px] pt-1">
                <div className="mb-4 px-4 py-3 cursor-pointer flex gap-x-2 bg-gray-200 rounded-xl ">
                  <div className="w-12 h-12 xsm:h-9 xsm:w-9 rounded-full overflow-hidden">
                    <img src={profimeImg} alt="" />
                  </div>
                  <div className="w-[200px]">
                    <h3 className="text-base xsm:text-sm truncate">
                      {authInfo?.userName}
                    </h3>
                    <h4 className="text-sm xsm:text-xs truncate">
                      {authInfo?.userEmail}
                    </h4>
                  </div>
                </div>
                <ul className="h-full w-full  flex flex-col gap-y-3">
                  <li
                    className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg"
                    onClick={() => setShowloginDopdown(false)}
                  >
                    <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl">
                      <IoSettingsSharp />
                    </span>
                    Setting and Privacy
                  </li>

                  <li
                    className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg"
                    onClick={() => setShowloginDopdown(false)}
                  >
                    <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl">
                      <IoMdHelpCircle />
                    </span>
                    Help & Support
                  </li>
                  <li
                    className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg"
                    onClick={() => {
                      setShowloginDopdown(false), setShowFeedbackModal(true);
                    }}
                  >
                    <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl">
                      <MdFeedback />
                    </span>
                    Give Feedback
                  </li>
                  <li
                    className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg"
                    onClick={() => {
                      setShowloginDopdown(false), signOut(auth);
                    }}
                  >
                    <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl">
                      <HiOutlineLogout />
                    </span>
                    Logout
                  </li>
                  {/* <li className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg" onClick={() => setShowloginDopdown(false)}>
                                    <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl"><HiOutlineLogout /></span>
                                    Logout
                                </li> */}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="">
            <Link
              to="/Login"
              className="flex items-center gap-x-3 duration-300 hover:scale-110"
            >
              Login
              <span className="text-[#007d56] text-xl">
                <AiOutlineUser />
              </span>
            </Link>
          </div>
        )}
      </>
    );
  }
);

LoginMenu.displayName = "LoginMenu";

export default LoginMenu;
