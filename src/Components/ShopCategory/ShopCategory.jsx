import { useState } from "react"

const ShopCategory = (props) => {
    const [select, setSelect] = useState(false);
    return (
        <div className="">
            <div className="flex justify-between items-center py-4 border-b-[1.5px] aside-link-hover duration-300 rounded-lg group px-2
                cursor-pointer">
                <div className="flex items-center gap-x-3">
                    <span className={`text-2xl ${props.categoryIconColor} group-hover:text-white`}>
                        {props.categoryIcon}
                    </span>
                    <h4 className="text-base group-hover:text-white ">{props.categoryName}</h4>
                </div>
            </div>
        </div>
    )
}

export default ShopCategory