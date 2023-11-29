
import { FaStar } from "react-icons/fa"
const TestimonialCard = (props) => {
    return (
        <>


            <div className="h-[400px] sm:w-11/12 sm:mx-auto w-full relative rounded-2xl flex items-end duration-500  cursor-pointer group">
                <img src={props.img} alt="" className="absolute top-0 left-1/2 -translate-x-1/2" />
                <div className="flex flex-col items-center  pt-16 bg-white shadow-md h-[340px] rounded-2xl group-hover:bg-black group-hover:text-white duration-500">
                    <p className="w-10/12 text-center text-[#4b4b4b] leading-relaxed mt-2 group-hover:text-white duration-500">
                        A wonderful serenity has taken possession of entire soul, like these sweet mornings of spring which I enjoy with my whole heart. wonderful serenity has taken            </p>
                    <h4 className="text-[#2a2a2a] mt-6 font-semibold group-hover:text-white duration-500">Alex jsaon</h4>
                    <p className="text-[#7a7a7a] group-hover:text-white duration-500">Designer</p>
                    <p className="text-primary_dark_green group-hover:text-white duration-500 flex gap-x-1 mt-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </p>
                </div>
            </div>

        </>
    )
}

export default TestimonialCard