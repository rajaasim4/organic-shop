import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
import Helmet from "../../Components/Helmet/Helmet"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <Helmet>
            <div className="flex justify-center pb-44 items-center gap-5 md:flex-col sm:pb-6">
                <div className="w-1/2 flex flex-col items-start md:w-full sm:items-center">
                    <HeadingBtn title="Please Get in Touch" />

                    <h1 className="text-5xl font-light text-center my-8 sm:text-4xl">Contact US</h1>
                    <motion.div className="w-full"
                        initial={{ x: -40, opacity: 0 }} whileInView={{
                            x: 0, opacity: 1, transition: {
                                duration: 1,
                                delay: 0.5
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <form action="">
                            <div className="flex gap-x-5 mb-4 sm:flex-col sm:gap-y-4">
                                <input type="text" className="bg-gray-200 py-3 w-full outline-none pl-5 rounded-lg placeholder:text-black" placeholder="Enter your Name*" />
                                <input type="text" className="bg-gray-200 py-3 w-full outline-none pl-5 rounded-lg placeholder:text-black" placeholder="Enter your Email*" />
                            </div>
                            <div className="">
                                <textarea name="" id="" cols="30" rows="4" className="bg-gray-200 py-7 w-full outline-none pl-5 rounded-lg placeholder:text-black" placeholder="Enter your review*"></textarea>

                            </div>
                            <button className="rounded-xl text-white w-32 h-12 mt-4 ml-auto block bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300">
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
                <motion.div className="w-1/2 flex justify-center  items-center  md:w-[360px] xsm:w-full"
                    initial={{ x: -40, opacity: 0 }} whileInView={{
                        x: 0, opacity: 1, transition: {
                            duration: 1,
                            delay: 0.5
                        }
                    }}

                    viewport={{ once: true }}
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