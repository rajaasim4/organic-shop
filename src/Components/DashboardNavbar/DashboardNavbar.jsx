import { useRef, useState } from "react";

//Icons from React-icons
import { IoSettingsSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

//Hooks
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";

//Images
import profileImg from "../../assets/Images/Profile.jpeg";
import Logo from "../../assets/Images/Logo.png";

//Firebase Functions
import { auth } from "../../Config/FirebaseConfig";

//Animation

import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [showloginDropdown, setShowloginDopdown] = useState(false);

  //========Hiding the User Menu While Clickin Outside===========
  const ref = useRef();

  useClickOutsideDetector(ref, () => {
    setShowloginDopdown(false);
  });

  return (
    <div className="h-20 bg-nav_bg  flex items-center">
      <div className=" flex justify-between w-95 mx-auto items-center">
        <div className="flex items-center gap-x-7 ">
          <Link to={"/Dashboard"}>
            <motion.img
              src={Logo}
              alt="Logo"
              className="w-40 object-contain h-full md:w-32"
              {...fadeInFromLeft()}
              whileHover={{ scale: 1.1 }}
            />
          </Link>
          <div className="flex items-center bg-white px-2 rounded-3xl pl-4 sm:hidden">
            <span className="text-2xl">
              <IoSearch />
            </span>
            <input
              type="text"
              className="outline-none pl-2 py-3 rounded-2xl text-gray-400"
              placeholder="Search...."
            />
          </div>
        </div>

        <div className="relative" ref={ref}>
          <div
            className="flex items-center gap-x-3 cursor-pointer bg-white pr-2 rounded-full "
            role="button"
            onClick={() => setShowloginDopdown(!showloginDropdown)}
          >
            <button className="w-11 h-11 rounded-full bg-red-300 flex justify-center items-center overflow-hidden ">
              <img src={profileImg} alt="" />
            </button>
            <span className="text-xl">
              <IoIosArrowDown />
            </span>
          </div>

          {showloginDropdown && (
            <div className="absolute top-14 z-50 -right-1/4  bg-white shadow-lg rounded-lg w-[300px] pb-3 px-2  xsm:-right-[134%] xsm:w-[270px] pt-1">
              <div className="mb-4 px-4 py-3 cursor-pointer flex gap-x-2 bg-gray-200 rounded-xl ">
                <div className="w-12 h-12 xsm:h-9 xsm:w-9 rounded-full overflow-hidden">
                  <img src={profileImg} alt="" />
                </div>
                <div className="w-[200px]">
                  <h3 className="text-base xsm:text-sm truncate">
                    {auth?.currentUser?.displayName}
                  </h3>
                  <h4 className="text-sm xsm:text-xs truncate">
                    {auth?.currentUser?.email}
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
                    <AiOutlineUser />
                  </span>
                  Edit Profile
                </li>
                <li
                  className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg"
                  onClick={() => setShowloginDopdown(false)}
                >
                  <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl">
                    <IoMailOutline />
                  </span>
                  Messages
                </li>

                <li
                  className="cursor-pointer flex items-center gap-x-3 pl-2 hover:bg-gray-200 duration-300 rounded-lg"
                  onClick={() => setShowloginDopdown(false)}
                >
                  <span className="bg-primary_dark_green text-white grid place-items-center rounded-full text-2xl w-12 h-12 xsm:w-9 xsm:h-9 xsm:text-xl">
                    <HiOutlineLogout />
                  </span>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
