import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"
import { BiMenuAltRight } from "react-icons/bi"
import { IoCloseSharp } from "react-icons/io5"
import Logo from "../../assets/Images/Logo.png";
import { Link, Outlet } from "react-router-dom"
import { useState } from "react";
// import SearchCategory from "../SearchCategory/SearchCategory";
const NavBar = () => {
  //=========Toggle Navbar==========

  const [show, setShow] = useState(false);
  return (
    <>

      <nav>
        <div className="w-full h-14 bg-shipping_bg flex justify-center items-center">
          <h4 className="text-white text-lg font-normal sm:text-base">
            Free Shipping From $50 Purchase Now
          </h4>
        </div>

        <div className="min-h-[175px]  bg-nav_bg flex items-center gap-y-6 slg:min-h-[230px] slg:items-start slg:pt-9 slg:py-3 slg:pb-14 relative">
          <div className="mx-auto w-95 flex justify-between items-center   gap-y-6 slg:h-max">
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
                <Link to={"/Cart"}>
                  <button className="flex items-center gap-x-4">
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
                </Link>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-white w-95 mx-auto rounded-2xl px-5 py-4 shadow-md z-40 h-20 sm:h-max sm:py-4 flex justify-center items-center relative bottom-9">
          <div className="flex justify-between items-center w-full  xsm:flex-col  xsm:gap-y-3 xsm:items-start">
            <button className="bg-btn_bg w-60 text-xl h-12 text-white rounded-xl hover:bg-black duration-300 sm:text-base sm:w-40 ">Shop By Category</button>
            <div className={` ${show ? "md:w-4/5" : "md:w-0"} duration-300 w-4/12 slg:w-5/12 md:fixed md:top-0 md:left-0   md:h-full md:flex md:justify-center  md:items-center rounded-r-2xl md:overflow-hidden`}>

              <ul className="flex w-full justify-evenly font-semibold md:h-3/5 md:flex-col md:w-6/12 md:items-center md:text-white">
                <li>
                  <Link to={"/Home"} className="text-base font-sans duration-200 hover:text-[#aaa]">Home</Link>
                </li>
                <li>
                  <Link to={"/Shop"} className="text-base font-sans duration-200 hover:text-[#aaa]">Shop</Link>
                </li>
                <li>
                  <Link to={"/About"} className="text-base font-sans duration-200 hover:text-[#aaa]">About</Link>
                </li>
                <li>
                  <Link to={"/Contact"} className="text-base font-sans duration-200 hover:text-[#aaa]">Contact</Link>
                </li>
              </ul>
            </div>

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
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
