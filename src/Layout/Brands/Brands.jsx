import Helmet from "../../Components/Helmet/Helmet"
import Brand1 from "../../assets/Images/brand1.png"
import Brand2 from "../../assets/Images/brand2.png"
import Brand3 from "../../assets/Images/brand3.png"
import Brand4 from "../../assets/Images/brand4.png"
import Brand5 from "../../assets/Images/brand5.png"
import Brand6 from "../../assets/Images/brand6.png"

import { motion } from "framer-motion"
import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation"
const Brands = () => {
    return (
        <>
            <Helmet>
                <div className="relative w-full border-2 border-gray-300 rounded-xl max-w-[1700px] mx-auto">
                    <div className="rounded-xl w-full min-h-[250px] absolute bottom-5 translate-y-40  flex items-center px-5 justify-evenly bg-white mt-8 gap-y-8 gap-x-8 flex-wrap shadow-md sm:flex-col sm:items-center sm:translate-y-0 sm:bottom-0 sm:static sm:mt-0 sm:py-5 sm:shadow-lgs">

                        <BrandsImages img={Brand1} delay={0} />
                        <BrandsImages img={Brand2} delay={0.2} />
                        <BrandsImages img={Brand3} delay={0.4} />
                        <BrandsImages img={Brand4} delay={0.6} />
                        <BrandsImages img={Brand5} delay={0.8} />
                        <BrandsImages img={Brand6} delay={1} />

                    </div>
                </div>
            </Helmet>
            <div className="bg-primary_bg h-44 sm:h-10 "></div>
        </>
    )
}

const BrandsImages = (props) => {
    return (
        <>
            <motion.div
                {...fadeInFromLeft(props.delay)}
            >
                <img src={props.img} alt="" className="duration-300 hover:scale-125 cursor-pointer" />
            </motion.div>

        </>
    )
}

export default Brands