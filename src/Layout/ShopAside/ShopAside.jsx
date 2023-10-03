import ShopCategory from "../../Components/ShopCategory/ShopCategory"

import { GiFeather, GiFruitBowl, GiMeat, GiBeerBottle, GiHoneyJar, GiMushroomGills, GiBerriesBowl, GiHotMeal } from "react-icons/gi"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
const ShopAside = () => {
    return (
        <div className="w-[350px] rounded-xl gap-y-4 py-10 min-h-[700px] bg-white shadow-md flex flex-col items-center">
            <div className=" w-full px-6 flex items-center gap-x-2">
                <h2 className="text-2xl text-left">Search</h2>
                <span className=" w-52 h-1  bg-gradient_lines"></span>
            </div>
            <div className="px-6 w-full flex flex-col">

                <input type="search" className=" pl-3 placeholder:text-primary_green border-[1.5px] focus-within:border-green-500 w-full h-12  border-gray-300 rounded-lg outline-none" placeholder="Search Products..." />
                <button className="mt-5 hover:bg-slate-800 duration-300 bg-primary_dark_green w-32  h-12 rounded-xl text-white text-xl">Search</button>
            </div>
            <div className=" w-full pl-6 mt-4 pr-2 flex items-center gap-x-2 ">
                <h2 className="text-2xl text-left">Filter By Price</h2>
                <span className=" w-6/12 h-1   bg-gradient_lines"></span>
            </div>
            <div className="px-6 w-full mt-2">
                <input type="range" name="" id="" className="w-full" />
                <button className="mt-4 hover:bg-slate-800 duration-300 bg-primary_dark_green w-32 h-12 rounded-xl text-white text-xl">Filter</button>
            </div>

            <div className=" w-full pl-6 mt-4 pr-2 flex items-center gap-x-2 ">
                <h2 className="text-2xl text-left">Category</h2>
                <span className=" w-52 h-1   bg-gradient_lines"></span>
            </div>
            <div className="pl-4 pr-4 w-full">
                <ShopCategory categoryIcon={<GiFeather />} categoryIconColor="text-[#22c157]" categoryName="Vegetables" />
                <ShopCategory categoryIcon={<GiFruitBowl />} categoryIconColor="text-[#fb7645]" categoryName="Fruits" />
                <ShopCategory categoryIcon={<GiMeat />} categoryIconColor="text-[#ea9802]" categoryName="Meat" />
                <ShopCategory categoryIcon={<GiHoneyJar />} categoryIconColor="text-[#107cce]" categoryName="Canned Organic" />
                <ShopCategory categoryIcon={<GiBeerBottle />} categoryIconColor="text-[#a9d80b]" categoryName="Organic" />
                <ShopCategory categoryIcon={<GiMushroomGills />} categoryIconColor="text-[#fc2c2c]" categoryName="Mushrooms" />
                <ShopCategory categoryIcon={<GiBerriesBowl />} categoryIconColor="text-[#ffe32a]" categoryName="Organic Food" />
                <ShopCategory categoryIcon={<GiHotMeal />} categoryIconColor="text-[#ff4040]" categoryName="Oatmeal" />
                <div className="flex justify-between items-center h-14 rounded-xl px-2 cursor-pointer hover: border-b-[1px] aside-link-hover duration-300 text-primary_green">
                    View All
                    <span>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ShopAside