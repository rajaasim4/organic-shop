import ShopAside from "../../Layout/ShopAside/ShopAside"
import Helmet from "../../Components/Helmet/Helmet"
import Brands from "../../Layout/Brands/Brands"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { useState } from "react"
//Products Data
import Product from "../../Data/Product"
const Shop = () => {
    const [showSortFilter, setShowSortFilter] = useState(false)

    const [selectSortValue, setSelectSortValue] = useState("Default");

    const handleSelectSortValue = (e) => {
        setSelectSortValue(e.target.value);
        setShowSortFilter((prev) => !prev);
    }

    return (
        <>
            <div className="max-w-[1700px] mx-auto">

                <Helmet>
                    <div className="flex gap-x-9">

                        <div className="">
                            <ShopAside />
                        </div>
                        <div className="w-full ">

                            {/* Handling Sorting of Products */}

                            <div className="min-h-[60px] mb-8  w-full flex justify-end items-center relative">
                                <div className={`${showSortFilter ? "h-64" : "h-12"}  duration-300 overflow-hidden   w-40  absolute right-3 top-2 rounded-lg`}>
                                    <button className="bg-primary_dark_green w-full h-12 mb-2 rounded-lg bg-gradient_bg text-white" onClick={() => setShowSortFilter((prev) => !prev)}>Sort By:{selectSortValue} </button>
                                    <button className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5" value={"Default"} onClick={handleSelectSortValue} >Default </button>
                                    <button className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5" value={"Low Price"} onClick={handleSelectSortValue}> Low Price</button>
                                    <button className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5" value={"High Price"} onClick={handleSelectSortValue}> High Price</button>
                                    <button className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5" value={"Ascending"} onClick={handleSelectSortValue}> Ascending </button>
                                    <button className="hover:bg-primary_dark_green hover:text-white duration-300 w-full h-10 bg-white text-left pl-5 " value={"Descending"} onClick={handleSelectSortValue}>Descending </button>
                                </div>
                            </div>

                            {/* Showing All Items */}
                            <div className="flex gap-x-5 gap-y-8 flex-wrap">
                                {Product.map((item) => {
                                    return (

                                        <ProductCard key={item.id} {...item} />
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </Helmet>
                <div className="h-24"></div>
            </div>
            <Brands />
        </>
    )
}

export default Shop