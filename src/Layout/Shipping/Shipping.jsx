import { LiaShippingFastSolid } from "react-icons/lia"
import { BsCreditCard2Back } from "react-icons/bs"
import { PiShoppingCartSimple, PiArrowsCounterClockwiseBold } from "react-icons/pi"

import { motion } from "framer-motion"
import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation"

const Shipping = () => {
    return (
        <div className="rounded-xl min-h-[250px] w-95 mx-auto bg-primary_dark_green flex items-center px-5 justify-evenly flex-wrap sm:py-8 gap-x-9 gap-y-5">
            <motion.div className="flex gap-x-5 items-center min-h-[120px]"

                {...fadeInFromLeft(0.2)}
            >
                <div className="">
                    <span className="">
                        <LiaShippingFastSolid className="w-16 h-16 text-white" />
                    </span>
                </div>
                <div className="">
                    <h3 className="text-white text-2xl mb-1 font-normal">Free Shipping</h3>
                    <p className="text-[#FFFFFF91]"> Free Ship over $150</p>
                </div>
            </motion.div>
            <motion.div className="flex gap-x-5 items-center min-h-[120px]"
                {...fadeInFromLeft(0.4)}
            >
                <div className="">
                    <span className="">
                        <PiShoppingCartSimple className="w-16 h-16 text-white" />
                    </span>
                </div>
                <div className="">
                    <h3 className="text-white text-2xl mb-1 font-normal">Best Deal Online</h3>
                    <p className="text-[#FFFFFF91]">We provide a free in-home.</p>
                </div>
            </motion.div>
            <motion.div className="flex gap-x-5 items-center min-h-[120px]"

                {...fadeInFromLeft(0.6)}
            >
                <div className="">
                    <span className="">
                        <PiArrowsCounterClockwiseBold className="w-16 h-16 text-white" />
                    </span>
                </div>
                <div className="">
                    <h3 className="text-white text-2xl mb-1 font-normal">15 Days Return</h3>
                    <p className="text-[#FFFFFF91]"> We provide a free in-home measure.</p>
                </div>
            </motion.div>
            <motion.div className="flex gap-x-5 items-center min-h-[120px]"
                {...fadeInFromLeft(0.3)}
            >
                <div className="">
                    <span className="">
                        <BsCreditCard2Back className="w-16 h-16 text-white" />
                    </span>
                </div>
                <div className="">
                    <h3 className="text-white text-2xl mb-1 font-normal">Secure Payment</h3>
                    <p className="text-[#FFFFFF91]"> We provide a free in-home.</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Shipping