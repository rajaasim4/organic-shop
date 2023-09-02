import Helmet from "../../Components/Helmet/Helmet"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"

const FeaturedProducts = () => {
    return (
        <Helmet>


            <HeadingBtn title="100% Natural" />
            <div className="flex justify-between">
                <h1 className="text-5xl font-light  my-8">Featured Products</h1>
                <div className="flex gap-x-4 items-center ">

                    <button className="bg-gradient_bg w-12 h-12 flex justify-center items-center text-white rounded-md text-2xl">
                        <HiArrowSmLeft />
                    </button>
                    <button className="bg-gradient_bg w-12 h-12 flex justify-center items-center text-white rounded-md text-2xl">
                        <HiArrowSmRight />
                    </button>
                </div>
            </div>
            <div className="">
                <div className="flex justify-evenly py-5">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </Helmet>
    )
}

export default FeaturedProducts