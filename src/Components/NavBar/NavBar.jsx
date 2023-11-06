//Icons from React-icons 
import { BsSearch } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, } from "react-icons/fa"
import { BiMenuAltRight } from "react-icons/bi"
import { IoCloseSharp, } from "react-icons/io5"

//Images
import Logo from "../../assets/Images/Logo.png";
//States
import { Link, Outlet, NavLink } from "react-router-dom"
import { useRef, useState } from "react";
import useClickOutSideDetector from "../../Hooks/useClickOutsideDetector";

//Reducer
import { useSelector } from "react-redux";

import SearchCategory from "../SearchCategory/SearchCategory";
import Feedback from "../../ModalBox/Feedback/Feedback";
import SidebarCart from "./SidebarCart";
import LoginMenu from "./LoginMenu";
const NavBar = () => {


  //=========Toggle Navbar==========
  const [show, setShow] = useState(false);

  //=========Toggle Cart ===========
  const [showCart, setShowCart] = useState(false)

  //=====Hiding Cart Clicking OutSide=====
  let cartRef = useRef()
  useClickOutSideDetector(cartRef, () => {
    setShowCart(false);
  })

  //============Hiding Navbar on Outside Click

  let menuRef = useRef();

  useClickOutSideDetector(menuRef, () => {
    setShow(false)
  })

  //=====Getting Cart Data from Reducer======

  const cartdata = useSelector((state) => state.CartSlice);

  //======Cart Subtotal Calculation

  let subTotal = cartdata.SubTotal.toFixed(2);

  //======Calculating Total Qunatites

  let totalQuantites = 0 || cartdata.cart.map((item) => item.quantity).reduce((prev, next) => prev + next, 0)

  //==========Toggle Login Dropdown===========

  const [showloginDropdown, setShowloginDopdown] = useState(false);

  const loginDropdownRef = useRef()

  useClickOutSideDetector(loginDropdownRef, () => {
    setShowloginDopdown(false);
  })

  //======== Showing Feedback Modal======
  const [showfeedbackModal, setShowFeedbackModal] = useState(false);

  const toggleFeedbackModal = () => {
    setShowFeedbackModal(false)
  }

  return (
    <>

      <nav>
        {/* ===========Navbar Top Section =============== */}
        <div className="w-full h-14 bg-shipping_bg flex justify-center items-center">
          <h4 className="text-white text-lg font-normal sm:text-base">
            Free Shipping From $50 Purchase Now
          </h4>
        </div>

        <div className="min-h-[175px]  bg-nav_bg flex items-center gap-y-6 slg:min-h-[230px] slg:items-start slg:pt-9 slg:py-3 slg:pb-14 relative ">
          <div className="mx-auto w-95 flex justify-between items-center   gap-y-6 slg:h-max max-w-[1700px]">
            <div className="">
              <Link to={"/Home"}>
                <img src={Logo} alt="Logo" className="w-11/12 object-contain h-full lg:w-8/12" />
              </Link>
            </div>

            <div className="w-5/12 slg:absolute slg:bottom-14 slg:w-9/12 slg:left-1/2 slg:-translate-x-1/2 slg:z-40">
              <div className="bg-primary_bg h-14 rounded-xl  flex justify-between">
                <input
                  type="text"
                  className="w-1/2 pl-4 h-full bg-transparent text-white placeholder:text-white outline-none sm:hidden"
                  placeholder="Search..."
                />
                <div className="w-1/2 sm:w-full px-4 border-l-[1px] relative">

                  <SearchCategory />

                </div>
                <button className="w-14 h-full bg-[#fb7645] text-white text-2xl flex justify-center items-center group rounded-r-xl">
                  <BsSearch className="group-hover:scale-125 duration-300 " />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-x-4">

              {/* Login Menu Start */}

              <LoginMenu showloginDropdown={showloginDropdown} setShowloginDopdown={setShowloginDopdown} ref={loginDropdownRef} setShowFeedbackModal={setShowFeedbackModal} />

              {/* Login Menu Ends*/}

              <div className="py-2 px-2 border border-gray-400 rounded-md">

                <button className="flex items-center gap-x-4" onClick={() => setShowCart(!showCart)}>
                  <span className="text-3xl relative">
                    <div className="absolute -top-2 text-white -right-2 bg-btn_bg text-sm animate-pulse rounded-full w-5 h-5 flex justify-center items-center">
                      {totalQuantites}
                    </div>
                    <LiaShoppingBagSolid />
                  </span>
                  <span className="text-sm flex flex-col items-start sm:hidden">
                    Shopping Basket
                    <br />
                    <span className="text-[#007d56] text-lg font-medium">
                      ${subTotal}

                    </span>
                  </span>
                </button>

              </div>

              {/* =========== Sidebar Cart================ */}

              <SidebarCart showCart={showCart} setShowCart={setShowCart} ref={cartRef} />
              {/* ========Sidebar Cart Ended */}

            </div>
          </div>

        </div>
        <div className="bg-white w-95 mx-auto rounded-2xl px-5 py-4 shadow-md h-20 sm:h-max sm:py-4 flex justify-center items-center relative bottom-9 max-w-[1700px] ">

          <div className="flex justify-between items-center w-full  xsm:flex-col  xsm:gap-y-3 xsm:items-start">

            <button className="bg-btn_bg w-60 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">Shop By Category</button>
            <div className={` ${show ? "md:w-[400px] sm:w-full" : "md:w-0"} duration-300 w-4/12 slg:w-5/12 md:fixed md:top-0 md:left-0   md:h-full md:flex md:justify-center  md:items-center rounded-r-xl md:overflow-hidden md:bg-white md:z-50 md:shadow-xl`} ref={menuRef}>
              {show &&
                <span className="absolute top-4 right-4 text-2xl hidden md:block" onClick={() => setShow(false)}> <IoCloseSharp /></span>
              }

              <ul className="flex w-full justify-evenly  md:h-3/5 md:flex-col md:w-6/12 md:items-center ">
                <li>
                  <NavLink to={"/Home"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green " : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Shop"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green " : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green " : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green " : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >Contact</NavLink>
                </li>
              </ul>
            </div>
            {/* =========== Social Icons================== */}
            <div className="w-2/12 md:mr-16 xsm:hidden">
              <div className="flex  justify-evenly gap-5 ">
                <span className="cursor-pointer  text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                  <FaFacebookF />
                </span>
                <span className="cursor-pointer text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                  <FaTwitter />
                </span>
                <span className="cursor-pointer text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                  <FaYoutube />
                </span>
                <span className="cursor-pointer text-xl hover:scale-125 duration-300 hover:text-[#fb7645]">
                  <FaInstagram />
                </span>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-3 -translate-y-1/2">
              <button className=" text-2xl mt-1  hover:scale-125 duration-300 outline-none" onClick={() => setShow(!show)}>
                {show ?
                  <IoCloseSharp />
                  :
                  <BiMenuAltRight />
                }
              </button>
            </div>
          </div>

        </div>
      </nav >
      <Outlet />

      {/* Feedback Modal */}
      <Feedback show={showfeedbackModal} closeModal={toggleFeedbackModal} />
    </>
  );
};

export default NavBar;
