import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { GiFeather, GiFruitBowl, GiMeat, GiBeerBottle, GiHoneyJar, GiMushroomGills, GiBerriesBowl, GiHotMeal } from "react-icons/gi"
const SideBar = () => {
    return (
        <div className="h-full pt-1">
            <ul className="flex flex-col justify-evenly">
                <SideBarCategory categoryIcon={<GiFeather />} categoryIconColor="text-[#22c157]" categoryName="Vegetables" />
                <SideBarCategory categoryIcon={<GiFruitBowl />} categoryIconColor="text-[#fb7645]" categoryName="Fruits" />
                <SideBarCategory categoryIcon={<GiMeat />} categoryIconColor="text-[#ea9802]" categoryName="Meat" />
                <SideBarCategory categoryIcon={<GiHoneyJar />} categoryIconColor="text-[#107cce]" categoryName="Canned Organic" />
                <SideBarCategory categoryIcon={<GiBeerBottle />} categoryIconColor="text-[#a9d80b]" categoryName="Organic" />
                <SideBarCategory categoryIcon={<GiMushroomGills />} categoryIconColor="text-[#fc2c2c]" categoryName="Mushrooms" />
                <SideBarCategory categoryIcon={<GiBerriesBowl />} categoryIconColor="text-[#ffe32a]" categoryName="Organic Food" />
                <SideBarCategory categoryIcon={<GiHotMeal />} categoryIconColor="text-[#ff4040]" categoryName="Oatmeal" />
                <li className="flex justify-between items-center h-14 rounded-xl px-2 cursor-pointer hover: border-b-[1px] aside-link-hover duration-300 text-primary_green">
                    View All
                    <span>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                </li>


            </ul>
        </div>
    )
}

const SideBarCategory = ({ categoryName, categoryIcon, categoryIconColor }) => {
    return (
        <li className="flex justify-between items-center h-14 rounded-xl px-2 cursor-pointer group hover:border-b-[1px] aside-link-hover duration-300">
            <div className="flex justify-center items-center gap-x-3 ">

                <span className={`text-2xl ${categoryIconColor} group-hover:text-white`} >{categoryIcon}</span>
                {categoryName}
            </div>
            <span>
                <MdOutlineKeyboardArrowRight />
            </span>
        </li>
    )
}
export default SideBar