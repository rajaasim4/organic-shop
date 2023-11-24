
import { useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri"
import useClickOutsideDetector from "../../Hooks/useClickOutsideDetector";

const SearchCategory = () => {

    const [showcategory, setShowCategory] = useState(false);
    const [category, setCategory] = useState("All")

    //handling the Category Button
    const handleSelectSortValue = (e) => {

        setCategory(e.target.value);
        setShowCategory((prev) => !prev);
    }

    //Hiding the Category while Clicking  Outside
    const searchCategoryRef = useRef()

    useClickOutsideDetector(searchCategoryRef, () => {
        setShowCategory(false);
    })

    return (
        <div className="min-h-[60px] mb-8 z-50  w-full flex justify-end items-center relative top-0" ref={searchCategoryRef}>
            <div className={`${showcategory ? "h-[370px]" : "h-12"}  duration-300 overflow-hidden w-full absolute right-3 top-1 rounded-lg z-50`}>
                <button className=" w-full flex justify-between px-2 items-center h-12 mb-0 rounded-lg  text-white" onClick={() => setShowCategory((prev) => !prev)}>{category} <RiArrowDownSLine /> </button>

                <SearchCategoryButton value={"All"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Vegetables"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Fruits"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Meat"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Canned Organic"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Organic"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Mushrooms"} onClick={handleSelectSortValue} />
                <SearchCategoryButton value={"Oatmeal"} onClick={handleSelectSortValue} />
            </div>
        </div>
    )
}

const SearchCategoryButton = (props) => {
    return (
        <button className="text-white duration-300 w-full h-10 hover:bg-white bg-primary_bg hover:text-black text-left pl-5 " value={props.value} onClick={props.onClick}> {props.value} </button>

    )
}

export default SearchCategory