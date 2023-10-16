import Helmet from "../../Components/Helmet/Helmet"
import Brand1 from "../../assets/Images/brand1.png"
import Brand2 from "../../assets/Images/brand2.png"
import Brand3 from "../../assets/Images/brand3.png"
import Brand4 from "../../assets/Images/brand4.png"
import Brand5 from "../../assets/Images/brand5.png"
import Brand6 from "../../assets/Images/brand6.png"
const Brands = () => {
    return (
        <>
            <Helmet>
                <div className="relative w-full border-2 border-gray-300 rounded-xl">
                    <div className="rounded-xl w-full min-h-[250px] absolute bottom-5 translate-y-40  flex items-center px-5 justify-evenly bg-white mt-8 gap-y-8 gap-x-8 flex-wrap shadow-md sm:flex-col sm:items-center sm:translate-y-0 sm:bottom-0 sm:static sm:mt-0 sm:py-5 sm:shadow-lgs">
                        <div className="">
                            <img src={Brand1} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
                        </div>
                        <div className="">
                            <img src={Brand2} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
                        </div>
                        <div className="">
                            <img src={Brand3} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
                        </div>
                        <div className="">
                            <img src={Brand4} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
                        </div>
                        <div className="">
                            <img src={Brand5} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
                        </div>
                        <div className="">
                            <img src={Brand6} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </Helmet>
            <div className="bg-primary_bg h-44 sm:h-10 "></div>
        </>
    )
}

export default Brands