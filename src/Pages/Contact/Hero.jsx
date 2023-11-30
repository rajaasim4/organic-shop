import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
import Helmet from "../../Components/Helmet/Helmet"
import { motion } from "framer-motion"
import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation"
import ContactPageForm from "../../Forms/ContactPageForm/ContactPageForm"

const Hero = () => {
    return (
        <Helmet>
            <div className="flex justify-center pb-44 items-center gap-5 md:flex-col sm:pb-6">
                <div className="w-1/2 flex flex-col items-start md:w-full sm:items-center">
                    <HeadingBtn title="Please Get in Touch" />

                    <h1 className="text-5xl font-light text-center my-8 sm:text-4xl ">Contact US</h1>
                    <motion.div className="w-full px-2 sm:px-4"
                        {...fadeInFromLeft(0.5)}
                    >
                        <ContactPageForm />
                    </motion.div>
                </div>
                <motion.div className="w-1/2 flex justify-center  items-center  md:w-[360px] xsm:w-full"
                    {...fadeInFromLeft(0.5)}
                >
                    <div className="w-[420px] h-[450px] bg-gradient_bg rounded-lg flex flex-col items-center py-8 justify-evenly">
                        <h3 className="text-white text-4xl border-b-[1px] border-white py-3 sm:text-3xl">New York</h3>

                        <address className="text-white text-2xl sm:text-xl text-center not-italic flex flex-col gap-y-3">
                            <span>

                                94 Academy Street
                            </span>
                            <span>

                                Barrington, London
                            </span>

                            <span>

                                Tel: +44 (0)20 7405 7686
                            </span>
                        </address>
                    </div>
                </motion.div>

            </div>

        </Helmet>
    )
}

export default Hero