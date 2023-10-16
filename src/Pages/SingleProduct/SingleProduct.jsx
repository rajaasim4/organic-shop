import Helmet from "../../Components/Helmet/Helmet"
import Brands from "../../Layout/Brands/Brands"
import Onion from "../../assets/Images/onions.jpg"
import { FaStar } from "react-icons/fa"
const SingleProduct = () => {
    return (
        <>
            <Helmet>

                <div className="pb-28">
                    <div className="flex justify-center min-h-[400px] gap-x-5  ">
                        <div className="w-1/2 flex items-center justify-center rounded-lg border border-gray-200 shadow-xl">
                            <img src={Onion} className="w-9/12 h-full object-contain" alt="" />
                        </div>
                        <div className="w-1/2 p-5">
                            <div className="flex text-primary_green gap-x-1">
                                <span>
                                    <FaStar />
                                </span>
                                <span>
                                    <FaStar />
                                </span>
                                <span>
                                    <FaStar />
                                </span>
                                <span>
                                    <FaStar />
                                </span>
                                <span>
                                    <FaStar />
                                </span>

                            </div>

                            <h1 className="text-5xl font-light sm:text-3xl md:text-4xl xsm:text-2xl  my-8">Onions</h1>
                            <div className="flex items-center"
                            >
                                <h3 className="text-xl font-semibold">Category:</h3>
                                <p className="ml-2 text-gray-600 text-lg">Vegetables</p>
                            </div>
                            <h3 className="text-primary_green mt-5 text-5xl">$19</h3>
                            <span className=" w-full h-1 mt-10 block  bg-gradient_lines"></span>
                        </div>
                    </div>
                </div>
            </Helmet>
            <Brands />
        </>
    )
}

export default SingleProduct