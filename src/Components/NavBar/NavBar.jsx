import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"
import Logo from "../../assets/Images/Logo.png";
// import SearchCategory from "../SearchCategory/SearchCategory";
const NavBar = () => {
  return (
    <>

      <nav>
        <div className="w-full h-14 bg-shipping_bg flex justify-center items-center">
          <h4 className="text-white text-lg font-normal">
            Free Shipping From $50 Purchase Now
          </h4>
        </div>
        <div className="min-h-[170px]  bg-nav_bg flex items-center">
          <div className="mx-auto w-95 flex justify-between items-center">
            <div className="">
              <img src={Logo} alt="" />
            </div>
            <div className="w-5/12">
              <div className="bg-primary_bg h-14 rounded-xl overflow-hidden flex justify-between">
                <input
                  type="text"
                  className="w-1/2 pl-4 h-full bg-transparent text-white placeholder:text-white outline-none"
                  placeholder="Search..."
                />
                <div className="w-1/2 px-4 border-l-[1px] relative">
                  <select
                    name=""
                    id=""
                    className="h-full w-full bg-transparent cursor-pointer  text-white outline-none "
                    value="All Categories"
                  >
                    <option value="All Categories">All Categories</option>
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
                <a href="" className="flex items-center gap-x-3">
                  Login
                  <span className="text-[#007d56] text-xl">
                    <AiOutlineUser />
                  </span>
                </a>
              </div>
              <div className="py-2 px-2 border border-gray-400 rounded-md">
                <button className="flex items-center gap-x-4">
                  <span className="text-3xl relative">
                    <div className="absolute -top-2 text-white -right-2 bg-btn_bg text-sm rounded-full w-5 h-5 flex justify-center items-center">
                      0
                    </div>
                    <LiaShoppingBagSolid />
                  </span>
                  <a href="" className="text-sm flex flex-col items-start">
                    Shopping Basket
                    <br />
                    <span className="text-[#007d56] text-lg font-medium">
                      $0.00
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-95 mx-auto rounded-2xl px-5 py-4 shadow-md z-20 h-20 flex justify-center items-center -translate-y-10 ">
          <div className="flex justify-between items-center w-full">
            <button className="bg-btn_bg w-60 text-xl h-12 text-white rounded-md hover:bg-black duration-300">Shop By Category</button>
            <div className="w-4/12 ">

              <ul className="flex w-full  justify-evenly font-semibold">
                <li>
                  <a href="" className="text-base font-sans duration-200 hover:text-[#aaa]">Home</a>
                </li>
                <li>
                  <a href="" className="text-base font-sans duration-200 hover:text-[#aaa]">Shop</a>
                </li>
                <li>
                  <a href="" className="text-base font-sans duration-200 hover:text-[#aaa]">About</a>
                </li>
                <li>
                  <a href="" className="text-base font-sans duration-200 hover:text-[#aaa]">Contact</a>
                </li>
              </ul>
            </div>
            <div className="w-2/12 ">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
