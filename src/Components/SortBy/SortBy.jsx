import React, { useState, useRef } from "react";
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";

const SortBy = () => {
  const [showSortFilter, setShowSortFilter] = useState(false);

  const [selectSortValue, setSelectSortValue] = useState("Default");

  //Handling the Sorting
  const handleSelectSortValue = (e) => {
    setSelectSortValue(e.target.value);
    setShowSortFilter((prev) => !prev);
  };

  //Hiding the Sort Filter by Clicking Outside

  let sortRef = useRef();

  useClickOutsideDetector(sortRef, () => {
    setShowSortFilter(false);
  });

  return (
    <div
      className="min-h-[60px] mb-8  w-full flex justify-end items-center relative"
      ref={sortRef}
    >
      <div
        className={`${
          showSortFilter ? "h-64" : "h-12"
        }  duration-300 overflow-hidden   w-40  absolute right-3 top-2 rounded-lg z-20`}
      >
        <button
          className="bg-primary_dark_green w-full h-12 mb-2 rounded-lg bg-gradient_bg text-white"
          onClick={() => setShowSortFilter((prev) => !prev)}
        >
          Sort By:&nbsp;{selectSortValue}
        </button>
        <button
          className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5"
          value={"Default"}
          onClick={handleSelectSortValue}
        >
          Default{" "}
        </button>
        <button
          className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5"
          value={"Low Price"}
          onClick={handleSelectSortValue}
        >
          {" "}
          Low Price
        </button>
        <button
          className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5"
          value={"High Price"}
          onClick={handleSelectSortValue}
        >
          {" "}
          High Price
        </button>
        <button
          className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5"
          value={"Ascending"}
          onClick={handleSelectSortValue}
        >
          {" "}
          Ascending{" "}
        </button>
        <button
          className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5 "
          value={"Descending"}
          onClick={handleSelectSortValue}
        >
          Descending{" "}
        </button>
      </div>
    </div>
  );
};

export default SortBy;
