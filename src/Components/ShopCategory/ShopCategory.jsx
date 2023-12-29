import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShopCategory = (props) => {
  const [select, setSelect] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  //handle category Filter

  const selectCategory = (value) => {
    if (location.pathname.includes("/Shop")) {
      setSelect(value);
      props.handleCategoryFilter(value);
    } else {
      navigate("/Shop");
      setTimeout(() => {
        props.handleCategoryFilter(value);
      }, 2000);
    }
  };
  return (
    <div className="">
      <div
        className="flex justify-between items-center py-4 border-b-[1.5px] aside-link-hover duration-300 rounded-lg group px-2 cursor-pointer"
        onClick={() => selectCategory(props.categoryName)}
      >
        <div className="flex items-center gap-x-3">
          <span
            className={`text-2xl ${props.categoryIconColor} group-hover:text-white`}
          >
            {props.categoryIcon}
          </span>
          <button className="text-base group-hover:text-white w-full block h-full">
            {props.categoryName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
