import Helmet from "../../Components/Helmet/Helmet"
import Brand1 from "../../assets/Images/brand1.png"
import Brand2 from "../../assets/Images/brand2.png"
import Brand3 from "../../assets/Images/brand3.png"
import Brand4 from "../../assets/Images/brand4.png"
import Brand5 from "../../assets/Images/brand5.png"
import Brand6 from "../../assets/Images/brand6.png"
const Brands = () => {
    return (
        <Helmet>


            <div className="rounded-xl min-h-[250px]   flex items-center px-5 justify-evenly bg-white mt-8 gap-y-5 gap-x-3 flex-wrap shadow-md">
                <div className="">
                    <img src={Brand1} alt="" />
                </div>
                <div className="">
                    <img src={Brand2} alt="" />
                </div>
                <div className="">
                    <img src={Brand3} alt="" />
                </div>
                <div className="">
                    <img src={Brand4} alt="" />
                </div>
                <div className="">
                    <img src={Brand5} alt="" />
                </div>
                <div className="">
                    <img src={Brand6} alt="" />
                </div>
            </div>



        </Helmet>
    )
}

export default Brands