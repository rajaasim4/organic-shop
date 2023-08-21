import { MdOutlineKeyboardArrowRight } from "react-icons/md"
const SideBar = () => {
    return (
        <div className="h-full pt-1">
            <ul className="flex flex-col justify-evenly">
                <SideBarCategory categoryName="Vegetables" />
                <SideBarCategory categoryName="Fruits" />
                <SideBarCategory categoryName="Meat" />
                <SideBarCategory categoryName="Canned Organic" />
                <SideBarCategory categoryName="Organic" />
                <SideBarCategory categoryName="Mushrooms" />
                <SideBarCategory categoryName="Organic Food" />
                <SideBarCategory categoryName="Oatmeal" />
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

const SideBarCategory = ({ categoryName, img }) => {
    return (
        <li className="flex justify-between items-center h-14 rounded-xl px-2 cursor-pointer hover: border-b-[1px] aside-link-hover duration-300">
            {categoryName}
            <span>
                <MdOutlineKeyboardArrowRight />
            </span>
        </li>
    )
}
export default SideBar