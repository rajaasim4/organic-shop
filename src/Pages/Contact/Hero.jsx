import HeadingBtn from "../../Components/HeadingBtn/HeadingBtn"
import Helmet from "../../Components/Helmet/Helmet"

const Hero = () => {
    return (
        <Helmet>
            <div className="flex justify-center pb-24 items-center">
                <div className="w-1/2 flex flex-col items-start">
                    <HeadingBtn title="Please Get in Touch" />

                    <h1 className="text-5xl font-light text-center my-8">Contact US</h1>
                    <div className="w-full">
                        <form action="">
                            <div className="flex gap-x-5 mb-4">
                                <input type="text" className="bg-gray-200 py-3 w-full outline-none pl-5 rounded-lg placeholder:text-black" placeholder="Enter your Name*" />
                                <input type="text" className="bg-gray-200 py-3 w-full outline-none pl-5 rounded-lg placeholder:text-black" placeholder="Enter your Email*" />
                            </div>
                            <div className="">
                                <textarea name="" id="" cols="30" rows="4" className="bg-gray-200 py-7 w-full outline-none pl-5 rounded-lg placeholder:text-black" placeholder="Enter your review*"></textarea>

                            </div>
                            <button className="rounded-xl text-white w-32 h-12 mt-4 ml-auto block bg-btn_bg cursor-pointer ">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center  items-center">
                    <div className="w-[420px] h-[450px] bg-gradient_bg rounded-lg flex flex-col items-center py-8 justify-evenly">
                        <h3 className="text-white text-4xl border-b-[1px] border-white py-3">New York</h3>
                        {/* <div className="border-b-2 border-white h-[2px] w-8/12"></div> */}
                        <address className="text-white text-2xl text-center not-italic flex flex-col gap-y-3">
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
                </div>

            </div>

        </Helmet>
    )
}

export default Hero