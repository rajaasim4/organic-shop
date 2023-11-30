//Icons
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

const ReviewCard = (props) => {
    const { name, email, feedbackMessage } = props
    return (
        <div className="border border-gray-400 bg-slate-50 rounded-xl w-[300px] sm:w-full p-4 flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
                <span className="text-2xl">
                    <AiOutlineUser />
                </span>
                {name}
            </div>
            <div className="flex items-center gap-x-2">
                <span className="text-2xl">
                    <IoMailOutline />
                </span>
                {email}
            </div>
            <div className="flex items-center gap-x-2">
                <span className="text-2xl">
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