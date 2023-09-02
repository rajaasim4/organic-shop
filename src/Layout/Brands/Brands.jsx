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
                <div className="relative w-full">
                    <div className="rounded-xl w-full min-h-[250px] absolute bottom-5 translate-y-40  flex items-center px-5 justify-evenly bg-white mt-8 gap-y-5 gap-x-3 flex-wrap shadow-md">
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
            <div className="bg-primary_bg h-44 "></div>
        </>
    )
}

export default Brands