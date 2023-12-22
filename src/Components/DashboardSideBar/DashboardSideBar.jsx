import { Link } from "react-router-dom";

//Icons
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { FaList } from "react-icons/fa6";
import { RiHistoryLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const DashboardSideBar = () => {
  const [showProduct, setShowProducts] = useState(false);

  return (
    <>
      <div className="w-[300px]  min-h-screen shadow-xl bg-white rounded-r-2xl ">
        <div className="pl-10  py-10 sticky top-0 left-0">
          <ul className="w-full h-full flex flex-col text-xl gap-y-6 ">
            <li className=" font-semibold  w-11/12 pl-2 rounded-lg">
              <div
                className="pb-2 pt-2 hover:text-white hover:bg-btn_bg rounded-lg px-1 duration-300 flex items-center justify-between cursor-pointer "
                role="button"
                onClick={() => setShowProducts(!showProduct)}
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-2xl ">
                    <RxDashboard />
                  </span>
                  Products
                </div>

                <span
                  className={`${
                    showProduct ? "rotate-180" : "rotate-0"
                  } duration-300`}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              {/* {showProduct && */}
              <ul
                className={`list-disc  font-normal text-base flex flex-col gap-y-3 duration-300 ${
                  showProduct ? "h-[160px] mt-3" : "h-0 "
                } overflow-hidden `}
              >
                <li className=" w-11/12 pl-2 rounded-lg">
                  <Link
                    to={"/Dashboard/AddProducts"}
                    className="w-full h-full block duration-300 hover:bg-btn_bg rounded-lg hover:text-white pl-1 py-2"
                  >
                    Add Products
                  </Link>
                </li>
                <li className=" w-11/12 pl-2 rounded-lg">
                  <Link className="w-full h-full block duration-300 hover:bg-btn_bg rounded-lg hover:text-white pl-1 py-2">
                    Update Products
                  </Link>
                </li>
                <li className=" w-11/12 pl-2 rounded-lg">
                  <Link className="w-full h-full block duration-300 hover:bg-btn_bg rounded-lg hover:text-white pl-1 py-2">
                    Delete Products
                  </Link>
                </li>
              </ul>
              {/* } */}
            </li>
            <li className="text-xl font-semibold  w-11/12 pl-2 rounded-lg">
              <Link
                to={"/Dashboard/Users"}
                className="flex items-center gap-x-2 hover:text-white hover:bg-btn_bg duration-300 py-2 pl-1 rounded-lg"
              >
                <span className="text-2xl font-semibold">
                  <AiOutlineUser className="stroke-[20px]" />
                </span>
                Users
              </Link>
            </li>
            <li className="text-xl font-semibold w-11/12 pl-2 rounded-lg">
              <Link
                to={"/Dashboard/ViewItem"}
                className="flex items-center gap-x-2  hover:text-white hover:bg-btn_bg duration-300 py-2 pl-1 rounded-lg"
              >
                <span>
                  <FaList />
                </span>
                View Item
              </Link>
            </li>
            <li className="text-xl font-semibold w-11/12 pl-2 rounded-lg">
              <Link className="flex items-center gap-x-2  hover:text-white hover:bg-btn_bg duration-300 py-2 pl-1 rounded-lg">
                <span className="text-2xl">
                  <RiHistoryLine />
                </span>
                Order History
              </Link>
            </li>
            <li className="text-xl font-semibold w-11/12 pl-2 rounded-lg">
              <Link
                to="/Dashboard/Review"
                className="flex items-center gap-x-2  hover:text-white hover:bg-btn_bg duration-300 py-2 pl-1 rounded-lg"
              >
                <span className="text-2xl">
                  <MdOutlineReviews />
                </span>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;
