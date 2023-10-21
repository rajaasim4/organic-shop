import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="h-max py-20 flex justify-center items-center bg-primary_dark_green ">
            <div className="w-11/12 py-20 flex flex-col items-center shadow-2xl rounded-lg bg-[#f0f8ff] max-w-[1700px] mx-auto">
                <div className="">

                    <h1 className="text-[16vw] font-semibold md:text-[24vw] sm:text-[35vw]  gradient-bg animate-pulse ">404</h1>
                </div>
                <h2 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl">Whooops...Can Not Found</h2>
                <Link to={"/Home"} className="rounded-xl text-white w-32 h-12 mt-4 mx-auto  bg-btn_bg cursor-pointer sm:mr-auto hover:bg-slate-800 duration-300 flex items-center justify-center" >
                    Go to Home
                </Link>
            </div>
        </div>
    )
}

export default Error