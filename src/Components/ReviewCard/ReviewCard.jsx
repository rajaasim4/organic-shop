//Icons
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const ReviewCard = (props) => {
    const { name, email, feedbackMessage } = props
    return (
        <div className="border border-gray-400 bg-slate-50 rounded-xl w-[300px] sm:w-full p-4 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
                <span className="text-2xl p-2 shadow-sm border border-gray-400 rounded-xl bg-white">
                    <AiOutlineUser />
                </span>
                {name}
            </div>
            <div className="flex items-center gap-x-3">
                <span className="text-2xl  p-2 shadow-sm border border-gray-400 rounded-xl bg-white">
                    <IoMailOutline />
                </span>
                {email}
            </div>
            <div className="flex items-start gap-x-3">
                <span className="text-2xl  p-2 shadow-sm border border-gray-400 rounded-xl bg-white">
                    <BiMessageDetail />
                </span>
                <p>

                    {feedbackMessage}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard