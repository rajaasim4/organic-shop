import { useEffect, useState } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
const ScrollTopButton = () => {

    const Scroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }


    const [showButton, setShowButton] = useState(false);

    const setButtontoScroll = () => {
        const height = 300;
        const currentScroll = window.pageYOffset;

        if (currentScroll > height) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", setButtontoScroll);
        return () => {
            window.removeEventListener("scroll", setButtontoScroll);

        }
    })

    return (
        <div className="fixed bottom-5 right-5 z-40">
            {showButton &&
                <button className="bg-gradient_bg w-10 h-10 outline-none text-xl rounded-xl text-white grid place-items-center" onClick={Scroll}>
                    <AiOutlineArrowUp />
                </button>
            }
        </div>
    )
}

export default ScrollTopButton