//Icons from React-icons 
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, } from "react-icons/fa"
import { BiMenuAltRight } from "react-icons/bi"
import { IoCloseSharp } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"
import { HiOutlineShoppingBag } from "react-icons/hi"

//Images
import Logo from "../../assets/Images/Logo.png";
import Empty_Cart from "../../assets/Images/SVG/EmptyCart.svg"

//States
import { Link, Outlet, NavLink } from "react-router-dom"
import { useRef, useState } from "react";
import useClickOutSideDetector from "../../Hooks/useClickOutsideDetector"

// import SearchCategory from "../SearchCategory/SearchCategory";
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

            <div className="w-5/12 slg:absolute slg:bottom-14 slg:w-9/12 slg:left-1/2 slg:-translate-x-1/2">
              <div className="bg-primary_bg h-14 rounded-xl overflow-hidden flex justify-between">
                <input
                  type="text"
                  className="w-1/2 pl-4 h-full bg-transparent text-white placeholder:text-white outline-none sm:hidden"
                  placeholder="Search..."
                />
                <div className="w-1/2 sm:w-full px-4 border-l-[1px] relative14 ">
                  <select
                    name=""
                    id=""
                    className="h-full w-full bg-primary_bg cursor-pointer  text-white outline-none "
                    defaultValue="All Categories"
                  >
                    <option value="All Categories">All Categories</option>
                    <option value="All Categories">Vegetables</option>
                    <option value="All Categories">Fruits</option>
                    <option value="All Categories">Meat</option>
                    <option value="All Categories">Canned Organic</option>
                    <option value="All Categories">Organic</option>
                    <option value="All Categories">Mushrooms</option>
                    <option value="All Categories">Organic Food</option>
                    <option value="All Categories">Oat Meal</option>
                  </select>
                  {/* <SearchCategory /> */}
                </div>
                <button className="w-14 h-full bg-[#fb7645] text-white text-2xl flex justify-center items-center group">
                  <BsSearch className="group-hover:scale-125 duration-300 " />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-x-4">
              <div className="">
                <Link to="/Login" className="flex items-center gap-x-3 duration-300 hover:scale-110">
                  Login
                  <span className="text-[#007d56] text-xl">
                    <AiOutlineUser />
                  </span>
                </Link>
              </div>

              <div className="py-2 px-2 border border-gray-400 rounded-md">

                <button className="flex items-center gap-x-4" onClick={() => setShowCart(!showCart)}>
                  <span className="text-3xl relative">
                    <div className="absolute -top-2 text-white -right-2 bg-btn_bg text-sm rounded-full w-5 h-5 flex justify-center items-center">
                      0
                    </div>
                    <LiaShoppingBagSolid />
                  </span>
                  <span className="text-sm flex flex-col items-start sm:hidden">
                    Shopping Basket
                    <br />
                    <span className="text-[#007d56] text-lg font-medium">
                      $0.00
                    </span>
                  </span>
                </button>

              </div>

              {/* =========== Sidebar Cart================ */}

              <div className={`duration-150 
              ${showCart ? "w-[300px]" : "w-0"}
                h-full fixed top-0 right-0 bg-white z-50 rounded-l-2xl shadow-xl`} ref={cartRef}>
                <div className=" py-4 px-5 flex flex-col justify-between h-full w-full">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl  flex items-center">
                      <span className="mr-3"><HiOutlineShoppingBag /></span>
                      My Cart
                    </h1>
                    <span className="text-xl cursor-pointer" onClick={() => setShowCart(false)}>
                      <IoMdClose />
                    </span>
                  </div>
                  <div className="">
                    <img src={Empty_Cart} alt="" />
                  </div>
                  <div className="">

                    <Link
                      onClick={() => setShowCart(false)}
                      to={"/Cart"}
                      className="bg-btn_bg flex items-center justify-center max-w-40 w-9/12 mx-auto text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">View Cart
                    </Link>
                  </div>
                </div>
              </div>

              {/* ========Sidebar Cart Ended */}

            </div>
          </div>

        </div>
        <div className="bg-white w-95 mx-auto rounded-2xl px-5 py-4 shadow-md z-40 h-20 sm:h-max sm:py-4 flex justify-center items-center relative bottom-9 max-w-[1700px] ">
          <div className="flex justify-between items-center w-full  xsm:flex-col  xsm:gap-y-3 xsm:items-start">
            <button className="bg-btn_bg w-60 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">Shop By Category</button>
            <div className={` ${show ? "md:w-[400px] sm:w-full" : "md:w-0"} duration-300 w-4/12 slg:w-5/12 md:fixed md:top-0 md:left-0   md:h-full md:flex md:justify-center  md:items-center rounded-r-xl md:overflow-hidden md:bg-white md:z-50 md:shadow-xl`} ref={menuRef}>
              {show &&
                <span className="absolute top-4 right-4 text-2xl hidden md:block"> <IoCloseSharp /></span>
              }

              <ul className="flex w-full justify-evenly  md:h-3/5 md:flex-col md:w-6/12 md:items-center ">
                <li>
                  <NavLink to={"/Home"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green underline" : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/Shop"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green underline" : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/About"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green underline" : "" + "text-base  duration-200 hover:text-[#aaa]"
                    } onClick={() => setShow(false)}
                  >About</NavLink>
                </li>
                <li>
                  <NavLink to={"/Contact"}
                    className={({ isActive }) =>
                      isActive ? "text-primary_dark_green underline" : "" + "text-base  duration-200 hover:text-[#aaa]"
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
    </>
  );
};

export default NavBar;
